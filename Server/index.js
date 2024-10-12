const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const cors = require('cors')

// Creo la variable para el server y su puerto
const app = express()
const PORT = 3000

// Le digo que carpetas y archivos usar
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const almacenamiento = multer.diskStorage({
    destination: function(req, file, cb) { // Definir en donde guardo las fotos de mi
       return cb(null, './uploads/')
    },
    filename: function(req, file, cb) { // Le doy un nombre unico segun la fecha y hora
        const filename = Date.now() + path.extname(file.originalname)
        return cb(null, filename)
    }
})

// Esto es para validar que las imagenes que envian son de mi
const fileFilter = (req, file, cb) => {
    const typesAccept = ['image/jpeg', 'image/png', 'image/jpg'] // Los tipos de archivos que soporta
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
    
    const File = req.file.filename  // Aqui se le asigna la info el archivo a la variable
    const Name = req.body.name  // Aqui le asigna el contenio de "name" a la variable
    const Description = req.body.description
    const Tags = req.body.tags

    const date = new Date() // Creo la variable "date"
    const localDate = date.toLocaleString() // Creo una variable con la hora local de donde esta el servidor
    const hash = crypto.createHash('md5').update(localDate).digest('hex') // Creo un hash unico para cada archivo segun la hora
    const images = JSON.parse(fs.readFileSync(path.join(__dirname, 'uploads', 'db-imagenes.json'), 'utf-8')) // Toma el archivo json con el nombre de las imagenes

    images.push({uuid: hash, filename: File, name: Name, date: localDate, description: Description, tags: Tags}) // Asigno los datos previamente asignados a un bloque en el JSON
   
    fs.writeFileSync(path.join(__dirname, 'uploads', 'db-imagenes.json'), JSON.stringify(images, null, 2)) // Escribe el nuevo contenido en el JSON

    res.status(200).json({ message: 'Imagen subida', filename: req.file.filename})

    console.log('Che man, algun pete subio una imagen a tu pagina')
})

// Esto es para las peticiones de las imagenes que se hacen en el front
app.get('/images', (req, res) => {
    const images = JSON.parse(fs.readFileSync(path.join(__dirname, 'uploads', 'db-imagenes.json'), 'utf-8'))
    res.json(images)
})

// Lanzar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})