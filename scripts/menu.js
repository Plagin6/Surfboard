let button = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
let _hamburgerMenu = function (e) {
    button.classList.hamburger('button_container--active');
    menu.classList.hamburger('menu--open');
    body.classList.hamburger('body-active-menu');
}

button.addEventListener('click', _hamburgerMenu)