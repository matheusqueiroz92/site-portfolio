/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*=" + id + "]").classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-End', 'Engenheiro de Software', 'Engenheiro da Computação'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*==================== dark/light mode ====================*/
const darkToggle = document.querySelector(".dark-toggle");
const secao1 = document.querySelector(".secao1");
const style = document.querySelector(":root");
const logoLight = document.getElementById("logo-light-mode");
const logoDark = document.getElementById("logo-dark-mode");

function handleDarkMode() {
    style.classList.toggle("dark-mode");
    logoLight.classList.toggle("logo-show");
    logoDark.classList.toggle("logo-none")
}

darkToggle.addEventListener("change", handleDarkMode);