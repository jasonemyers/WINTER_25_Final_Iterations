from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import CustomUserCreationForm
from django.contrib.auth.decorators import login_required
from .models import Recipe

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
    # index Landing page
    return render(request, 'lickedy_split/addrecipe.html')

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
