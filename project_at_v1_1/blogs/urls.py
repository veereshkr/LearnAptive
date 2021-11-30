from django.conf.urls import patterns, url
from blogs import views
urlpatterns = patterns('', 
	url(r'^$', views.blog, name="blog_post"),
	)