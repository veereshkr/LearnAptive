from django.shortcuts import render
from django.http import HttpResponse
def t_dashboard(request):
	if request.method == 'GET':
		# if 'dashem' in request.POST:
		# 	dash = request.POST['dashem']
		# 	context = {'days': dash}
			return render(request, 'tutor/t_dash.html')
	else:
		return HttpResponse("page not found")
# Create your views here.
