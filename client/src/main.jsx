import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './themes/theme.jsx'
import { ColorModeScript } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={'dark'} />
      <App />
      {localStorage.clear()}
    </ChakraProvider>

  </StrictMode>
)
