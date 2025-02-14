document.addEventListener("DOMContentLoaded", function () {
    // Navbar Scroll Effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#660017"; // Darker Royal Burgundy
        } else {
            navbar.style.backgroundColor = "#800020"; // Original Royal Burgundy
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Product Hover Effect
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("mouseenter", () => {
            product.style.transform = "scale(1.05)";
            product.style.transition = "transform 0.3s ease-in-out";
        });
        product.addEventListener("mouseleave", () => {
            product.style.transform = "scale(1)";
        });
    });

    // Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const textarea = document.querySelector("textarea");
            if (textarea.value.trim() === "") {
                alert("Please enter your customization details.");
                event.preventDefault();
            }
        });
    }

    // Dark Mode Toggle (Optional)
    const darkModeBtn = document.createElement("button");
    darkModeBtn.innerText = "Dark Mode";
    darkModeBtn.style.position = "fixed";
    darkModeBtn.style.bottom = "20px";
    darkModeBtn.style.right = "20px";
    darkModeBtn.style.padding = "10px 20px";
    darkModeBtn.style.backgroundColor = "#D72638"; // Rosy Pink
    darkModeBtn.style.color = "#F7E1A1"; // Champagne Gold
    darkModeBtn.style.border = "none";
    darkModeBtn.style.borderRadius = "5px";
    darkModeBtn.style.cursor = "pointer";
    darkModeBtn.style.fontSize = "1rem";

    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#F7E1A1"; // Champagne Gold
            darkModeBtn.innerText = "Light Mode";
        } else {
            document.body.style.backgroundColor = "#1B1F3B"; // Midnight Blue
            document.body.style.color = "#F7E1A1"; // Champagne Gold
            darkModeBtn.innerText = "Dark Mode";
        }
    });
});
