import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

new Swiper('.hero-slider', {
    direction: 'horizontal',
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
})
new Swiper('.newest', {
    direction: "horizontal",
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'progressbar'
    },
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    // breakpoints
    breakpoints: {
        1050: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
            
        }
    },


})

// navbar responsive
const menu = document.querySelector('#menu')
const navbar = document.querySelector('nav')
const navBarUl = navbar.querySelector('ul')


menu.addEventListener('click', ()=>{
    navBarUl.classList.toggle('menuActive')
    menu.classList.toggle('menuActive')
})

// load

const loader = document.querySelector('.loader')

document.addEventListener('DOMContentLoaded', ()=>{
      
            loader.style.display = 'none'
})