import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: 'false',
    },
    colors: {
        bg_custom: {

        }
    },
    styles: {
        global: {
            body: {
                bg: '#12141b'
            }
        }
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: '20px'
            },
            variants: {
                outline: {
                    border: '1px solid',
                    fontWeight: 'bold',
                }
            }
        },
        Input: {
            field: {
                border: '1px solid #fff'
            },
            addon: {
                border: '1px solid #fff'

            }
        }
    }
}
)
