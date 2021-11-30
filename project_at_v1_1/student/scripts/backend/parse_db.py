import re
import pdb

def parse_db(fl="./data/qns.tex"):
    """
    Parameter
    ---------
    A file with a format like in ./data/qns.tex.

    Returns
    -------
    A python dictionary, keys are the question id's and the
    value is again a python dictionary with keys: id, ans, beta, fig
    section and text.
    """
    fl_ptr = open(fl, "r")
    rslt = {}
    while True:
        qn = get_qn(fl_ptr)
        if not qn:
            break
        qn = parse_qn(qn)
        if qn['id']: # id is not None
            rslt[qn['id']] = qn 
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
            value = re.search(ptrn, string, re.S).group(1)
        except AttributeError:
            return None
        return type_(value)
    rslt = {}
    rslt['id'] = value_or_none('id:[ ]*(\d+)', qn, int)
    rslt['ans'] = value_or_none('answer:[ ]*(\d+)', qn, int)
    rslt['beta'] = value_or_none('beta-value:[ ]*([\d.-]*)', qn, float)
    rslt['fig'] = value_or_none('figure:[ ]*(\d+)', qn)
    rslt['section'] = value_or_none('section:[ ]*(\d+)', qn)
    rslt['text'] = value_or_none(r"frametitle.*?\n(.*)\\end\{frame\}", qn)
    return rslt 

example_qn = \
r"""
\begin{frame}
% id: 13
% correct-answer: 4
% beta-value: -2.99994710039
% figure:
% section: word problem
    \frametitle{\underline{02292b549dda95bca8dd1a7a1d509f02}}
    A school has a contract with a stationary supplier to pay a discounted price for bulk order of chalks. If the suppliers original price for each crate of chalk is \$56, what percent discount is specified by the contract between the school and the suplier?\par
(1)The school need to pay only 75% of the original price \par
(2)The school is required to pay only \$42 for each crate of chalk.
    \begin{itemize}
        \item
            Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient
        \item
            Statement (2) ALONE is sufficient, but statement (2) alone is not sufficient
        \item
            BOTH statement TOGETHER are sufficient, but NEITHER statement ALONE is sufficient
        \item
            EACH statement ALONE is sufficient
        \item
            Statements (1) and (2) TOGETHER are NOT sufficient
    \end{itemize}
\end{frame}
"""
