from django.shortcuts import render, redirect
from django.http import HttpResponse
from user_register.models import Registration
from datetime import datetime
from django.utils import timezone
import uuid
import hashlib
from django.contrib import messages
from datetime import timedelta
from django.views.decorators.csrf import requires_csrf_token
from django.contrib.auth import logout
#from django.contrib.auth.models import AbstractBaseUser
from django.core.mail import send_mail
#from user_register.models import User

# Create your views here.
@requires_csrf_token
def home(request):
	if request.method == 'POST':
		if 'resetemail' in request.POST:
			if Registration.objects.filter(email=request.POST['resetemail']).filter(is_active=True).exists():
				a = Registration.objects.get(email=request.POST['resetemail'])
				name = ''
				email_to = a.email
				if a.g_signup:
					name = a.username
				else:
					s = a.social_auth.first()
					if s.provider == "facebook":
						name = a.username
					if s.provider == "google-oauth2":
						name = s.extra_data['first_name']
					if s.provider == "linkedin":
						name = s.extra_data['first_name']
				reset_key = 'http://localhost:5000/?rst='+a.key
				a.expiry = timezone.now() + timedelta(minutes=5)
				a.save()
				msg = """Hi %s,\n\nWe recieved information that you want to reset your password.
				\n\nIf this information was not provided by you. Please ignore and delete this message.\n\n
				click on the link below to reset your password %s.""" %(name, reset_key)
				send_mail("Reset Password", msg,"info@learnaptive.com", [email_to])
				messages.success(request, "Reset email has been sent to your email.")
				return redirect('/')
			else:
				messages.error(request, "This email id has not registered with us. Register with us now.")
				return redirect('/')

		elif 'resetpass' and 'hidemail' in request.POST:
			a = Registration.objects.get(email=request.POST['hidemail'])
			a.set_password(request.POST['resetpass'])
			a.save()
			request.session['SSID'] = a.id
			return redirect("/")
		else:
			logout(request)
			return redirect('/')

	else:
		if 'rst' in request.GET:
			if request.GET['rst'] == '':
				error = 'No link found. Try again'
				context = {'error': error}
				return render(request, 'user_register/home.html', context)
			a = Registration.objects.filter(key=request.GET['rst']) # What if length > 1?
			if a:
				if datetime.now() > a[0].expiry:
					#error = 'This link has expired. Reset again'
					time = timezone.now()
					time = time.strftime('%m%d%Y-%H%M%S%f')
					hashed_time = hashlib.sha256(time).hexdigest()
					a_key = str(uuid.uuid4())
					a[0].key = ''.join(a_key.split('-')) + hashed_time #Ques: Can there be collision?
					a[0].save()
					messages.error(request, "This link has expired. Reset again")
					return redirect('/')
				# a[0].is_active = True
				time = timezone.now()
				time = time.strftime('%m%d%Y-%H%M%S%f')
				hashed_time = hashlib.sha256(time).hexdigest()
				a_key = str(uuid.uuid4())
				a[0].key = ''.join(a_key.split('-')) + hashed_time #Ques: Can there be collision?
				email = a[0].email
				a[0].save()
				# request.session['SSID'] = a[0].id
				context = {'email': email}
				return render(request, 'user_register/home.html', context)
			else:
				messages.error(request, "This link has expired.")
				return redirect('/')

		if 'confirm' in request.GET:
			if request.GET['confirm'] == '':
				error = 'No link found. Try again'
				context = {'error': error}
				return render(request, 'user_register/home.html', context)
			a = Registration.objects.filter(key=request.GET['confirm']) # If collision then use 'filter' in place of 'get'
			if a:
				if a[0].is_active:
					# error = 'This link has expired. User already activated'
					# context = {'error': error}
					# return render(request, 'user_register/home.html', context)
					messages.error(request, "This link has expired. User already activated")
					return redirect('/')

				if datetime.now() > a[0].expiry:
					error = 'This link has expired. Register again'
					time = timezone.now()
					time = time.strftime('%m%d%Y-%H%M%S%f')
					hashed_time = hashlib.sha256(time).hexdigest()
					a_key = str(uuid.uuid4())
					a[0].key = ''.join(a_key.split('-')) + hashed_time #Ques: Can there be collision?
					a[0].save()
					messages.error(request, "This link has expired. Register again")
					# context = {'error': error}
					# return render(request, 'user_register/home.html', context)
					return redirect('/')

				a[0].is_active = True
				time = timezone.now()
				time = time.strftime('%m%d%Y-%H%M%S%f')
				hashed_time = hashlib.sha256(time).hexdigest()
				a_key = str(uuid.uuid4())
				a[0].key = ''.join(a_key.split('-')) + hashed_time #Ques: Can there be collision?
				a[0].save()
				request.session['SSID'] = a[0].id
				return redirect('/')
			else:
				messages.error(request, "This link has expired.")
					# context = {'error': error}
					# return render(request, 'user_register/home.html', context)
				return redirect('/')
				# error = 'This link has expired.'
				# context = {'error': error}
				# return render(request, 'user_register/home.html', context)

		if "SSID" in request.session:
			ssid = request.session['SSID']
			a = Registration.objects.get(id=ssid)
			if a.utype == 'ST':
				return redirect('/dashboard/')
			if a.utype == 'TU':
				return redirect('/t-dashboard/')

		return render(request, 'user_register/home.html')

