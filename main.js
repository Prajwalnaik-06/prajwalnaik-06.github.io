/* toggle icon navbar */

// let homeIcon = document.querySelector('#home-icon');
// let navbar = document.querySelector('.navbar');

// homeIcon.onclick = () => {
//     homeIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active');
// }

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('.navbar a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach.apply(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.navbar a[href*=' + id+ ']').classList.add('active');
//             })
//         }
//     })

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     homeIcon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// }




// document.addEventListener("DOMContentLoaded", function () {
//     let homeIcon = document.getElementById("home-icon");
//     let navbar = document.querySelector(".navbar");

//     // Toggle navbar on menu icon click
//     homeIcon.addEventListener("click", function () {
//         homeIcon.classList.remove('fa-xmark');
//         navbar.classList.toggle("active");
        
//     });

//     // Scroll section active link setup
//     let sections = document.querySelectorAll("section");
//     let navLinks = document.querySelectorAll(".navbar a");

//     window.addEventListener("scroll", function () {
//         let scrollY = window.scrollY;

//         sections.forEach((section) => {
//             let sectionTop = section.offsetTop - 50;
//             let sectionHeight = section.offsetHeight;
//             let sectionId = section.getAttribute("id");

//             if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//                 navLinks.forEach((link) => {
//                     link.classList.remove("active");
//                 });

//                 document.querySelector(".navbar a[href='#" + sectionId + "']").classList.add("active");
//             }
//         });
//     });
// });


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