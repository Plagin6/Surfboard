let button = document.querySelector('#toggle');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
let _toggleMenu = function (e) {
    button.classList.toggle('button_container--active');
    menu.classList.toggle('active');
    body.classList.toggle('body-active-menu');
}

button.addEventListener('click', _toggleMenu)