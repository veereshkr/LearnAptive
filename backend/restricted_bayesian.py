import numpy as np
import pandas as pd
from pandas import DataFrame as Df
import random
from parse_db import parse_db

class LastQnNotAnswered(Exception):
    pass
    
class Cat:
    def __init__(self, nquestion, db_file="./data/qns.tex", m0=0, v0=1):
        """
        Parameters
        ----------
        nquestion: number of question to ask
        
        db_file: database file
        db is assumed to be a dataframe
        consisting of question_id(id),
        correct answer(ans), question beta (b)
        and question category (category).
        
        m0: prior mean of theta(ability parameter)
        v0: prior variance of theta
        """
        self._nquestion = nquestion
        
        # dictionary with 'id' as a key
        # value is also a dict with keys: 'id',
        # text', 'ans', 'beta', 'fig', 'section'.
        self._qn_bank = parse_db(db_file) 
        
        self._nasked = 0 # questions asked so far
        self._nans = 0 # questions answered so far
        self.data = Df(np.empty((nquestion, 5)),
                       columns=["m", "v", "qn", "correctp", "d"])
        self.data.loc[0, ['m', 'v']] = m0, v0
        self._qn = 'null' # id of a last asked qn
    
    def get_qn(self):
        if self._nasked >= self._nquestion: #test is over
            return None
        if self._nasked !=  self._nans:
            raise LastQnNotAnswered # ToDo should this be an exception or a warning?

        self._qn = optimal_qn(self.data.m[self._nasked], self._qn_bank)
        self._nasked += 1
        return self._qn_bank[self._qn]['text']
        
    def set_ans(self, ans):
        
        assert self._nasked == self._nans + 1

        correct_ans = self._qn_bank[self._qn]['ans']
        d = self._qn_bank[self._qn]['beta']

        correctp = int(ans == correct_ans)
        m0, v0 = self.data.loc[self._nans,['m','v']]
        m, v = get_update(m0, v0, correctp, d)
        
        #update self.data
        self.data.loc[self._nans,["qn", "correctp", "d"]] = self._qn, correctp, d
        self.data.loc[self._nasked,["m", "v"]] = m, v

        # remove the qn form _qn_bank
        del self._qn_bank[self._qn]
        
        self._nans += 1
        return None



def optimal_qn(theta, qn_bank, delta=0.1):
    minimizer = 'null' # qn with d nearest to theta
    min_dist = np.inf # dist between minimizer and theta
    satisficers = [] # qn's for which dist(d, theta) < delta
    
    for qn in qn_bank:
        d = qn_bank[qn]['beta']
        dist = abs(d - theta)
        if dist < delta:
            satisficers.append(qn)
        if dist < min_dist:
            min_dist = dist
            minimizer = qn
    if len(satisficers) > 0:
        return random.sample(satisficers, 1)[0]
    else:
        return minimizer
    

def get_update(m0, v0, u, d, g=0.2, a=1):
    """
    Return the updated parameters of the theta (ability level),
    after student answer the question. Owen's algorithm is used 
    to update the theta.
    
    Parameters
    ----------
    m0, v0:  mean and variance of the theta's prior.
    u: 1 if the student answer correctly else 0
    d: difficluty level of the question, (another notation: beta)
    g: guessing parameter, default is 1/5
    a: scale or discrimination parameter.

    Returns
    -------
    (m1, v1): updated mean and variance of the theta.
    """
    assert u in set([0,1]), 'u should be 0 or 1'

    # chaitanaya does not have scipy so 
    # implementing my own phi and Phi
    # Phi = norm.cdf 
    # phi = norm.pdf
    
    d2 = (d - m0) / np.sqrt(a**(-2) + v0)
    a2 = g + (1 - g) * Phi(-d2) # Owen used D and A.
    
    # intermediate terms 
    m = v0 * phi(d2) / np.sqrt(g**(-2) + v0)
    v = phi(d2) / (1 + g**(-2) * v0**(-1))
    
    if u == 1: # student answered correctly
        m1 = m0 + (1 - g) * m / \
             (g + (1 - g) * Phi(-d2))
        v1 = (v0/a2) * (a2 - (1-g) * v * \
                        ((1-g) * phi(d2) / a2 - d2))
    else: # student answered incorreclty
        m1 = m0 - m / (Phi(d2))
        v1 = (v0/Phi(d2)) * (Phi(d2) - v * (phi(d2)/Phi(d2) + d2))
    return (m1, v1)

def phi(x):
    "standard normal density function"
    return (1/np.sqrt(2 * np.pi)) * np.exp(-x**2/ 2.0)

def Phi(x):
    """
    standard normal distribution function
    Phi(x) = Int(-inf, x, phi(u))
    """
    inf = 10 # proxy to infity
    du = 0.01
    ys = map(phi, np.arange(-inf, x, du))
    return np.trapz(ys, dx = du)
