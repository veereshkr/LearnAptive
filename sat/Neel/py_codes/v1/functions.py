def dbconnect(dbname,uid,pw):
    uri='mongodb://{uid}:{pw}@ds061391.mongolab.com:61391/{dbname}'
    return MongoClient(uri.format(uid=uid,pw=pw,dbname=dbname))


#==============================================================================
def gm(nums):
    """ input:a list of numbers
    output: The geometric mean of the numbers  
    example:
    gm([1,2,3,4])
    >>>
    """
    return (reduce(lambda x, y: x*y, nums))**(1.0/len(nums))

#==============================================================================
# Following Function takes input the dict of all questions. It makes a map of #
# the tags with the questions in which they appear
#==============================================================================
def tag_question_map(qstns):    
    """
    input:
    -------------------------------------------------------------------
    qstns:A dictionary containing all the questions 
    
    output:
    -------------------------------------------------------------------
    A dictionary whose keys are the tag ids and the values are lists containing the id of the questions which contain that particular tag
    
    Example:
    -------------------------------------------------------------------
    """
    temp_dict={}
    for key,val in qstns.iteritems():
        for tag in val["tags"]:
            if tag in temp_dict:
                temp_dict[tag].append(key)
            else:
                temp_dict[tag]=[key]
    return temp_dict

