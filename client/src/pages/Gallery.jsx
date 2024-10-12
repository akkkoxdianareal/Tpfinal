// React 
import { useState, useMemo } from "react"

// Components
import { ImageComponent } from "../components/ofGallery/ImageCard.jsx"
import { Pagination } from "../components/ofGallery/PaginationGallery.jsx"
import Search from "../components/ofGallery/Search.jsx"

// Api
import { API_GET } from "../const/const"

// Chakra UI
import { Box, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"


// Dependencias
import axios from "axios"

// Css
import '../components/main.css/main.css'


export default function Gallery() {

    // Data 
    const [data, setData] = useState([])

    // Filtered 
    const [filtered, setFiltered] = useState([])

    // Pagina Actual
    const [currentPage, setCurrentPage] = useState(1)

    // Limite de items por pagina
    const itemsPerPage = 12

    // Paginas = Cantidad total de objetos / El limite de items
    let pages = Math.ceil(filtered?.length / itemsPerPage)

    // Ultimo objeto de una pagina
    const lastIndex = currentPage * itemsPerPage

    // Primer objeto de una pagina
    const firstIndex = lastIndex - itemsPerPage

    // inChange
    const [inChange, setChange] = useState(true)

    // Valor de busqueda obtenido del input Search
    const [querySearch, setSearch] = useState('')

    //  Consigo las imagenes
    async function fetchImages() {
        await axios.get(API_GET)
            .then((res) => {
                setData(res.data)
                setFiltered(res.data)
            })

    }

    // Podria utilizar useEffect o useMemo, preferi Memo por optimización, 
    // aunque no significo un cambio significativo...
    useMemo(() => {
        fetchImages()
    }, [])

    // Cada que cambie la pagina o la busqueda (querySearch), 
    //se activara un timeOut de 20 que lo volvera true para 
    //asi realizar una animación
    useMemo(() => {
        setChange(false)
        setTimeout(() => {
            setChange(true)
        }, 20);
    }, [currentPage, querySearch, ''])

    // Filtro utilizando la memoria, 
    // aunque la mejora en rendimiento casi no se nota
    // La constante filtered va a ser igual a 
    // todos los objetos que contengan un valor similar al de querySearch
    useMemo(() => {
        setFiltered(data.filter(items => items.name.toLowerCase().includes(querySearch.toLowerCase())))
        setCurrentPage(1)
    }, [querySearch])



    return (
        <>
            <main className='page-container'>

                {/* image-wrapper */}
                <Box className='image-wrapper'
                    as={motion.div}
                    initial={{ opacity: 0, transform: 'translateY(-.5rem)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                >
                    {/* Input de busqueda */}
                    <Search setSearch={setSearch} filtered={filtered} querySearch={querySearch} />
                    {/* Contenedor de imagenes / Galeria */}
                    <Box
                        justifyContent={'center'}
                        justifyItems={'left'}
                        flexDirection='row'
                        width={'auto'}
                        display={'flex'}
                        flexWrap={'wrap'}
                        mt={5}
                    >
                        <ImageComponent filtered={filtered} firstIndex={firstIndex} lastIndex={lastIndex} inChange={inChange} />

                        {/* Si la cantidad total de filtered es menor o igual a 0, devolvera No Data */}
                        {
                            filtered?.length <= 0 &&
                            <Box width={'100%'} textAlign={'center'} >

                                {querySearch != 0 &&
                                    <Heading textColor={'gray.500'}>No data</Heading>
                                }
                            </Box>

                        }
                    </Box >
                    {/* Paginado */}
                    <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} filtered={filtered} />
                </Box>

            </main>
        </>)
}