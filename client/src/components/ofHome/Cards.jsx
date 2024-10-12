import { Box, Heading, Card, CardHeader} from "@chakra-ui/react"
import { motion } from "framer-motion"

// Cards Home
export const Cards = () => {

    return (
        < Box display={'flex'} flexDirection={'row'} alignItems={'center'}>

            {/* Contenedor de Cards */}

            <Box
                as={motion.div}
                initial={{ opacity: 0, transform: 'translateY(1rem)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                mt={'5'}
                flexDirection={{ base: 'column', lg: 'row' }}
                width={{ base: 'xs', md: 'md', xl: '5xl' }}
                display={'flex'}
                flexWrap={'wrap'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                {/* Card 1 */}
                <Card margin={{ base: 0, xl: '2' }} marginTop={{ base: '2', xl: '0' }} width={{ base: 'xs', md: 'md' }} bgGradient='linear(to-l, purple.900, purple.600)'>
                    <CardHeader borderBottom={'1px solid'} borderColor={'whiteAlpha.600'}>
                        <Heading fontSize={'lg'} fontWeight={'medium'}>
                            Anonimo y Seguro
                        </Heading>
                    </CardHeader>

                </Card>

                {/* Card 2 */}

                <Card margin={{ base: 0, xl: '2' }} marginTop={{ base: '2', xl: '0' }} width={{ base: 'xs', md: 'md' }} bgGradient='linear(to-l, teal.900, teal.600)'>
                    <CardHeader borderBottom={'1px solid'} borderColor={'whiteAlpha.600'}>
                        <Heading fontSize={'lg'} fontWeight={'medium'}>
                            Facil e intuitivo
                        </Heading>
                    </CardHeader>

                </Card>

                {/* Card 3 */}

                <Card margin={{ base: 0, xl: '2' }} marginTop={{ base: '2', xl: '0' }} width={{ base: 'xs', md: 'md' }} bgGradient='linear(to-l, orange.900, orange.600)'>
                    <CardHeader borderBottom={'1px solid'} borderColor={'whiteAlpha.600'}>
                        <Heading fontSize={'lg'} fontWeight={'medium'}>
                            Ilimitado
                        </Heading>
                    </CardHeader>
                </Card>

                {/* Card 4 */}
                <Card margin={{ base: 0, xl: '2' }} marginTop={{ base: '2', xl: '0' }} width={{ base: 'xs', md: 'md' }} bgGradient='linear(to-l, blue.900, blue.600)'>
                    <CardHeader borderBottom={'1px solid'} borderColor={'whiteAlpha.600'}>
                        <Heading fontSize={'lg'} fontWeight={'medium'}>
                            Rapido
                        </Heading>
                    </CardHeader>
                </Card>

            </Box>

        </Box >
    )
}