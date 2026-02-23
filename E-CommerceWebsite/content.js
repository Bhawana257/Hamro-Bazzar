// content.js
// console.clear();

let contentTitle;

console.log(document.cookie);

function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  boxLink.href = "contentDetails.html?" + ob._id;

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("Rs " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

// BACKEND CALLING
fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(data => {
    contentTitle = data;

    // Update badge from cookie (legacy support, technically handled by header.js now but keeping for safety)
    if (document.cookie.indexOf(",counter=") >= 0) {
      var counter = document.cookie.split(",")[1].split("=")[1];
      let badge = document.getElementById("badge");
      if (badge) badge.innerHTML = counter;
    }

    // URL params for filtering
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category');

    for (let i = 0; i < contentTitle.length; i++) {
      let product = contentTitle[i];

      // Filter Logic
      if (categoryFilter) {
        // If category matches, show it
        // Relaxed check: if product.category includes the filter (e.g. "Women" matches "Women")
        if (product.category && product.category === categoryFilter) {
          if (containerClothing) {
            containerClothing.appendChild(dynamicClothingSection(product));
          }
        }
      } else {
        // Default View (No Filter)
        // Accessories go to accessory container, others to clothing
        if (product.isAccessory) {
          if (containerAccessories) {
            containerAccessories.appendChild(dynamicClothingSection(product));
          }
        } else {
          if (containerClothing) {
            containerClothing.appendChild(dynamicClothingSection(product));
          }
        }
      }
    }
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });
