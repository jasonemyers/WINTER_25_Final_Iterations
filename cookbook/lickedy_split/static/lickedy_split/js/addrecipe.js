document.addEventListener("DOMContentLoaded", function () {
  const ingredientContainer = document.getElementById("ingredient-container");
  const addIngredientBtn = document.getElementById("add-ingredient");
  const ingredientTemplate = document.getElementById("ingredient-template").content;
  let ingredientIndex = 0;
  const tagInput = document.getElementById("tag-input");
  const addTagBtn = document.getElementById("add-tag-btn");
   const tagContainer = document.getElementById("tag-container");

  // Add initial ingredient row
  addIngredientRow();

  // Add ingredient row handler
  addIngredientBtn.addEventListener("click", function() {
      addIngredientRow();
  });

  // Remove ingredient handler
  document.addEventListener("click", function(e) {
      if (e.target.classList.contains("remove-ingredient")) {
          e.target.closest(".ingredient-row").remove();
          updateIndexes();
      }
  });

  function addIngredientRow() {
      const newRow = ingredientTemplate.cloneNode(true);
      const newIndex = ingredientIndex++;
      
      // Update names with index
      newRow.querySelectorAll("[name]").forEach(el => {
          el.name = el.name.replace("{index}", newIndex);
      });
      
      ingredientContainer.appendChild(newRow);
      updateIndexes();
  }

  function updateIndexes() {
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

      if (!isValid) {
          e.preventDefault();
          alert("Please fill out all required fields");
      }
  });

  //


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


