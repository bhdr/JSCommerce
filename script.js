/* Author: Bahadir Tezer */
// Create App
const app = document.getElementById('root');
// Create Logo
const logo = document.createElement('img');
logo.src = 'logo.png';
// Create Container
const container = document.createElement('div');
container.setAttribute('class', 'container');
// Append elements
app.appendChild(logo);
app.appendChild(container);
// Get Products
var request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products', true);
console.log(request);
request.onload = function () {
    // Get JSON Data
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(this.response);
        // Create Product Cards
        data.products.forEach((product) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            // Create Product Title
            const title = document.createElement('h3');
            title.setAttribute('class', 'productTitle');
            title.textContent = product.title;
            // Create Product Description
            const description = document.createElement('p');
            product.description = product.description.substring(0, 200);
            description.setAttribute('class', 'productDesc');
            description.textContent = `${product.description}...`;
            // Create Product Price
            const price = document.createElement('p');
            price.setAttribute('class', 'price');
            product.price = product.price;
            price.textContent = `Price: ${product.price}$`;
            // Get Product Discount
            const discount = document.createElement('p');
            discount.setAttribute('class', 'discount');
            product.discountPercentage = product.discountPercentage;
            discount.textContent = `${product.discountPercentage}% Discount`;
            // Get Stock Status
            const stock = document.createElement('p');
            stock.setAttribute('class', 'stock');
            product.stock = product.stock;
            stock.textContent = `Stock Status: ${product.stock} Left`;
            // Get Product Brand
            const brand = document.createElement('p');
            brand.setAttribute('class', 'brand');
            product.brand = product.brand;
            brand.textContent = `Brand: ${product.brand}`;
            // Get Product Category
            const category = document.createElement('p');
            category.setAttribute('class', 'category');
            product.category = product.category;
            category.textContent = `Category: ${product.category}`;
            // Create Product Thumbnail
            const thumbnail = document.createElement('img');
            thumbnail.setAttribute('class', 'thumbnail');
            thumbnail.src = product.thumbnail;
            // Create Add to Cart Button
            const addtocart = document.createElement('button');
            addtocart.setAttribute('class', 'addtocart');
            addtocart.textContent = `Add to Cart`;
            // List Elements into product card
            container.appendChild(card);
            card.appendChild(thumbnail);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(price);
            card.appendChild(discount);
            card.appendChild(stock);
            card.appendChild(brand);
            card.appendChild(category);
            card.appendChild(addtocart);
        });
    } else {
        const errorMessage = document.createElement('h1');
        errorMessage.textContent = `It's not working!`;
        app.appendChild(errorMessage);
    }
};
request.send();