// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show-menu");

});


// Close menu when clicking any navigation link

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

    });

});


// ================= NAVBAR SCROLL =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target;

            const originalText = counter.innerText;

            const number = parseInt(originalText);

            const suffix = originalText.replace(number, "");

            let current = 0;

            const increment = Math.ceil(number / 60);

            const updateCounter = () => {

                current += increment;

                if (current >= number) {

                    counter.innerText = number + suffix;

                    return;

                }

                counter.innerText = current + suffix;

                requestAnimationFrame(updateCounter);

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;
    const message = document.getElementById("formMessage");


    // Basic validation

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        course === ""
    ) {

        message.innerText =
            "Please fill all required details.";

        message.style.color = "red";

        return;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        message.innerText =
            "Please enter a valid email address.";

        message.style.color = "red";

        return;

    }


    // Phone validation

    const phonePattern =
        /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        message.innerText =
            "Please enter a valid 10 digit phone number.";

        message.style.color = "red";

        return;

    }


    // Success message

    message.innerText =
        "Thank you " + name + "! Your enquiry has been submitted.";

    message.style.color = "green";


    // Clear form

    contactForm.reset();

});