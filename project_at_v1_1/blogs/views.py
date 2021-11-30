from django.shortcuts import render

def blog(request):
	return render(request, 'blogs/blog.html')

# Create your views here.
