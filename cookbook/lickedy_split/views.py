from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages


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
    # index Landing page
    return render(request, 'lickedy_split/register.html')

def forgetpassword_view(request):
    # index Landing page
    return render(request, 'lickedy_split/forgetpassword.html')

def recipes_view(request):
    # index Landing page
    return render(request, 'lickedy_split/recipes.html')

def recipe_details_view(request):
    # index Landing page
    return render(request, 'lickedy_split/recipe_details.html')

def addrecipe_view(request):
    # index Landing page
    return render(request, 'lickedy_split/addrecipe.html')

def profile_view(request):
    # index Landing page
    return render(request, 'lickedy_split/profile.html')

def about_view(request):
    # index Landing page
    return render(request, 'lickedy_split/about.html')
