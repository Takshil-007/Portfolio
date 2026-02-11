// Select form and inputs
const form = document.querySelector('.contact-form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Function to show error message
function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains('error-message')) {
        error = document.createElement('div');
        error.classList.add('error-message');
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
}

// Function to remove error
function removeError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        error.textContent = '';
    }
}

// Blur event validation
nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter a valid name');
    } else {
        removeError(nameInput);
    }
});

emailInput.addEventListener('blur', () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
    } else {
        removeError(emailInput);
    }
});

messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message cannot be empty');
    } else {
        removeError(messageInput);
    }
});

// Optional: prevent form submission if invalid
form.addEventListener('submit', (e) => {
    if (
        nameInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        messageInput.value.trim() === '' ||
        !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(emailInput.value)
    ) {
        e.preventDefault();
        alert('Please fill out all fields correctly before submitting.');
    }
});
