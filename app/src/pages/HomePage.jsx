import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Playground from '../components/Playground'
import Features from '../components/Features'

const HomePage = () => {
  return (
    <div className='bg-[#FFEED7]'>
        <Navbar/>
        <div className='pt-15'>
      <HeroSection />
      <Playground/>
      <Features/>
      </div>
    </div>
  )
}

export default HomePage