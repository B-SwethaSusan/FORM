// Function to validate full name
function validateFullName() {
    const fullName = document.getElementById('fullName');
    const error = document.getElementById('fullNameError');
    
    // Check if full name is at least 5 characters long
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        error.textContent = 'Name must be at least 5 characters long';
        return false;
    } else {
        fullName.classList.remove('is-invalid');
        fullName.classList.add('is-valid');
        return true;
    }
}

// Initialize date picker for date of birth field
$('#dobPicker').datepicker({
    format: 'yyyy-mm-dd', // Date format
    autoclose: true, // Close the date picker on selection
    todayHighlight: true // Highlight today's date
});

// Function to validate email
function validateEmail() {
    const email = document.getElementById('email');
    const error = document.getElementById('emailError');
    const regex = /\S+@\S+\.\S+/; // Simple regex for email validation
    
    // Check if email matches regex
    if (!regex.test(email.value)) {
        email.classList.add('is-invalid');
        error.textContent = 'Enter a valid email';
        return false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true;
    }
}

// Function to validate phone number
function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber');
    const error = document.getElementById('phoneError');
    
    // Check if phone number is 10 digits long and not '123456789'
    if (phoneNumber.value === '123456789' || phoneNumber.value.length !== 10) {
        phoneNumber.classList.add('is-invalid');
        error.textContent = 'Enter a valid 10-digit phone number';
        return false;
    } else {
        phoneNumber.classList.remove('is-invalid');
        phoneNumber.classList.add('is-valid');
        return true;
    }
}

// Function to validate password
function validatePassword() {
    const password = document.getElementById('password');
    const fullName = document.getElementById('fullName').value;
    const error = document.getElementById('passwordError');
    
    // Check if password meets strong criteria
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate password length, common password, match with full name, and strength
    if (password.value.length < 8 || 
        password.value.toLowerCase() === 'password' || 
        password.value === fullName ||
        !strongPasswordRegex.test(password.value)) {
        
        password.classList.add('is-invalid');
        error.textContent = 'Password must be at least 8 characters long, not "password", not the same as your name, and must include upper and lower case letters, a number, and a special character';
        return false;
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        return true;
    }
}

// Function to validate confirm password
function validateConfirmPassword() {
    const confirmPassword = document.getElementById('confirmPassword');
    const password = document.getElementById('password').value;
    const error = document.getElementById('confirmPasswordError');
    
    // Check if confirm password matches the password
    if (confirmPassword.value !== password) {
        confirmPassword.classList.add('is-invalid');
        error.textContent = 'Passwords do not match';
        return false;
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
        return true;
    }
}

// Function to validate the entire form
function validateForm() {
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneNumberValid = validatePhoneNumber();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // Return true if all fields are valid
    return isFullNameValid && isEmailValid && isPhoneNumberValid && isPasswordValid && isConfirmPasswordValid;
}
