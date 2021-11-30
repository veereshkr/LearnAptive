"""Following are the assumptions on the json data file, code will break
if they are not satisfied (The get_loop function depends upon these).
1. The keys for questions starts with letter Q e.g 'Q1.1'. And keys
for solution starts with some other letters (currently C and S).
2. Siblings have same number of letters for example 'Q1.1.1' and 'Q1.1.2' are
sibling."""

import json
import os
from inspect import getsourcefile
import re

class Loop(object):
    """get_qn and set_ans are the api of this class.
    get_qn returns a dictionary with keys 'text', 'options'
    and 'type'. If the loop is over then it will return None.
    set_ans takes an integer argument which is answer of the 
    last question, it returns a dictionary which has keys 'tutor'
    and 'sol'."""
    # Implementation:
    # Questions are of two types math_qn and genie_qn,
    # get_qn call the get_math_qn or get_genie_qn, depending
    # on the value of the variable next_qn_mathp, similarly
    # set_ans call will depend upon the variable qn_mathp.
    def __init__(self, loop_id='a'):
        self._loop = get_loop(loop_id) # retun a Tree object.

        # node contain the info about the current (math) qn
        # its type is Node, its data attribute
        # is a dictionary which has keys: 'correct',
        # 'sol_txt',..
        self._node = self._loop.root #initialize to root
        self._last_node = self._loop.root 
        self._qn_mathp = True # is current qn math question.
        self._nextqn_mathp = True # if next qn will be math qn
        self._genie_nextqn = "" # next genie's qn one of the "c1",..,"c7"
        self._genie_qn = "" # current genie's qn. 
        self._sol = "" # solution of the current math qn
        self.loop_over = False
        # get_qn(set_ans) will run only if qnp flag is True(False),
        # this make sure that question is asked only after answering
        # last question and answer is set to a question.
        self._qnp = True
    
    def get_qn(self):
        """call math qn or genie qn depending upon the value
        of next_qn_mathp"""
        assert self._qnp, "Answer the last question first"
        self._qnp = False
        if self._nextqn_mathp:
            self._qn_mathp = True
            return self._get_math_qn()
        else:
            self._qn_mathp = False
            return self._get_genie_qn()
        
    def set_ans(self, ans):
        """ans is a string. Set the value of last qn"""
        assert not self._qnp, "Ask the question first"
        self._qnp = True
        ans = int(ans)
        if self._qn_mathp:
            self._nextqn_mathp = False
            correctp, sol = self._set_math_ans(ans)
            self._genie_nextqn = "c1" if correctp else "c2"
            self._sol = sol
            return {"tutor":False, "sol":""}
        else:
            return self._set_genie_ans(ans)
        
    def _get_math_qn(self):
        """Return None if loop is over, this is implemented by setting parent
        of the root as None, othewise return a dictionary with keys: text,
        options and type"""
        self._qn_mathp = True
        rslt = {}
        if not self._node: # Loop over
            return None
        rslt['text'] = self._node.data.get('qn_text')
        for k in ['options', 'type']:
            rslt[k] = self._node.data.get(k)
        return rslt

    def _set_math_ans(self, ans):
        """Set _last_node to _node and return a tuple (correctp, solution)
        and set the node to either child, sibling or parent.
        - child: if ans is wrong and the node is visited first time and child exists
        - sibling: if ans is correct and it exists
        - parent: in all other condition.
        child is a leftmost child, and sibling is first right sibling."""
        self._last_node = self._node
        # one of these would be next node.
        parent = self._node.parent
        child = self._node.left_child
        sibling = self._node.right_sibling
        solution = self._node.data["sol_txt"] 
        # if ans is correct then set the current
        # node to the right_sibling if it exists, otherwise
        # to the parent.
        correctp = (str(ans) == self._node.data["correct"][0])
        if correctp:
            next_node = sibling or parent # short-circuiting
            self._node = self._loop.get_node(next_node)
        # ans is wrong here, if child exist and this is the first visit
        # to the node, then move to the left_child also set first_visit
        # to False, if child does not exists or node is visited before, then
        # set node to the sibling if it exists else to the parent.
        else:
            if child  and self._node.data.get("first_visit", True):
                self._node.data["first_visit"] = False
                self._node = self._loop.get_node(child)
            elif sibling:
                self._node = self._loop.get_node(sibling)
            else:
                self._node = self._loop.get_node(parent)
        return (correctp, solution)

    def _get_genie_qn(self):
        self._qn_mathp = False
        self._genie_qn = self._genie_nextqn
        return conjunctions[self._genie_nextqn]

    def _set_genie_ans(self, ans=1):
        '''setting default ans to 1, because c4, c6 & c7 does not
        require any ans.'''
        rslt = {}
        self._nextqn_mathp = False # By default false, some case below set it true
        if self._genie_qn == "c1":
            self._nextqn_mathp = True
            if ans == 1: # go to the next math qn
                self._nextqn_mathp = True
            if ans == 2: # show the solution and next qn is c5
                rslt['sol'] = self._sol
                self._genie_nextqn = 'c5'

        elif self._genie_qn == 'c2':
            if ans == 1: 
                # take to 'c3' if not a leaf node else to 'c3_2'
                self._genie_nextqn = 'c3' if self._last_node.left_child \
                                     else 'c3_2'
            else: # student wants to try again, take him to last math qn.
                self._nextqn_mathp = True
                self._node = self._last_node
                self._node.data["first_visit"] = True # pretend this is first \
                                                 #visit to the qn.

        elif self._genie_qn == 'c3':
            if ans == 1: # take to try child qn
                self._genie_nextqn = 'c4'
            elif ans == 2: # take to tutor and next qn will be math question
                rslt['tutor'] = True
                self._nextqn_mathp = True
            else: #show the solution next quesion will be c5
                rslt['sol'] = self._sol
                self._genie_nextqn = 'c5'

        elif self._genie_qn == "c3_2":
            if ans == 1: # take to tutor and next qn will be math question
                rslt['tutor'] = True
                self._nextqn_mathp = True
            else: #show the solution next quesion will be c5
                rslt['sol'] = self._sol
                self._genie_nextqn = 'c5'

        elif self._genie_qn == 'c4':
            self._nextqn_mathp = True

        elif self._genie_qn == 'c5':
            self._genie_nextqn = 'c6' if ans == 1 else 'c7'
            self._nextqn_mathp = False

        elif self._genie_qn == 'c6':
            self._nextqn_mathp = True

        else: # last qn was c7
            rslt['tutor'] = True
            self._nextqn_mathp = True
        return rslt
        
