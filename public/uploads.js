// Espera a cargar toda la pagina para poder poner las imagenes
document.addEventListener('DOMContentLoaded', async () => {
    await loadImages()
})
// El que sube las imagenes po pup
const uploadPopUp = document.querySelector('.upload-file')
const uploadOverlay = document.querySelector('.overlay')
const exitPopUp = uploadPopUp.querySelector("#salirPopUp")
const uploadBtn = document.querySelector("#subir")
uploadBtn.addEventListener("click", () => {
    uploadPopUp.style.display = "block"
    uploadOverlay.style.display = "flex"
})
exitPopUp.addEventListener("click", () => {
    uploadPopUp.style.display = "none"
    uploadOverlay.style.display = "none"
})
// Agrega las imagenes
async function loadImages() {

    // Hace una peticion y la convierte en un json para la pagina
    const respuesta = await fetch('/images')
    const images = await respuesta.json()
    // Vacia el div para que no se dupliquen ni se mande cagada
    const newestSlider = document.querySelector('.newest')
    const gallery = newestSlider.querySelector('.swiper-wrapper')
    gallery.innerHTML = ''
    // Con el foreach va colocando las imagenes en el div
    images.reverse().slice(0, 9).forEach(filename => { // El reverse() es para que se vallan poniendo en primer lugar las nuevas imagenes
        const imgElement = document.createElement('img')
        imgElement.src = `/uploads/${filename}`
        const newestCard = document.createElement('div')
        newestCard.classList.add('swiper-slide')
        newestCard.appendChild(imgElement)

        gallery.appendChild(newestCard)
    });
}

document.getElementById('uploadForm').addEventListener('submit', async (e) => {

    e.preventDefault() // Evita que se recargue la pagina

    const imgFile = document.getElementById('imageInput').files[0] // Capturo la bandera, digo la imagen

    // Si intento subir sin ningun archivo seleccionado me dice "Che pive, no te hagas el forro y elegite una imagen"
    if (!imgFile) {
        alert('Por favor, seleccione una imagen')
        return
    }

    // Comprimo la imagen con Compressor
    new Compressor(imgFile, {
        quality: 0.5, // Esta es la calidad a la que va a quedar (va de 0 a 1)

        success: (result) => { // Imagen comprimir, vida buena

            // Esto es lo mismo que antes, se crea la estructura del POST
            const formData = new FormData()
            formData.append('image', result, result.name || imgFile.name) // Imagen no tener nombre, asignar nombre

            // Subir imagen
            fetch('/upload', {
                method: 'POST',
                body: formData
            })

                // Segun la respuesta o lanza un error o continua
                .then(response => {
                    if (!response.ok) { // Imagen no subir, quitarse responsabilidad
                        throw new Error('Error al subir la imagen')
                    }
                    return response.json() // Imagen si subir, vida buena
                })

                // Vida buena
                .then(data => {
                    alert('¡Tu imagen ha sido subida con éxito!')
                    uploadPopUp.style.display = 'none'
                    uploadOverlay.style.display = 'none'
                    loadImages()
                })

                // Subir imagen fallar, aceptar responsabilidad
                .catch(error => {
                    console.error('Error:', error)
                    alert('Hubo un error al subir la imagen: ' + error.message)
                })
        },

        // Si imagen no comprimir, ¡MATAR CODIGO!
        error: (err) => {
            console.error('Error de compresión:', err)
            alert('Error al comprimir la imagen: ' + err.message)
            // codigoBoom()
        }
        // Arrepentimiento
    })
})
