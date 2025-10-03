import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane } from 'react-icons/fa';
import { MdOutlineSupportAgent, MdContactSupport } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';


function Contact() {
  return (
    <div className="min-h-screen bg-primary max-w-7xl mx-auto">
      {/* Enhanced Top Banner with Floating Elements */}
      <div className="relative h-72 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-vector/bokeh-lights-hearts-background_1048-11716.jpg')] bg-cover bg-center bg-no-repeat opacity-50">
        </div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-secondarydark/80 "></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float-delay"></div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 text-center text-white">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif tracking-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Your journey to finding love starts with a conversation
            </p>
            
          
          </div>
        </div>
      </div>

 

      {/* Interactive Contact Form Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Form Side with Floating Labels */}
            <div className="p-10 md:p-14">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 font-serif">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 text-lg">We'd love to hear from you</p>
              
              <form className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary focus:outline-none peer" 
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-secondary peer-focus:text-sm"
                  >
                    Your Full Name
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary focus:outline-none peer" 
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-secondary peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary focus:outline-none peer" 
                    placeholder=" "
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-secondary peer-focus:text-sm"
                  >
                    Phone Number (Optional)
                  </label>
                </div>
                
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary focus:outline-none peer" 
                    placeholder=" "
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-secondary peer-focus:text-sm"
                  >
                    Your Message
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-white text-secondary border border-secondary py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-secondary/30 mt-6 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Visual Side with Floating Elements */}
            <div className="hidden md:block relative bg-gradient-to-br from-secondary/80 to-secondarydark overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://img.freepik.com/premium-photo/vibrant-red-floral-arrangement_53876-323428.jpg?ga=GA1.1.2139894224.1751015106&semt=ais_hybrid&w=740')] bg-cover bg-no-repeat "></div>
              
              
              <div className="relative h-full flex flex-col justify-center p-10 text-white">
                <MdContactSupport className="text-6xl mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4 font-serif">How Can We Help You?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Whether you have questions about your account, need matchmaking advice, or want to provide feedback, our team is here to assist you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-lg mr-4">
                      <FaHeadset className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Immediate Assistance</h4>
                      <a href="tel:+9118001234567" className="flex items-center text-white/90 hover:text-white mt-1">
                        <FaPhoneAlt className="mr-2" />
                        +91 1800 123 4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-lg mr-4">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Response Time</h4>
                      <p className="text-white/90 mt-1">Typically replies within 12 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>

      {/* Add this to your CSS or style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay-slow {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 6s ease-in-out infinite 1.5s; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delay-slow { animation: float-delay-slow 8s ease-in-out infinite 2s; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
    </div>
  );
}

export default Contact;

