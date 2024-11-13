//renders Herosection,about,gallery,qualities,reservation
import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Gallery from '../components/Gallery'
import Reservation from '../components/Reservation'
const Home = () => {
    return (
      <>
        <HeroSection/>    
        <About/>
        <Gallery/>
        <Qualities/>
        <Reservation/>
      </>
    )
  }
  
  export default Home

 