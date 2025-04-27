from django.urls import path
from .views import *

urlpatterns = [
    path('', index_veiw, name='index'),
    path('home/', home_view, name='home'),
    path('recipes/', recipes_view, name='recipes'),
    path('recipe/<int:recipe_id>/', recipe_details_view, name='recipe_details'),
    path('addrecipe/', addrecipe_view, name='addrecipe'),
    path('about/', about_view, name='about'),

    path('accounts/login/', login_view, name='login'),
    path('profile/', profile_view, name='profile'),
    path('register/', register_view, name='register'),

]