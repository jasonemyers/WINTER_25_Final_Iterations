

document.addEventListener("DOMContentLoaded", function () {
  // Ingredients functionality
  const ingredientContainer = document.getElementById("ingredient-container");
  const addIngredientBtn = document.getElementById("add-ingredient");
  const ingredientTemplate = document.getElementById("ingredient-template").content;
  let ingredientIndex = 0;

  // Cuisine functionality
  const cuisineContainer = document.getElementById("cuisine-container");
  const addCuisineBtn = document.getElementById("add-cuisine");
  const cuisineTemplate = document.getElementById("cuisine-template").content;
  let cuisineIndex = 0;

  // Tag functionality
  const tagInput = document.getElementById("tag-input");
  const addTagBtn = document.getElementById("add-tag-btn");
  const tagContainer = document.getElementById("tag-container");

  // Add initial rows
  addIngredientRow(true);
  addCuisineRow(true);

  // Event listeners
  addIngredientBtn.addEventListener("click", addIngredientRow);
  addCuisineBtn.addEventListener("click", addCuisineRow);

  // Remove ingredient handler
  document.addEventListener("click", function(e) {
      if (e.target.classList.contains("remove-ingredient")) {
          e.target.closest(".ingredient-row").remove();
          updateIngredientIndexes();
      }

      if (e.target.classList.contains("remove-cuisine")) {
        e.target.closest(".cuisine-row").remove();
        updateCuisineIndexes();
      }
  });

  // Ingredient Functions
  function addIngredientRow(isInitial = false) {
    const newRow = ingredientTemplate.cloneNode(true);
    const newIndex = isInitial ? 0 : ingredientIndex++;
    
    // Update names with index
    newRow.querySelectorAll("[name]").forEach(el => {
        el.name = el.name.replace("{index}", newIndex);
    });
    
    ingredientContainer.appendChild(newRow);
    if (!isInitial) updateIngredientIndexes();
}

  function updateIngredientIndexes() {
      let currentIndex = 0;
      document.querySelectorAll(".ingredient-row").forEach(row => {
          row.querySelectorAll("[name]").forEach(el => {
              const nameParts = el.name.split('_');
              el.name = `${nameParts[0]}_${currentIndex}`;
          });
          currentIndex++;
      });
      ingredientIndex = currentIndex;
  }

  // Cuisine functions
  function addCuisineRow(isInitial = false) {
    const newRow = cuisineTemplate.cloneNode(true);
    const newIndex = isInitial ? 0 : cuisineIndex++;
    
    newRow.querySelectorAll("[name]").forEach(el => {
        el.name = `cuisine_${newIndex}`; // Simplified to match view expectation
    });
    
    cuisineContainer.appendChild(newRow);
    if (!isInitial) updateCuisineIndexes();
}

  function updateCuisineIndexes() {
    let currentIndex = 0;
    document.querySelectorAll(".cuisine-select").forEach(row => {
      row.querySelectorAll("[name]").forEach(el => {
        const [prefix, field] = el.name.split('-');
        el.name = `cuisine_${currentIndex}-${field}`;
      });
      currentIndex++;
    });
    cuisineIndex = currentIndex;
  }

  // Form validation
  document.getElementById("recipe-form").addEventListener("submit", function(e) {
      let isValid = true;
      
      // Validate required fields
      const requiredFields = this.querySelectorAll("[required]");
      requiredFields.forEach(field => {
          if (!field.value.trim()) {
              isValid = false;
              field.classList.add("error");
          } else {
              field.classList.remove("error");
          }
      });

      // Validate at least one ingredient
      const ingredientRows = this.querySelectorAll(".ingredient-row");
      if (ingredientRows.length === 0) {
          isValid = false;
          alert("Please add at least one ingredient");
      }

      // Validate each ingredient row
      ingredientRows.forEach(row => {
          const ingredientSelect = row.querySelector("select[name^='ingredient_']");
          const newIngredientInput = row.querySelector("input[name^='new_ingredient_']");
          
          if (!ingredientSelect.value && !newIngredientInput.value.trim()) {
              isValid = false;
              row.classList.add("error");
              alert("Each ingredient row must have either an existing ingredient selected or a new ingredient entered");
          }
      });

      const cuisineSelects = this.querySelectorAll("select[name^='cuisine_']");
      if (cuisineSelects.length === 0) {
        isValid = false;
        alert("Please add at least one cuisine");
      }

      if (!isValid) {
          e.preventDefault();
          alert("Please fill out all required fields");
      }
  });

  //Tag functionality

  /*
    function createTagElement(tagText) {
      const tag = document.createElement("div");
      tag.className = "tag";
      tag.innerHTML = `
        <span>${tagText}</span>
        <button type="button" class="remove-tag">×</button>
      `;
      tagContainer.appendChild(tag);
    }

    function addTag() {
      const tagText = tagInput.value.trim();
      if (tagText !== "") {
        createTagElement(tagText);
        tagInput.value = "";
      }
    }

    addTagBtn.addEventListener("click", addTag);
    tagInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        addTag();
      }
    });

    tagContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove-tag")) {
        e.target.parentElement.remove();
      }
    });

});
*/


if (window.initialIngredients) {
  initialIngredients.forEach(ing => {
      addIngredientRow();
      const rows = document.querySelectorAll('.ingredient-row');
      const lastRow = rows[rows.length - 1];
      lastRow.querySelector('select[name^="ingredient_"]').value = ing.id;
      lastRow.querySelector('input[name^="amount_"]').value = ing.amount;
      lastRow.querySelector('select[name^="measurement_"]').value = ing.measurement;
  });
}

if (window.initialCuisines) {
  initialCuisines.forEach(cuisineId => {
      addCuisineRow();
      const rows = document.querySelectorAll('.cuisine-select');
      const lastRow = rows[rows.length - 1];
      lastRow.querySelector('select[name^="cuisine_"]').value = cuisineId;
  });
}
});