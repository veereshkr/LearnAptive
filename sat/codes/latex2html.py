import re

def latex2html(text):
    text = enumerate2div(text)
    return text

def enumerate2div(text):
    """
    replace '\begin{enumerate} item_1,..,item_n \end{enumerate}
    with the corresponding div element. Each item is in a radio
    button, the class of the radio button is "choice". Run 
    print enumerate2div(example_text) to see the output, example_text
    is defined below.
    """
    #replace begin and end enumerate with the div element
    text = re.sub(r"\\begin{enumerate}", 
        "<div>", text)
    text = re.sub(r"\\end{enumerate}", '<button class="btn btn-primary">next</button> </br> </div>',text)

    # replace \item \n foo with 
    # <input type="radio" name="choice" value=item_number class="choice">foo<br>
    def aux(match):
        try:
            replacement = unicode.strip(match.group(1))
        except TypeError:
            replacement = str.strip(match.group(1))
        rslt = '<input type="radio" name="choice" value={0} ' \
        'class="choice">{1}<br>'.format(choice_num[0], replacement) 
        choice_num[0] += 1
        return rslt 
    choice_num = [1] # answer choice, range from 1-5\
                 # in a list because aux will manimpuate it.
    ptrn = r"\\item\n([^\n]*)"
    text = re.sub(ptrn, aux, text) 
    return text

example_text = u"""
	\begin{frame}
	    \frametitle{Test:FSPT14-15\hspace{2mm}Sec:2\hspace{2mm}Qn:1}
If 5+a is 3 more than 5, what is the value of 5a?	       
	    \begin{enumerate}
	        \item
	            -3
	        \item
	            3
	        \item
	            6
	        \item
	            15
	        \item
	            30
	    \end{enumerate}
	    correct:4  \\   
	    Tags:Arithmetic, basic operation    \\
	    Difficulty:1   \\
    \end{frame}
    \begin{frame}
"""
