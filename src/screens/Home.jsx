import React from 'react'
import BannerCarousel from '../conponents/BannerCarousel'
import TrustFeaturesSection from '../conponents/TrustFeaturesSection'
import HowItWorks from '../conponents/HowItWorks'
import Testimonials from '../conponents/Testimonials'

function Home() {
  return (
    <div>
        <BannerCarousel/>
        <TrustFeaturesSection/>
        <HowItWorks/>
        <Testimonials/>
    </div>
  )
}

export default Home