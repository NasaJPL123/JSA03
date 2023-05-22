function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (!firstName) {
        firstNameError.textContent = 'First name is required';
    }

    if (!lastName) {
        lastNameError.textContent = 'Last name is required';
    }

    if (!email) {
        emailError.textContent = 'Email is required';
    }

    if (!password) {
        passwordError.textContent = 'Password is required';
    }

    if (!confirmPassword) {
        confirmPasswordError.textContent = 'Confirm password is required';
    }
}