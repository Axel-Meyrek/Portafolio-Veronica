const btnMenu = document.querySelector('#btnMenu')
const ventanaMenu = document.querySelector('#ventanaMenu')
const itemsMenu = document.querySelectorAll('.menu_item')
const btnModeDark = document.querySelector('#btnModeDark')

const cargarMenu = () => {
    ventanaMenu.classList.toggle('ventanaFlotante--active')
}

const modDark = () => {
    document.body.classList.toggle('modDark')
}


btnMenu.addEventListener('click', cargarMenu)
itemsMenu.forEach( item => {
    item.addEventListener('click', cargarMenu)
})

btnModeDark.addEventListener('click', modDark)