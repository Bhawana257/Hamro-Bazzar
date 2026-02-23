console.clear();
console.log('Checkout page loaded');

let cartContainer = document.getElementById('cartContainer');
let userId = localStorage.getItem('userId');

if (!userId) {
    cartContainer.innerHTML = "<h3>Please <a href='login.html'>login</a> to view your cart.</h3>";
} else {
    // Helper: Create Cart Item Element
    function createCartItemElement(item) {
        const product = item.productId;
        const quantity = item.quantity;

        let boxDiv = document.createElement('div');
        boxDiv.className = 'box'; // changed from id='box' to class='box'

        let boxImg = document.createElement('img');
        boxImg.src = product.preview || (product.photos && product.photos[0]) || 'https://via.placeholder.com/100';
        boxDiv.appendChild(boxImg);

        let boxh3 = document.createElement('h3');
        boxh3.textContent = product.name + ' × ' + quantity;
        boxDiv.appendChild(boxh3);

        let boxh4 = document.createElement('h4');
        boxh4.textContent = 'Amount: Rs ' + (product.price * quantity);
        boxDiv.appendChild(boxh4);

        // Remove Button
        let removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "20px";
        removeBtn.style.padding = "5px 10px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.backgroundColor = "#ff4444";
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.borderRadius = "4px";

        removeBtn.onclick = async function () {
            if (confirm("Remove this item?")) {
                try {
                    const res = await fetch('http://localhost:3000/cart/remove/' + product._id, {
                        method: 'DELETE',
                        headers: { 'user-id': userId }
                    });
                    if (res.ok) {
                        location.reload();
                    } else {
                        alert("Failed to remove item.");
                    }
                } catch (err) {
                    console.error(err);
                    alert("Error removing item.");
                }
            }
        };
        boxh4.appendChild(removeBtn);

        return boxDiv;
    }

    // Helper: Create Total Section
    function createTotalSection(amount) {
        let totalContainerDiv = document.createElement('div');
        totalContainerDiv.id = 'totalContainer';

        let totalDiv = document.createElement('div');
        totalDiv.id = 'total';
        totalContainerDiv.appendChild(totalDiv);

        let totalh2 = document.createElement('h2');
        totalh2.textContent = 'Total Amount';
        totalDiv.appendChild(totalh2);

        let totalh4 = document.createElement('h4');
        totalh4.textContent = 'Amount: Rs ' + amount;
        totalDiv.appendChild(totalh4);

        let buttonDiv = document.createElement('div');
        buttonDiv.id = 'button';
        totalDiv.appendChild(buttonDiv);

        let buttonTag = document.createElement('button');
        buttonTag.textContent = 'Place Order';
        buttonDiv.appendChild(buttonTag);

        buttonTag.onclick = function () {
            location.href = "checkout.html";
        };

        return totalContainerDiv;
    }

    // Main Logic: Fetch and Render
    fetch('http://localhost:3000/cart', {
        headers: { 'user-id': userId }
    })
        .then(res => res.json())
        .then(cartItems => {
            // Correctly handling the cart items structure from backend: 
            // Backend returns user.cart which is array of { productId: {...}, quantity: ... }

            // Filter out null products just in case
            const validItems = cartItems.filter(item => item.productId);

            if (validItems.length === 0) {
                cartContainer.innerHTML = "<h2>Your cart is empty</h2>";
                return;
            }

            let boxContainerDiv = document.createElement('div');
            boxContainerDiv.id = 'boxContainer';
            cartContainer.appendChild(boxContainerDiv);

            let totalAmount = 0;
            let totalCount = 0;

            validItems.forEach(item => {
                let card = createCartItemElement(item);
                boxContainerDiv.appendChild(card);
                totalAmount += item.productId.price * item.quantity;
                totalCount += item.quantity;
            });

            let totalSection = createTotalSection(totalAmount);
            cartContainer.appendChild(totalSection);

            let badge = document.getElementById("badge");
            if (badge) {
                badge.innerText = totalCount;
                badge.style.display = totalCount > 0 ? 'flex' : 'none';
            }
        })
        .catch(err => {
            console.error(err);
            cartContainer.innerHTML = "<h3>Error loading cart details. Please try again.</h3>";
        });
}