def welcome(request):
	"""this function is called after user signs up or logs in."""
	if request.method == 'POST':
		if "reg_username" in request.POST: #Sign up takes to one time welcome page
			if request.POST['reg_username'] and request.POST['email'] and request.POST['reg_pwd'] and request.POST['option'] and request.POST['zone']:
				if Registration.objects.filter(email=request.POST['email']).filter(is_active=True).exists(): #--TODO: when database entry is zero
					error = 'This email is there with us already. Try signing up using different email'
					context = {'error': error}
					return render(request, 'user_register/home.html', context)
				else:
					#save user as inactive and send confirmation mail
					zone = int(request.POST['zone'])
					d = timezone.now() + timedelta(minutes=-(zone))
					exp = timezone.now() + timedelta(minutes=5)
					c = Registration.objects.create_user(username=request.POST['reg_username'], email=request.POST['email'], password=request.POST['reg_pwd'], utype=request.POST['option'], is_active=False, created_at=d, zone=zone, g_signup=True, key='', expiry=exp)
					c.save()
					email_to = request.POST['email']
					activation_key = 'http://localhost:5000/?confirm='+c.key
					msg = """Hi %s,\n\nThank you for registering with us.\n\nFollowing are the username
					and password that you gave us.\n\nIf any of the feilds do not match then it is not
					you. Ignore this message if it is not you.\n\n\nusername: %s\n\npassword: %s
					\n\n\nclick on the link below to activate your account %s.""" %(request.POST['reg_username'],request.POST['email'],request.POST['reg_pwd'],activation_key)
					send_mail("Confirm your Email to get started", msg, "learnaptive@learnaptive.com", [email_to])
					#a = Registration.objects.get(email=request.POST['email'])
					#r = a.created_at
					category = request.POST['option']
					if category == 'ST':
						category = 'Student'
					if category == 'TU':
						category = 'Tutor'
					if category == 'PA':
						category = 'Parent'
					#request.session['SSID'] = c.id
					#when user sign up show them the welcome.html page
					context = {'username': request.POST['reg_username'], 'category': category, 'user': c}
					return render(request, 'user_register/welcome.html', context)

		elif "useremail" in request.POST: #Log in directly to dashboard
			if request.POST['useremail'] and request.POST['pwd']:
				if Registration.objects.filter(email=request.POST['useremail']).filter(is_active=True).exists():
					c = Registration.objects.filter(email=request.POST['useremail']).get(is_active=True)
					if not c.check_password(request.POST['pwd']):
						messages.error(request, "Your password do not match. Try again")
						return redirect('/')
					if c.utype == 'ST':
						request.session['SSID'] = c.id
						return redirect('/dashboard/')
					if c.utype == 'TU':
						request.session['SSID'] = c.id
						return redirect('/t-dashboard/')
				elif Registration.objects.filter(email=request.POST['useremail']).filter(is_active=False).exists():
					messages.error(request, "Sorry, This account is not verified. Go to your mail and activate it now.")
					return redirect('/')
				else:
					messages.error(request, "This email id has not registered with us. Register with us now.")
					return redirect('/')

		else:
			messages.error(request, "Server error. Please wait sometimes")
			return redirect('/')


	else:
		if "SSID" in request.session:
			ssid = request.session['SSID']
			a = Registration.objects.get(id=ssid)
			if a.utype == 'ST':
				return redirect('/dashboard/')
			if a.utype == 'TU':
				return redirect('/t-dashboard/')
		if request.user.is_anonymous(): # if SSID not present and user is anonymous
			return redirect('/')


def wc(request):
	"""Get request for successful redirection of social authentication"""
	if 'SSID' in request.session: # If SSID is present
		ssid = request.session['SSID']
		a = Registration.objects.get(id=ssid)
		if a.utype == 'ST':
			return redirect('/dashboard/')
		if a.utype == 'TU':
			return redirect('/t-dashboard/')
	if request.user.is_anonymous(): # if SSID not present and user is anonymous
		return redirect('/')
	if request.method == 'POST': #updating utype value which was set to "NA"
		if 'option' in request.POST:
			utype = request.POST['option']
			pwd = request.POST['pwd']
			zone = request.POST['tz']
			a = Registration.objects.get(id=request.user.id)
			a.utype = utype
			a.zone = zone
			a.set_password(pwd) #sets password by which user can log in using learnaptive login
			a.save()
			if utype == 'ST':
				utype = 'Student'
			if utype == 'TU':
				utype = 'Tutor'
			if utype == 'PA':
				utype = 'Parent'
			request.user.utype = utype
			request.session['SSID'] = request.user.id
	name = request.user.username # if SSID not present and user is not anonymous
	category = request.user.utype
	if category == 'ST':
		request.session['SSID'] = request.user.id
		return redirect('/dashboard/')
	if category == 'TU':
		request.session['SSID'] = request.user.id
		return redirect('/t-dashboard/')
	context = {'username': name, 'category': category}
	return render(request, 'user_register/wc.html', context)




