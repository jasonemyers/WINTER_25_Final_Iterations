document.addEventListener("DOMContentLoaded", function () {
    const recipe = JSON.parse(localStorage.getItem('selectedRecipe'));

    if (recipe) {
        // Populate existing recipe details
        document.getElementById('recipe-name').textContent = recipe.name;
        document.getElementById('image').src = recipe.image;
        document.getElementById('recipe-description').textContent = recipe.description;
        document.getElementById('recipe-ingredients').textContent = recipe.ingredients;
        document.getElementById('recipe-cuisines').textContent = recipe.cuisines;
        document.getElementById('recipe-mealtype').textContent = recipe.mealtype;
        document.getElementById('recipe-dietary').textContent = recipe.dietary;
        document.getElementById('recipe-allergen').textContent = recipe.allergen;

        // Show and populate new fields only if they exist in the recipe
        if (recipe.prepTime) {
            document.getElementById('prepTime').textContent = recipe.prepTime; // Prep time
        } else {
            document.getElementById('prep-time').style.display = 'none'; // Hide if not available
        }

        if (recipe.cookTime) {
            document.getElementById('cook-time').textContent = recipe.cookTime; // Cook time
        } else {
            document.getElementById('cook-time').style.display = 'none'; // Hide if not available
        }

        if (recipe.servings) {
            document.getElementById('servings').textContent = recipe.servings; // Servings
        } else {
            document.getElementById('servings').style.display = 'none'; // Hide if not available
        }

        // Populate the steps dynamically
        const stepsContainer = document.getElementById('recipe-steps');
        stepsContainer.innerHTML = ''; // Clear any existing content
        recipe.steps.forEach((step, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.classList.add('single-instruction');
            stepDiv.innerHTML = `
                <header>
                    <p>Step ${index + 1}</p>
                    <div></div>
                </header>
                <p>${step}</p>
            `;
            stepsContainer.appendChild(stepDiv);
        });

    } else {
        // If no recipe is selected
        document.getElementById('recipe-details-container').innerHTML = '<p>No recipe details available</p>';
    }
});
