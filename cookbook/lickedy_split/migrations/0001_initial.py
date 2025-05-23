# Generated by Django 5.2 on 2025-04-25 13:20

import datetime
import django.core.validators
import django.db.models.deletion
import django.utils.timezone
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cuisine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('category', models.CharField(choices=[('veggies', 'Veggies'), ('fruits', 'Fruits'), ('meat', 'Meat'), ('poultry', 'Poultry'), ('fish', 'Fish'), ('seafood', 'Seafood'), ('grains', 'Grains'), ('dairy_eggs', 'Dairy & Eggs'), ('pantry', 'Pantry'), ('mushrooms', 'Mushrooms'), ('berries', 'Berries'), ('nuts_seeds', 'Nuts & Seeds'), ('cheese', 'Cheese'), ('alternatives', 'Dairy & Meat Alternatives'), ('herbs_spices', 'Herbs & Spices'), ('sweeteners', 'Sweeteners'), ('seasonings', 'Seasonings'), ('baking', 'Baking'), ('doughs', 'Doughs & Wrappers'), ('legumes', 'Legumes'), ('pasta', 'Pasta'), ('bread', 'Bread'), ('snacks', 'Crackers & Chips'), ('oils', 'Oils & Fats'), ('dressings', 'Dressings'), ('vinegars', 'Vinegars'), ('condiments', 'Condiments'), ('canned', 'Canned'), ('sauces', 'Sauces & Dips'), ('stock', 'Stock'), ('sweets', 'Sweets'), ('alcohol', 'Alcohol'), ('drinks', 'Drinks'), ('supplements', 'Supplements'), ('other', 'Other')], default='other', max_length=50)),
            ],
            options={
                'ordering': ['name'],
                'indexes': [models.Index(fields=['category'], name='ingredient_category_idx')],
            },
        ),
        migrations.CreateModel(
            name='NewUser',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('user_name', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=150)),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('phone_number', models.CharField(max_length=15, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'", regex='^\\+?1?\\d{9,15}$')])),
                ('last_name', models.CharField(blank=True, max_length=150, null=True)),
                ('about', models.TextField(blank=True, max_length=500, null=True, verbose_name='about')),
                ('user_pic', models.ImageField(blank=True, null=True, upload_to='user_pics/%Y/%m/%d/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png', 'jpeg']), django.core.validators.MaxValueValidator(5242880)])),
                ('position', models.CharField(blank=True, max_length=150, null=True)),
                ('ssn', models.CharField(blank=True, max_length=11, null=True, unique=True, validators=[django.core.validators.RegexValidator(message='SSN must be in format: XXX-XX-XXXX', regex='^\\d{3}-\\d{2}-\\d{4}$')])),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to.', related_name='newuser_groups', related_query_name='newuser', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='newuser_permissions', related_query_name='newuser', to='auth.permission', verbose_name='user permissions')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, max_length=500)),
                ('instructions', models.TextField()),
                ('notes', models.TextField(blank=True)),
                ('preparation_time', models.PositiveIntegerField(help_text='Preparation time in minutes')),
                ('cook_time', models.PositiveIntegerField(help_text='Cooking time in minutes')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('recipe_pic', models.ImageField(blank=True, null=True, upload_to='recipe_pics/%Y/%m/%d/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png', 'jpeg']), django.core.validators.MaxValueValidator(5242880)])),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_recipes', to='lickedy_split.newuser')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='RecipeCuisine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cuisine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recipe_relations', to='lickedy_split.cuisine')),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cuisine_relations', to='lickedy_split.recipe')),
            ],
        ),
        migrations.AddField(
            model_name='recipe',
            name='cuisines',
            field=models.ManyToManyField(related_name='recipes', through='lickedy_split.RecipeCuisine', to='lickedy_split.cuisine'),
        ),
        migrations.CreateModel(
            name='RecipeIngredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0)])),
                ('measurement', models.CharField(choices=[('tsp', 'Teaspoon'), ('tbsp', 'Tablespoon'), ('cup', 'Cup'), ('oz', 'Ounce'), ('lb', 'Pound'), ('g', 'Gram'), ('kg', 'Kilogram'), ('ml', 'Milliliter'), ('l', 'Liter'), ('unit', 'Unit'), ('pinch', 'Pinch'), ('dash', 'Dash'), ('slice', 'Slice')], default='unit', max_length=10)),
                ('notes', models.CharField(blank=True, max_length=100)),
                ('ingredient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lickedy_split.ingredient')),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ingredient_relations', to='lickedy_split.recipe')),
            ],
            options={
                'ordering': ['ingredient__name'],
            },
        ),
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.ManyToManyField(related_name='recipe_ingredients', through='lickedy_split.RecipeIngredient', to='lickedy_split.ingredient'),
        ),
        migrations.CreateModel(
            name='UserFavoriteRecipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('favorited_at', models.DateTimeField(auto_now_add=True)),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorited_by', to='lickedy_split.recipe')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorites', to='lickedy_split.newuser')),
            ],
        ),
        migrations.CreateModel(
            name='UserIngredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0), django.core.validators.MaxValueValidator(1000.0)])),
                ('measurement', models.CharField(choices=[('tsp', 'Teaspoon'), ('tbsp', 'Tablespoon'), ('cup', 'Cup'), ('oz', 'Ounce'), ('lb', 'Pound'), ('g', 'Gram'), ('kg', 'Kilogram'), ('ml', 'Milliliter'), ('l', 'Liter'), ('unit', 'Unit'), ('pinch', 'Pinch'), ('dash', 'Dash'), ('slice', 'Slice')], default='unit', max_length=10)),
                ('expires_at', models.DateField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(datetime.date(2025, 4, 25))])),
                ('ingredient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lickedy_split.ingredient')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pantry', to='lickedy_split.newuser')),
            ],
        ),
        migrations.AddIndex(
            model_name='newuser',
            index=models.Index(fields=['email'], name='user_email_idx'),
        ),
        migrations.AddIndex(
            model_name='newuser',
            index=models.Index(fields=['is_active'], name='user_active_idx'),
        ),
        migrations.AlterUniqueTogether(
            name='recipecuisine',
            unique_together={('recipe', 'cuisine')},
        ),
        migrations.AddIndex(
            model_name='recipe',
            index=models.Index(fields=['name'], name='recipe_name_idx'),
        ),
        migrations.AddIndex(
            model_name='recipe',
            index=models.Index(fields=['created_by', 'created_at'], name='user_recipe_idx'),
        ),
        migrations.AlterUniqueTogether(
            name='userfavoriterecipe',
            unique_together={('user', 'recipe')},
        ),
        migrations.AlterUniqueTogether(
            name='useringredient',
            unique_together={('user', 'ingredient')},
        ),
    ]
