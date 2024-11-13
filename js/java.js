document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Eco-Friendly Yoga Mat", category: "Mats", price: "$35", img: "mat.jpg" },
        { name: "Cork Yoga Block", category: "Blocks", price: "$12", img: "block.jpg" },
        // Additional products
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productContainer.appendChild(productCard);
    });
});
