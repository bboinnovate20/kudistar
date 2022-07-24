// alert("hello")

const body = document.getElementsByTagName('body')
// const header = document.getElementsByClassName('main-header')
// const navbar = document.getElementsByClassName('nav-bar')
// const menu = document.getElementsByClassName('menu-list-t')
const mobileMenu = document.querySelectorAll('.icon')
const menuList = document.querySelector('.list')
const closeBar = document.querySelector('#close')
const view = document.querySelector('.package')

const purchaseButton = document.querySelector('.purchase-now')

purchaseButton.addEventListener('click', () => {
    view.classList.add('display');
})

closeBar.addEventListener('click', () => {
    view.classList.remove('display');
})
mobileMenu[0].addEventListener('click', () => {
    
        mobileMenu[0].classList.remove('menu');
        mobileMenu[1].classList.add('close')
        menuList.style.transition =   `all ${.3}s ease`;
        menuList.classList.add('menu-list');
})

mobileMenu[1].addEventListener('click', () => {
    
    mobileMenu[1].classList.remove('close');
    mobileMenu[0].classList.add('menu')
    menuList.style.transition = 'none';
    menuList.classList.remove('menu-list');
    
})
// mobileMenu.addEventListener('click', () => {
//     console.log('hello')
// })

// document.addEventListener('scroll', (e) => {
//     if(document.body.getBoundingClientRect().y + 100 < 0) {
//         // nav
//     }; 
// })



