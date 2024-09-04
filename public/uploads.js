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
exitPopUp.addEventListener("click", ()=>{
     uploadPopUp.style.display = "none"
      uploadOverlay.style.display = "none"
})
// Agrega las imagenes
async function loadImages() {

    // Hace una peticion y la convierte en un json para la pagina
    const respuesta = await fetch('/images')
    const images = await respuesta.json()
    // Vacia el div para que no se dupliquen ni se mande cagada
    const gallery = document.querySelector('.newest-move')
    gallery.innerHTML = ''
    // Con el foreach va colocando las imagenes en el div
    images.reverse().slice(0, 9).forEach(filename => { // El reverse() es para que se vallan poniendo en primer lugar las nuevas imagenes
        const imgElement = document.createElement('img')
        imgElement.src = `/uploads/${filename}`
        const newestCard = document.createElement('div')
        newestCard.classList.add('newest-card')
        newestCard.appendChild(imgElement)

        gallery.appendChild(newestCard)
    });
}

document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    event.preventDefault() // Evita que se recargue la pagina y mande cagada

    const formData = new FormData() // Es para poder hacer un objeto despues
    const imgFile = document.getElementById('imageInput').files[0] // Toma la imagen del input
    formData.append('image', imgFile) // La imagen que tomo del imput la comvierte en un objeto

    // Define como manda la imagen y con el wait espera que de respuesta
    const responde = await fetch('/upload', {
        method: 'POST',
        body: formData
    })

    if (responde.ok) { // Si respuesta dar OK, vida buena
        const data = await responde.json()
        alert('¡Tu imagen ha sido subida con exito!')
        uploadPopUp.style.display = "none"
        uploadOverlay.style.display = "none"
        await loadImages()
    } else { // Codigo se revela, ¡MATAR CODIGO!
        alert('Hubo un error.')
        // explotarCodigo()
    }
})