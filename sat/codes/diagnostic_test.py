import json
import os
from inspect import getsourcefile
import re
from  latex2html import latex2html

# absolute path of the current file.
file_path = os.path.abspath(getsourcefile(lambda x: x)) 

data_path = re.sub(r"/codes/.*", r"/data/diagnostic_test.json", 
                   file_path) # ../data/diagnostic_test.json

qns = json.load(open(data_path, "r"))

class LastQnNotAnswered(Exception):
    pass

class Test:
    def __init__(self):
        self._nasked = 0 # questions asked so far
        self._nans = 0 # questions answered so far
        self._nqns = len(qns) # total number of qns
        self.answers = [] # a list of correct, wrong, skipped.\
                     #  if i'th qn is answered corrctly then i'th\
                     # elt is c, if incorrectly then w, if skipped\
                     # then s.
        self.quitp = False # True if student quit the test in between.
    
    def get_qn(self):
        if self.quitp or (self._nasked >= self._nqns): #test quitted or over
            return None
        if self._nasked !=  self._nans: #last qn not answered
            raise LastQnNotAnswered # ToDo should this be an exception or a warning?
        rslt = latex2html(qns[self._nasked]["text"])
        self._nasked += 1
        return rslt

    def set_ans(self, ans):
        assert not self.quitp, "subject quit the test"
        assert self._nasked == self._nans + 1, "answer of last question submitted"
        assert ans in set(range(6)), "answers should be in between 0 to 5, inclusive"
        correct_ans = int( qns[self._nasked - 1]['ans'] )
        ans = int(ans)
        if ans == 0: # skipped
            self.answers.append('s')
        elif ans == correct_ans: # correct
            self.answers.append('c')
        else: # wrong
            self.answers.append('w') 
        self._nans += 1
        
    
    def quit_test(self):
        self.quitp = True









