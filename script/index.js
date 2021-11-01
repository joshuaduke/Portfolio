const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobileNav');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('show');
})