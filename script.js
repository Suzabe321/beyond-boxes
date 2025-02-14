document.addEventListener("DOMContentLoaded", () => {
    // ==== DYNAMICALLY ADD PRODUCTS TO CATALOG ====
    const productList = [
        { name: "Elegant Bliss Box", image: "box1.jpg" },
        { name: "Romantic Surprise", image: "box2.jpg" },
        { name: "Festive Delights", image: "box3.jpg" },
        { name: "Minimalist Elegance", image: "box4.jpg" },
        { name: "Luxury Treat Box", image: "box5.jpg" },
        { name: "Cozy Winter Set", image: "box6.jpg" },
        { name: "Classic Celebration", image: "box7.jpg" },
        { name: "Sweet Moments", image: "box8.jpg" },
        { name: "Self-Care Retreat", image: "box9.jpg" },
        { name: "Golden Glow Box", image: "box10.jpg" }
    ];

    const productContainer = document.querySelector(".products");

    productList.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <a href="https://instagram.com/beyondboxess" target="_blank" class="btn">Order Now</a>
        `;

        productContainer.appendChild(productDiv);
    });

    // ==== SMOOTH SCROLLING FOR NAVIGATION ====
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const targetSection = document.querySelector(this.hash);
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ==== HIGHLIGHT ACTIVE NAV LINK ON SCROLL ====
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // ==== CUSTOMIZATION FORM SUBMISSION ====
    document.getElementById("customForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your customization request has been submitted!");
        this.reset();
    });
});
