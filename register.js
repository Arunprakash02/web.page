document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            let users = localStorage.getItem("users") 
                ? JSON.parse(localStorage.getItem("users")) 
                : [];

            // Retrieve input values
            const firstName = document.getElementById('fname').value.trim();
            const lastName = document.getElementById('lname').value.trim();
            const email = document.getElementById('email').value.trim();
            const countryCode = document.getElementById('country-code').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = document.getElementById('password').value.trim();

            // Validate inputs
            if (!firstName || !lastName || !email || !phone || !password) {
                alert('Please fill out all fields.');
                return;
            }

            // Create user data object
            const userData = {
                fname: firstName,
                lname: lastName,
                email: email,
                countryCode: countryCode,
                mobile: phone,
                password: password
            };

            // Add user data to users array and save in localStorage
            console.log(userData);
            users.push(userData);
            localStorage.setItem("users", JSON.stringify(users));

            // Alert success and redirect to profile.html
            alert("Successfully registered!");
            window.location.href = './profile.html';
        });
    }
});
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form submission
    const emailValue = emailInput.value.trim(); // Get the email input value

    if (!emailValue.endsWith('.com')) {
        // Show the error message if email doesn't end with .com
        emailError.style.display = 'block';
    } else {
        // Hide the error message and proceed
        emailError.style.display = 'none';
        alert('Email submitted successfully!');
    }
});
