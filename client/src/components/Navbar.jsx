import { Box, Button, Img, List, ListItem } from "@chakra-ui/react";
import Logo from './assets/logo.svg'
import { Link } from "react-router-dom";
import { FaBars, FaBookOpen, FaHouse, FaRegImages, FaUpload } from "react-icons/fa6";
import { PATH_HOME, PATH_DOCS, PATH_GALLERY, PATH_UPLOAD } from "../const/const";
import { useState } from "react";


export default function NavBar() {
    const [isOpen, setOpen] = useState(false)

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
            <Button display={{ base: 'flex', md: 'none' }} onClick={() => setOpen(!isOpen)}><FaBars /></Button>
            {/* Navbar menu */}
            <List
                width={{ base: '100%', md: 'auto' }}
                transitionDuration={'2s'}
                display={{ base: isOpen == true ? 'block' : 'none', md: 'flex' }}
                position={{ base: 'absolute', md: 'relative' }}
                top={{ base: '4rem', md: '0' }}
                bgColor={{ base: 'gray.900' }}
                zIndex={'20'}>
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
                <ListItem width={{ base: '100%', md: 'auto' }} ml={{base: 0, md: '2'}}>
                    <Link to={PATH_UPLOAD}>
                        <Button borderRadius={{ base: '0', md: '20px' }} width={{ base: '100%', md: 'auto' }} size={{ base: 'lg', md: 'md' }}
                            colorScheme='purple' variant={'solid'}>
                            <FaUpload style={{ marginRight: '.5rem' }} />
                            Subir
                        </Button>
                    </Link>
                </ListItem>
            </List>

        </Box>
    )

}