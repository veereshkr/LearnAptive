from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     url(r'^blogs/', include('blogs.urls', namespace='blog')),
    url(r'^', include('user_register.urls', namespace='registration')),
    url(r'^', include('student.urls', namespace='students')),
    url(r'^', include('tutor.urls', namespace='tutors')),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url('', include('django.contrib.auth.urls', namespace='auth')),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
