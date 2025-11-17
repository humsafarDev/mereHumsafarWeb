import React from 'react'
import BannerCarousel from '../conponents/BannerCarousel'
import TrustFeaturesSection from '../conponents/TrustFeaturesSection'
import HowItWorks from '../conponents/HowItWorks'
import Testimonials from '../conponents/Testimonials'
import ProfilesCorousel from '../conponents/ProfilesCorousel'
import ClientProfilePage from './Dashboard/ClientProfilePage'

function Home() {
  return (
    <div>
        <BannerCarousel/>
        <TrustFeaturesSection/>
        <ProfilesCorousel/>
        <HowItWorks/>
        <Testimonials/>
        {/* <ClientProfilePage/> */}
    </div>
  )
}

export default Home