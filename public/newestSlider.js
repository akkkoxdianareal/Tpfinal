// Espera a cargar toda la pagina para poder poner las imagenes
document.addEventListener('DOMContentLoaded', async () => {
    await loadImages()
})
// Agrega las imagenes
async function loadImages() {

    // Hace una peticion y la convierte en un json para la pagina
    const respuesta = await fetch('/images') // Hace la peticion de las imagenes
    const images = await respuesta.json() // Lo que recibe lo convierte en un array
    console.log(images)

    // Vacia el div para que no se dupliquen ni se mande cagada
    const newestSlider = document.querySelector('.newest')
    const gallery = newestSlider.querySelector('.swiper-wrapper')
    gallery.innerHTML = ''

    // Con el foreach va colocando las imagenes en el div
    images.reverse().slice(0, 9).forEach(image => { // El reverse() es para que se vallan poniendo en primer lugar las nuevas imagenes, y el slice() para que solo tome los primeros 9
        const imgElement = document.createElement('img')
        imgElement.src = `/uploads/${image.filename}`
        const newestCard = document.createElement('div')
        newestCard.classList.add('swiper-slide')
        newestCard.appendChild(imgElement)

        gallery.appendChild(newestCard)
    });
}

