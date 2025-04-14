
document.addEventListener("DOMContentLoaded", function () {
    let homeIcon = document.getElementById("home-icon");
    let navbar = document.querySelector(".navbar");

    // Toggle navbar and close icon on home icon click
    homeIcon.addEventListener("click", function () {
        homeIcon.classList.toggle('fa-xmark'); // Toggle close icon class
        navbar.classList.toggle("active");     // Toggle navbar active state
    });

    // Scroll section active link setup
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 50;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                document.querySelector(".navbar a[href='#" + sectionId + "']").classList.add("active");
            }
        });
    });
});