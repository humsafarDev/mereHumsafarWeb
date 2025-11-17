import React from "react";
import { FiArrowLeft, FiBell, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ toggleSidebar }) => {
  
  return (
    <header className="bg-white shadow-sm z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
     
        {/* Left: Hamburger Menu + Optional Title */}
        <div className="flex items-center space-x-4">
          {/* Hamburger only on small screens */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-secondary-400 hover:text-primary transition-colors"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Right: Notifications and Back to Website */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-primary-200 transition-colors">
            <Link to="notifications">
              <FiBell className="w-5 h-5 text-secondary-600" />
            </Link>
          </button>

          <Link
            to="/"
            className="flex items-center bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-600 hover:to-secondary-400 space-x-2 bg-secondary-400 text-white rounded-lg p-2 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Website</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
