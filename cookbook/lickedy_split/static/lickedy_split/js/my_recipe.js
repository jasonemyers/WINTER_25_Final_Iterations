document.addEventListener("DOMContentLoaded", function () {
  const recipesContainer = document.querySelector(".my_recipes_content");
  const favoriteRecipesContainer = document.querySelector(".favorite_recipes_content");

  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  let favoriteRecipes = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

  function renderRecipes() {
    recipesContainer.innerHTML = "";
    if (recipes.length > 0) {
      recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        const isFavorite = favoriteRecipes.some(fav => fav.name === recipe.name);

        // Use recipe.image if it exists, otherwise fall back to default image
        const imageSrc = recipe.image || 'images/default-food.png';

        recipeCard.innerHTML = `
          <img src="${imageSrc}" alt="${recipe.name}" width="100">
          <h3>${recipe.name}</h3>
          <p><strong>Tags:</strong> ${recipe.tags}</p>
          <button class="edit-btn" data-index="${index}"><i class="fas fa-edit"></i></button>
          <button class="favorite-btn" data-index="${index}"><i class="fas fa-heart${isFavorite ? ' favorite' : ''}"></i></button>
          <button class="delete-btn" data-index="${index}"><i class="fas fa-trash-alt"></i></button>
        `;
        recipesContainer.appendChild(recipeCard);
      });

      addEventListeners();
    } else {
      recipesContainer.innerHTML = "<p>No recipes added yet.</p>";
    }
  }

  function renderFavoriteRecipes() {
    favoriteRecipesContainer.innerHTML = "";
    if (favoriteRecipes.length > 0) {
      favoriteRecipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
          <h3>${recipe.name}</h3>
          <img src="${recipe.image || 'images/default-food.png'}" alt="Recipe Image" width="100">
          <p><strong>Tags:</strong> ${recipe.tags}</p>
          <button class="remove-favorite-btn" data-index="${index}">Remove</button>
        `;
        favoriteRecipesContainer.appendChild(recipeCard);
      });

      document.querySelectorAll(".remove-favorite-btn").forEach(button => {
        button.addEventListener("click", function () {
          const index = this.getAttribute("data-index");
          favoriteRecipes.splice(index, 1);
          localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
          renderFavoriteRecipes();
          renderRecipes();
        });
      });
    } else {
      favoriteRecipesContainer.innerHTML = "<p>No favorite recipes yet.</p>";
    }
  }

  function addEventListeners() {
    document.querySelectorAll(".favorite-btn").forEach(button => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        const recipe = recipes[index];

        if (favoriteRecipes.some(fav => fav.name === recipe.name)) {
          // Remove from favorites
          favoriteRecipes = favoriteRecipes.filter(fav => fav.name !== recipe.name);
        } else {
          // Add to favorites
          favoriteRecipes.push(recipe);
        }

        localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
        renderFavoriteRecipes();
        renderRecipes();
      });
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        recipes.splice(index, 1);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        renderRecipes();
        renderFavoriteRecipes();
      });
    });

    document.querySelectorAll(".edit-btn").forEach(button => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        const recipe = recipes[index];
        localStorage.setItem("editRecipe", JSON.stringify({ ...recipe, index }));
        window.location.href = "addrecipe.html";
      });
    });
  }

  // Render initial recipes
  renderRecipes();
  renderFavoriteRecipes();

  // Scroll functionality
  const leftButton = document.querySelector('.scroll-btn.left');
  const rightButton = document.querySelector('.scroll-btn.right');
  const recipesWrapper = document.querySelector('.recipes-wrapper');

  if (leftButton && rightButton && recipesWrapper) {
    const scrollAmount = 300; // Amount of pixels to scroll each time

    leftButton.addEventListener('click', function() {
      recipesWrapper.scrollBy({
        left: -scrollAmount, // Negative value for left scroll
        behavior: 'smooth'
      });
    });

    rightButton.addEventListener('click', function() {
      recipesWrapper.scrollBy({
        left: scrollAmount, // Positive value for right scroll
        behavior: 'smooth'
      });
    });
  }
});
