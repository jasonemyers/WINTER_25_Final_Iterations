// recipeFilter.js

// This script powers dynamic filtering, ingredient/cuisine selection, dropdown toggling, and recipe rendering

document.addEventListener("DOMContentLoaded", function () {

    // ========== USER SELECTION STATE ==========
    let selectedCuisine = '';           // User-selected cuisine
    let selectedIngredients = [];       // Array of selected ingredient names
    let searchQuery = '';               // Search term entered by user

    // ========== DROPDOWN MAPPINGS FOR INGREDIENT CATEGORIES ==========
    const dropdownMappings = {
        veggiesDropdown: {
            listId: 'veggiesList',
            ingredients: ['Carrot', 'Spinach', 'Broccoli', 'Lettuce', 'Cucumber', 'Cheese', 'Potato', 'Tomato', 'Pepper', 'Zucchini', 'Mushroom', 'Eggplant', 'Onion', 'Garlic', 'Pumpkin']
        },
        fruitsDropdown: {
            listId: 'fruitsList',
            ingredients: ['Apple', 'Banana', 'Strawberry', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Blueberry', 'Pear', 'Peach']
        },
        proteinDropdown: {
            listId: 'proteinList',
            ingredients: ['Chicken', 'Beef', 'Tofu', 'Lentils', 'Eggs', 'Beans', 'Turkey', 'Pork', 'Tempeh', 'Fish']
        },
        grainsDropdown: {
            listId: 'grainsList',
            ingredients: ['Rice', 'Quinoa', 'Oats', 'Barley', 'Couscous', 'Bread', 'Pasta', 'Tortilla', 'Millet', 'Corn']
        },
        dairyDropdown: {
            listId: 'dairiesList',
            ingredients: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream', 'Almond Milk', 'Soy Milk', 'Coconut Milk', 'Ghee', 'Kefir']
        },
        nutsSeedsDropdown: {
            listId: 'nutsSeedsList',
            ingredients: ['Almonds', 'Peanuts', 'Chia Seeds', 'Flaxseeds', 'Pumpkin Seeds', 'Walnuts', 'Cashews', 'Hazelnuts', 'Sunflower Seeds', 'Pecans']
        }
    };

    // ========== POPULATE ALL INGREDIENT BUTTONS ==========
    function loadAllIngredientButtons() {
        Object.entries(dropdownMappings).forEach(([dropdownId, config]) => {
            const container = document.getElementById(config.listId);
            if (!container) return;

            container.innerHTML = ''; // Clear any previous content

            config.ingredients.forEach(ingredient => {
                const btn = createIngredientButton(ingredient);
                container.appendChild(btn);
            });

            // Bind click for toggling each dropdown
            const button = document.getElementById(dropdownId);
            if (button) {
                button.addEventListener('click', () => toggleDropdown(config.listId));
            }
        });
    }

    // Create a styled ingredient button with toggle behavior
    function createIngredientButton(ingredient) {
        const button = document.createElement('button');
        button.textContent = ingredient;
        button.classList.add('ingredient-btn');
        button.addEventListener('click', function () {
            toggleIngredient(ingredient);
        });
        return button;
    }

    // Add/remove ingredient from list and update UI highlight
    function toggleIngredient(ingredient) {
        const index = selectedIngredients.indexOf(ingredient);
        if (index === -1) {
            selectedIngredients.push(ingredient);
        } else {
            selectedIngredients.splice(index, 1);
        }

        document.querySelectorAll('.ingredient-btn').forEach(button => {
            if (button.textContent === ingredient) {
                button.classList.toggle('active');
            }
        });
    }

    // Toggle dropdown list display
    function toggleDropdown(listId) {
        const list = document.getElementById(listId);
        if (list) {
            list.style.display = list.style.display === 'block' ? 'none' : 'block';
        }
    }

    // ========== CATEGORY SECTION TOGGLING ==========
    function showCategory(categoryId) {
        const categories = ['ingredientsCategory', 'cuisinesCategory'];
        categories.forEach(id => {
            const category = document.getElementById(id);
            if (category) {
                if (id === categoryId && category.style.display === 'block') {
                    category.style.display = 'none'; // Close if already open
                } else {
                    category.style.display = (id === categoryId) ? 'block' : 'none'; // Open selected
                }
            }
        });
    }

    // Hook up buttons that toggle main ingredient/cuisine sections
    document.getElementById('ingredientButton').addEventListener('click', () => {
        showCategory('ingredientsCategory');
    });

    document.getElementById('cuisinesButton').addEventListener('click', () => {
        showCategory('cuisinesCategory');
    });

    // ========== CUISINE SELECTION LOGIC ==========
    const cuisineButtons = document.querySelectorAll('.cuisineBtn');
    cuisineButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cuisine = this.textContent;
            selectedCuisine = (selectedCuisine === cuisine) ? '' : cuisine; // Toggle selection
            updateActiveCuisine(); // Highlight current selection
        });
    });

    function updateActiveCuisine() {
        cuisineButtons.forEach(btn => {
            btn.classList.toggle('active', btn.textContent === selectedCuisine);
        });
    }

    // ========== SEARCH FUNCTIONALITY ==========
    document.querySelector('.searchButton').addEventListener('click', function () {
        searchQuery = document.querySelector('.searchInput').value.trim().toLowerCase();
        hideCategoriesAndDisplayRecipes();
    });

    document.querySelector('.searchInput').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            searchQuery = document.querySelector('.searchInput').value.trim().toLowerCase();
            hideCategoriesAndDisplayRecipes();
        }
    });

    function hideCategoriesAndDisplayRecipes() {
        const categories = ['ingredientsCategory', 'cuisinesCategory'];
        categories.forEach(id => {
            const category = document.getElementById(id);
            if (category) category.style.display = 'none';
        });

        filterRecipes(); // Apply filters to recipes
    }

    // ========== FILTERING LOGIC ==========
    function filterRecipes() {
        const recipeCards = document.querySelectorAll('.recipe-card');
        let filteredRecipes = [];
        let matchesFound = false;

        if (selectedCuisine === '' && selectedIngredients.length === 0 && searchQuery === '') {
            recipeCards.forEach(card => card.style.display = 'none');
            return;
        }

        recipeCards.forEach(card => {
            const recipeName = card.querySelector('h4').textContent.toLowerCase();
            const recipeDescription = card.querySelector('.recipe-description').textContent.toLowerCase();
            const recipeIngredients = card.dataset.ingredients.toLowerCase();
            const recipeCuisines = card.dataset.cuisines.toLowerCase();

            const matchesCuisine = selectedCuisine ? recipeCuisines.includes(selectedCuisine.toLowerCase()) : true;
            const matchesIngredients = selectedIngredients.every(ingredient => recipeIngredients.includes(ingredient.toLowerCase()));
            const matchesSearch = searchQuery ?
                (recipeName.includes(searchQuery) ||
                    recipeDescription.includes(searchQuery) ||
                    recipeIngredients.includes(searchQuery) ||
                    recipeCuisines.includes(searchQuery))
                : true;

            if (matchesCuisine && matchesIngredients && matchesSearch) {
                filteredRecipes.push(card);
                matchesFound = true;
            } else {
                card.style.display = 'none';
            }
        });

        matchesFound ? hideNoResultsMessage() : showNoResultsMessage();
        displayFilteredRecipes(filteredRecipes);
    }

    function displayFilteredRecipes(filteredRecipes) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        recipeCards.forEach(card => card.style.display = 'none');
        filteredRecipes.forEach(card => card.style.display = 'block');
    }

    function showNoResultsMessage() {
        const messageContainer = document.getElementById('noResultsMessage');
        if (messageContainer) messageContainer.style.display = 'block';
    }

    function hideNoResultsMessage() {
        const messageContainer = document.getElementById('noResultsMessage');
        if (messageContainer) messageContainer.style.display = 'none';
    }

    // ========== DUMMY RECIPE DATA (for dynamic rendering) ==========
    const recipes = [
        {
            name: "Italian Pasta",
            image: "images/italiandish.jpg",
            description: "Classic homemade pasta tossed in tomato sauce.",
            prepTime: "15 mins",
            cookTime: "30 mins",
            servings: "4",
            ingredients: ["Pasta", "Tomatoes", "Basil", "Olive Oil"],
            steps: ["Boil pasta", "Make sauce", "Mix & serve"],
            cuisines: ["Italian"]
        },
        // Add more recipes as needed...
    ];

    // ========== RENDER ALL RECIPES ==========
    function displayRecipes() {
        const container = document.getElementById('recipesContainer');
        container.innerHTML = ''; // Clear previous content

        recipes.forEach((recipe) => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.dataset.ingredients = recipe.ingredients.join(', ').toLowerCase();
            recipeCard.dataset.cuisines = recipe.cuisines.join(', ').toLowerCase();

            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h4>${recipe.name}</h4>
                <div class="recipe-ingredient">${recipe.ingredients.join(', ')}</div>
                <div class="recipe-description">${recipe.description}</div>
                <div class="rating">⭐${recipe.rating || 4} stars</div>
            `;

            recipeCard.addEventListener('click', function () {
                localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
                window.location.href = 'recipe-details.html';
            });

            container.appendChild(recipeCard);
        });

        filterRecipes(); // Apply filters after initial render
    }

    // ========== INITIALIZE EVERYTHING ==========
    loadAllIngredientButtons(); // Load all dropdowns + ingredient buttons
    displayRecipes();           // Render recipes

});
