import React from 'react'
import { HomeContainer } from '.'
import Header from '../component/Header/Header'
import Main from '../component/Main/Main'
import Footer from '../component/Footer/Footer'

const Homepage = () => {
    return (
        <HomeContainer>
            <Header />
            <Main />
            <Footer/>
        </HomeContainer>
    )
}

export default Homepage;
