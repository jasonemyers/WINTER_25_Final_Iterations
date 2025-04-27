from django.urls import path
from .views import *

urlpatterns = [
    path('', index_veiw, name='index'),
    path('home/', home_view, name='home'),
    path('recipes/', recipes_view, name='recipes'),
    path('recipe_details/', recipe_details_view, name='recipe_details'),
    path('addrecipe/', addrecipe_view, name='addrecipe'),
    
    path('about/', about_view, name='about'),

    path('accounts/login/', login_view, name='login'),
    path('accounts/logout/', login_view, name='logout'),

    path('forgetpassword/', forgetpassword_view, name='forgetpassword'),
    path('accounts/password_change/', forgetpassword_view, name='password_change'),
    path('accounts/password_change/done/', login_view, name='password_change_done'),

    path('accounts/password_reset/', login_view, name='password_reset'),
    path('accounts/password_reset/done/', login_view, name='password_reset_done'),

    path('accounts/reset/<uidb64>/<token>/ ', login_view, name='password_reset_confirm'),
    path('accounts/reset/done/ ', login_view, name='reset_done'),

    path('profile/', profile_view, name='profile'),
    path('register/', register_view, name='register'),

]