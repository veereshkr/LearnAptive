import pandas
import os
def get_tag_prob(fname):
###-------------make the dictionary of probabilities of tags------------###
    dframe=pandas.read_csv(os.path.join("data",fname))
    return dframe.set_index('WBS')['prob'].to_dict()
