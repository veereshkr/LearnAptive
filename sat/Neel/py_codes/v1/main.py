
#==============================================================================
# Import Standard libraries
#==============================================================================
import pymongo
import json
import os
import sys
import pandas
from itertools import combinations

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


def begin_loop(student_id):
#==============================================================================
# The following function returns a mongodb connector. the uri is hardcoded.
# Database name must be provided while calling the function. The userid and
# password can be provided optionally.
#==============================================================================
def dbconnector(dbname,user=None,pw=None):
    uri='mongodb://{user}:{pw}@ds061391.mongolab.com:61391/{dbname}'
    if not user:
        user='neel'
    if not pw:
        pw='nilabja90'
    try:
        client = pymongo.MongoClient(uri.format(user=user,pw=pw,dbname=dbname))
    except:
        print "I am unable to connect to the database"
    return client[dbname]

cur = conn.cursor()
cur.execute("""select json_string from loops_loop where created='Y';""")
rows=cur.fetchall()
questions={}
for row in rows:
    questions.update(json.loads(row[0]))
tag_qstn_map=tag_question_map(questions)
#==============================================================================
# Read the prior probability of the tags for the particular student
# (We need to change this with a database query code while integrating)
#==============================================================================
priors=get_tag_prob("leaf_concept_with_priors.csv")

#==============================================================================
# Selecting the first question
#==============================================================================

select_loop_begin(questions,priors)

dbname='learnaptivedb'
