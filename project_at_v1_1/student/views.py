from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.utils import timezone
from datetime import date, datetime, timedelta
from django.contrib.auth import logout
from scripts.sat.codes.genie_loop import Loop
from django.core.mail import send_mail
from user_register.models import Registration
from student.models import Timeline
from student.forms import DocumentForm
import random
def dashboard(request):
	if request.method == 'GET':
		name = ''
		if 'SSID' in request.session:
			ssid = request.session['SSID']
			n = Registration.objects.get(id=ssid)
			if n.g_signup:
				name = n.username
			else:
				s = n.social_auth.first()
				if s.provider == "facebook":
					name = n.username
				if s.provider == "google-oauth2":
					name = s.extra_data['first_name']
				if s.provider == "linkedin":
					name = s.extra_data['first_name']
			zone = -(n.zone)
			c = datetime.now()
			c = c + timedelta(minutes=zone)
			time = Timeline.objects.filter(created_at=c.date()).order_by('created_at')
			timeline = Timeline.objects.filter(created_at__lt=c.date()).order_by('created_at')
			# firstname = n.social_auth.get(provider="facebook")
			# fname = firstname.extra_data['first_name']
		else:
			return redirect('/')
		context = {'name': name, 'n': n, 'timeline': timeline, 'time': time}
		return render(request, 'student/dashboard.html', context)
	# else:
	# 	return HttpResponse("Page not found")

def calendar(request):

	return render(request, 'student/calendar.html')

def personality(request):
	if request.method == 'POST':
		return render(request, 'student/personality.html')

	else:
		return HttpResponse("Page not found")

def calEvent(request):
	if request.is_ajax():
		return render(request, 'student/cal-event.html')

	else:
		return HttpResponse("Page not found")

def planList(request):
	if request.is_ajax():
		return render(request, 'student/plan-list.html')

	else:
		return HttpResponse("Page not found")

def tutors(request):
	if request.is_ajax():
		return render(request, 'student/tutors.html')


def tutorProfile(request, username):
	return render(request, 'student/tutor-profile.html')

def mailSent(request):
	if request.is_ajax():
		if request.method == "GET":
			if 'm' in request.GET:
				c = request.GET['m']
				email_to = 'chaitanya.srivastav@gmail.com'
				send_mail("Hi Josh", c,"somestudent@learnaptive.com", [email_to])
				return render(request, 'student/mail-sent.html')


student = {}
def genieDialogue(request):
	global student
	# if request.is_ajax():
	# 	if request.method == 'POST':
	# 		if 'uid' in request.POST:
	# 			context = {"question": 'hello', 'sol': 'bar'}
	# 			return render(request, 'student/genie.html', context)
	if 'uid' in request.POST:
		key = request.POST['uid']
		if not student.get(key):
			student[key] = {}
			student[key]['sol'] = ''
			student[key]['loop'] = Loop() #argument is hardcoded
		# else:
		# 	student[key]['loop'].set_ans(1)
		if request.is_ajax():
			if "resume_session" in request.POST:
				context = {'question': student[key]['curr_qn'], 'sol': student[key]['sol']}
				return render(request, 'student/genie.html', context)

			opt = []
			tp = 'MC1' #ye change hoga
			txt1 = ''
			if "answer" in request.POST:
	 			ans = request.POST['answer']
	 			if ans == "tutor": #when user clicks 'message', 'tutor' string is sent to views
	 				msg = request.POST['msg']
	 				email_to = 'chaitanya.srivastav@gmail.com'
					send_mail("Hi Josh", msg,"somestudent@learnaptive.com", [email_to])
	 				txt1 = """<p>Josh will respond you, as soon as he is online</p>
			 				<p>Lets move on to next question</p>"""
	 			else:
		 		 	ans = int(ans) + 1
					result = student[key]['loop'].set_ans(ans)
					student[key]['sol'] = result.get('sol', '')
					# sol = student[key]['sol']
					tutp = result.get('tutor', False)
					if tutp:
						txt = "Hello, my name is Josh. How can I help you?"
						student[key]['opt'] = ['-textarea-']
						student[key]['tp'] = "TUT"
						context = {'question': txt, 'sol': student[key]['sol']}
						return render(request, 'student/genie.html', context)
				# if sol:
				# 	context = {'solution': sol}
				# 	return render(request, 'student/genie.html', context)
			qn = student[key]['loop'].get_qn()
			if not qn:
				txt = 'loop over'
			else:
				choice = lambda xs: random.choice(xs)+' ' if xs else ''
				txt,opt,inter = qn['text'], qn['options'], choice(qn.get('interjects', []))
				if 'type' in qn.keys():
					tp = qn['type']
				else:
					tp = 'MC1'
				txt = txt1 + inter + txt
			 	opt = [str(opt[str(i+1)]) for i in range(len(opt))]
				#opt = ['a', 'b', 'c']
			#type of question to be checked later
			student[key]['curr_qn'] = txt
			student[key]['opt'] = opt
			student[key]['tp'] = tp
			context = {'question': student[key]['curr_qn'], 'sol': student[key]['sol']}
			return render(request, 'student/genie.html', context)

