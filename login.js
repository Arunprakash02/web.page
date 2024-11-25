document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission

            // Retrieve input values
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Get users from localStorage
            const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

            // Check if user exists
            const user = users.find(user => user.email === email && user.password === password);

            

            if (user) {
                // Successful login
                alert('Login successful!');
                localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store logged-in user data
                window.location.href = './profile.html'; // Redirect to profile page
                console.log(users);
            } else {
                // Failed login
                alert('Invalid email or password. Please try again.');
            }
        });
    }
});
