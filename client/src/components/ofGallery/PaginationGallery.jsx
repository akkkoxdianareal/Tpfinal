
import { Box, Button, Text } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"

export const Pagination = ({ pages, setCurrentPage, currentPage, filtered }) => {

    const PrevButton = () => {
        if (currentPage <= 1)
            setCurrentPage(1)
        else
            setCurrentPage(currentPage - 1)
        console.log(currentPage)

    }
    const NextButton = () => {
        if (currentPage >= pages)
            setCurrentPage(pages)
        else
            setCurrentPage(currentPage + 1)
        console.log(currentPage)
    }
    return (
        <>
            {/* Si exste la información se crea. */}
            {filtered.length > 0 &&
                <Box mt={5} mb={2} width={'100%'} display={'flex'} textAlign={'center'} alignItems={'center'} justifyContent={'center'} height={'auto'} flexWrap={'wrap'}>


                    <Button
                        colorScheme={currentPage == 1 ? 'gray' : 'purple'}
                        width={'1'}
                        className="btn-pagination" m={1} onClick={() => PrevButton()}
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Text display={'flex'}>
                        <Text fontWeight={'bold'} mr={2} ml={2}>{currentPage}</Text> <span style={{ opacity: .5 }}>/</span> <Text textColor={'gray.300'} ml={2} mr={2}>{pages}</Text>
                    </Text>
                    <Button
                        colorScheme={currentPage == pages ? 'gray' : 'purple'}
                        width={'1'}
                        className="btn-pagination" m={1} onClick={() => NextButton()}
                    >
                        <ArrowForwardIcon />
                    </Button>

                </Box >
            }
        </>
    )
}