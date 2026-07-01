// Home
import React from 'react'
import Navbar from "@/components/Navbar"
import Hero from "@/sections/home/Hero"
import Marquee from "@/components/CompanyShow"
import Download from "@/sections/home/Download"
import CoreFeatures from "@/sections/home/CoreFeatures"
import WhyRiala from "@/sections/home/WhyRiala"
import Reviews from "@/sections/home/Reviews";
import CTABanner from "@/sections/home/CallToAction"
import HowToStart from "@/sections/home/HowTo"


import BlogPreview from '@/sections/home/BlogPreview';
import ConnectSection from '@/components/ConnectSection';
import FaqSection from '@/sections/home/FaqSection';


const Home = () => {
  return (

    <div className='transition-all duration-300'>

      <Hero />
      <Marquee />
      <Download />
      <CoreFeatures />
      <WhyRiala />
      <HowToStart />
      <CTABanner />
      <Reviews />
      <BlogPreview />
      <ConnectSection />
      <FaqSection />




    </div>
  )
}

export default Home;