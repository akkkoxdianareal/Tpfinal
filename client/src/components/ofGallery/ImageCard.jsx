import { Card, Heading, Badge, Button, Text, Tag, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { memo } from 'react'
import "./css/gallery-card.css"


export const ImageComponent = memo(({ filtered, firstIndex, lastIndex, inChange }) => {
    console.log(filtered.tags)
    return (
        <>
            {/* Componente de imagen */}
            {
                filtered && filtered.map(items => (
                    < Card key={items} overflow={'hidden'}
                        sx={{
                            '.innerCard': { opacity: 0, transitionProperty: 'all', transitionDuration: '.2s' },
                            '.innerCard:hover': {
                                opacity: 1, transitionDelay: '0',
                                transitionProperty: 'all', transitionDuration: '.2s', backdropFilter: 'blur(10px)'
                            }
                        }}
                        height={400}
                        transitionDuration={.05}
                        backgroundSize={'cover'}
                        bgPosition={'center'}
                        backgroundImage={`http://localhost:3000/uploads/${items.filename}`}
                        minW={'xs'}
                        width={'lg'}
                        maxW={'xl'}
                        _hover={{ borderColor: 'gray.700' }}
                        border={'1px solid'}
                        borderColor={'gray.800'}
                        borderRadius='lg'
                        margin={1}
                        // Animación
                        as={motion.div}
                        initial={{ opacity: 0, transform: 'translateY(-.5rem)' }}
                        animate={(inChange ? { opacity: 1, transitionDuration: 0.15, transform: 'translateY(0)' } : { opacity: 0, transitionDuration: 0.15, transform: 'translateY(-.5rem)' })}
                    >
                        {/* Sección interior de la Card */}
                        <section className='innerCard' >
                            {/* Tags de la sección interior */}
                            <Box display={'flex'}>
                                {items.tags && items.tags.split(',').map(tag => (<Tag variant={'solid'} colorScheme='green' margin={.5}>{tag}</Tag>))}
                                {!items.tags && <Tag>No tag</Tag>}
                            </Box>
                            {/* Nombre, extensión y link */}
                            <Heading fontSize={'xl'} display={'flex'} flexDir={'column'} alignItems={'center'}>
                                <Text textColor={'GrayText'} fontWeight={'medium'} fontSize={'md'} mt={2}>Nombre</Text>
                                <Text mt={1}>{items.name}</Text>
                                <Text textColor={'GrayText'} fontWeight={'medium'} fontSize={'md'} mt={2}>Extensión</Text>
                                <Badge colorScheme='purple' variant={'solid'} mt={2} fontSize={'1rem'}>
                                    {items.filename.split(".").pop()}
                                </Badge>
                            </Heading>
                            <Link to={`/gallery/image/${items.uuid}`}><Button fontSize='lg' variant={'outline'} colorScheme='gray' marginTop={5}><ExternalLinkIcon />Ir a imagen</Button></Link>
                        </section>
                    </Card >
                )
                ).reverse().slice(firstIndex, lastIndex) //Se separa entre el primer objeto de cada pagina y el ultimo
            }
        </>)


})
