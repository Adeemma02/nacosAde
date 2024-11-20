const menu = document.querySelector('.menu-box');
const navSide = document.querySelector('ul')

menu.addEventListener('click', ()=>{
    navSide.classList.toggle('active')
})