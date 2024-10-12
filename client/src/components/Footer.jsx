
// React
import { Link } from "react-router-dom"

// ChakraUI
import { Box, Img, SimpleGrid, Text, List, ListItem } from "@chakra-ui/react"
import { motion } from "framer-motion"
// Logo
import Logo from './assets/mimg_logo_footer.png'

import './main.css/main.css'
import { PATH_DOCS, PATH_TERMS } from "../const/const";
export const Footer = () => {

    return (

        <>
            {/* Footer */}
            <Box as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transitionDuration: '2s' }}
                bgColor={'blackAlpha.300'} width={'100%'} display={'flex'} justifyContent={'center'}
                alignItems={'center'} flexDir={'column'}
                mt={10}
                borderTop={'1px solid'}
                borderColor={'gray.800'}
            >
                {/* Grid */}
                <SimpleGrid mt={2} mb={2} columns={2} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>

                    {/* Logo MIMG */}
                    <Img fill={'gray.400'} mt={2} width={'10'} opacity={.5} mr={2} src={Logo} />

                    {/* Enlaces a la pagina */}
                    <List ml={2} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                        {/* Documentación, Terminos y Servcio */}
                        <ListItem display={'flex'} alignItems={'center'} ><Text mr={2} fontSize={'sm'} textColor={'gray.400'}><Link to={PATH_DOCS}>Documentación</Link></Text></ListItem>
                        <ListItem display={'flex'} alignItems={'center'} ><Text mr={2} fontSize={'sm'} textColor={'gray.400'}><Link to={PATH_TERMS}>Terminos y condiciones</Link></Text></ListItem>
                    </List>
                </SimpleGrid>

                {/* Pie de pagina */}
                <Box display={'flex'} mb={5}>

                    {/* Derechos reservados */}
                    <Text textColor={'whiteAlpha.500'} _hover={{ color: 'whiteAlpha.700' }} mr={2}>
                        © MIMG Derechos Reservados
                    </Text>
                </Box>
            </Box>
        </>
    )

}