def get_loop(loop_id="a"):
    """
    Construct and return the Tree object from the json file loop_id.
    loop_id is the name of the json file containg the loop.
    """
    # absolute path of the current file.
    file_path = os.path.abspath(getsourcefile(lambda x: x))
    data_path = re.sub(r"/codes/.*", r"/data/{0}.json".format(loop_id),
                       file_path) # ../data/loop_id.json
    data = json.load(open(data_path, "r"))
    nodes = {}
#    import pdb; pdb.set_trace()
    def get_siblings(qn_id): 
        ptrn = "\.[0-9]*$" # a '.' followed by a number at the \
               # end of the string: eg: .3 in Qn1.2.3
        return [qn for qn in data.keys() if 
                re.sub(ptrn, "", qn) == re.sub(ptrn, "", qn_id)]

    for qn_id in filter(lambda s: s[0] == 'Q', data.keys()):
        node = data[qn_id]
        node['left_child'] = node['children'][0] if \
                             node['children'] else None
        # if siblings of 'Q1.2' are ['Q1.1', 'Q1.3', 'Q1.4']
        # then right_sibling of 'Q1.2' is  'Q1.3', that can be
        # obtained as a first sibling bigger than 'Q1.2'
        siblings = get_siblings(qn_id)
        siblings.sort()
        try:
            node['right_sibling'] = [qn for qn in siblings if qn > qn_id][0]
        except IndexError:
            node['right_sibling'] = None
        node['sol_txt'] = node["solution"]
        nodes[qn_id] = Node(node, qn_id)
    return Tree(nodes, 'Q2')
            
