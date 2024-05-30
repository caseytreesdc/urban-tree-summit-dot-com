window.location.href = "https://urbantreesummit.org";

window.addEventListener('scroll', function () {
    const scrollDown = document.getElementById('scroll-down');
    if (window.scrollY > 0) {
        scrollDown.classList.add('arrow-hidden');
    } else {
        scrollDown.classList.remove('arrow-hidden');
    }
});

const hamburger = document.querySelector('.hamburger');
const navbarContainer = document.querySelector('.navbar-container');
const header = document.getElementsByTagName('header')[0];

hamburger.addEventListener('click', () => {
    navbarContainer.classList.toggle('active');
    hamburger.classList.toggle('open');
    header.classList.toggle('active');
});

console.log(header)