#==============================================================================
# The following function takes a question and the prior probability of the tags
# for the particular student and return the probability of answering the 
# question correctly
#==============================================================================
def question_probability(tag_prior,tags):
    """ 
    input:
    --------------------------------------------------------------
    tag_prior: A dictionary containing the prior probabilities of the student knowing the different tags
    tags: A list containing the tags present in the question
    
    output:
    ---------------------------------------------------------------
    a dictionary of the form {question number:probability}
    
    Example:
    ---------------------------------------------------------------
    >>>prior={'2.13.1.': 62.0, '1.8.1.': 85.0, '4.4.4.2.': 1.0, '4.5.1.': 30.0, '4.3.': 62.0, '2.13.4.1.': 30.0, '3.3.3.': 62.0, '1.11.3.': 7.0, '3.7.4.2.': 7.0, '2.2.4.': 85.0, '5.17.': 30.0, '3.4.1.': 97.0, '1.4.2.2.': 62.0, '2.12.3.': 62.0, '5.6.': 30.0, '2.4.6.': 85.0, '2.1.': 97.0, '3.8.1.': 30.0, '1.4.2.4.': 7.0, '1.13.1.': 85.0, '3.7.3.3.': 7.0, '4.5.5.': 7.0, '3.14.': 30.0, '1.1.2.': 97.0, '2.11.2.': 85.0, '4.4.4.3.': 1.0, '2.13.6.': 62.0, '1.6.2.3.': 30.0, '3.6.3.': 85.0, '1.12.': 97.0, '2.3.1.': 62.0, '4.1.3.': 30.0, '3.7.4.3.': 7.0, '1.10.3.1.': 7.0, '2.13.4.2.': 30.0, '5.5.': 30.0, '1.6.1.1.': 85.0, '1.11.2.': 62.0, '5.14.': 30.0, '2.12.2.': 62.0, '1.8.4.': 30.0, '2.4.7.': 85.0, '4.4.2.1.': 7.0, '3.8.4.2.': 7.0, '3.7.3.2.': 7.0, '1.10.2.3.': 7.0, '1.5.2.': 62.0, '5.13.': 62.0, '1.4.1.8.': 62.0, '1.1.3.': 85.0, '3.2.3.': 30.0, '4.1.2.': 85.0, '4.4.1.3.': 62.0, '1.6.2.2.': 30.0, '2.13.7.': 30.0, '1.5.3.': 30.0, '3.7.5.3.': 7.0, '3.10.': 7.0, '2.13.4.3.': 7.0, '2.12.1.': 97.0, '1.4.1.6.': 30.0, '3.7.1.1.': 30.0, '4.5.3.': 30.0, '3.7.3.4.': 1.0, '5.4.': 85.0, '4.4.2.2.': 7.0, '1.4.1.1.': 62.0, '5.7.': 62.0, '2.4.4.': 62.0, '4.4.3.': 85.0, '3.2.2.': 30.0, '3.7.2.1.': 30.0, '3.4.3.2.': 30.0, '5.3.': 62.0, '1.6.2.1.': 97.0, '4.4.1.2.': 62.0, '2.3.3.': 7.0, '1.10.2.2.': 7.0, '1.11.4.': 7.0, '4.4.4.1.': 7.0, '3.11.': 85.0, '3.7.5.2.': 7.0, '3.7.1.3.': 7.0, '1.3.2.': 62.0, '1.4.1.7.': 62.0, '3.6.2.1.': 1.0, '5.12.': 30.0, '3.7.4.1.': 7.0, '1.10.3.3.': 7.0, '1.9.1.': 97.0, '1.5.1.3.': 85.0, '1.4.2.1.': 62.0, '3.3.6.1.': 62.0, '3.7.2.2.': 7.0, '4.5.2.': 30.0, '3.2.5.': 62.0, '3.3.4.2.': 62.0, '2.4.5.': 7.0, '3.9.3.': 1.0, '3.6.5.2.': 7.0, '1.7.2.': 30.0, '3.12.': 62.0, '1.7.1.2.': 30.0, '2.13.4.5.': 1.0, '2.3.2.': 30.0, '3.3.4.1.': 85.0, '3.7.5.1.': 7.0, '5.2.': 85.0, '4.4.1.1.': 85.0, '1.4.1.4.': 62.0, '3.7.1.2.': 30.0, '1.9.2.': 85.0, '3.8.4.3.': 7.0, '1.4.1.3.': 62.0, '1.10.3.2.': 7.0, '2.13.5.': 7.0, '1.5.1.2.': 62.0, '1.6.1.3.': 30.0, '3.1.2.': 85.0, '3.3.6.2.': 30.0, '3.3.5.2.': 62.0, '3.6.5.1.': 30.0, '.': nan, '3.3.7.': 62.0, '1.11.5.': 85.0, '4.1.4.': 30.0, '1.6.1.2.1.': 62.0, '2.4.2.': 7.0, '2.5.': 7.0, '3.7.2.3.': 7.0, '2.13.4.6.': 7.0, '2.12.6.': 1.0, '3.4.3.1.': 85.0, '1.6.1.2.2.': 30.0, '2.13.2.': 62.0, '3.2.4.': 85.0, '5.1.': 7.0, '3.5.': 62.0, '1.10.1.': 30.0, '5.9.': 62.0, '1.9.3.': 30.0, '2.10.': 7.0, '2.2.1.': 85.0, '3.3.8.': 7.0, '3.8.4.1.': 30.0, '1.4.1.5.': 62.0, '1.4.2.3.': 30.0, '1.7.1.1.': 62.0, '3.6.4.': 30.0, '3.9.2.': 1.0, '1.5.1.1.': 85.0, '5.15.': 62.0, '1.8.2.': 62.0, '3.3.5.1.': 85.0, '3.4.2.2.': 30.0, '3.3.6.3.': 62.0, '2.4.3.': 62.0, '1.9.4.': 7.0, '1.11.1.': 85.0, '1.8.3.': 30.0, '2.12.5.': 1.0, '2.13.3.': 30.0, '1.13.2.': 85.0, '1.4.1.2.': 62.0, '1.2.2.': 62.0, '2.8.': 30.0, '2.2.2.': 85.0, '3.3.9.': 62.0, '3.8.3.': 30.0, '3.7.3.1.': 7.0, '3.13.': 7.0, '2.13.4.4': 1.0, '5.10.': 62.0, '2.4.8.': 62.0, '2.6.1.': 30.0, '3.4.2.1.': 85.0, '5.18.': 7.0, '2.3.4.': 7.0, '1.6.3.': 30.0, '2.7.': 62.0, '4.4.4.4.': 1.0, '3.3.1.': 97.0, '3.6.2.2.': 1.0, '3.9.1.': 1.0, '4.5.4.': 30.0, '4.2.': 7.0, '4.1.1.': 97.0, '3.3.2.': 85.0, '2.2.3.': 85.0, '3.4.3.3.': 30.0, '2.12.4.': 1.0, '2.9.': 1.0, '5.16.': 30.0, '1.2.1.': 62.0, '2.6.2.': 1.0, '3.8.2.': 30.0, '1.10.2.1.': 7.0, '1.1.1.': 97.0, '1.4.2.5.': 7.0, '5.8.': 7.0, '1.3.1.': 85.0, '5.11.': 30.0, '3.6.1.': 97.0, '2.4.1.': 85.0, '3.2.1.': 97.0, '2.11.1.': 85.0, '3.1.1.': 97.0, '3.4.4.': 85.0}
    >>>qstn={u'qn_text': u'Among the first 20 natural numbers what percentage is prime?', u'parent': u'', u'tags': [u'1.3.1.', u'1.4.2.1.', u'1.6.3.'], u'solution': u'Natural numbers means positive integers. Hence, The first $20$ natural numbers are$$1,2,\\cdots,20$$A prime number is a natural number greater than $1$ that has no positive divisors other than 1 and itself . There are $8$ such numbers below 20. $$2,3,5,7,11,13,17,19$$. Therefore the percentage of prime numbers among first $20$ natural numbers is$$\\frac{8}{20}\\times100\\%=40\\%$$ ', u'children': [], u'difficulty': 1, u'options': {u'1': u'$30\\%$', u'3': u'$40\\%$', u'2': u'$35\\%$', u'5': u'$50\\%$', u'4': u'$45\\%$', u'6': u'I dont understand this question'}, u'qn_img_url': u'', u'type': u'MC1(Multiple Choice Single Option Correct)', u'correct': [u'3']}
    >>>question_probability(prior,qstn["tags"])
    54.072604668989428  
    """
    try:
        pr=[tag_prior[tag] for tag in tags]
        return gm(pr)
    except:
        return 0

#==============================================================================
# This function takes input the response {0,1}, and the bkt parameters. and 
# return the updated probability
#==============================================================================
def bkt_update(resp,prior,p_t=0.5,p_s=0.1,p_g=0.2):
    if resp:
        cond_prior=prior*(1-p_s)/(prior*(1-p_s)+(1-prior)*p_g)
    else:
        cond_prior=prior*p_s/(prior*p_s+(1-prior)*(1-p_g))
    cond_posterior=cond_prior+(1-cond_prior)*p_t
    return cond_posterior



#==============================================================================
# This function takes as input the dbconnector, the name of the table 
# containing all the questions and a list of the question numbers that the
# student has already faced. The function returns a list of all the questions
# that the student has not yet faced
#==============================================================================
def get_qstns_not_faced(db,qstn_done,qstndb=None):
    if not qstndb:
        qstndb="forum_questions"
    qdb=db[qstndb]
    marker=qdb.find({},{'qno':1})     
    all_qno=set([item["qno"] for item in marker])
    qstn_not_done=list(all_qno.difference(set(qstn_done))) 
    marker=qdb.find({'qno':{"$in" :qstn_not_done}})
    qstns={}
    for item in marker:
        qstns[item["qno"]]=item
    return qstns
                                  