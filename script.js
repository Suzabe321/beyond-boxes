document.addEventListener("DOMContentLoaded", function () {
    // Load Products Dynamically
    const productsContainer = document.querySelector(".products");

    const productData = [
        { img: "product1.jpg", name: "Luxury Box", price: "$50" },
        { img: "product2.jpg", name: "Romantic Box", price: "$45" },
        { img: "product3.jpg", name: "Festive Box", price: "$40" },
        { img: "product4.jpg", name: "Minimalist Box", price: "$35" },
        { img: "product5.jpg", name: "Vintage Box", price: "$55" },
        { img: "product6.jpg", name: "Wellness Box", price: "$60" }
    ];

    productData.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="btn add-to-cart">Add to Cart</button>
        `;
        productsContainer.appendChild(div);
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Customization Form Submission
    document.getElementById("customForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const theme = document.getElementById("theme").value;
        const message = document.getElementById("message").value.trim();

        if (message === "") {
            alert("Please enter a personal message.");
            return;
        }

        alert(`Your ${theme} gift box customization has been saved!\nMessage: "${message}"`);
    });

    // Cart Button (For Future Implementation)
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to cart! (Cart functionality coming soon)");
        });
    });
});
