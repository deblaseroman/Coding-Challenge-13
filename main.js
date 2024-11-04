function fetchProducts() {
    const apiUrl = 'https://www.course-api.com/javascript-store-products';

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error('Failed to load products'); 
            }
        })
        .then(data => {
            console.log(data); 
            displayProducts(data);
        })
        .catch(error => {
            console.error(error); 
            const productContainer = document.getElementById('product-container');
           
            productContainer.innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
}

// Function to display products on the webpage
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');

   
    products.forEach(product => {
        const productDiv = document.createElement('div'); 

        // Set the inner HTML of the product div
        productDiv.innerHTML = `
            <h2>${product.name}</h2>                  <!-- Product Name -->
            <p>Company: ${product.company}</p>        <!-- Company Name -->
            <p>Price: $${product.price}</p>            <!-- Product Price -->
            <img src="${product.image}" alt="${product.name}" /> <!-- Product Image -->
        `;

        // Add the product div to the container
        productContainer.appendChild(productDiv);
    });
}

// Call the fetchProducts function to start fetching products
fetchProducts();