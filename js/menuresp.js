const menu = () => {

    // Get elements
    const menuButton = document.querySelector('.menu-resp')
    const menu = document.querySelector('.menu')
    const menuLink = document.querySelectorAll('.menu__link')

    const openMenu = () => {
        
        // Add class to button
        menuButton.classList.toggle('menu-resp--close')

        // Add class to menu
        menu.classList.toggle('menu--opened')
    }

    
    menuButton.addEventListener('click', openMenu)
    menuLink.forEach((menuLink) => {menuLink.addEventListener('click', openMenu)})



}

menu();