from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.core.validators import (
    MinValueValidator,
    MaxValueValidator,
    FileExtensionValidator,
    RegexValidator
)
import uuid
from django.core.exceptions import ValidationError
from datetime import date


class CustomAccountManager(BaseUserManager):
    """
    Custom user manager that handles both regular users and employees (superusers).
    """
    def create_user(self, email, user_name, first_name, password, phone_number, **other_fields):
        if not email:
            raise ValueError(_('Users must have an email address'))
        if not phone_number:
            raise ValueError(_('Users must have a phone number'))

        email = self.normalize_email(email)
        user = self.model(
            email=email,
            user_name=user_name,
            first_name=first_name,
            phone_number=phone_number,
            **other_fields
        )
        user.set_password(password)
        user.save()
        return user

    def create_employee(self, email, user_name, first_name, password, phone_number, 
                       last_name=None, about=None, position=None, ssn=None, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        
        if not position:
            raise ValueError(_('Employees must have a position'))
        if not ssn:
            raise ValueError(_('Employees must have an SSN'))
        
        return self.create_user(
            email=email,
            user_name=user_name,
            first_name=first_name,
            password=password,
            phone_number=phone_number,
            last_name=last_name,
            about=about,
            position=position,
            ssn=ssn,
            **other_fields
        )


class NewUser(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150)
    password = models.CharField(_('password'), max_length=128)
    phone_number = models.CharField(
        max_length=15,
        validators=[
            RegexValidator(
                regex=r'^\+?1?\d{9,15}$',
                message="Phone number must be entered in the format: '+999999999'"
            )
        ]
    )
    last_name = models.CharField(max_length=150, blank=True, null=True)
    about = models.TextField(_('about'), max_length=500, blank=True, null=True)
    user_pic = models.ImageField(
        upload_to='user_pics/%Y/%m/%d/',
        blank=True,
        null=True,
        validators=[
            FileExtensionValidator(allowed_extensions=['jpg', 'png', 'jpeg']),
            MaxValueValidator(5 * 1024 * 1024)
        ]
    )
    position = models.CharField(max_length=150, blank=True, null=True)
    ssn = models.CharField(
        max_length=11,
        blank=True,
        null=True,
        unique=True,
        validators=[
            RegexValidator(
                regex=r'^\d{3}-\d{2}-\d{4}$',
                message="SSN must be in format: XXX-XX-XXXX"
            )
        ]
    )
    created_at = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name', 'phone_number']

    # Permission system overrides
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name="newuser_groups",
        related_query_name="newuser",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="newuser_permissions",
        related_query_name="newuser",
    )

    def __str__(self):
        return f"{self.user_name} ({'Employee' if self.is_superuser else 'User'})"

    def clean(self):
        if self.is_superuser:
            if not self.position:
                raise ValidationError({'position': 'Position is required for employees'})
            if not self.ssn:
                raise ValidationError({'ssn': 'SSN is required for employees'})
            if not self.last_name:
                raise ValidationError({'last_name': 'Last name is required for employees'})

    def save(self, *args, **kwargs):
        if self.is_superuser:
            self.is_staff = True
        self.full_clean()
        super().save(*args, **kwargs)

    class Meta:
        indexes = [
            models.Index(fields=['email'], name='user_email_idx'),
            models.Index(fields=['is_active'], name='user_active_idx'),
        ]


INGREDIENT_CATEGORIES = [
    ('veggies', 'Veggies'),
    ('fruits', 'Fruits'),
    ('meat', 'Meat'),
    ('poultry', 'Poultry'),
    ('fish', 'Fish'),
    ('seafood', 'Seafood'),
    ('grains', 'Grains'),
    ('dairy_eggs', 'Dairy & Eggs'),
    ('pantry', 'Pantry'),
    ('mushrooms', 'Mushrooms'),
    ('berries', 'Berries'),
    ('nuts_seeds', 'Nuts & Seeds'),
    ('cheese', 'Cheese'),
    ('alternatives', 'Dairy & Meat Alternatives'),
    ('herbs_spices', 'Herbs & Spices'),
    ('sweeteners', 'Sweeteners'),
    ('seasonings', 'Seasonings'),
    ('baking', 'Baking'),
    ('doughs', 'Doughs & Wrappers'),
    ('legumes', 'Legumes'),
    ('pasta', 'Pasta'),
    ('bread', 'Bread'),
    ('snacks', 'Crackers & Chips'),
    ('oils', 'Oils & Fats'),
    ('dressings', 'Dressings'),
    ('vinegars', 'Vinegars'),
    ('condiments', 'Condiments'),
    ('canned', 'Canned'),
    ('sauces', 'Sauces & Dips'),
    ('stock', 'Stock'),
    ('sweets', 'Sweets'),
    ('alcohol', 'Alcohol'),
    ('drinks', 'Drinks'),
    ('supplements', 'Supplements'),
    ('other', 'Other')
]

