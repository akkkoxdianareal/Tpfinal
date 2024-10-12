//React
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
//Chakra UI
import { Box, Card, Button, Container, Img, CardBody, Heading, Text, CardFooter, Badge, Tag } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
//Dependencias
import axios from "axios";

//Api
import { API_GET } from "../const/const";
import { API_STORAGE } from "../const/const";

//Css
import '../components/main.css/main.css'

// Pagina individual de cada Imagen

export default function ImagePage() {

    // Constante que almacena la información
    const [data, setData] = useState()

    // Fetch hacia la API para conseguir las imagenes
    async function fetchImages() {
        await axios.get(API_GET)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))

    }
    // Cargo la función cuando se carga la pagina
    useEffect(() => {
        fetchImages()
    }, [])

    const { imageId } = useParams()
    const imageFind = data?.find(images => images.uuid == imageId)
    console.log(imageFind)

    return (
        // Main container
        <Container
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ transform: 'translateX(20rem)' }}
            className='image-wrapper'
            display={'flex'}
            alignItems={'center'}
            mt={5}
            flexDirection={'column'} width={'auto'} maxW={'3xl'}
        >
            {/* Boton de volver y Badge de MIMG */}
            <Box minW={'xs'} width={'2xl'} maxW={'80dvw'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

                {/* Boton Volver */}

                <Link to={'/gallery'}>
                    <Button colorScheme='purple'><ArrowBackIcon mr={2} />Volver</Button>
                </Link>

                {/* Badge */}

                <Badge>MIMG</Badge>

            </Box>

            {/* En caso de no tener imageFind (ya que lo consigue desde la ID de la URL) devolvera */}
            {!imageFind &&
                <Heading as={motion.div}
                    initial={{ opacity: 0, transform: 'translateY(-.5rem)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}>
                    No hay imagenes que coincidan con esa ID.
                    {/* Boton a galeria */}
                    <Link to={'/gallery'}>
                        <Button colorScheme="purple">Volver a la galeria</Button>
                    </Link>
                </Heading>
            }

            {/* Si imageFind != undefined entonces nos devolvera el contenido */}

            {imageFind != undefined &&

                // Caja contenedora
                <Box display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    {/* Card Contenedora */}
                    <Card mt={4} mb={4} as={motion.div} initial={{ opacity: 0, transform: 'translateY(-.5rem)' }} animate={{ opacity: 1, transform: 'translateY(0)' }}
                        minW={'xs'} width={'2xl'} maxW={'80dvw'} overflow={'hidden'}
                        border={'1px solid'}
                        borderColor={'gray.800'}
                    >
                        {/* Imagen del Objeto imageFind */}
                        <Img resize={'both'} width={'2xl'} minW={'sm'} maxW={'80dvw'} minH={'25rem'} maxH={'40rem'} objectFit={'contain'} src={API_STORAGE + imageFind.filename}></Img>

                        {/* Cuerpo de la Card */}
                        <CardBody bgColor={'gray.800'}>

                            {/* Titulo */}
                            <Text textColor={'whiteAlpha.500'}>Titulo</Text>

                            {/* Nombre de la Imagen */}

                            <Heading fontSize={'lg'}>{imageFind.name}</Heading>

                            {/* Si existe descipción dentro del objeto mostrara */}

                            {imageFind.description &&
                                <Text>
                                    <Text textColor={'whiteAlpha.500'}>Descripción</Text>
                                    {/* Descripción */}
                                    {imageFind.description}
                                </Text>
                            }

                            {/* Extensión */}

                            <Text textColor={'whiteAlpha.500'}>Extensión</Text>

                            {/* Badge de extensión */}

                            <Badge colorScheme="purple" variant={'solid'} mt={2} fontSize={'1rem'}>
                                {imageFind.filename.split(".").pop()}
                            </Badge>

                            {/* Footer de la Card */}

                            <CardFooter display={'flex'} padding={0} paddingTop={2} mt={4} borderTop={'1px solid'} borderColor={'gray.700'}>

                                {/* Si no existen Tags */}

                                {!imageFind.tags &&
                                    // Contenedor del tag
                                    <Box>
                                        <Text mb={2} textColor={'whiteAlpha.500'}>Tags</Text>
                                        <Tag mr={.5}>No tags</Tag>
                                    </Box>
                                }

                                {/* Si existen Tags */}

                                {imageFind.tags &&
                                    // Contenedor del tag
                                    <Box>
                                        <Text mb={2} textColor={'whiteAlpha.500'}>Tags</Text>

                                        {imageFind.tags.split(',').map(items => (
                                            <Tag mr={.5} colorScheme='green' variant={'solid'}>{items}</Tag>
                                        ))}
                                    </Box>
                                }

                                {/* Contenedor de la Fecha */}

                                <Box ml={5}>
                                    {/* Fecha y Hora de subida de la imagen */}
                                    <Text mb={2} textColor={'whiteAlpha.500'}>
                                        Fecha
                                    </Text>
                                    <Text>{imageFind.date}</Text>
                                </Box>

                            </CardFooter>

                        </CardBody>
                    </Card>

                </Box>
            }

        </Container >
    )

}