# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Registration'
        db.create_table(u'user_register_registration', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('email', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('password', self.gf('django.db.models.fields.CharField')(max_length=50)),
        ))
        db.send_create_signal(u'user_register', ['Registration'])

        # Adding model 'StudentRegistration'
        db.create_table(u'user_register_studentregistration', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('email', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('password', self.gf('django.db.models.fields.CharField')(max_length=50)),
        ))
        db.send_create_signal(u'user_register', ['StudentRegistration'])

        # Adding model 'TutorRegistration'
        db.create_table(u'user_register_tutorregistration', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('email', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('password', self.gf('django.db.models.fields.CharField')(max_length=50)),
        ))
        db.send_create_signal(u'user_register', ['TutorRegistration'])

        # Adding model 'ParentRegistration'
        db.create_table(u'user_register_parentregistration', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('email', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('password', self.gf('django.db.models.fields.CharField')(max_length=50)),
        ))
        db.send_create_signal(u'user_register', ['ParentRegistration'])


    def backwards(self, orm):
        # Deleting model 'Registration'
        db.delete_table(u'user_register_registration')

        # Deleting model 'StudentRegistration'
        db.delete_table(u'user_register_studentregistration')

        # Deleting model 'TutorRegistration'
        db.delete_table(u'user_register_tutorregistration')

        # Deleting model 'ParentRegistration'
        db.delete_table(u'user_register_parentregistration')


    models = {
        u'user_register.parentregistration': {
            'Meta': {'object_name': 'ParentRegistration'},
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'user_register.registration': {
            'Meta': {'object_name': 'Registration'},
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'user_register.studentregistration': {
            'Meta': {'object_name': 'StudentRegistration'},
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'user_register.tutorregistration': {
            'Meta': {'object_name': 'TutorRegistration'},
            'email': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        }
    }

    complete_apps = ['user_register']