#========================= Tree data structure =====================

class Tree(object):
    """
    Each node in a tree has a unique id and a parent (parent is None for the root)
    and can have multiple children and siblings. The only method Tree object
    has is get_node(node_id). The constructor requires a dictionary of Node object
    where the keys are node_id and values are of type Node. Node class is
    defined below.
    """
    def __init__(self, nodes, root_id):
        assert root_id in nodes.keys()
        self.root = nodes.get(root_id)
        self.nodes = nodes

    def get_node(self, node_id):
        assert node_id in set(self.nodes.keys()) | set([''])
        return self.nodes.get(node_id)


class Node(object):
    """
    The object of this class is a node of the Tree class defined above. The 
    constructor requires a dictionary, which must have 'parent', 'left_child' 
    and 'right_sibling' key, and a node_id which would be id for this node in 
    the Tree object.
    """
    def __init__(self, dict_, node_id):
        assert set(['parent', 'left_child', 'right_sibling']).issubset( 
            set(dict_.keys()))
        self.id_ = node_id
        self.data = dict_
        self.parent = dict_['parent']
        self.left_child = dict_['left_child']
        self.right_sibling = dict_['right_sibling']

conjunctions = {
    "c1":{
        # position:after a question, if the question has been answered correctly
        "interjects":["Hurrah! This is the correct answer","Absolutely Right", "Bang on! "],
        "text":"What do you want to do next?",
        "options":{
            "1":"I want to try the next question", # give next sibling/next loop in the loop
            "2":"Show me the full solution of this problem" # take to the solution of the question preceding this
        },
    },
    "c2":{
        # position:after a question, if the question has been answered incorrectly
        "interjects":["Ahh! This is a wrong answer","Sorry, your answer is not right."],
        "text":"What do you think went wrong there?",
        "options":{
            "1":"I Don't know how to solve this question. Help me learn and solve this", # take to c3
            "2":"Argh!!! I made a silly mistake I think. I would like to try solving this once more." # take to the question preceding this, with the option already tried being disbled
        } 
},
    "c3":{
        # position:after c2, of the student selects option 1
        "interjects":[],
        "text":"Let me help you understand the problem.",
        "options":{
            "1":"I would like to solve this problem myself, with some help from the Genie.",# take to C4
            "2":"I would like to ask a tutor for an explanation", # give the contact tutor window
            "3":"Never mind. Just show me the solution" # take to the solution of the problem that the student has faced last. 
        }
    },
    "c3_2":{
        # position:after c2, of the student selects option 1 and this is a leaf qn
        "interjects":[],
        "text":"Let me help you understand the problem.",
        "options":{
            "1":"I would like to ask a tutor for an explanation", # give the contact tutor window
            "2":"Never mind. Just show me the solution" # take to the solution of the problem that the student has faced last. 
        }
    },
    "c4":{
        "text":"Lets solve a simpler problem first",
        "options":{
            "1":"proceed" # give first child of the preceeding question 
        }
    },
    "c5":{
        # position:after showing the solution
        "text":"Did you understand the solution?",
        "options":{
            "1":"yes, it was very easy", # take to c6
            "2":"No, I still have a few doubts" # take to c7
        }
    },
    "c6":{
        # position:if student chooses option 1 in c5
        "text":"Lets move to the next question.",
        "options":{
            "1":"Proceed" # Take to the next sibling or to the next loop
        }
    },
    "c7":{
        # position:if student chooses option 2 in c5
        "text":"You should ask a tutor to help you to understand this problem completely.",
        "options":{
            "1":"Proceed" # open the contact tutor window
        }
    }
}
