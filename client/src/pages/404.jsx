import { Button, Container, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const NoMatch = () => {

    return (

        <>
            <Container
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity:0}}
                minH={'70dvh'}
                width={'100%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDir={'column'}>
                <Heading textColor={'purple.300'}>404</Heading>
                <Text mb={5} fontSize={'lg'} textColor={'whiteAlpha.600'}>Está pagina no existe...</Text>
                <Link to='/'><Button>Volver al inicio</Button></Link>
            </Container>
        </>
    )
}