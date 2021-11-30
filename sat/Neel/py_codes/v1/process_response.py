
#==============================================================================
# Import Standard libraries
#==============================================================================
import pymongo
import json
import os
import sys
import pandas

#==============================================================================
# Set Directories
#==============================================================================
wd=os.path.dirname(sys.argv[0])
os.chdir(wd)

#==============================================================================
# import modules
#==============================================================================
from data_prep import *
from functions import *

#==============================================================================
#     The function first randomly divides the tagset into two (almost)equal
#    partitions. Then it considers any one partition. It searches for all the
#   questions that have the same tags, and among those questions, chooses the
#    one that has least number of additional tags

#==============================================================================
def binary_tree(n,tags,questions,tag_prior,tbl):
    """
    input:
    ---------------------------------------------------------------------------
    tags: The tags on which the binary search is performed
    tag_qstn_map:A dictionary containing all the tags and the list of questions
    in which they appear
    questions: The dictionary containining all the questions yet not faced by
    the student
    tag_prior: The dictionary containing the probabilities of the student
    knowing the various tags

    output:
    ---------------------------------------------------------------------------
    The question number of the next question that is to be shown to the student
    next

    note:
    ---------------------------------------------------------------------------
    The function starts with n=half of the size of the tags. it iterates over all
    the combinations of size n of the tags and see if there is any question
    which has all those tags. If it gets such a question, it stops there. If it
    doesnt, we reduce n by 1 and do the whole thing again.

    next version:
    ---------------------------------------------------------------------------
    It will look into all the questions that has the tags, and will optimize
    based on the probability of knowing the excess tags

    """
    tag_qstn_map=tag_question_map(questions)
    #by calculating tag_qstn_map
    #everytime we are making duplication of effort and wasting process power.
    #alternate is to save this in a database. problem is, mongodb doesnt
    #accept keys containing '.'(Dot)


    pot_qn=set([])
    while not pot_qn:
        iterator=combinations(tags,n)
        for temp in iterator:
            potential_questions=[set(tag_qstn_map[tag]) for tag in temp]
            pot_qn=set.intersection(*potential_questions)
            if pot_qn:
                break
        n=n-1
    checking=set(temp)
    to_check=list(set(tags)-checking)
    tbl.update({'sid':student_id},{'$push':{'tags_to_check':to_check}})
    prob=0
    for qn in pot_qn:
        tag=set(questions[qn]["tags"])
        tag=tag-checking
        temp_prob=question_probability(tag_prior,tag)
        if temp_prob > prob:
            prob=temp_prob
            final_qn=qn
    return final_qn

#==============================================================================
# The following function takes as input the response of the student to a
# particular question and modify his tag knowing probability accordingly
#==============================================================================
def update_tag_prior(response,qno_data,tbl,student_id=None):
    tag_prior=json.loads(tbl.find_one({'sid':student_id})["tag_prob"])
    tags=qno_data["tags"]
    for tag in tags:
        tag_prior[tag]=bkt_update(response,tag_prior[tag]/100)*100
    ### save this updated prior in the database
    return tag_prior



#==============================================================================
# This function is called once the front end gets response from the student for
# any particular question.
#==============================================================================
def process_student_response(response,qstn_faced,student_id=None,dbconnector=None):
#-------------if no dbconnector is provided, make a dbconnector---------------#
    if not dbconnector:
        dbconnector=MongoClient('mongodb://neel:nilabja90@ds061391.mongolab.com:61391/learnaptivedb')
    db=dbconnector.learnaptivedb
    stu_table=db.students_analysis #### for different table name, change the index in dbconnector
#----------------- pull the student info from the database -------------------#
    student_data=stu_table.find_one({"sid":student_id})
    priors=json.loads(student_data["tag_prob"])
    questions=get_qstns_not_faced(db,student_data["qstn_done"])


    # Update the tag_probabilities of the student
    tag_prior=update_tag_prior(response,qno_data,stu_table,student_id)
    stu_table.update({"sid":student_id},{"tag_prob":json.dumps(tag_prior)})

    # Select Next question
    tags=qstn_faced["tags"]
    n=len(tags)/2
    try:
        if n<1 or response:
            tags=student_data['tags_to_check'].pop()
            stu_table.update({'sid':student_id},{'$pop$':{'tags_to_check':1}})
            n=len(tags)/2
        new_qn=binary_tree(n,tags,questions,tag_prior,stu_table)
    except:
        new_qn=begin_loop(student_id)



