# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'ParentRegistration.created_at'
        db.add_column(u'user_register_parentregistration', 'created_at',
                      self.gf('django.db.models.fields.DateField')(default=datetime.date.today),
                      keep_default=False)

        # Adding field 'Registration.created_at'
        db.add_column(u'user_register_registration', 'created_at',
                      self.gf('django.db.models.fields.DateField')(default=datetime.date.today),
                      keep_default=False)

        # Adding field 'StudentRegistration.created_at'
        db.add_column(u'user_register_studentregistration', 'created_at',
                      self.gf('django.db.models.fields.DateField')(default=datetime.date.today),
                      keep_default=False)

        # Adding field 'TutorRegistration.created_at'
        db.add_column(u'user_register_tutorregistration', 'created_at',
                      self.gf('django.db.models.fields.DateField')(default=datetime.date.today),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'ParentRegistration.created_at'
        db.delete_column(u'user_register_parentregistration', 'created_at')

        # Deleting field 'Registration.created_at'
        db.delete_column(u'user_register_registration', 'created_at')

        # Deleting field 'StudentRegistration.created_at'
        db.delete_column(u'user_register_studentregistration', 'created_at')

        # Deleting field 'TutorRegistration.created_at'
        db.delete_column(u'user_register_tutorregistration', 'created_at')


    models = {
        u'user_register.parentregistration': {
            'Meta': {'object_name': 'ParentRegistration'},
            'created_at': ('django.db.models.fields.DateField', [], {'default': 'datetime.date.today'}),
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'user_register.registration': {
            'Meta': {'object_name': 'Registration'},
            'created_at': ('django.db.models.fields.DateField', [], {'default': 'datetime.date.today'}),
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'user_register.studentregistration': {
            'Meta': {'object_name': 'StudentRegistration'},
            'created_at': ('django.db.models.fields.DateField', [], {'default': 'datetime.date.today'}),
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'user_register.tutorregistration': {
            'Meta': {'object_name': 'TutorRegistration'},
            'created_at': ('django.db.models.fields.DateField', [], {'default': 'datetime.date.today'}),
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        }
    }

    complete_apps = ['user_register']