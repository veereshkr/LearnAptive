from given_loop_path_estimate_posterior import *
from score_estimation_given_tag_probabilities import *
import os
from numpy import prod,random
script_path=os.path.dirname(os.path.realpath(__file__))
data_path=os.path.join(script_path,"data")

#This function takes all the question numbers of a loop as input and computes the probabilities of student solving each of them successfully
p={'1.1.1.':0.97,'1.1.2.1.':0.97,'1.1.2.2.':0.97,'1.1.2.3.':0.97,'1.1.2.4.':0.97,'1.1.3.':0.85,'1.2.1.':0.62,'1.2.2.':0.62,'1.3.1.':0.85,'1.3.2.1.':0.62,'1.3.2.2.':0.62,'1.3.2.3.':0.62,'1.4.1.':0.62,'1.4.2.':0.62,'1.4.3.1.':0.62,'1.4.3.2.':0.62,'1.4.3.3.':0.62,'1.4.3.4.':0.30,'1.4.3.5.':0.62,'1.4.3.6.':0.62,'1.4.4.1.':0.30,'1.4.4.2.':0.30,'1.4.4.3.':0.62,'1.4.4.4.':0.85,'1.5.1.1.':0.85,'1.5.1.2.':0.62,'1.5.1.3.':0.85,'1.5.2.':0.62,'1.5.3.':0.30,'1.6.1.1.':0.97,'1.6.1.2.1':0.85,'1.6.1.2.2':0.85,'1.6.1.2.3':0.85,'1.6.1.2.4':0.85,'1.6.1.2.5':0.85,'1.6.1.3.1.':0.62,'1.6.1.3.2.':0.30,'1.6.2.':0.30,'1.6.3.1.':0.62,'1.6.3.2.':0.30,'1.6.3.3.':0.30,'1.6.4.':0.30,'1.7.1.1.':0.62,'1.7.1.2.':0.62,'1.7.1.3.':0.30,'1.7.1.4.':0.30,'1.7.2.1.':0.62,'1.7.2.2.':0.30,'1.7.3.':0.97,'1.8.1.':0.85,'1.8.2.':0.62,'1.8.3.':0.30,'1.8.4.':0.30,'1.9.':0.30,'1.10.1.':0.30,'1.10.2.1.':0.07,'1.10.2.2.':0.07,'1.10.2.3.':0.07,'1.10.3.1.':0.07,'1.10.3.2.':0.07,'1.10.3.3.':0.07,'1.11.1.':0.85,'1.11.2.':0.62,'1.11.3.1.':0.30,'1.11.3.2.':0.07,'1.11.4.1.':0.30,'1.11.4.2.':0.07,'1.12.':0.97,'1.13.1.':0.85,'1.13.2.':0.85,'2.1.':0.97,'2.2.1.':0.85,'2.2.2.':0.85,'2.2.3.':0.85,'2.2.4.':0.85,'2.3.1.':0.62,'2.3.2.':0.30,'2.3.3.1.':0.30,'2.3.3.2.':0.07,'2.3.4.1.':0.30,'2.3.4.2.':0.07,'2.4.1':0.85,'2.4.2':0.07,'2.4.3':0.07,'2.5.':0.07,'2.6.':0.30,'2.7.':0.62,'2.8.':0.30,'2.9.':0.07,'2.10.1.':0.85,'2.10.2.':0.85,'2.11.':0.97,'2.12.1.':0.62,'2.12.2.':0.62,'2.12.3.':0.30,'2.12.4.1.':0.30,'2.12.4.2.':0.30,'2.12.4.3.':0.07,'2.12.4.4.':1,'2.12.4.5.':1,'2.12.5.':0.07,'2.12.6.':0.62,'2.12.7.':0.30,'3.1.1.':0.97,'3.1.2.':0.85,'3.2.1.':0.97,'3.2.2.':0.30,'3.2.3.':0.30,'3.2.4.':0.85,'3.2.5.':0.62,'3.3.1.':0.97,'3.3.2.':0.85,'3.3.3.':0.62,'3.3.4.1.':0.85,'3.3.4.2.':0.62,'3.3.5.1.':0.85,'3.3.5.2.':0.62,'3.3.6.1.':0.62,'3.3.6.2.':0.30,'3.3.6.3.':0.62,'3.3.7.1.':0.62,'3.3.7.2.':0.62,'3.3.7.3.':0.62,'3.3.7.4.':0.62,'3.3.8.1.':0.07,'3.3.8.2.':0.07,'3.3.9.':0.62,'3.4.1.':0.97,'3.4.2.1.':0.85,'3.4.2.2.':0.30,'3.4.3.1.':0.85,'3.4.3.2.':0.30,'3.4.3.3.':0.30,'3.4.4.':0.85,'3.5.':0.62,'3.6.1.':0.97,'3.6.2.1.':1,'3.6.2.2.':1,'3.6.3.':0.85,'3.6.4.':0.30,'3.6.5.1.':0.30,'3.6.5.2.':0.07,'3.7.1.1.':0.30,'3.7.1.2.':0.30,'3.7.1.3.':0.07,'3.7.2.1.':0.30,'3.7.2.2.':0.07,'3.7.2.3.':0.07,'3.7.3.1.':0.07,'3.7.3.2.':0.07,'3.7.3.3.':0.07,'3.7.3.4.':0.07,'3.7.4.1.':0.07,'3.7.4.2.':0.07,'3.7.4.3.':0.07,'3.7.5.1.':0.07,'3.7.5.2.':0.07,'3.7.5.3.':0.07,'3.8.1.':0.30,'3.8.2.':0.30,'3.8.3.':0.30,'3.8.4.1.':0.30,'3.8.4.2.':0.07,'3.8.4.3.':0.07,'3.9.1.':1,'3.9.2.':1,'3.9.3.':1,'3.10.':0.07,'3.11.':0.85,'3.12.':0.62,'4.1.1.':0.30,'4.1.2.':0.97,'4.1.3.':0.97,'4.1.4.':0.97,'4.1.5.':0.30,'4.2.':0.07,'4.3.1.1.':0.85,'4.3.1.2.':0.62,'4.3.1.3.':0.62,'4.3.2.1.':0.07,'4.3.2.2.':0.07,'4.3.3.':0.85,'4.3.4.1.':0.07,'4.3.4.2.':1,'4.4.1.':0.30,'4.4.2.':0.30,'4.4.3.':0.30,'4.4.4.':0.30,'4.4.5.':0.07,'5.1.':0.07,'5.2.':0.85,'5.3.':0.85,'5.4.':0.85,'5.5.':62,'5.6.':0.85,'5.7.':0.30,'5.8.':0.30,'5.9.':0.62,'5.10.':0.07,'5.11.':0.62,'5.12.':0.62,'5.13.':0.30,'5.14.':0.30,'5.15.':0.62,'5.16.':0.30,'5.17.':0.62,'5.18.':0.30,'5.19.':0.30}
qnames=['Q1','Q1.1','Q1.1.1','Q1.1.2','Q1.2','Q1.3',"Q1.3.1","Q1.3.2"]

