document.addEventListener('DOMContentLoaded', async () => {
    await loadImages()
    loadGallery()

})



// Pagina actual / siempre 1
let current_page = 1
// Limite de objetos por pagina
const itemsLimit = 12

// Creo una función asinconica para poder cargar los datos de mi API
async function loadGallery() {
    // Acá cargue los datos
    await loadImages()
    // variable que puede cambiar cuando apliquemos el filtro
    var IMG_NEW_OLD = image_e.reverse()
    // Acá llamo a la funcion que crea las imagenes en la galeria
    createImages(IMG_NEW_OLD)
    // Acá defino las paginas con una operación simple entre la longitud de mi Array y el limite de items, dandome como resultado el total de paginas
    var pages = Math.ceil(image_e.length / itemsLimit)
    // Acá llamo a la función que se encarga de crear los botones 
    pagination(pages)
    filter()

}
// Consigo la galeria del documento
const galleryContainer = document.querySelector('.gallery-container')

// Función que crea las imagenes en la galeria
function createImages(items) {
    // Defino el index
    var indexLastPage = current_page * itemsLimit // Acá consigo la pagina en la que estoy y lo multiplico por mis objetos, eso sera mi ultimo objeto
    var indexFirstPage = indexLastPage - itemsLimit // Acá consigo el primer item de mi index, restando el anterior por el limite de objetos 
    itemsPage = items.slice(indexFirstPage, indexLastPage) // Acá separo mi array entre estos dos, si current_page es igual a 1, tendre los primeros 8 objetos y asi consecutivamente
    itemsPage.forEach(imagenes => {

        // Creacion de los elementos de la lista
        const IMG_CONTAINER = document.createElement('div')
        const IMG = document.createElement('img')
        const TITLE = document.createElement('h3')
        // Agregamos atributos 
        IMG_CONTAINER.setAttribute('class', 'images-container')
        IMG.src = `uploads/${imagenes.filename}`
        TITLE.textContent = `${imagenes.name}`
        // los sumamos al documento
        galleryContainer.appendChild(IMG_CONTAINER)
        IMG_CONTAINER.appendChild(IMG)
        IMG_CONTAINER.appendChild(TITLE)
    })

}


const filterGal = document.querySelector('.filter-top-gal')
// Función de filtrado
const filterContainer = filterGal.querySelector('span')
const filterUl = filterContainer.querySelector('ul')
const filterOptions = filterUl.querySelector('button')
let LOAD_GAL = document.querySelector('.load-gallery')
function filter() {


    filterOptions.addEventListener('click', (e) => {
        console.log(e.currentTarget)
      

        if (filterOptions.innerText == 'Recientes') {
            filterOptions.innerText = 'Antiguos'
    
        }
        else if (filterOptions.innerText == 'Antiguos') {
            filterOptions.innerText = 'Recientes'

        }

        galleryContainer.innerHTML = ''
        IMG_NEW_OLD = image_e.reverse()
        createImages(IMG_NEW_OLD)



    })
}
// Función de pagination
function pagination(TOTAL_PAGES) {

    var container = document.querySelector('.container')

    var paginationWrapper = document.createElement('div')

    paginationWrapper.setAttribute('class', 'pagination-wrapper')
    container.appendChild(paginationWrapper)

    for (var page = 1; page <= TOTAL_PAGES; page++) {

        const buttonPage = document.createElement('button')
        buttonPage.setAttribute('value', page)
        buttonPage.classList.add('btn-pag')
        buttonPage.innerText = `${page}`
        paginationWrapper.appendChild(buttonPage)
        buttonIndex = Number(buttonPage.getAttribute('value'))

        // Creados los botones, haremos que funcionen.
        buttonPage.addEventListener('click', () => {
            galleryContainer.innerHTML = ''
            current_page = buttonPage.getAttribute('value')
            console.log(current_page)
            createImages(image_e)

        })

    }


}








async function loadImages() {
    const respuesta = await fetch('/images')
    const images = await respuesta.json()
    image_e = images

    // images.reverse().forEach(filename => {

    //     const image_e = document.createElement('img')
    //     image_e.src = `/uploads/${filename}`



    //     //     const gal_ImagesContainer = document.createElement('div')
    // //     gal_ImagesContainer.classList.add('images-container')

    // //     galleryContainer.appendChild(gal_ImagesContainer)

    // //     gal_ImagesContainer.appendChild(image_e)

    // //     console.log(images.map(Number))


    // });

}
