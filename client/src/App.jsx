//React 
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'


// Pages
import Gallery from './pages/Gallery'
import ImagePage from './pages/ImagePage'
import { NoMatch } from './pages/404'
import Home from './pages/Home'
import Docs from './pages/Docs'
import UploadPage from './pages/UploadPage'
import Terms from './pages/Terms'
// Components
import NavBar from './components/Navbar'
import { Footer } from './components/Footer'
import { PATH_DOCS, PATH_GALLERY, PATH_HOME, PATH_TERMS, PATH_UPLOAD } from './const/const'

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />
        <main className='page-container'>
          <Routes>

            {/* Home */}
            <Route path={PATH_HOME} element={<Home />}></Route>

            {/* Galeria */}
            <Route path={PATH_GALLERY} element={<Gallery />}></Route>

            {/* Pagina dinamica */}
            <Route path={`${PATH_GALLERY}/image/:imageId`} element={<ImagePage />}></Route>

            {/* Documentación */}
            <Route path={PATH_DOCS } element={<Docs />}></Route>

            {/* Subir Archivos */}
            <Route path={PATH_UPLOAD} element={<UploadPage />}></Route>

            {/* Terminos y Servicio */}
            <Route path={PATH_TERMS} element={<Terms />}></Route>

            {/* 404 Error */}
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
        </main>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