#This function takes the prior probabilities of the tags and the lists of questions in a loop and computes the probabilitiesof each question being answered correctly

def loop_probabilities(qstns,tag_priors): 
    qstn_tag_prob={key:[tag_priors[tag] for tag in qstns[key]["tags"]] for key in qstns.keys()}
    qstn_prob={key:round(prod(qstn_tag_prob[key])**(float(1)/len(qstn_tag_prob[key])),4) for key in qstn_tag_prob.keys()} 
    return qstn_prob

def simulate_responses(qstn_prob,qstns):
    temp_dict={}    
    for key in qstn_prob.keys():
        temp_dict[key]={"resp":random.binomial(1,qstn_prob[key],1)[0],
        "parent":qstns[key]["parent"],"children":qstns[key]["children"]}
    return temp_dict
    
    
def select_path(node_id, tree):
    def aux(node_id, rslt):
        node = tree[node_id]
        rslt[node_id] = node['resp']
        if node['resp'] == 0:
            for child_id in node['children']:
                rslt = aux(child_id, rslt)
        return rslt
    return aux(node_id, {})    


def find_start_node(tree):
    for node,content in tree.iteritems():
        if content["parent"]=="":
            return node
    else:
        return "error in input"
def score_difference(qst_prob,qstns,prior_prob,estimated_score_before):
    simulated_response=simulate_responses(qst_prob,qstns)
    start_node=find_start_node(simulated_response)
    simulated_path=select_path(start_node,simulated_response)
    posterior=prob_update_after_loop(simulated_path, prior_prob,qstns)
    estimated_score_after=estimate_score(posterior)
    return (estimated_score_after-estimated_score_before)
    
def calculate_impact(qstns_in_loop=qnames,prior=p):
    qstns=get_questions(qstns_in_loop)
    qstn_probability=loop_probabilities(qstns,prior)
    estimated_scores_before=estimate_score(prior)
    differences=[score_difference(qstn_probability,qstns,prior.copy(),estimated_scores_before) for i in range(2)]
    return sum(differences)/float(2)


