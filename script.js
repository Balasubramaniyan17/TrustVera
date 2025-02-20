document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        
        if (name === "" || email === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for contacting us, " + name + "!");
        contactForm.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return emailPattern.test(email);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add fade-in animations
    const sections = document.querySelectorAll(".section");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Hover effect for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#003366"; // Dark blue shade from Legance
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "#666666"; // Subtle gray for consistency
        });
    });

    // Button hover effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#B22222"; // Deep red shade for engagement
        });
        button.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#990000"; // Slightly darker red
        });
    });

    // Add logo to header for Jupyter Notebook
    const header = document.querySelector("header");
    const logo = document.createElement("img");
    logo.src = "TrustVera.png"; // Ensure this file is in the same directory as your notebook
    logo.alt = "Trust Vera Logo";
    logo.style.height = "60px";
    logo.style.marginRight = "20px";
    header.prepend(logo);
});
