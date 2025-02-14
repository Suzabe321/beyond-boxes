document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.querySelector(".products");

    // Sample product images
    const productData = [
        { img: "product1.jpg", name: "Luxury Box", price: "$50" },
        { img: "product2.jpg", name: "Romantic Box", price: "$45" },
        { img: "product3.jpg", name: "Festive Box", price: "$40" },
        { img: "product4.jpg", name: "Minimalist Box", price: "$35" },
    ];

    productData.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="btn">Add to Cart</button>
        `;
        productsContainer.appendChild(div);
    });

    // Customization form
    document.getElementById("customForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your custom gift box details have been saved!");
    });
});
