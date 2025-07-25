
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/logo.png";
import headerBottom from "../../assets/headerbottom.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Browse', path: '/browse' },
    { label: 'Success Stories', path: '/success-stories' },
    { label: 'Privacy', path: '/privacy' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center px-6 py-4 bg-primary shadow text-black">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="logo" className='h-12 w-auto' />
        </Link>
        
        <nav className="flex items-center space-x-8 relative">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-3 font-medium group transition-colors ${
                  isActive ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.label}</span>
                  <div className={`absolute -bottom-3 left-0 right-0 mx-auto transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50 '
                  }`}>
                    <img 
                      src={headerBottom} 
                      alt="" 
                      className="h-12 w-full max-w-[80px] mx-auto object-contain" 
                    />
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex-shrink-0 space-x-4">
          <Link to="/login" className="text-secondary font-medium hover:underline">Login</Link>
          <Link 
            to="/dashboard" 
            className="bg-gradient-to-br from-secondarydark to-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Signup
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex justify-between items-center px-4 py-3 bg-primary shadow text-black">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="logo" className='h-10 w-auto' />
        </Link>
        
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-gray-700 hover:text-secondary"
        >
          <FiMenu size={24} />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="relative w-4/5 max-w-sm h-full bg-white shadow-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <Link to="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
              <img src={logo} alt="logo" className='h-10 w-auto' />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-secondary"
            >
              <FiX size={24} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `relative py-3 px-2 font-medium rounded-lg transition-colors ${
                    isActive ? 'text-secondary bg-primary bg-opacity-10' : 'text-gray-700 hover:bg-primary hover:bg-opacity-5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-secondary font-medium py-2 hover:underline"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-secondary text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium shadow-md text-center"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;