from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.core.validators import RegexValidator
from .models import NewUser
import logging

logger = logging.getLogger(__name__)

class CustomUserCreationForm(UserCreationForm):
    phone_number = forms.CharField(
        validators=[
            RegexValidator(
                regex=r'^\d{3}-\d{3}-\d{4}$',
                message="Phone must be in XXX-XXX-XXXX format"
            )
        ],
        widget=forms.TextInput(attrs={
            'pattern': r'\d{3}-\d{3}-\d{4}',
            'title': 'XXX-XXX-XXXX format',
            'class': 'form-input'
        })
    )

    terms_agreed = forms.BooleanField(
        label="I agree to the terms",
        required=True,
        error_messages={'required': 'You must accept the terms'}
    )

    class Meta:
        model = NewUser
        fields = ('user_name', 'first_name', 'email', 'phone_number', 
                  'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data['email'].lower()
        if NewUser.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError("Email already registered")
        return email

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['password2'].label = "Confirm Password"
        self.fields['password1'].help_text = "Minimum 8 characters with numbers/symbols"