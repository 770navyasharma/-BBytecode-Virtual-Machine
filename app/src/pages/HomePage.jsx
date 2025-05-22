import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Playground from '../components/Playground'

const HomePage = () => {
  return (
    <div className='bg-[#FFEED7]'>
        <Navbar/>
        <div className='pt-15'>
      <HeroSection />
      <Playground/>
      </div>
    </div>
  )
}

export default HomePage