def studentDialogue(request):
	if 'uid' in request.POST:
		key = request.POST['uid']
	 	if request.is_ajax():
	 		opname = student[key]['opt']
	 		textstring = ''
			context = {'arr': opname, 's': textstring, 'type': student[key]['tp']}
	 		return render(request, 'student/student-d.html', context)

# def genieDialogue(request):
# 	if request.is_ajax():
# 		if "answer" in request.GET:
# 			context = {'chosen': request.GET["answer"]}
# 			return render(request, 'student/genie.html', context)
# 		elif 'tnumber' in request.GET:
# 			abc = []
# 			num = int(request.GET['tnumber'])
# 			for i in range(0,num):
# 				if 'option'+str(i) in request.GET:
# 					abc.append(int(request.GET['option'+str(i)]))
# 			context= {'abc': abc}
# 			return render(request, 'student/genie.html', context)
# 		else:
# 			return render(request, 'student/genie.html' )

# 	else:
# 		return HttpResponse("Page not found")

# def studentDialogue(request):
# 	if request.is_ajax():
# 		opname = ['A. a', 'B. b','C. c','D. d','E. e','F. f']
# 		textstring = 'this is -TX- and it helps us in submitting. -tx- great!'
# 		context = {'arr': opname, 's': textstring, 'type': 'btn'}
# 		return render(request, 'student/student-d.html', context)

# 	else:
# 		return HttpResponse("Page not found")

def studentProfile(request):
	name = ''
	email = ''
	gender = ''
	fullname = ''
	if 'SSID' in request.session:
		ssid = request.session['SSID']
		n = Registration.objects.get(id=ssid)
		if n.g_signup:
			name = n.username
			email = n.email
		else:
			s = n.social_auth.first()
			if s.provider == "facebook":
				name = n.username
				email = n.email
				gender = s.extra_data['gender']
				fullname = s.extra_data['full_name']
			if s.provider == "google-oauth2":
				name = s.extra_data['first_name']
				email = n.email
				gender = s.extra_data['gender']
				fullname = s.extra_data['first_name']+' '+s.extra_data['last_name']
			if s.provider == "linkedin":
				name = s.extra_data['first_name']
				email = n.email
				gender = s.extra_data['gender']
				fullname = s.extra_data['first_name']+' '+s.extra_data['last_name']
		# form = DocumentForm()
		if request.method == 'POST':
			form = DocumentForm(request.POST, request.FILES)
			if form.is_valid():
				n.photo = request.FILES['docfile']
				n.save()
		else:
			form = DocumentForm()
	else:
		return redirect('/')
	context = {'name': name, 'email': email, 'gender': gender, 'fullname': fullname, 'form': form, 'n': n}
	return render(request, 'student/student-profile.html', context)

def questionBankds(request):
	context = {'qtype': request.GET['dataSuff']}
	return render(request, 'student/qbank.html', context)

def questionBankps(request):
	context = {'qtype': request.GET['probSol']}
	return render(request, 'student/qbank.html', context)

def questionBankrc(request):
	context = {'qtype': request.GET['readComp']}
	return render(request, 'student/qbank.html', context)

def questionBankcr(request):
	context = {'qtype': request.GET['critReas']}
	return render(request, 'student/qbank.html', context)

def questionBanksc(request):
	context = {'qtype': request.GET['senCorr']}
	return render(request, 'student/qbank.html', context)

loop = None
def cat(request):
	global loop
	n = 5
	if request.method == "POST":
		if "examdate" in request.POST:
			if request.POST["examdate"]:
				if not test:
					test = Test()
				qn_text = test.get_qn()
				if qn_text == None:
					return render(request, 'student/student-profile.html')
				exam = request.POST['timeweekday']
				context = {"question": qn_text, "exam": exam}
				return render(request, 'student/test.html', context)
			else:
				return HttpResponse("Please provide exam date")

		if "choice" in request.POST:
			if request.POST['choice']:
				ans1 = request.POST['choice']
				ans = int(ans1)
				test.set_ans(ans)
				qn_text = test.get_qn() #if loop whether qn_text == None, then return HttpResponse "Test Over" with B values
				if qn_text == None:
					return render(request, 'student/test-result.html')
				context = {"question": qn_text, "answer": ans}
				return render(request, 'student/test.html', context)

		elif "skip" in request.POST:
			ans = 0
			test.set_ans(ans)
			qn_text = test.get_qn() #if loop whether qn_text == None, then return HttpResponse "Test Over" with B values
			if qn_text == None:
				return render(request, 'student/test-result.html')
			context = {"question": qn_text, "answer": ans}
			return render(request, 'student/test.html', context)

		else:
			#Student has hit the quit button
			test.quit_test()
			return render(request, 'student/test-result.html')

	else:
		return HttpResponse("Page not found")

def stock(request):
	if request.is_ajax():
		return render(request, 'student/high.json')
	else:
		return HttpResponse("Page not found")

def stock2(request):
	if request.is_ajax():
		return render(request, 'student/high2.json')
	else:
		return HttpResponse("Page not found")

def signout(request):
	logout(request)
	return render(request, 'user_register/home.html')
# Create your views here.
