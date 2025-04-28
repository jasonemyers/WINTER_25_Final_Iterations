from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.core.validators import RegexValidator
from .models import NewUser, Recipe, Ingredient, MEASUREMENT_CHOICES, Cuisine
import logging


logger = logging.getLogger(__name__)

class CustomUserCreationForm(UserCreationForm):
    phone_number = forms.CharField(
        validators=[
            RegexValidator(
                regex=r'^\d{9,15}$',
                message="Phone number must contain 9-15 digits only"
            )
        ],
        widget=forms.TextInput(attrs={
            'pattern': r'\d{9,15}',
            'title': 'Enter 9-15 digits (no symbols)',
            'class': 'form-input',
            'placeholder': '2485551234'
        })
    )

    terms_agreed = forms.BooleanField(
        label="I agree to the terms",
        required=True,
        error_messages={'required': 'You must accept the terms'}
    )

    class Meta:
        model = NewUser
        fields = ('username', 'first_name', 'email', 'phone_number', 
                  'password1', 'password2', 'terms_agreed')

    def clean_email(self):
        email = self.cleaned_data['email'].lower()
        if NewUser.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError("Email already registered")
        return email

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['phone_number'].help_text = self.Meta.model._meta.get_field('phone_number').help_text
        self.fields['password2'].label = "Confirm Password"
        self.fields['password1'].help_text = "Minimum 8 characters with numbers/symbols"

class RecipeForm(forms.ModelForm):
    class Meta:
        model = Recipe
        fields = [
            'name', 'description', 'instructions', 'notes',
            'preparation_time', 'cook_time', 'recipe_pic'
        ]
        widgets = {
            'preparation_time': forms.NumberInput(attrs={'min': 0}),
            'cook_time': forms.NumberInput(attrs={'min': 0}),
        }

class RecipeIngredientForm(forms.Form):
    ingredient = forms.ModelChoiceField(
        queryset=Ingredient.objects.all(),
        required=False
    )
    new_ingredient = forms.CharField(required=False)
    amount = forms.FloatField(min_value=0)
    measurement = forms.ChoiceField(choices=MEASUREMENT_CHOICES)

class RecipeCuisineForm(forms.Form):
    cuisine = forms.ModelChoiceField(
        queryset=Cuisine.objects.all(),
        required=True
    )