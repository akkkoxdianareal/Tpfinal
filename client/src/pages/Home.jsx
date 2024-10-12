
// ChakraUi
import { Box, Heading, Button, Img } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Cards } from "../components/ofHome/Cards";
import Mimg from "../components/assets/mimg.png"
import { Link } from "react-router-dom";
import { PATH_DOCS, PATH_GALLERY} from "../const/const";

export default function Home() {

    return (
        <main className='page-container'>
            {/* Wrapper */}

            <Box className='image-wrapper'
                width={'100%'} as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
            >

                {/* Hero */}

                <Box
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    bgBlendMode={'multiply'}
                    id='hero'
                    width={'100%'}
                    height={'30rem'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={{ base: 'column-reverse', lg: 'row' }}>

                    {/* Texto Hero */}
                    <Box
                        as={motion.div}
                        initial={{ opacity: 0, transform: 'translateY(5rem)' }}
                        animate={{ opacity: 1, transform: 'translate(0)' }}
                    >
                        <Heading width={{ base: 'xs', md: 'md' }} mb={5}>Sube imagenes de forma anonima y completamente segura.</Heading>
                        <section>
                            <Link to={PATH_GALLERY}><Button mr={5} colorScheme='gray'>Galeria</Button></Link>
                            <Link to={PATH_DOCS}><Button colorScheme='gray' variant={'outline'}>Documentación</Button></Link>
                        </section>
                    </Box>

                    {/* Image */}

                    <Box
                        as={motion.div}
                        initial={{ opacity: 0, transform: 'translateY(5rem)' }}
                        animate={{ opacity: 1, transform: 'translate(0)' }}
                    >
                        <Img width={{ base: 'xs', lg: 'md' }} src={Mimg} />
                    </Box>

                </Box>

                {/* Cards */}
                <Cards />


                {/* Cards */}
            </Box>
        </main >
    )
}