import { Box, Button, Img, List, ListItem } from "@chakra-ui/react";
import Logo from './assets/logo.svg'
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaBookOpen, FaHouse, FaRegImages, FaUpload } from "react-icons/fa6";
import { PATH_HOME, PATH_DOCS, PATH_GALLERY, PATH_UPLOAD } from "../const/const";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {

    // Determino si esta abierto

    const [isOpen, setOpen] = useState(false)

    // Consigo la locación

    const location = useLocation()

    // Creo una referencia para el boton

    let refMenu = useRef()

    // Cada que cambie la locación se seteara en false
    // En caso de haber cambiado se seteara en automatico a false.

    useEffect(() => {
        setOpen(false)
    }, [location])

    // Me fijo si estoy tocando en el menu ( para esto se uso una Ref)
    // Si estoy tocando, seteo en true, si no, en false.

    useEffect(() => {
        let handler = (e) => {
            if (refMenu.current.contains(e.target))
                setOpen(true)
            else
                setOpen(false)
        }
        document.addEventListener('mousedown', handler)
    })
    return (
        <Box
            bgColor={'gray.900'}
            borderBottom={'1px solid'}
            borderColor={'gray.800'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-around'}
            width={'100%'}
            height={'4rem'}
            position={'relative'}
        >

            <Img height={'3rem'} src={Logo}></Img>

            {/* Hamburguer menu icon */}
            <Button display={{ base: 'flex', md: 'none' }} colorScheme={isOpen ? 'purple' : 'gray'} onClick={(e) => setOpen(!isOpen)}><FaBars /></Button>

            {/* Navbar menu */}
            <List
                className={window.innerWidth < 768 && isOpen ? 'active' : 'hiden'}
                width={{ base: '100%', md: 'auto' }}
                position={{ base: 'absolute', md: 'relative' }}
                top={{ base: '4rem', md: '0' }}
                bgColor={{ base: 'gray.800', md:'transparent' }}
                zIndex={'20'}
                ref={refMenu}>
                {/* Button 1 */}
                <ListItem width={{ base: '100%', md: 'auto' }}>
                    <Link to={PATH_HOME}>
                        <Button borderRadius={{ base: '0', md: '20px' }} width={{ base: '100%', md: 'auto' }} size={{ base: 'lg', md: 'md' }}
                            colorScheme='gray' variant={'ghost'}
                            textColor={'gray.400'}>
                            <FaHouse style={{ marginRight: '.5rem' }} />
                            Inicio
                        </Button>
                    </Link>
                </ListItem>

                {/* Button 2 */}
                <ListItem width={{ base: '100%', md: 'auto' }}>
                    <Link to={PATH_GALLERY}>
                        <Button borderRadius={{ base: '0', md: '20px' }} width={{ base: '100%', md: 'auto' }} size={{ base: 'lg', md: 'md' }}
                            colorScheme='gray' variant={'ghost'}
                            textColor={'gray.400'}>
                            <FaRegImages style={{ marginRight: '.5rem' }} />
                            Galeria
                        </Button>
                    </Link>
                </ListItem>

                {/* Button 3 */}
                <ListItem width={{ base: '100%', md: 'auto' }}>
                    <Link to={PATH_DOCS}>
                        <Button borderRadius={{ base: '0', md: '20px' }} width={{ base: '100%', md: 'auto' }} size={{ base: 'lg', md: 'md' }}
                            colorScheme='gray' variant={'ghost'}
                            textColor={'gray.400'}>
                            <FaBookOpen style={{ marginRight: '.5rem' }} />
                            Docs
                        </Button>
                    </Link>
                </ListItem>

                {/* Button 4 */}
                <ListItem width={{ base: '100%', md: 'auto' }} ml={{ base: 0, md: '2' }}>
                    <Link to={PATH_UPLOAD}>
                        <Button borderRadius={{ base: '0', md: '20px' }} width={{ base: '100%', md: 'auto' }} size={{ base: 'lg', md: 'md' }}
                            colorScheme='gray' variant={'solid'}>
                            <FaUpload style={{ marginRight: '.5rem' }} />
                            Subir
                        </Button>
                    </Link>
                </ListItem>
            </List>

        </Box>
    )

}