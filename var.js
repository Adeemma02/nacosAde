const menu = document.querySelector('.menu-box');
const navSide = document.querySelector('ul')
// const hamburger = document.querySelector('.hamburger')

menu.addEventListener('click', ()=>{
    navSide.classList.toggle('active')
    menu.classList.toggle('active')
})