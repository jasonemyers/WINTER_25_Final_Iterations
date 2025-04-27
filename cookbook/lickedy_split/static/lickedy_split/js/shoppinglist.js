//shooping list script
document.addEventListener('DOMContentLoaded', function() {
  const expandableTitleBar = document.querySelector('.expandable_title_bar');
  const expandableContentWrapper = document.querySelector('.expandable_content_wrapper');
  const addItemButton = document.querySelector('#add-item-button');
  const shoppingList = document.querySelector('#shopping-list');
  const sortOptions = document.querySelector('#sort-options');

  // Load saved shopping list from localStorage
  loadShoppingList();

  // Toggle the expandable section
  expandableTitleBar.addEventListener('click', () => {
    const isExpanded = expandableContentWrapper.style.display === 'block';
    expandableContentWrapper.style.display = isExpanded ? 'none' : 'block';
  });

  // Add a new item to the shopping list
  addItemButton.addEventListener('click', () => {
    const newItem = prompt("Enter the ingredient:");
    const newQuantity = prompt("Enter the quantity:");
    const newType = prompt("Enter the type (Fruits, Vegetables, Protein, Grain..):");

    if (newItem && newQuantity && newType) {
      const newListItem = document.createElement('li');
      newListItem.classList.add('shopping-item');
      newListItem.dataset.type = newType.toLowerCase(); // Add data attribute for filtering
      newListItem.innerHTML = `
        <input type="checkbox" class="shopping_checkbox">
        <label class="shopping_label">${newItem} (${newQuantity})</label>
        <span class="notes">Type: ${newType}</span>
        <button class="edit-button"><i class="fas fa-edit"></i></button>
        <button class="delete-button"><i class="fas fa-trash"></i></button>
      `;
      shoppingList.appendChild(newListItem);

      // Save the updated list to localStorage
      saveShoppingList();

      // Add event listeners to the new buttons
      const editButton = newListItem.querySelector('.edit-button');
      const deleteButton = newListItem.querySelector('.delete-button');

      editButton.addEventListener('click', () => {
        const editedItem = prompt("Edit the ingredient:", newItem);
        const editedQuantity = prompt("Edit the quantity:", newQuantity);
        const editedType = prompt("Edit the type:", newType);

        if (editedItem && editedQuantity && editedType) {
          newListItem.querySelector('.shopping_label').textContent = `${editedItem} (${editedQuantity})`;
          newListItem.querySelector('.notes').textContent = `Type: ${editedType}`;
          newListItem.dataset.type = editedType.toLowerCase(); // Update the type in data attribute

          // Save the updated list to localStorage
          saveShoppingList();
        }
      });

      deleteButton.addEventListener('click', () => {
        shoppingList.removeChild(newListItem);
        // Save the updated list to localStorage
        saveShoppingList();
      });
    }
  });

  // Sorting functionality
  sortOptions.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    let items = Array.from(shoppingList.children);

    // If the selected sort option is not "alphabetical", we need to filter the list based on the selected category
    if (sortBy === 'alphabetical') {
      items.sort((a, b) => {
        const itemA = a.querySelector('.shopping_label').textContent.toLowerCase();
        const itemB = b.querySelector('.shopping_label').textContent.toLowerCase();
        return itemA.localeCompare(itemB);
      });
    } else {
      items = items.filter(item => item.dataset.type === sortBy.toLowerCase()); // Filter items based on selected type
    }

    // Clear the list before adding filtered items
    shoppingList.innerHTML = '';

    // Re-append the filtered (or sorted) items back to the list
    items.forEach(item => shoppingList.appendChild(item));

    // Save the updated list to localStorage
    saveShoppingList();
  });

  // Function to save the shopping list to localStorage
  function saveShoppingList() {
    const items = Array.from(shoppingList.children).map(item => {
      return {
        label: item.querySelector('.shopping_label').textContent,
        type: item.dataset.type,
        checked: item.querySelector('.shopping_checkbox').checked
      };
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }

  // Function to load the shopping list from localStorage
  function loadShoppingList() {
    const savedList = JSON.parse(localStorage.getItem('shoppingList'));
    if (savedList) {
      savedList.forEach(item => {
        const newListItem = document.createElement('li');
        newListItem.classList.add('shopping-item');
        newListItem.dataset.type = item.type; // Set the type for filtering
        newListItem.innerHTML = `
          <input type="checkbox" class="shopping_checkbox" ${item.checked ? 'checked' : ''}>
          <label class="shopping_label">${item.label}</label>
          <span class="notes">Type: ${item.type}</span>
          <button class="edit-button"><i class="fas fa-edit"></i></button>
          <button class="delete-button"><i class="fas fa-trash"></i></button>
        `;
        shoppingList.appendChild(newListItem);

        // Add event listeners to the new buttons
        const editButton = newListItem.querySelector('.edit-button');
        const deleteButton = newListItem.querySelector('.delete-button');

        editButton.addEventListener('click', () => {
          const editedItem = prompt("Edit the ingredient:", item.label);
          const editedQuantity = prompt("Edit the quantity:", item.label.split('(')[1].split(')')[0]);
          const editedType = prompt("Edit the type:", item.type);

          if (editedItem && editedQuantity && editedType) {
            newListItem.querySelector('.shopping_label').textContent = `${editedItem} (${editedQuantity})`;
            newListItem.querySelector('.notes').textContent = `Type: ${editedType}`;
            newListItem.dataset.type = editedType.toLowerCase(); // Update the type in data attribute

            // Save the updated list to localStorage
            saveShoppingList();
          }
        });

        deleteButton.addEventListener('click', () => {
          shoppingList.removeChild(newListItem);
          // Save the updated list to localStorage
          saveShoppingList();
        });
      });
    }
  }
});