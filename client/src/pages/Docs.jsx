// ChakraUI
import { Box, Heading, UnorderedList, ListItem, Badge } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { motion } from "framer-motion";

// Documentacion
export default function Docs() {
    return (
        // Contenedor Docs
        <Box
            as={motion.div}
            initial={{ opacity: 0, transform: 'translateY(2rem)' }}
            animate={{ opacity: 1, transform: 'translate(0)' }}
            mt={5} display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'center'}>
            <Tabs isFitted minW={'xs'} maxW={'3xl'} width={'5xl'} variant='line' colorScheme='purple'>
                <TabList>
                    <Tab>Front End</Tab>
                    <Tab>Back End</Tab>
                    <Tab>Equipo</Tab>
                </TabList>
                <TabPanels>
                    
                    //#region FronEnd
                    {/* Front End */}
                    <TabPanel>
                        {/* Front End */}
                        <Heading fontSize={'2xl'}>
                            Para el Front End se utilizo
                        </Heading>

                        {/* Información */}
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>React: Libreria base</ListItem>
                            <ListItem textColor={'gray.400'}>Framer Motion: Animaciones</ListItem>
                            <ListItem textColor={'gray.400'}>Chakra Ui: Libreria de estilos</ListItem>
                            <ListItem textColor={'gray.400'}>Axios: Para la conexión al Back-End</ListItem>
                        </UnorderedList>

                        {/* Diseño */}
                        <Heading mt={2} fontSize={'2xl'}>
                            Diseño
                        </Heading>

                        {/* Información */}
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>
                                Los esenciales del diseño de está pagina son ChakraUi y Framer Motion.
                                La inspiración del estilo viene de varias partes, principalmente de Twitter y Pinterest.
                            </ListItem>
                            <ListItem textColor={'gray.400'}>El diseño es totalmente responsive gracias a el tipo de estilización que ofrece ChakraUi con los 'sizes' personalizados.</ListItem>
                        </UnorderedList>

                        {/* Galeria */}
                        <Heading mt={2} fontSize={'2xl'}>
                            Galeria
                        </Heading>

                        {/* Información */}
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>
                                La galeria cuenta con un sistema de busqueda por nombre gracias al filtrado de Arrays de JS.
                            </ListItem>
                            <ListItem textColor={'gray.400'}>
                                La galeria es responsive, esta paginada de forma dinamica y posee animaciones en la busqueda, recargando la pagina y al cambiar de pagina.
                            </ListItem>
                        </UnorderedList>

                        {/* Paginas dinamicas */}
                        <Heading mt={2} fontSize={'2xl'}>
                            Paginas dinamicas
                        </Heading>

                        {/* Información */}
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>
                                Las paginas dinamicas que posee está pagina son las que se crean con la ID de cada imagen. Asi conociendo la ID podemos acceder a una imagen especifica.
                            </ListItem>
                            <ListItem textColor={'gray.400'}>
                                En estas paginas podemos encontrar el titulo, descripción, tags y extensión del archivo de la imagen.
                                <br />Ej: <br /> Extensión  <br />  <Badge colorScheme='purple' variant={'solid'}>PNG</Badge>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                    {/* Front End */}
                    //#endregion FronEnd
                    
                    //#region BackEnd
                    {/* BackEnd */}
                    <TabPanel>
                        {/* Back end */}
                        <Heading fontSize={'2xl'}>
                            Para el Back End se utilizo
                        </Heading>

                        {/* Información */}
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>NodeJS: Runtime</ListItem>
                            <ListItem textColor={'gray.400'}>Express: Para hostear la API</ListItem>
                            <ListItem textColor={'gray.400'}>Multer: Libreria que permite subir archivos</ListItem>
                            <ListItem textColor={'gray.400'}>Crypto: Libreria que genera ID's unicas</ListItem>

                        </UnorderedList>
                        {/* Elementos que devuelve la API */}
                        <Heading mt={2} fontSize={'2xl'}>
                            Elementos que devuelve la API
                        </Heading>
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>La API de MIMG devuelve un Array con objetos que poseen los siguientes items:
                                <br />
                                <UnorderedList>
                                    <ListItem textColor={'gray.400'}>uuid: Una id unica que solo ese objeto posee</ListItem>
                                    <ListItem textColor={'gray.400'}>filename: Nombre y extensión del archivo alojado en el servidor</ListItem>
                                    <ListItem textColor={'gray.400'}>name: Nombre otorgado por el usuario para el objeto</ListItem>
                                    <ListItem textColor={'gray.400'}>date: Fecha exacta en que se subio el archivo (hora local) </ListItem>
                                </UnorderedList>
                            </ListItem>
                        </UnorderedList>
                        {/* Formularios */}
                        <Heading mt={2} fontSize={'2xl'}>
                            Formularios
                        </Heading>
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>Cuando enviamos un formulario nos encargamos de:
                                <br />
                                <UnorderedList>
                                    <ListItem textColor={'gray.400'}>Ver si el archivo es del tipo adecuado (png/jpeg/jpg).</ListItem>
                                    <ListItem textColor={'gray.400'}>Si no existe ningún error o falta información.</ListItem>
                                </UnorderedList>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                    {/* BackEnd */}
                    //#endregion BackEnd
                    
                    //#region Team
                    {/* Equipo */}
                    <TabPanel>
                        {/* Titulo */}
                        <Heading fontSize={'2xl'}>
                            Equipo de trabajo
                        </Heading>
                        {/* Información */}
                        <UnorderedList mt={2}>
                            <ListItem textColor={'gray.400'}>Back-End / API: Elias Ortiz</ListItem>
                            <ListItem textColor={'gray.400'}>Front-End / UX / UI: Giuliano Zerda</ListItem>
                            <ListItem textColor={'gray.400'}>UX / UI / Documentación : Antonio Pineda</ListItem>
                        </UnorderedList>
                    </TabPanel>
                    //#endregion Team
                
                </TabPanels>
            </Tabs>
        </Box>
    )
}