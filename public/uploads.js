document.getElementById('uploadForm').addEventListener('submit', async (e) => {

    e.preventDefault() // Evita que se recargue la pagina

    const imgFile = document.getElementById('imageInput').files[0] // Capturo la bandera, digo la imagen
    const imgName = document.getElementById('fileName').value.trim()
    const typeFile = ['image/jpeg', 'image/png', 'image/bmp', 'image/tiff', 'image/heif'] // Tipo de archivos aceptados

    // Si intento subir sin ningun archivo seleccionado me dice "Che pive, no te hagas el forro y elegite una imagen"
    if (!imgFile) {
        alert('Por favor, seleccione una imagen')
        return
    }

    // Si intenta subir una imagen sin nombre, lo manda a cagar hasta que le ponga un nombre
    if (!imgName) {
        alert('Por favor, asigne un nombre para la imagen')
        return
    }

    // Solo permite subir el tipo de archivos previamente asignados
    if (!typeFile) {
        alert('Por favor, seleccione un tipo de imagen permitido')
        return
    }
    // No se haga el vivo profe, esta pagina es inexpugnable
    // Tambien se verifican los archivos desde el backend

    // Comprimo la imagen con Compressor
    new Compressor(imgFile, {
        quality: 0.5, // Esta es la calidad a la que va a quedar (va de 0 a 1)

        success: (result) => { // Imagen comprimir, vida buena

            // Esto es lo mismo que antes, se crea la estructura del POST
            const formData = new FormData()
            formData.append('image', result, result.name || imgFile.name) // Agrega la imagen ya comprimia
            formData.append('name', imgName) // Agrega el nombre asignao

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