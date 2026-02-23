console.clear();

let id = location.search.split('?')[1];
console.log("Product ID:", id);

// Check for logged in user
const userId = localStorage.getItem('userId');

function updateBadge() {
    if (userId) {
        fetch('http://localhost:3000/cart', {
            headers: { 'user-id': userId }
        })
            .then(res => res.json())
            .then(cart => {
                let count = cart.reduce((acc, item) => acc + item.quantity, 0);
                let badge = document.getElementById("badge");
                if (badge) {
                    badge.innerHTML = count;
                    badge.style.display = count > 0 ? 'flex' : 'none';
                }
            })
            .catch(err => console.error(err));
    }
}
updateBadge();

function dynamicContentDetails(ob) {
    if (!ob) {
        document.getElementById('containerProduct').innerHTML = "<h2>Product not found</h2>";
        return;
    }

    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    // Image Section
    let imageSectionDiv = document.createElement('div');
    imageSectionDiv.id = 'imageSection';

    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = ob.preview || 'https://via.placeholder.com/400';
    imageSectionDiv.appendChild(imgTag);

    // Details Section
    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    let h1 = document.createElement('h1');
    h1.textContent = ob.name;

    let h4 = document.createElement('h4');
    h4.textContent = ob.brand;

    let detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';

    let h3DetailsDiv = document.createElement('h3');
    h3DetailsDiv.textContent = 'Rs ' + ob.price;

    let h3 = document.createElement('h3');
    h3.textContent = 'Description';

    let para = document.createElement('p');
    para.textContent = ob.description;

    // Preview Images
    let productPreviewDiv = document.createElement('div');
    productPreviewDiv.id = 'productPreview';

    let h3ProductPreviewDiv = document.createElement('h3');
    h3ProductPreviewDiv.textContent = 'Product Preview';
    productPreviewDiv.appendChild(h3ProductPreviewDiv);

    if (ob.photos && ob.photos.length > 0) {
        ob.photos.forEach(photo => {
            let imgTagProductPreviewDiv = document.createElement('img');
            imgTagProductPreviewDiv.id = 'previewImg';
            imgTagProductPreviewDiv.src = photo;
            imgTagProductPreviewDiv.onclick = function () {
                imgTag.src = photo;
            };
            productPreviewDiv.appendChild(imgTagProductPreviewDiv);
        });
    }

    // Add to Cart Button
    let buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';

    let buttonTag = document.createElement('button');
    buttonTag.textContent = 'Add to Cart';
    buttonTag.onclick = async function () {
        if (!userId) {
            alert("Please login to add items to cart.");
            window.location.href = "login.html";
            return;
        }

        try {
            buttonTag.disabled = true;
            buttonTag.textContent = "Adding...";
            const res = await fetch('http://localhost:3000/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': userId
                },
                body: JSON.stringify({ productId: ob._id })
            });

            if (res.ok) {
                updateBadge();
                buttonTag.textContent = "Added!";
                setTimeout(() => {
                    buttonTag.disabled = false;
                    buttonTag.textContent = "Add to Cart";
                }, 1500);
            } else {
                if (res.status === 404 || res.status === 401) {
                    alert("Session expired. Please login again.");
                    localStorage.clear();
                    window.location.href = "login.html";
                    return;
                }
                alert("Failed to add to cart");
                buttonTag.disabled = false;
            }
        } catch (err) {
            console.error(err);
            alert("Error adding to cart");
            buttonTag.disabled = false;
        }
    };
    buttonDiv.appendChild(buttonTag);

    // Buy Now Button
    let buyNowBtn = document.createElement('button');
    buyNowBtn.textContent = 'Buy Now';
    buyNowBtn.style.marginLeft = '10px';
    buyNowBtn.style.backgroundColor = '#ff9f00'; // Different color for distinction

    buyNowBtn.onclick = async function () {
        if (!userId) {
            alert("Please login to buy items.");
            window.location.href = "login.html";
            return;
        }

        try {
            buyNowBtn.disabled = true;
            buyNowBtn.textContent = "Processing...";

            // Add to cart first
            const res = await fetch('http://localhost:3000/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': userId
                },
                body: JSON.stringify({ productId: ob._id })
            });

            if (res.ok) {
                // Redirect directly to checkout
                window.location.href = "checkout.html";
            } else {
                if (res.status === 404 || res.status === 401) {
                    alert("Session expired. Please login again.");
                    localStorage.clear();
                    window.location.href = "login.html";
                    return;
                }
                alert("Failed to proceed to checkout");
                buyNowBtn.disabled = false;
                buyNowBtn.textContent = "Buy Now";
            }
        } catch (err) {
            console.error(err);
            alert("Error processing buy now");
            buyNowBtn.disabled = false;
            buyNowBtn.textContent = "Buy Now";
        }
    };
    buttonDiv.appendChild(buyNowBtn);

    // Append everything
    mainContainer.appendChild(imageSectionDiv);
    mainContainer.appendChild(productDetailsDiv);
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    productDetailsDiv.appendChild(detailsDiv);
    detailsDiv.appendChild(h3DetailsDiv);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(para);
    productDetailsDiv.appendChild(productPreviewDiv);
    productDetailsDiv.appendChild(buttonDiv);
}

// Fetch Product Data
if (id) {
    fetch('http://localhost:3000/products/' + id)
        .then(res => {
            if (!res.ok) throw new Error('Product not found');
            return res.json();
        })
        .then(product => {
            dynamicContentDetails(product);
        })
        .catch(err => {
            console.error(err);
            document.getElementById('containerProduct').innerHTML = "<h2>Product couldn't be loaded.</h2>";
        });
} else {
    document.getElementById('containerProduct').innerHTML = "<h2>Invalid Product ID</h2>";
}  
