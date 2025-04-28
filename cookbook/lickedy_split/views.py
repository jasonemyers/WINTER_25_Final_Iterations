from django.shortcuts import render, redirect, get_object_or_404
from django.db import transaction
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import *
from django.contrib.auth.decorators import login_required
from .models import *

# Core Application Views
def index_veiw(request):
    # index Landing page
    return render(request, 'lickedy_split/index.html')

def home_view(request):
    # index Landing page
    return render(request, 'lickedy_split/home.html')

def login_view(request):
    """
    Custom email-based authentication view
    Handles:
    - POST requests for user login
    - Email/password validation
    - Session creation
    - Error messaging
    """
    if request.method == 'POST':
        # Get email from form (using 'username' field name for compatibility)
        email = request.POST.get('username')  # Compatible with authentication backend
        password = request.POST.get('password')
        
        # Authenticate with custom user model
        user = authenticate(request, username=email, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('profile')  # Redirect to home page
        else:
            messages.error(request, "Invalid email or password.")
    
    return render(request, 'lickedy_split/login.html')

def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            try:
                user = form.save()
                login(request, user)
                messages.success(request, "Registration successful! Welcome!")
                return redirect('home')
            except Exception:
                messages.error(request, "Account creation failed. Please try again.")
                return render(request, 'lickedy_split/register.html', {'form': form})
        else:
            # Show all form errors to user
            for field, errors in form.errors.items():
                for error in errors:
                    messages.error(request, f"{field.title()}: {error}")
            return render(request, 'lickedy_split/register.html', {'form': form})
    
    # GET request - show empty form
    return render(request, 'lickedy_split/register.html', {'form': CustomUserCreationForm()})


def recipes_view(request):
    # index Landing page
    return render(request, 'lickedy_split/recipes.html')

def recipe_details_view(request):
    # index Landing page
    return render(request, 'lickedy_split/recipe_details.html')

def addrecipe_view(request):
    if request.method == 'POST':
        recipe_form = RecipeForm(request.POST, request.FILES)
        if recipe_form.is_valid():
            try:
                with transaction.atomic():
                    recipe = recipe_form.save(commit=False)
                    recipe.created_by = request.user
                    recipe.save()
                    recipe_form.save_m2m()
                    
                    # Process ingredients
                    seen_ingredients = set()
                    index = 0
                    while True:
                        ingredient_key = f'ingredient_{index}'
                        new_ingredient_key = f'new_ingredient_{index}'
                        
                        if ingredient_key not in request.POST and new_ingredient_key not in request.POST:
                            break
                            
                        ingredient_id = request.POST.get(ingredient_key)
                        new_ingredient = request.POST.get(new_ingredient_key, '').strip()
                        
                        # Validate - only one should be provided
                        if ingredient_id and new_ingredient:
                            messages.error(request, f"Row {index+1}: Choose existing ingredient OR enter new one")
                            raise ValidationError("Ambiguous ingredient")
                            
                        if not ingredient_id and not new_ingredient:
                            messages.error(request, f"Row {index+1}: Ingredient required")
                            raise ValidationError("Missing ingredient")
                            
                        # Get or create ingredient
                        if ingredient_id:
                            ingredient = Ingredient.objects.get(id=ingredient_id)
                        else:
                            ingredient, created = Ingredient.objects.get_or_create(
                                name=new_ingredient
                            )
                            
                        # Check for duplicates
                        if ingredient.id in seen_ingredients:
                            messages.error(request, f"Duplicate ingredient: {ingredient.name}")
                            raise ValidationError("Duplicate ingredient")
                        seen_ingredients.add(ingredient.id)
                        
                        # Create relation
                        RecipeIngredient.objects.create(
                            recipe=recipe,
                            ingredient=ingredient,
                            amount=request.POST[f'amount_{index}'],
                            measurement=request.POST[f'measurement_{index}']
                        )
                        index += 1
                    
                    # Similar improvements for cuisines...
                    
                    messages.success(request, 'Recipe created!')
                    return redirect('recipe_detail', recipe.id)
                    
            except Exception as e:
                messages.error(request, f"Error: {str(e)}")
    
    # In your context, pass initial data properly:
    context = {
        'form': RecipeForm,
        'ingredients': Ingredient.objects.all(),
        'cuisines': Cuisine.objects.all(),
        'measurement_choices': MEASUREMENT_CHOICES,
        'initial_ingredients': [],  # Or actual data for edits
        'initial_cuisines': [],     # Or actual data for edits
    }
    return render(request, 'lickedy_split/addrecipe.html', context)


@login_required
def profile_view(request):
    user = request.user
    context = {
        'user_recipes': Recipe.objects.filter(created_by=user).prefetch_related('ingredient_relations__ingredient'),
        'favorite_recipes': Recipe.objects.filter(favorited_by__user=user).prefetch_related('ingredient_relations__ingredient'),
    }
    return render(request, 'lickedy_split/profile.html', context)

def about_view(request):
    # index Landing page
    return render(request, 'lickedy_split/about.html')
