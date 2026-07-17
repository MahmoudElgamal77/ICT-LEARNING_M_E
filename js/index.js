// ====================================
// Navbar Scroll Effect
// ====================================

window.addEventListener("scroll", function () {

    var navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.style.padding = "10px 0";
        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.padding = "18px 0";
        navbar.style.background = "rgba(255,255,255,.85)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";
    }

});


// ====================================
// Active Link
// ====================================

var links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ====================================
// Smooth Scroll
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        var target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ====================================
// Floating Skills
// ====================================

var badges = document.querySelectorAll(".badge");

badges.forEach(function (badge, index) {

    badge.animate(

        [
            {
                transform: "translateY(0px)"
            },

            {
                transform: "translateY(-12px)"
            },

            {
                transform: "translateY(0px)"
            }

        ],

        {

            duration: 2500 + (index * 250),

            iterations: Infinity

        }

    );

});


// ====================================
// Hero Image Hover
// ====================================

var heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mousemove", function () {

        this.style.transform = "scale(1.03) rotate(-1deg)";
        this.style.transition = ".4s";

    });

    heroImage.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1) rotate(0deg)";

    });

}


// ====================================
// Portfolio Hover
// ====================================

var cards = document.querySelectorAll(".portfolio-card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-15px)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});


// ====================================
// Skill Cards Hover
// ====================================

var skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0) scale(1)";

    });

});


// ====================================
// Fade In On Scroll
// ====================================

var elements = document.querySelectorAll(".skill-card,.portfolio-card,.about-card");

elements.forEach(function (el) {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".7s";

});

window.addEventListener("scroll", reveal);

reveal();

function reveal() {

    elements.forEach(function (el) {

        var top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}


// ====================================
// Button Ripple Effect
// ====================================

var buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 120);

    });

});


// ====================================
// Random Glow On Portfolio
// ====================================

setInterval(function () {

    cards.forEach(function (card) {

        card.style.boxShadow = "0 15px 35px rgba(79,70,229,.08)";

    });

    var random = Math.floor(Math.random() * cards.length);

    if (cards[random]) {

        cards[random].style.boxShadow =
            "0 20px 45px rgba(79,70,229,.35)";

    }

}, 1800);