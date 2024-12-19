import Navbar from '@/pages/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import CatagoryCarousel from './CatagoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CatagoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home