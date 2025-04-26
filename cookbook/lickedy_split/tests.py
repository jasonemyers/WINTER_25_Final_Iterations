from django.test import TestCase
from django.core.exceptions import ValidationError
from .models import *
from datetime import date, timedelta
import tempfile
from django.core.files.uploadedfile import SimpleUploadedFile


class ModelTests(TestCase):
    def setUp(self):
        # Create test data available for all tests
        self.user = NewUser.objects.create_user(
            email='test@example.com',
            user_name='testuser',
            first_name='Test',
            password='testpass123',
            phone_number='+1234567890'
        )
        
        # Create superuser (employee)
        self.employee = NewUser.objects.create_superuser(
            email='employee@example.com',
            user_name='employee',
            first_name='Employee',
            phone_number='+1987654321',
            password='employeepass123',
            last_name='Smith',
            position='Developer',
            ssn='123-45-6789'
        )
        
        self.ingredient = Ingredient.objects.create(
            name='Tomato',
            category='veggies'
        )
        
        # Create a simple image for testing
        image = tempfile.NamedTemporaryFile(suffix=".jpg").name
        self.recipe = Recipe.objects.create(
            name='Test Recipe',
            description='Test description',
            instructions='Test instructions',
            notes='Test notes',
            preparation_time=10,
            cook_time=20,
            created_by=self.user,
            recipe_pic=SimpleUploadedFile(
                name='test_image.jpg',
                content=b'',
                content_type='image/jpeg'
            )
        )
        self.recipe.ingredients.add(self.ingredient, through_defaults={
            'amount': 2,
            'measurement': 'unit',
            'notes': 'Chopped'
        })

    # User Model Tests
    def test_create_regular_user(self):
        """Test creating a regular user is successful"""
        self.assertEqual(self.user.email, 'test@example.com')
        self.assertEqual(self.user.user_name, 'testuser')
        self.assertFalse(self.user.is_staff)
        self.assertFalse(self.user.is_superuser)
        
    def test_create_superuser(self):
        """Test creating a superuser (employee) is successful"""
        self.assertEqual(self.employee.email, 'employee@example.com')
        self.assertTrue(self.employee.is_staff)
        self.assertTrue(self.employee.is_superuser)
        self.assertEqual(self.employee.position, 'Developer')
        self.assertEqual(self.employee.ssn, '123-45-6789')
        
    def test_ssn_validation(self):
        """Test SSN validation works properly"""
        with self.assertRaises(ValidationError):
            # Attempt to create superuser with invalid SSN
            user = NewUser.objects.create_superuser(
                email='invalid@example.com',
                user_name='invalid',
                first_name='Invalid',
                phone_number='+1111111111',
                password='invalidpass123',
                last_name='User',
                position='Tester',
                ssn='invalid-ssn'  # Invalid format
            )
            user.full_clean()  # Triggers model validation
    
    # Recipe Model Tests
    def test_recipe_creation(self):
        """Test recipe creation"""
        self.assertEqual(self.recipe.name, 'Test Recipe')
        self.assertEqual(self.recipe.created_by, self.user)
        self.assertEqual(self.recipe.ingredients.count(), 1)
        
    def test_recipe_image_upload(self):
        """Test recipe image upload"""
        self.assertTrue(self.recipe.recipe_pic.name.startswith('recipe_pics/'))
        
    # Ingredient Model Tests
    def test_ingredient_creation(self):
        """Test ingredient creation"""
        self.assertEqual(self.ingredient.name, 'Tomato')
        self.assertEqual(self.ingredient.category, 'veggies')
        
    def test_ingredient_uniqueness(self):
        """Test ingredient names must be unique"""
        with self.assertRaises(Exception):
            Ingredient.objects.create(
                name='Tomato',  # Duplicate name
                category='veggies'
            )
    
    # Relationship Tests
    def test_recipe_ingredient_relationship(self):
        """Test recipe-ingredient through relationship"""
        recipe_ingredient = RecipeIngredient.objects.get(
            recipe=self.recipe,
            ingredient=self.ingredient
        )
        self.assertEqual(recipe_ingredient.amount, 2)
        self.assertEqual(recipe_ingredient.measurement, 'unit')
        
    def test_user_favorite_recipe(self):
        """Test user favorite recipe relationship"""
        favorite = UserFavoriteRecipe.objects.create(
            user=self.user,
            recipe=self.recipe
        )
        self.assertEqual(self.user.favorites.count(), 1)
        self.assertEqual(self.recipe.favorited_by.count(), 1)
        
    # Expiration Date Tests
    def test_user_ingredient_expiration(self):
        """Test user ingredient expiration date validation"""
        # Valid expiration date
        valid_ingredient = UserIngredient.objects.create(
            user=self.user,
            ingredient=self.ingredient,
            amount=1,
            measurement='unit',
            expires_at=date.today() + timedelta(days=7)
        )
        valid_ingredient.full_clean()
        
        # Invalid expiration date (past date)
        with self.assertRaises(ValidationError):
            invalid_ingredient = UserIngredient(
                user=self.user,
                ingredient=self.ingredient,
                amount=1,
                measurement='unit',
                expires_at=date.today() - timedelta(days=1)
            )
            invalid_ingredient.full_clean()