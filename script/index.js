const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.fa-times');
const hambIcon = document.querySelector('.fa-bars');
const nav = document.querySelector('.mobileNav');


hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    hambIcon.classList.toggle('show');
    closeIcon.classList.toggle('show');
})