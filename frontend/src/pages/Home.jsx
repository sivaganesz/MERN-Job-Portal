import Navbar from '@/pages/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import CatagoryCarousel from './CatagoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
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