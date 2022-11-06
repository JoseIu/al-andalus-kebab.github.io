
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerMenu = mixitup('.menu__content', {
    selectors: {
        target: '.menu__card, .menu__content-title,.menu__content-subtitle, .menu__table'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */ 
mixerMenu.filter('.kebab')

/* Link active products */ 
const linkMenu = document.querySelectorAll('.menu__item')

function activeMenu(){
    linkMenu.forEach(l=> l.classList.remove('active-menu'))
    this.classList.add('active-menu')
}

linkMenu.forEach(l=> l.addEventListener('click', activeMenu))
