from django.conf.urls import patterns, url
from tutor import views
urlpatterns = patterns('', 
	url(r'^t-dashboard/$', views.t_dashboard, name="tdash"),
	)