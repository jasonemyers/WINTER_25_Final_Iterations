from django.shortcuts import render

# Core Application Views
def index_veiw(request):
    # index Landing page
    return render(request, 'lickedy_split/index.html')

def home_view(request):
    # index Landing page
    return render(request, 'lickedy_split/home.html')

def login_view(request):
    # index Landing page
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
