from django.db import models
from datetime import datetime
from djangotoolbox.fields import ListField
class Timeline(models.Model):
	created_at = models.DateField()
	l_mins = models.IntegerField()
	l_num = models.IntegerField()
	attempted = models.IntegerField()
	subtimeline = ListField()
# Create your models here.
