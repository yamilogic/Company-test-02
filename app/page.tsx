// Home
import React from 'react'
import Hero from "../home/Hero"
import Marquee from "../Components/Marquee"
import Download from "../home/Download"
import CoreFeatures from "../home/CoreFeatures"

import HowToStart from "../home/HowTo"


import CTABanner from "../home/CallToAction"
import Reviews from "../home/Reviews"
import Blog from "../home/Blog"
import Contact from "../home/Contact"
import Navbar from "../Components/Navbar"
import Faq from "../home/Faq"

import Why from "../home/Why"

const Home = () => {
  return (
    
    <div className='transition-all duration-300'>
      
      <Hero/>
      <Marquee/>
      <Download/>
      <CoreFeatures/>
      <Why/>
      
      <HowToStart/>
      <CTABanner/>
      <Reviews/>
      <Blog/>
      <Contact/>

      <Faq/>
      
      </div>
  )
}

export default Home;