import json
import os
from inspect import getsourcefile
import re

curr_path = os.path.abspath(getsourcefile(lambda x: x)) 
db_path = re.sub(r"/codes/.*", r"/jsondb/reco.json", 
                   curr_path) # ../data/diagnostic_test.json

qns = json.load(open(db_path, "r"))

class Reco:
	def __init__(self):
		self.abc = 0

	def get_reco(self, idn):
		return qns[idn-1]["type"]