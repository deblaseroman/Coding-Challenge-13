function fetchProducts() {
    const apiUrl = 'https://www.course-api.com/javascript-store-products'
}
fetch(apiUrl)
.then(response => {
    if (response.ok) {
        return response.json;
    }
    else {
        throw new Error('products did not load correctly')
    }
})
.then(data => {
    console.log(data);
    displayProducts(data);
})
.catch(error => {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '<p> failed to load, try again. </p>'
});
//Format product information dynamically.
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Company: ${product.company}</p>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.name}" />
        `;
        productContainer.appendChild(productDiv);
    });
}