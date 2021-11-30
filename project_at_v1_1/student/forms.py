from django import forms
class DocumentForm(forms.Form):
	docfile = forms.FileField(
	label='Personalize your account'
	)