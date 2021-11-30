
#==============================================================================
# Import Standard libraries
#==============================================================================
import json
import os
import sys
import pandas
from pymongo import MongoClient
#==============================================================================
# Set Directories
#==============================================================================
wd=os.path.dirname(sys.argv[0])
os.chdir(wd)

#==============================================================================
# import modules
#==============================================================================
from functions import *

#==============================================================================
# This function takes input the dictionary of all the questions yet not faced
# by the student, and the dictionary of the probabilities that the student knows
# the different tags, and returns the question that the student shall face
#==============================================================================
def select_loop_begin(qstns,tag_prior):
    """
    input:
    ----------------------------------------------------------------------
    qstns: A dictionary of all the questions that the student has not yet faced
    tag_prior: a dictionary containing the probability of the student knowing
    various tags

    output:
    -----------------------------------------------------------------------
    The id of the question that should be showed to the studetn next

    note:
    -----------------------------------------------------------------------
    This function should be called at the begining of the session. It takes the
    dict of all questions yet unanswered by the student. It also takes the
    prior probabilities of the student knowing all the tags.
    """
    temp_pr1=50
    for key,val in qstns.iteritems():
        temp_pr=abs(50-question_probability(tag_prior,val["tags"]))
        if temp_pr<temp_pr1:
            temp_pr1=temp_pr
            temp_key=key
    return temp_key
#==============================================================================
# The following function takes input the student id and returns the numberof
# the question that should be given to the student. This function should be
# called when there is no backlog tags that needs to be tested. The number
# should be read by the front end program, and it should remove the id from
# the dictionary of the questions yet not faced by the student. Optionally it
# may add this id to the list/dictionary of question already faced by the
#student.
#==============================================================================

def begin_loop(student_id,dbconnector=None):
#-------------if no dbconnector is provided, make a dbconnector---------------#
    if not dbconnector:
        dbconnector=MongoClient('mongodb://neel:nilabja90@ds061391.mongolab.com:61391/learnaptivedb')
    db=dbconnector.learnaptivedb
    stu_table=db.students_analysis #### for different table name, change the index in dbconnector
#----------------- pull the student info from the database -------------------#
    student_data=stu_table.find_one({"sid":student_id})
    priors=json.loads(student_data["tag_prob"])
    questions=get_qstns_not_faced(db,student_data["qstn_done"])

#==============================================================================
# Selecting the first question
#==============================================================================
    qno=select_loop_begin(questions,priors)
    return questions[qno]
