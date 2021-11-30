"""
Django settings for project_at_v1_1 project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_DIRS = (os.path.join(BASE_DIR, 'templates'),)


#STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'),)
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1rz!v!c99!$k3l6n_(nm6zmk2h@g8-0%)9k43j#xqq877tl@ll'

SOCIAL_AUTH_LOGIN_REDIRECT_URL = '/welcome/choose/'
SOCIAL_AUTH_LOGIN_ERROR_URL = '/'

SOCIAL_AUTH_FACEBOOK_KEY = '689097967834108'
SOCIAL_AUTH_FACEBOOK_SECRET = '91d86b5515ce556c1725aec53abf271b'
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_EXTRA_DATA = ['first_name', 'last_name', 'name', 'gender', 'birthdate']

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '408602606877-er0499lcc3oiq1hopu3agko4mnh51rka.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'xHUFmcytz1CmFIW5XGGsNGXT'
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ['first_name', 'last_name', 'name', 'gender']

SOCIAL_AUTH_LINKEDIN_KEY = '75g74di9rt9llw'
SOCIAL_AUTH_LINKEDIN_SECRET = 'SWHgjTjt3fg7nML5'
SOCIAL_AUTH_LINKEDIN_SCOPE = ['r_basicprofile', 'r_emailaddress']
SOCIAL_AUTH_LINKEDIN_FIELD_SELECTORS = ['email-address']
# SOCIAL_AUTH_LINKEDIN_SCOPE = ['r_basicprofile', 'r_emailaddress', ' r_fullprofile',  'r_contactinfo']
# SECURITY WARNING: don't run with debug turned on in production!
SOCIAL_AUTH_USER_MODEL = 'user_register.Registration'
AUTH_USER_MODEL = 'user_register.Registration'
SOCIAL_AUTH_INACTIVE_USER_URL = '/'
DEBUG = True
TEMPLATE_DEBUG = True

ALLOWED_HOSTS = ['*']
MANDRILL_API_KEY = 'v6mLig499L56iLFwfo-OvQ'
EMAIL_BACKEND = "djrill.mail.backends.djrill.DjrillBackend"
# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'social.apps.django_app.default',
    'user_register',
    'student',
    'tutor',
    'djrill',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'social.apps.django_app.middleware.SocialAuthExceptionMiddleware',
)

TEMPLATE_CONTEXT_PROCESSORS = (
   'django.contrib.auth.context_processors.auth',
   'django.core.context_processors.debug',
   'django.core.context_processors.i18n',
   'django.core.context_processors.media',
   'django.core.context_processors.static',
   'django.core.context_processors.tz',
   'django.contrib.messages.context_processors.messages',
   'social.apps.django_app.context_processors.backends',
   'social.apps.django_app.context_processors.login_redirect',
)


AUTHENTICATION_BACKENDS = (
   'social.backends.facebook.FacebookOAuth2',
   'social.backends.google.GoogleOAuth2',
   'social.backends.twitter.TwitterOAuth',
   'social.backends.linkedin.LinkedinOAuth',
   'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_PIPELINE = (
'social.pipeline.social_auth.social_details',
'social.pipeline.social_auth.social_uid',
'social.pipeline.social_auth.auth_allowed',
'social.pipeline.social_auth.social_user',
#'social.pipeline.user.get_username',
'social.pipeline.mail.mail_validation',
'user_register.mailassoc.mail_assoc.associate_by_active_email', #Custom pipeline to link active users email
'social.pipeline.user.create_user',
'social.pipeline.social_auth.associate_user',
'social.pipeline.social_auth.load_extra_data',
'social.pipeline.user.user_details',
#'social.pipeline.debug.debug'
)

ROOT_URLCONF = 'project_at_v1_1.urls'

WSGI_APPLICATION = 'project_at_v1_1.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.postgresql_psycopg2',
    #     'NAME': 'AT_V1_1',
    #     'USER': 'postgres',
    #     'PASSWORD': 'postgres',
    #     'HOST': 'ds063180.mongolab.com',
    #     'PORT': '63180',
    # }
}
import dj_database_url
DATABASES['default'] = dj_database_url.config()
DATABASES['default']['ENGINE'] = 'django_mongodb_engine'
# DATABASES['default']['NAME'] = os.environ['NAME']
# DATABASES['default']['USER'] = os.environ['USER']
# DATABASES['default']['PASSWORD'] = os.environ['PASSWORD']
# DATABASES['default']['HOST'] = 'ds063180.mongolab.com'
# DATABASES['default']['PORT'] = '63180'
DATABASES['default']['NAME'] = 'at_v1_1'
DATABASES['default']['USER'] = 'mongolab'
DATABASES['default']['PASSWORD'] = 'mongolab'
DATABASES['default']['HOST'] = 'ds061370.mongolab.com'
DATABASES['default']['PORT'] = '61370'



# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = 'staticfiles'
MEDIA_ROOT = 'media'
MEDIA_URL = '/profile_pic/'
