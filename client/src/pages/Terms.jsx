import { Box, Text, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Terms() {
    return (
        <Box
            mt={'5rem'}
            as={motion.div}
            initial={{ opacity: 0, transform: 'translateY(-.5rem)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            width={{ base: '100%', lg: '100%' }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box width={{ base: 'xs', lg: 'xl' }}>
                <Heading>Terminos y condiciones</Heading>
                <Text mt={5}>Cuando usted usa MIMG acepta: </Text>
                <UnorderedList>
                    <ListItem textColor={'gray.400'}>No subir contenido subido de tono, o no apto para todo publico.</ListItem>
                    <ListItem textColor={'gray.400'}>No utilizar lenguaje inflamatorio en sus publcaciones.</ListItem>
                    <ListItem textColor={'gray.400'}>No subir contenido que incite al odio.</ListItem>
                    <ListItem textColor={'gray.400'}>No agregar enlances mal intencionados en sus publicaciones.</ListItem>
                    <ListItem textColor={'gray.400'}>Toda publicación que se haga va a ser almacenada y podra ser eliminada por moderación.</ListItem>
                    <ListItem textColor={'gray.400'}>No compartir redes alternativas de incitación al odio.</ListItem>
                </UnorderedList>
                <Text mt={5}>El equipo de MIMG se compromete: </Text>
                <UnorderedList>
                    <ListItem textColor={'gray.400'}>Aceptar la diversidad de pensamiento que se encuentre en los lineamientos anteriores.</ListItem>
                    <ListItem textColor={'gray.400'}>A no eliminar contenido sin justificación creible.</ListItem>
                    <ListItem textColor={'gray.400'}>A no alamacenar información de los usuarios que se conecten.</ListItem>
                    <ListItem textColor={'gray.400'}>A no utilizar cookies invasivas para el usuario.</ListItem>
                    <ListItem textColor={'gray.400'}>A supervisar exhaustivamente lo subido a la pagina.</ListItem>
                </UnorderedList>
            </Box>
        </Box>
    )
}