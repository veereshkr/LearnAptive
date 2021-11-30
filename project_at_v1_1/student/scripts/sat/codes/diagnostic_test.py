import json
import os
from inspect import getsourcefile
import re

"""
Following are the assumptions on the json data file, code will break
if they are not satisfied (The get_loop function depends upon these).
1. The keys for questions starts with letter Q e.g 'Q1.1'. And keys
for solution starts with some other letters (currently C and S).
2. Siblings have same number of letters for example 'Q1.1.1' and 'Q1.1.2' are
sibling.
"""

class Loop:
    def __init__(self, loop_id):
        self._loop = get_loop(loop_id) # retun a Tree object.
        self._node = self._loop.root # initial node

    def get_qn(self):
        """
        Return None if loop is over, this is implemented by setting parent
        of the root as None, othewise return 'qn_txt', 'options' and 'qn_type'
        """
        if not self._node: # Loop over
            return None
        return tuple( [self._node.data.get(k) 
                       for k in ['qn_txt', 'options', 'type']] )
    
    def set_ans(self, ans):
        """
        Return the solution (it will be None if ans is incorrect and a child exists)
        and set the node to either child, sibling or parent.
        - child: if ans is wrong and the node is visited first time and child exists
        - sibling: if ans is correct and it exists
        - parent: in all other condition.
        child is a leftmost child, and sibling is rightmost sibling.
        """
        solution = None # if condition below are met then will be sol of current node
        # one of these would be next node.
        parent = self._node.parent
        child = self._node.left_child 
        sibling = self._node.right_sibling
        
        # if ans is correct then set the current
        # node to the right_sibling if it exists otherwise
        # to the parent.
        # pdb.set_trace()
        if ans == self._node.data["correct"][0]:
            solution = self._node.data["sol_txt"] # this will be shown to the user
            next_node = sibling or parent # short-circuiting
            self._node = self._loop.get_node(next_node)
            print self._node
        
        # ans is wrong here, if child exist and this is the first visit
        # to the node, then move to the left_child also set first_visit
        # to False, if child does not exists or node is visited before, then
        # set node to the parent and return the solution.
        else:
            if child  and self._node.data.get("first_visit", True):
                self._node.data["first_visit"] = False
                self._node = self._loop.get_node(child)
            else:
                solution = self._node.data["sol_txt"]
                self._node = self._loop.get_node(parent)
        return solution

def get_loop(loop_id="loop1"):
    """ 
    Construct and return the Tree object from the json file loop_id.
    loop_id is the name of the json file containg the loop.
    """
    # absolute path of the current file.
    file_path = os.path.abspath(getsourcefile(lambda x: x)) 
    data_path = re.sub(r"/codes/.*", r"/data/{0}.json".format(loop_id), 
                       file_path) # ../data/loop_id.json
    data = json.load(open(data_path,"r"))
    nodes = {}
    for qn_id in filter(lambda s: s[0] == 'Q', data.keys()):
        node = data[qn_id]
        #print node
        node['left_child'] = node['children'][0] if \
                             node['children'] else None
        # if siblings of 'Q1.2' are ['Q1.1', 'Q1.3', 'Q1.4']
        # then right_sibling of 'Q1.2' is  'Q1.3', that can be
        # obtained as a first sibling bigger than 'Q1.2'
        try:
            node['right_sibling'] = filter(lambda s: s > qn_id, 
                                           node['siblings'])[0]
        except IndexError:
            node['right_sibling'] = None

        # solution text
        node['sol_txt'] = reduce(lambda s,t: s + t,
                                     [data[k] for k in node['solution']], "")
        #print node
        #print qn_id
        nodes[qn_id] = Node(node, qn_id)
        print nodes
    return Tree(nodes, 'Q1')
    
#========================= Tree data structure =====================

class Tree:
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

## would it be better to define Node Class inside the Tree class ?
class Node:
    """
    The object of this class is a node of the Tree class defined above. The 
    constructor requires a dictionary, which must have 'parent', 'left_child' 
    and 'right_sibling' key, and a node_id which would be id for this node in 
    the Tree object.
    """
    def __init__(self, dict_, node_id):
        assert set(['parent','left_child','right_sibling']).issubset( 
            set(dict_.keys()))
        self.id_ = node_id
        self.data = dict_
        self.parent = dict_['parent']
        self.left_child = dict_['left_child']
        self.right_sibling = dict_['right_sibling']
        
loop = Loop('loop1')
a = loop.set_ans('1')
print a