// script.js

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {

    let scrollValue = window.scrollY;

    // WHITE navbar
    if(scrollValue < 200){

        navbar.style.backgroundColor = "white";

        navLinks.forEach(link => {
            link.style.color = "black";
        });

        logo.style.color = "black";
    }

    // BLUE navbar
    else if(scrollValue < 500){

        navbar.style.backgroundColor = "#2563eb";

        navLinks.forEach(link => {
            link.style.color = "white";
        });

        logo.style.color = "white";
    }

    // BLACK navbar
    else{

        navbar.style.backgroundColor = "black";

        navLinks.forEach(link => {
            link.style.color = "white";
        });

        logo.style.color = "white";
    }

    // Shadow effect
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

});