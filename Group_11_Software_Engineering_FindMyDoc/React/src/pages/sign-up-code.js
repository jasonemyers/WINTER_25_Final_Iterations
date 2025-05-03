const signupBtn = document.querySelector('#signup-btn');
const passwordInput = document.querySelector('#Password');

// Create password validation messages
const passwordValidationDiv = document.createElement('div');
passwordValidationDiv.id = 'password-validation';
if (passwordInput) {
    passwordInput.insertAdjacentElement('afterend', passwordValidationDiv);
}

// Password validation messages
const validationMessages = {
    length: "At least 8 characters",
    number: "At least one number",
    uppercase: "At least one uppercase letter",
    specialChar: "At least one special character (!@#$%^&* etc.)"
};

// Create validation message elements
const validationElements = {};
Object.keys(validationMessages).forEach(key => {
    const messageElement = document.createElement('div');
    messageElement.textContent = validationMessages[key];
    messageElement.style.color = "red"; // Default to red (invalid)
    passwordValidationDiv.appendChild(messageElement);
    validationElements[key] = messageElement;
});

// Function to validate password
function validatePassword(password) {
    const validations = {
        length: password.length >= 8,
        number: /[0-9]/.test(password),
        uppercase: /[A-Z]/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    // Update validation messages' colors
    Object.keys(validations).forEach(key => {
        validationElements[key].style.color = validations[key] ? "green" : "red";
    });

    return Object.values(validations).every(valid => valid);
}

// Validate password on input
if (passwordInput) {
    passwordInput.addEventListener('input', function () {
        validatePassword(passwordInput.value);
    });
}

// User Agreement Functions
function showUserAgreement() {
    document.getElementById('userAgreementPopup').style.display = 'block';
}

function closeUserAgreement() {
    document.getElementById('userAgreementPopup').style.display = 'none';
}

// Close popup when clicking outside content
window.onclick = function(event) {
    const popup = document.getElementById('userAgreementPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

// Handle sign-up button click
if (signupBtn) {
    signupBtn.onclick = async function (event) {
        event.preventDefault();
        
        // Check if terms checkbox is checked
        if (!document.getElementById('terms-checkbox').checked) {
            alert("Please agree to the User Agreement before proceeding.");
            return;
        }

        const firstname = document.querySelector('#Fast-Name').value;
        const lastname = document.querySelector('#Last-Name').value;
        const username = firstname + " " + lastname;
        const email = document.querySelector('#Email-Address').value;
        const password = passwordInput.value;

        if (!validatePassword(password)) {
            alert("Password does not meet the requirements. Please fix the issues highlighted in red.");
            return;
        }

        try {
            const response = await fetch('https://findmydocmain-production.up.railway.app/api/auth/local/register', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();
            console.log("API Response:", data);

            if (response.ok && data.jwt) {
                localStorage.setItem('jwt', data.jwt);
                localStorage.setItem('user', JSON.stringify(data.user));
                
                alert("Registration successful! You are now signed in.");
                window.location.href = "home.js";
            } else {
                throw new Error(data.error?.message || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Registration failed: " + error.message);
        }
    };
}
