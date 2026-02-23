// js/header.js
document.addEventListener('DOMContentLoaded', function () {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');

    // Handle Top Login Button (in index.html)
    const loginBtnContainer = document.querySelector('.login-btn-container');
    // Handle User Icon and Badge
    const userIcon = document.querySelector('.userIcon');
    const badge = document.getElementById('badge');
    const loginBtn = document.getElementById('loginBtn');

    if (userId) {
        // Logged In State
        if (loginBtn) {
            loginBtn.innerText = 'Logout';
            loginBtn.href = '#';
            loginBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    localStorage.clear();
                    // Clear cookies
                    document.cookie.split(";").forEach(function (c) {
                        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                    });
                    // Redirect to login page or home page
                    window.location.href = 'index.html';
                }
            });
        }

        if (userIcon) {
            userIcon.parentElement.href = "profile.html";
            userIcon.style.color = "#007bff";
            userIcon.title = `Logged in as ${username}`;
        }

        // Update Badge
        fetch('http://localhost:3000/cart', {
            headers: { 'user-id': userId }
        })
            .then(res => {
                if (!res.ok) {
                    if (res.status === 404) {
                        console.warn("User session invalid");
                        localStorage.clear();
                        window.location.reload();
                    }
                    throw new Error('Failed to fetch cart');
                }
                return res.json();
            })
            .then(cartItems => {
                if (badge) {
                    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
                    badge.innerText = count;
                    badge.style.display = count > 0 ? 'flex' : 'none'; // Hide if 0
                }
            })
            .catch(err => console.error(err));

    } else {
        // Guest State
        if (loginBtn) {
            loginBtn.innerText = 'Login';
            loginBtn.href = 'login.html';
        }

        if (userIcon) {
            userIcon.parentElement.href = "login.html";
            userIcon.style.color = "#333";
            userIcon.title = "Login";
        }
        if (badge) badge.style.display = 'none';
    }
});
