import { Input, Box, Button, Kbd, Heading, Alert, AlertIcon } from "@chakra-ui/react"
import { useCallback } from "react"
import { useState } from "react"
import { motion } from 'framer-motion'
import { FaMagnifyingGlass } from "react-icons/fa6"



export default function Search({ setSearch, filtered, querySearch }) {
    const [saveSearch, setSaveSearch] = useState('')

    const handleButton = () => {
        setSearch(saveSearch)
    }
    const handleSearch = useCallback((e) => {
        const searchVal = e.target.value
        setTimeout(() => {
            setSaveSearch(searchVal)

        }, 1);
    })

    return (

        <Box

            width={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            mt={2}
        >
            <Heading fontWeight={'light'} mb={5} fontSize={'lg'} mt={5}>
                <Kbd opacity={.5} bgColor={'gray.800'}
                >Presione Enter o Buscar</Kbd>
            </Heading>
            <Box
                display={'flex'} width={'100%'}
                alignItems={'center'} justifyContent={'center'}
            >
                <Input
                    type="search" variant='filled'
                    sx={{ 'Input:focus': { borderColor: 'purple' } }}
                    placeholder={"Buscar por nombre"}
                    onChange={(e) => { handleSearch(e) }}
                    onKeyDown={(e) => { if (e.key === 'Enter') { setSearch(e.target.value) } }}
                    maxW={'lg'}
                    maxLength={40}
                    bgColor={'gray.800'}
                    borderRightRadius={'none'} position={'relative'} />
                <Button borderLeftRadius={'none'} colorScheme='purple' variant='solid' onClick={() => handleButton()}><FaMagnifyingGlass /></Button>
            </Box>
            {
                filtered?.length <= 0 &&
                <Box width={'100%'} >

                    {querySearch != 0 &&
                        <Alert
                            mt={5} status='error' width={'100%'} variant={'subtle'}
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            display={'flex'} alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <AlertIcon />No se han encontrado elementos con el nombre {querySearch}.
                        </Alert>
                    }
                </Box>

            }
        </Box >

    )
}