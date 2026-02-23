document.addEventListener('DOMContentLoaded', async function () {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username'); // We might want to fetch this fresh too

    if (!userId) {
        window.location.href = 'login.html';
        return;
    }

    // Display basic info from local storage for instant feedback
    document.getElementById('username-display').textContent = username || 'User';
    document.getElementById('email-display').style.display = 'none'; // We don't have email in LS usually

    // Set Avatar
    const avatarUrl = `https://robohash.org/${username}?set=set4`; // set4 is cats
    document.getElementById('user-avatar').src = avatarUrl;

    // Logout Logic
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.clear();
                // Clear cookies
                document.cookie.split(";").forEach(function (c) {
                    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                });
                window.location.href = 'index.html';
            }
        });
    }

    try {
        // Fetch Orders
        const res = await fetch('http://localhost:3000/order', {
            headers: { 'user-id': userId }
        });

        const orders = await res.json();
        const container = document.getElementById('orders-container');

        if (orders.length === 0) {
            container.innerHTML = '<p>No orders found.</p>';
            return;
        }

        container.innerHTML = orders.map(order => `
            <div class="order-card">
                <div class="order-header">
                    <span>Order #${order._id.slice(-6).toUpperCase()}</span>
                    <span class="status ${order.status}">${order.status}</span>
                </div>
                <div class="order-items">
                    ${order.products.map(p => `
                        <div class="order-item">
                            <img src="${p.preview || 'https://via.placeholder.com/50'}" alt="${p.name}">
                            <div>
                                <div>${p.name}</div>
                                <small>Qty: ${p.quantity} | Rs ${p.price}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-footer">
                    Total: Rs ${order.amount} (${order.paymentMethod})
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error(err);
        document.getElementById('orders-container').innerHTML = '<p style="color:red">Error loading orders.</p>';
    }
});
