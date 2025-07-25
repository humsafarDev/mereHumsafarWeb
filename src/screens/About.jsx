import React from 'react';
import { FaHeart, FaHandsHelping, FaUserShield, FaStar, FaMosque, FaCheck, FaQuoteLeft } from 'react-icons/fa';
import { GiLovers } from 'react-icons/gi';
import logo from "../assets/logo.png";
import hands from "../assets/couple_hands-nobg.png"
import Testimonials from "../conponents/Testimonials"

function About() {
  return (
    <div className="min-h-screen bg-primary max-w-7xl mx-auto ">
      {/* Half Banner Section */}
      <div className="relative h-96 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/realistic-blurred-floral-background_52683-63510.jpg?ga=GA1.1.1944470534.1737377007&semt=ais_hybrid&w=740')] bg-cover bg-center opaci">
          <div className="absolute inset-0 bg-gradient-to-r from-secondarydark to-secondary/80"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-2xl bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <img src={logo} alt="Mere Humsafar" className="h-16 mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">About Mere Humsafar</h1>
              <p className="text-xl text-white/90">
                Connecting Muslim hearts with sincerity, faith, and tradition since 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl ">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Our Sacred Mission</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Mere Humsafar was born from a vision to create meaningful Muslim marriages rooted in Islamic values and mutual understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-secondary/10 to-secondarydark/10 p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Our Journey</h3>
              <p className="text-gray-600 mb-4">
                What began as a small initiative in 2025 has now become India's most trusted Muslim matrimonial platform, with thousands of blessed unions.
              </p>
              <p className="text-gray-600 mb-4">
                Our name reflects our commitment - to be your true companion in the sacred journey of finding your life partner.
              </p>
              <div className="flex items-center text-secondary mt-6">
                <GiLovers className="text-3xl mr-3" />
                <span className="text-lg font-medium">Over 5,000 marriages facilitated</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
              <div className="text-secondary text-4xl mb-3 flex justify-center">
                <FaMosque />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Islamic Values</h4>
              <p className="text-gray-600 text-sm">Sharia-compliant matchmaking</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
              <div className="text-secondary text-4xl mb-3 flex justify-center">
                <FaUserShield />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Verified Profiles</h4>
              <p className="text-gray-600 text-sm">Rigorous verification process</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
              <div className="text-secondary text-4xl mb-3 flex justify-center">
                <FaHandsHelping />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Personal Support</h4>
              <p className="text-gray-600 text-sm">Dedicated relationship guides</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
              <div className="text-secondary text-4xl mb-3 flex justify-center">
                <FaStar />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Success Rate</h4>
              <p className="text-gray-600 text-sm">92% satisfaction rate</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-secondary to-secondarydark rounded-2xl overflow-hidden shadow-xl ">
          <div className="grid md:grid-cols-2">
            <div className="p-12 text-white relative">
              <h2 className="text-3xl font-bold mb-6 font-serif">Why Choose Mere Humsafar?</h2>
              <div className="space-y-4">
                {[
                  "Islamic approach to matchmaking",
                  "Family-oriented platform",
                  "Privacy-focused design",
                  "Cultural understanding",
                  "High success rate",
                  "Personalized matching"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <p className="text-white/90">{item}</p>
                  </div>
                ))}
              <div className="bg-[url('https://img.freepik.com/free-vector/realistic-blurred-floral-background_52683-63510.jpg?ga=GA1.1.1944470534.1737377007&semt=ais_hybrid&w=740')] absolute -top-10 inset-0 opacity-5 bg-no-repeat bg-cover  "></div>
              </div>
            </div>
            <div className="hidden md:block bg-[url('https://i.pinimg.com/736x/3d/28/98/3d2898370fb076b86d6a34bdffbf8343.jpg')] bg-cover bg-center opacity-50 "></div>
          </div>
        </div>

        {/* Testimonial */}
       <Testimonials/>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Begin Your Blessed Journey</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims who found their life partners through our trusted platform.
          </p>
          <button className="bg-gradient-to-r from-secondary to-secondarydark text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg font-medium text-lg">
            Create Your Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;