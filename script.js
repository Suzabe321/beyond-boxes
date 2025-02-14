document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.querySelector(".products");

    // Sample product images
    const productImages = [
        "product1.jpg",
        "product2.jpg",
        "product3.jpg",
        "product4.jpg",
        "product5.jpg",
        "product6.jpg",
        "product7.jpg",
        "product8.jpg",
        "product9.jpg",
        "product10.jpg"
    ];

    // Load products dynamically
    productImages.forEach((img, index) => {
        const product = document.createElement("div");
        product.classList.add("product");
        product.innerHTML = `
            <img src="${img}" alt="Gift Box ${index + 1}">
            <p>Gift Box ${index + 1}</p>
        `;
        productsContainer.appendChild(product);
    });
});
