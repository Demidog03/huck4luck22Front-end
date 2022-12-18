const header = document.querySelector("header")
const menuIcon = header.querySelector(".menu-icon span")
const burgerMenu = header.querySelector(".burger-menu")

menuIcon.addEventListener('click', () => {
    if(menuIcon.innerHTML==='menu'){
        menuIcon.innerHTML='close'
    }
    else{
        menuIcon.innerHTML='menu'
    }
    burgerMenu.classList.toggle('active')

})

