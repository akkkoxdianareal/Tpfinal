// por tema de compatibilidades los importo con const enves de import
const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

// Creo la variable para el server y su puerto
const app = express()
const PORT = 3000

// Le digo que carpetas y archivos usar
app.use(express.static('public'))
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const almacenamiento = multer.diskStorage({
    destination: function(req, file, cb) { // Definir en donde guardo las fotos de mi
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) { // Le doy un nombre unico segun la fecha y hora
        const filename = Date.now() + path.extname(file.originalname)
        cb(null, filename)
    }
})

// Esto es para validar que las imagenes que envian son de mi
const fileFilter = (req, file, cb) => {
    const typesAccept = ['image/jpeg', 'image/png', 'image/bmp', 'image/tiff', 'image/heif'] // Los tipos de archivos que soporta
    if (!typesAccept.includes(file.mimetype)) {
        return cb(new Error('Use archivos con el formato permitido'), false) // Por si se hace el vivo y no sube una foto mia
    }
    cb(null, true) // Si manda una foto mia no pasa nada
}

// Formato para guardar el archivo
const subir = multer({
    storage: almacenamiento,
    fileFilter: fileFilter
})

// Esto es para leer y escribit el JSON
app.post('/upload', subir.single('image'), (req, res) => { // Escuha todas las solicitudes POST del lado del front
    const filename = req.file.filename // Aqui ya se le asigna el nombre

    const images = JSON.parse(fs.readFileSync('imagenes.json', 'utf-8'))
    images.push(filename) // Esto es para agregar el nuevo nombre en el JSON
    fs.writeFileSync('imagenes.json', JSON.stringify(images))

    res.status(200).json({ message: 'Imagen subida', filename: req.file.filename})
})

// Esto es para las peticiones de las imagenes que se hacen en el front
app.get('/images', (req, res) => {
    const images = JSON.parse(fs.readFileSync('imagenes.json', 'utf-8'))
    res.json(images)
})

// Lanzar servidor

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
