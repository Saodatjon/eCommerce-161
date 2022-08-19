import React from 'react'
import { GlobalStyles } from './components/GlobalStyles'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CartModal from './components/Modal/CartModal'
import AuthModal from './components/Modal/AuthModal'
import { GlobalFonts } from './components/GlobalFonts'
import SwiperGallery from './components/Sections/SwiperGallery'
import Sections from './components/Sections/Sections'
import Feedback from './components/Sections/Feedback'
import News from './components/Sections/News'
import TakeSection from './components/Sections/Take'
// import './assets/style.css'


function App() {
    return (
        <>
            <GlobalStyles />
            <GlobalFonts />
            <Header />
            <Main />
            <Sections/>
            <SwiperGallery/>
            <Feedback />
            <News />
            <TakeSection/>
            <Footer />
            <CartModal />
            <AuthModal />
        </>
    )
}

export default App
