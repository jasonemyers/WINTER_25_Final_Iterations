document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const wrapper = document.querySelector('.wrapper');
  const termsLink = document.getElementById('open-terms');
  const termsModal = document.getElementById('terms-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const closeBtn = document.querySelector('.close-btn');
  const termsCheckbox = document.getElementById('id_terms_agreed');

  // Initialize wrapper height
  if (wrapper) {
      wrapper.style.height = `${wrapper.offsetHeight}px`;
  }

  // Modal handling object
  const modalHandler = {
      openModal: function(e) {
          e.preventDefault();
          termsModal.style.display = 'block';
          modalOverlay.style.display = 'block';
          termsModal.setAttribute('aria-hidden', 'false');
      },

      closeModal: function() {
          termsModal.style.display = 'none';
          modalOverlay.style.display = 'none';
          termsModal.setAttribute('aria-hidden', 'true');
      },

      handleEscape: function(e) {
          if (e.key === 'Escape' && termsModal.style.display === 'block') {
              this.closeModal();
          }
      },

      acceptTerms: function() {
          if (termsCheckbox) {
              termsCheckbox.checked = true;
              termsCheckbox.dispatchEvent(new Event('change'));
          }
          this.closeModal();
      }
  };

  // Event Listeners
  if (termsLink) {
      termsLink.addEventListener('click', (e) => modalHandler.openModal(e));
  }

  if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          modalHandler.closeModal();
      });
  }

  if (modalOverlay) {
      modalOverlay.addEventListener('click', () => modalHandler.closeModal());
  }

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => modalHandler.handleEscape(e));

  // Expose acceptTerms to global scope
  window.acceptTerms = () => modalHandler.acceptTerms();

  // Checkbox interaction
  if (termsCheckbox) {
      termsCheckbox.addEventListener('change', function() {
          const checkmark = document.querySelector('.checkmark');
          if (this.checked) {
              checkmark.style.backgroundColor = '#2196F3';
          } else {
              checkmark.style.backgroundColor = '#eee';
          }
      });
  }
});

// Open the modal when the "I agree to the terms & conditions" link is clicked
document.getElementById('open-terms').addEventListener('click', function(event) {
  event.preventDefault();  // Prevent the default link behavior
  const modal = document.getElementById('terms-modal');
  modal.style.display = 'block';
});

// Close the modal when the "X" is clicked
function closeModal() {
  const modal = document.getElementById('terms-modal');
  modal.style.display = 'none';
}

// Function to handle "I Agree" button click
function acceptTerms() {
  const modal = document.getElementById('terms-modal');
  modal.style.display = 'none';
  // Optionally, mark the checkbox as checked
  document.getElementById('terms-checkbox').checked = true;
}