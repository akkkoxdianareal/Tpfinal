// Compresor
import Compressor from "compressorjs";
// React
import { useState } from "react"

// Chakra UI
import { Input, Textarea, Alert, AlertIcon, Button, Text, FormLabel, Box, FormControl } from '@chakra-ui/react'
import { motion } from "framer-motion"

// Dependencias  / axios
import axios from "axios"
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa6";

export const FormUpload = () => {

    // Archivo que se va a subir
    const [file, setFile] = useState()

    // Titulo / Nombre de la imagen 
    const [name, setName] = useState("")

    // Descripción breve de la imagen o
    // lo que el usuario desee
    const [description, setDescription] = useState()

    // Tags puesto por el usuario 
    const [tags, setTags] = useState()

    // Status contiene true o false
    // dependiendo si la subida fue exitosa.
    const [status, setStatus] = useState()

    // Mensaje de error que da el compresor al fallar
    const [messageError, setMessage] = useState()

    // Función de subida de los archivos
    async function Upload(e) {

        // Utilizando la libreria CompressorJS
        // creamos un nuevo compresor al cual
        // le agregaremos el archivo que vamos
        // a comprimir
        new Compressor(file, {

            // Definimos la calidad
            quality: 0.5,

            // En caso de que la compresión haya sido exitosa:
            success(result) {

                // Creamos un nuevo FormData que llevara dentro
                // la imagen, el titulo / nombre, descripción
                // y tags que ponga el usuario
                const formData = new FormData()
                setFile(result)
                // Imagen Comprimida = result
                formData.append("image", result, result.name)
                // Titulo / Nombre
                formData.append("name", name)
                // Descripción
                formData.append("description", description)
                // Tags
                formData.append("tags", tags)

                // Si el nombre es mayor a 0 y tenemos imagen:
                if (name.length > 0 && result) {
                    // Hacemos un fetch con el metodo POST (en este caso utilizamos Axios para esto)
                    // y le decimos que lo que va a enviar es el formData que creamos
                    axios.post("http://localhost:3000/upload", formData)
                        // Si hay respuesta
                        // seteamos Status como true
                        // caso contrario soltamos un Error
                        .then((res) => {
                            if (!res.ok) {
                                new Error("Hubo un problema")
                            }
                            setStatus(true)
                        })
                }
            },
            // En caso de error seteamos Status en false
            error: (err) => {
                // 
                setMessage(`${err}`)
                setStatus(false)
            }
        })
        // Previene de recargar la pagina en el onSubmit
        e.preventDefault()

    }
    // Mini comentario: podria andar mejor lo de onChange de los input si guardaramos en otro estado el valor del texto que ingresamos
    // y que cuando se haga el submit se utilice ese nuevo estado que guardamos.
    return (
        <>
            {/* Si status es true, entonces mostraremos una alerta que diga: */}
            {status == true &&
                // Alerta
                <Alert
                    as={motion.div} flexDirection='column' alignItems='center'
                    justifyContent='center' textAlign='center' height={100}
                    status='success' variant={'subtle'}
                    zIndex={100}
                    // Animación
                    initial={{ transform: 'scaleY(0)', transform: 'translateY(-1rem)', opacity: 0 }}
                    animate={{ transform: 'scaleY(1)', transform: 'translateY(0)', opacity: 1 }}
                    transition={{ duration: 1 }}
                    position={'absolute'}
                    top={'4rem'}
                >
                    <AlertIcon />Se subio correctamente

                    {/* Boton a la galeria */}
                    <Link to={'/gallery'}><Button colorScheme={'yellow'} variant='solid'>Ir a Galeria</Button></Link>
                </Alert>
            }

            {/* Si status es false, entonces mostraremos una alerta que diga: */}
            {status == false &&
                <Alert
                    as={motion.div} flexDirection='column' alignItems='center'
                    justifyContent='center' textAlign='center' height={100}
                    status='error' variant={'left-accent'}
                    // Animación
                    initial={{ transform: 'scaleY(0)', transform: 'translateY(-1rem)', opacity: 0 }}
                    animate={{ transform: 'scaleY(1)', transform: 'translateY(0)', opacity: 1 }}
                    transition={{ duration: 1 }}
                    position={'absolute'}
                    top={'4rem'}

                >
                    <AlertIcon />Hubo un error, intentelo nuevamente.

                    {/* Si existe un mensaje de error, mostrarlo */}
                    {messageError && <Text>{messageError}</Text>}

                </Alert>
            }

            {/* Formulario */}
            <form onSubmit={(e) => Upload(e)}>
                <Box
                    as={motion.div}
                    initial={{ opacity: 0, transform: 'translateY(-.5rem)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                    mt={'6rem'}
                    padding={5}
                    borderRadius={10}
                    border={'1px solid'}
                    borderColor={'gray.800'}
                    bgColor={'gray.900'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}>

                    {/* FormControl para estilizar el isRequired */}
                    <FormControl isRequired display={'flex'} flexDirection={'column'}>
                        
                        {/* Input File */}
                        <FormLabel mt={2}>Selecciona una imagen</FormLabel>
                        <Input width={'auto'} textAlign={'center'} variant={'filled'} padding={.5} type="file" onChange={(e) => setFile(e.target.files[0])} name='file' required />

                        {/* Input Titulo / Nombre */}
                        <FormLabel mt={2}>Titulo de la imagen</FormLabel>
                        <Input width={{ base: 'xs', lg: '2xl' }} type="text" variant={'filled'} onChange={(e) => setName(e.target.value)} name='name' placeholder='Ingrese el titulo de la imagen' maxLength='40' required />
                    
                    </FormControl>

                    {/* Input Tags */}
                    <FormLabel mt={2}>Tags / Separados por coma</FormLabel>
                    <Input width={{ base: 'xs', lg: '2xl' }} type="text" variant={'filled'} onChange={(e) => setTags(e.target.value.trim())} name='tag' maxLength='20' placeholder='Ingre tus tags separados por coma' />

                    {/* Input Descipción */}
                    <FormLabel mt={2}>Escribe una descripción</FormLabel>
                    <Textarea width={{ base: 'xs', lg: '2xl' }} resize={"none"} variant={'filled'} onChange={(e) => setDescription(e.target.value)} name='description' maxLength={300} required />

                    {/* Boton de Subir */}
                    <Button mt={10} colorScheme='gray' variant={'solid'} type='submit'><FaUpload />Subir</Button>

                </Box>
            </form>

        </>

    )
}
