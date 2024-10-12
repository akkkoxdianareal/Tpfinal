import { Box } from '@chakra-ui/react'
import { FormUpload } from '../components/ofUpload/FormUpload'


export default function UploadPage() {
    return (
        // Form upload
        <Box height={'100%'} display={'flex'} alignItems={'center'}  flexDirection={'column'}>
            <FormUpload />
        </Box>
    )

}