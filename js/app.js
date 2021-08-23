$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        fade: true
    });
});

const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

// add event listeners
btn.addEventListener('click', ()=> {
    menu.classList.toggle("hidden");
});