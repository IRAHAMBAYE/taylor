/*=========================================
    PORTFOLIO JAVASCRIPT
=========================================*/

/*=========================================
    LOADER
=========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 500);

    }

});


/*=========================================
    AOS
=========================================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,
        once: true,
        offset: 80

    });

}


/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


/*=========================================
    TYPING EFFECT
=========================================*/

const typing = document.getElementById("typing");

if (typing) {

    const words = [

        "Full-Stack Software Engineer",
        "Python Developer",
        "Django Developer",
        "SaaS Architect",
        "Fintech Integration Specialist"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const word = words[wordIndex];

        if (!deleting) {

            typing.textContent = word.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === word.length) {

                deleting = true;

                setTimeout(type, 1800);

                return;

            }

        } else {

            typing.textContent = word.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, deleting ? 60 : 100);

    }

    type();

}


/*=========================================
    ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

if (sections.length && navItems.length) {

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}


/*=========================================
    STICKY HEADER
=========================================*/

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 12px 30px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}


/*=========================================
    SCROLL TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/*=========================================
    COUNTERS
=========================================*/

const counterSection = document.querySelector(".highlights");

if (counterSection) {

    const counters = document.querySelectorAll(".highlight-box h3");

    let started = false;

    function runCounters() {

        if (started) return;

        const top = counterSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            started = true;

            counters.forEach(function (counter) {

                const target = parseInt(counter.innerText.replace(/\D/g, ""));

                const suffix = counter.innerText.replace(/[0-9]/g, "");

                let count = 0;

                const step = Math.ceil(target / 60);

                const timer = setInterval(function () {

                    count += step;

                    if (count >= target) {

                        count = target;

                        clearInterval(timer);

                    }

                    counter.innerText = count + suffix;

                }, 25);

            });

        }

    }

    window.addEventListener("scroll", runCounters);

}


/*=========================================
    CARD HOVER
=========================================*/

document.querySelectorAll(

    ".skill-card, .project-card, .service-card"

).forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});


/*=========================================
    FOOTER YEAR
=========================================*/

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =

        "© " +

        new Date().getFullYear() +

        " Taylor Irahambaye. All Rights Reserved.";

}


/*=========================================
    CONSOLE
=========================================*/

console.log(

    "%cTaylor Irahambaye Portfolio",

    "color:#38bdf8;font-size:18px;font-weight:bold;"

);

console.log(

    "%cPortfolio Loaded Successfully",

    "color:#22c55e;font-size:13px;"

);
