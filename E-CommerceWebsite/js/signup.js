// js/signup.js
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const errorMsg = document.getElementById('errorMsg');
    const signupBtn = document.getElementById('signupBtn');
    const spinner = document.getElementById('spinner');

    signupForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Start Loading
        signupBtn.disabled = true;
        spinner.style.display = 'inline-block';
        errorMsg.style.display = 'none';

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            } else {
                const data = await response.text();
                errorMsg.textContent = data;
                errorMsg.style.display = 'block';
                // Stop loading
                signupBtn.disabled = false;
                spinner.style.display = 'none';
            }
        } catch (err) {
            console.error('Error:', err);
            errorMsg.textContent = 'Server error. Please try again later.';
            errorMsg.style.display = 'block';
            // Stop loading
            signupBtn.disabled = false;
            spinner.style.display = 'none';
        }
    });
});
