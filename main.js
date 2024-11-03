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

fetchProducts();