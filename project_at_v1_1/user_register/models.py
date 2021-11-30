from django.db import models
import datetime
import time
import uuid
import hashlib
from django.utils import timezone
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from student.storage import OverwriteStorage
# class User_reg(models.Model):
# 	name = models.CharField(max_length=50)
# 	email = models.CharField(max_length=50)
# 	password = models.CharField(max_length=50)
# 	utype = models.CharField(max_length=2)
# 	#created_at = models.DateField(default=date.today)
# 	class Meta:
# 		abstract = True
class RegistrationManager(BaseUserManager):
    def create_user(self, email, username, utype="NA", zone=0, is_active=True, created_at=timezone.now(), password=None, g_signup=False, key="", expiry=timezone.now()):
        """
        Creates and saves a User with the given email, name, utype, timezone, active and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        time = timezone.now()
        time = time.strftime('%m%d%Y-%H%M%S%f')
        hashed_time = hashlib.sha256(time).hexdigest()
        a_key = str(uuid.uuid4())
        a_key = ''.join(a_key.split('-')) + hashed_time
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            utype=utype,
            is_active=is_active,
            created_at = created_at,
            zone = zone,
            g_signup = g_signup,
            key = a_key,
            expiry = expiry
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

class Registration(AbstractBaseUser):
	username = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	#password = models.CharField(max_length=50)
	is_active = models.BooleanField()
	utype = models.CharField(max_length=2)
	created_at = models.DateTimeField()
	zone = models.IntegerField()
	g_signup = models.BooleanField()
	key = models.TextField()
	expiry = models.DateTimeField()
	photo = models.FileField(upload_to='photos', storage=OverwriteStorage())

	objects = RegistrationManager()
	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = ['utype', 'is_active', 'created_at', 'zone', 'g_signup', 'key', 'expiry']

	def __unicode__(self):
		return self.username

# class StudentRegistration(User_reg):
# 	def __unicode__(self):
# 		return self.name

# class TutorRegistration(User_reg):
# 	def __unicode__(self):
# 		return self.name

# class ParentRegistration(User_reg):
# 	def __unicode__(self):
# 		return self.name
# Create your models here.
