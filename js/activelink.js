const activeLink = () => {

    // Get elements from DOM
    const links = document.querySelectorAll('.menu__link')
    const listItems = document.querySelectorAll('.menu__item')

    // Make Bold
    const makeBold = (event) => {

        //Def variable
        const parent = event.target.parentNode

        //Remove active class from all parents
        listItems.forEach(item => {
            item.classList.remove('menu__item--current')
        })

        // Add class to clicked link's parent
        parent.classList.add('menu__item--current')
        console.log(event)
    }

    // Add event
    links.forEach(link => {
        link.addEventListener('click', makeBold)
    })

    console.log(links)

}

activeLink()