class Ingredient(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=50, choices=INGREDIENT_CATEGORIES, default='other')

    class Meta:
        ordering = ['name']
        indexes = [
            models.Index(fields=['category'], name='ingredient_category_idx'),
        ]

    def __str__(self):
        return self.name


class Cuisine(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=500, blank=True)
    instructions = models.TextField()
    notes = models.TextField(blank=True)
    preparation_time = models.PositiveIntegerField(help_text="Preparation time in minutes")
    cook_time = models.PositiveIntegerField(help_text="Cooking time in minutes")
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    recipe_pic = models.ImageField(
        upload_to='recipe_pics/%Y/%m/%d/',
        blank=True,
        null=True,
        validators=[
            FileExtensionValidator(allowed_extensions=['jpg', 'png', 'jpeg']),
            MaxValueValidator(5 * 1024 * 1024)
        ]
    )
    created_by = models.ForeignKey(
        NewUser,
        on_delete=models.CASCADE,
        related_name='created_recipes'
    )
    cuisines = models.ManyToManyField(
        Cuisine,
        through='RecipeCuisine',
        related_name='recipes'
    )
    ingredients = models.ManyToManyField(
        Ingredient,
        through='RecipeIngredient',
        related_name='recipe_ingredients'
    )

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['name'], name='recipe_name_idx'),
            models.Index(fields=['created_by', 'created_at'], name='user_recipe_idx'),
        ]

    def __str__(self):
        return self.name


class RecipeCuisine(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='cuisine_relations')
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE, related_name='recipe_relations')

    class Meta:
        unique_together = ('recipe', 'cuisine')

    def __str__(self):
        return f"{self.recipe.name} - {self.cuisine.name}"


class UserFavoriteRecipe(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, related_name='favorites')
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='favorited_by')
    favorited_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['user', 'recipe']

    def __str__(self):
        return f"{self.user} favorites {self.recipe}"


MEASUREMENT_CHOICES = [
    ('tsp', 'Teaspoon'),
    ('tbsp', 'Tablespoon'),
    ('cup', 'Cup'),
    ('oz', 'Ounce'),
    ('lb', 'Pound'),
    ('g', 'Gram'),
    ('kg', 'Kilogram'),
    ('ml', 'Milliliter'),
    ('l', 'Liter'),
    ('unit', 'Unit'),
    ('pinch', 'Pinch'),
    ('dash', 'Dash'),
    ('slice', 'Slice'),
]


class UserIngredient(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, related_name='pantry')
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.FloatField(
        validators=[
            MinValueValidator(0.0),
            MaxValueValidator(1000.0)
        ]
    )
    measurement = models.CharField(max_length=10, choices=MEASUREMENT_CHOICES, default='unit')
    expires_at = models.DateField(
        validators=[MinValueValidator(date.today())],
        null=True,
        blank=True
    )

    class Meta:
        unique_together = ['user', 'ingredient']

    def __str__(self):
        return f"{self.amount} {self.get_measurement_display()} {self.ingredient}"


class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name='ingredient_relations'
    )
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.FloatField(validators=[MinValueValidator(0.0)])
    measurement = models.CharField(max_length=10, choices=MEASUREMENT_CHOICES, default='unit')
    notes = models.CharField(max_length=100, blank=True)

    class Meta:
        ordering = ['ingredient__name']

    def __str__(self):
        return f"{self.amount} {self.get_measurement_display()} {self.ingredient.name}"