



import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart, FaRegEnvelope } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-white relative   text-gray-500 z-20 ">
        {/* <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/gradient-sakura-flower-copy-space-background_52683-44992.jpg?ga=GA1.1.1944470534.1737377007&w=740')] bg-cover bg-center bg-no-repeat opacity-10 -z-10 "></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 z-30">
        {/* About - Full width on mobile */}
        <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
          <div className='flex justify-start items-center'>
            <img src={logo} className='h-12 md:h-14 w-auto' alt="Logo" />
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Connecting hearts with trust and sincerity. A platform for genuine Muslim matrimonial journeys.
          </p>
          <div className="flex items-center space-x-2 text-gray-600 text-sm md:text-base">
            <FaRegEnvelope className="text-secondary" />
            <span>merehumsafar@gmail.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2 md:space-y-3">
          <h3 className="text-base md:text-lg font-semibold text-secondary pb-1 md:pb-2 border-b border-rose-100/30 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 md:space-y-3">
            {['Home', 'About', 'Success Stories', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-secondary transition-colors duration-300 flex items-center group text-sm md:text-base"
                >
                  <span className="w-1 h-1 bg-rose-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="space-y-2 md:space-y-3">
          <h3 className="text-base md:text-lg font-semibold text-secondary pb-1 md:pb-2 border-b border-rose-100/30 inline-block">
            Legal
          </h3>
          <ul className="space-y-2 md:space-y-3">
            {['Privacy Policy', 'Terms of Service', 'Verification Policy'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-secondary transition-colors duration-300 flex items-center group text-sm md:text-base"
                >
                  <span className="w-1 h-1 bg-rose-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Newsletter - Full width on mobile */}
        <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-5">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-secondary pb-1 md:pb-2 border-b border-rose-100/30 inline-block">
              Follow Us
            </h3>
            <div className="flex space-x-3 md:space-x-4">
              {[
                { icon: <FaFacebookF />, color: 'hover:text-blue-500' },
                { icon: <FaInstagram />, color: 'hover:text-pink-500' },
                { icon: <FaTwitter />, color: 'hover:text-sky-400' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={`text-gray-600 text-base md:text-lg p-2 rounded-full bg-white/10 hover:bg-white/20 ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-semibold text-secondary mb-2 md:mb-3">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-primary w-full rounded-l-md focus:outline-none text-gray-800 text-xs md:text-sm placeholder:text-gray-500"
              />
              <button className="bg-secondary text-primary px-3 py-2 rounded-r-md text-xs md:text-sm transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-rose-100/30 py-4 md:py-6 text-center">
        <p className="text-gray-600 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Mere Humsafar. Made with <FaHeart className="inline text-secondary mx-1" /> for blessed unions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;