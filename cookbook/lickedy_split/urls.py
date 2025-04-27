from django.urls import path
from .views import *

urlpatterns = [
    path('', index_veiw, name='index'),
    path('home/', home_view, name='home'),
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
    path('forgetpassword/', forgetpassword_view, name='forgetpassword'),
    path('recipes/', recipes_view, name='recipes'),
    path('recipe_details/', recipe_details_view, name='recipe_details'),
    path('addrecipe/', addrecipe_view, name='addrecipe'),
    
    path('profile/', profile_view, name='profile'),
    path('about/', about_view, name='about'),
]