from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django import forms
from django.utils.translation import gettext_lazy as _
from .models import *
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

class CustomUserCreationForm(UserCreationForm):
    """
    Custom form for creating users in admin with password validation
    Inherits from UserCreationForm instead of ModelForm
    """
    class Meta:
        model = NewUser
        fields = ('email', 'user_name', 'first_name', 'phone_number')

    def clean(self):
        cleaned_data = super().clean()
        if cleaned_data.get('is_superuser'):
            required_fields = {
                'last_name': 'Last name is required for superusers',
                'position': 'Position is required for superusers',
                'ssn': 'SSN is required for superusers'
            }
            for field, error_msg in required_fields.items():
                if not cleaned_data.get(field):
                    self.add_error(field, error_msg)
        return cleaned_data

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = NewUser
        fields = '__all__'

class CustomUserAdmin(UserAdmin):
    model = NewUser
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm  # Add custom validation
    list_display = ('email', 'user_name', 'first_name', 'is_staff', 'is_active', 'created_at')
    list_filter = ('is_staff', 'is_active', 'is_superuser', 'position')
    search_fields = ('email', 'user_name', 'first_name', 'last_name')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)
    filter_horizontal = ('groups', 'user_permissions',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': (
            'user_name', 
            'first_name',
            'last_name',
            'phone_number',
            'user_pic',
            'about'
        )}),
        (_('Employment Info'), {
            'fields': (
                'position',
                'ssn',
            ),
            'classes': ('collapse',),
            'description': _('Required for superusers')
        }),
        (_('Permissions'), {
            'fields': (
                'is_active',
                'is_staff',
                'is_superuser',
                'groups',
                'user_permissions'
            ),
        }),
        (_('Important Dates'), {
            'fields': ('created_at',),
            'classes': ('collapse',)
        }),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email',
                'user_name',
                'first_name',
                'phone_number',
                'password1',
                'password2',
            )
        }),
        (_('Superuser Requirements'), {
            'classes': ('collapse',),
            'fields': (
                'last_name',
                'position',
                'ssn',
                'is_staff',
                'is_active',
                'is_superuser'
            )
        }),
    )

class RecipeIngredientInline(admin.TabularInline):
    model = RecipeIngredient
    extra = 1
    raw_id_fields = ('ingredient',)
    min_num = 1

class RecipeCuisineInline(admin.TabularInline):
    model = RecipeCuisine
    extra = 1
    autocomplete_fields = ['cuisine']

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_by', 'preparation_time', 'cook_time', 'created_at')
    list_filter = ('created_at', 'cuisines')
    search_fields = ('name', 'description', 'ingredients__name')
    raw_id_fields = ('created_by',)
    inlines = [RecipeIngredientInline, RecipeCuisineInline]
    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        (None, {'fields': ('name', 'created_by')}),
        (_('Content'), {'fields': (
            'description',
            'instructions',
            'notes',
            'recipe_pic'
        )}),
        (_('Timing'), {'fields': (
            'preparation_time',
            'cook_time'
        )}),
        (_('Metadata'), {
            'classes': ('collapse',),
            'fields': ('created_at', 'updated_at')
        }),
    )

class CuisineAdmin(admin.ModelAdmin):
    list_display = ('name', 'recipe_count')
    search_fields = ('name',)

    def recipe_count(self, obj):
        return obj.recipe_relations.count()  # Fixed related name

class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'recipe_count')
    list_filter = ('category',)
    search_fields = ('name',)
    # Removed invalid prepopulated_fields

    def recipe_count(self, obj):
        return obj.recipe_ingredients.count()


class UserFavoriteRecipeAdmin(admin.ModelAdmin):
    list_display = ('user', 'recipe', 'favorited_at')
    raw_id_fields = ('user', 'recipe')
    list_filter = ('favorited_at',)
    readonly_fields = ('favorited_at',)

class UserIngredientAdmin(admin.ModelAdmin):
    list_display = ('user', 'ingredient', 'amount', 'measurement', 'expires_at')
    list_filter = ('measurement', 'ingredient__category')
    search_fields = ('ingredient__name', 'user__user_name')
    raw_id_fields = ('user', 'ingredient')

admin.site.register(NewUser, CustomUserAdmin)
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Ingredient, IngredientAdmin)
admin.site.register(Cuisine, CuisineAdmin)
admin.site.register(UserFavoriteRecipe, UserFavoriteRecipeAdmin)
admin.site.register(UserIngredient, UserIngredientAdmin)