from django.conf.urls import patterns, url
from user_register import views
urlpatterns = patterns('', 
	url(r'^$', views.home, name="home"),
	url(r'^welcome/$', views.welcome, name="welcome"),
	url(r'^welcome/choose/$', views.wc, name="wchoose"),
	)