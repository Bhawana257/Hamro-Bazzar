// js/login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');
    const submitBtn = document.getElementById('submitBtn'); // new
    const spinner = document.getElementById('spinner');   // new

    // Check if already logged in
    if (localStorage.getItem('userId')) {
        window.location.href = 'index.html';
    }

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const userIdInput = document.getElementById('userId').value;
        const password = document.getElementById('password').value;

        // Start Loading
        submitBtn.disabled = true;
        spinner.style.display = 'inline-block';
        errorMsg.style.display = 'none';

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: userIdInput, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('username', data.username);

                document.cookie = "counter=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                // Keep loading state until redirect happens
                window.location.href = 'index.html';
            } else {
                const data = await response.text();
                errorMsg.textContent = data || 'Invalid Credentials';
                errorMsg.style.display = 'block';
                // Stop Loading on Error
                submitBtn.disabled = false;
                spinner.style.display = 'none';
            }
        } catch (err) {
            console.error('Error:', err);
            errorMsg.textContent = 'Server error. Please try again later.';
            errorMsg.style.display = 'block';
            // Stop Loading on Error
            submitBtn.disabled = false;
            spinner.style.display = 'none';
        }
    });
});
