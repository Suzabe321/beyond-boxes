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
            <img data-src="${product.image}" class="lazy-load" alt="${product.name}">
            <h3>${product.name}</h3>
            <a href="https://instagram.com/beyondboxess" target="_blank" class="btn">Order Now</a>
        `;

        productContainer.appendChild(productDiv);
    });

    // ==== LAZY LOAD IMAGES ====
    const lazyImages = document.querySelectorAll(".lazy-load");

    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy-load");
                observer.unobserve(img);
            }
        });
    }, { rootMargin: "100px" });

    lazyImages.forEach(img => lazyLoadObserver.observe(img));

    // ==== SMOOTH SCROLLING FOR NAVIGATION WITH OFFSET ====
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.hash) {
                e.preventDefault();
                const targetSection = document.querySelector(this.hash);
                const offset = 70; // Adjust for fixed navbar
                const position = targetSection.offsetTop - offset;

                window.scrollTo({ top: position, behavior: "smooth" });
            }
        });
    });

    // ==== HIGHLIGHT ACTIVE NAV LINK ON SCROLL ====
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // ==== TOGGLE MOBILE NAVIGATION ====
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".navbar ul");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // ==== CUSTOMIZATION FORM SUBMISSION WITH BETTER FEEDBACK ====
    const customForm = document.getElementById("customForm");
    if (customForm) {
        customForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Create feedback message
            const feedback = document.createElement("p");
            feedback.textContent = "Your customization request has been submitted!";
            feedback.style.color = "#F7E1C1";
            feedback.style.fontWeight = "bold";
            feedback.style.marginTop = "10px";

            // Remove existing message if any
            const existingFeedback = document.querySelector(".form-feedback");
            if (existingFeedback) existingFeedback.remove();

            feedback.classList.add("form-feedback");
            customForm.appendChild(feedback);

            // Reset form after 2 seconds
            setTimeout(() => {
                customForm.reset();
                feedback.remove();
            }, 3000);
        });
    }
});
