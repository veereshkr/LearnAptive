import re
import pdb

# def parse_db(fl="../data/duplicate.tex"):
#     """
#     Parameter
#     ---------
#     A file with a format like in ./data/duplicate.tex.

#     Returns
#     -------
#     A python dictionary, keys are the question id's and the
#     value is again a python dictionary with keys: id, ans, difficulty, fig
#     tags and text.
#     """
#     fl_ptr = open(fl, "r")
#     rslt = {}
#     while True:
#         qn = get_qn(fl_ptr)
#         if not qn:
#             break
#         qn = parse_qn(qn)
#         if qn['id']: # id is not None
#             rslt[qn['id']] = qn 
#     return rslt

def parse_db(fl="../data/duplicate.tex"):
    """
    Parameter
    ---------
    A file with a format like in ./data/duplicate.tex.

    Returns
    -------
    A  list, each element is a
    dictionary with keys: id, ans, difficulty, fig
    tags and text.
    """
    fl_ptr = open(fl, "r")
    rslt = []
    while True:
        qn = get_qn(fl_ptr)
        if not qn:
            break
        qn = parse_qn(qn)
        rslt.append(qn)
    return rslt


def get_qn(fl_ptr):
    rslt = ""
    
    # read lines till occurance of '\begin{frame}'
    while True:
        line = fl_ptr.readline()
        if line == '': return None
        if line.find(r'\begin{frame}') != -1:
            break

    # read lines till occurance of '\end{frame}' and 
    # store the lines.
    while True:
        rslt += line
        line = fl_ptr.readline()
        if line == '': return None
        if line.find(r'\end{frame}') != -1:
            break

    rslt += line # line = '\end{frame}'
    return rslt

def parse_qn(qn):
    #    pdb.set_trace()
    def value_or_none(ptrn, string, type_=str):
        try:
            value = re.search(ptrn, string, re.S|re.I).group(1)
        except AttributeError:
            return None
        try:
            return type_(value)
        except ValueError:
            return value
    rslt = {}
    rslt['id'] = value_or_none('Qn:[ ]*(\d+)', qn, int)
    rslt['ans'] = value_or_none('correct:[ ]*(\d+)', qn, int)
    rslt['difficulty'] = value_or_none('difficulty:[ ]*([\d.-]*)', qn, float)
    rslt['fig'] = value_or_none('figure:[ ]*(\d+)', qn)
    try:
        rslt['tags'] = map(lambda s: s.strip(), 
                           value_or_none('tags:[ ]*([^\\\\]*)', qn).split(','))
    except AttributeError:
        pass
    rslt['text'] = value_or_none(r"frametitle.*?\n(.*)correct:", qn)
    return rslt 
 
example_qn = r"""/
    \begin{frame}
	    \frametitle{Test:FSPT14-15\hspace{2mm}Sec:2\hspace{2mm}Qn:2}
The result when a number is divided by 5 is the same as when the number is divided by 7. what is the number?	       
	    \begin{enumerate}
	        \item
	            -7
	        \item
	            7
	        \item
	            0
	        \item
	            5
	        \item
	            7
	    \end{enumerate}
	    correct:3  \\   
	    Tags:Arithmetic, Divisibility    \\
	    Difficulty:1   \\
    \end{frame}
"""
