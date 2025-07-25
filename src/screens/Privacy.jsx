import React from 'react';
import { FaLock, FaShieldAlt, FaUserLock, FaDatabase, FaCheck,  } from 'react-icons/fa';
import logo from "../assets/logo.png";

function Privacy() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header Section */}
      <div className="bg-gradient-to-l from-secondary to-secondarydark py-16 rounded-lg max-w-7xl mx-auto">
        <div className="container mx-auto px-4 text-center">
          {/* <img src={logo} alt="Mere Humsafar" className="h-16 mx-auto mb-6" /> */}
          <h1 className="text-4xl font-bold text-white mb-4 font-serif">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trust and privacy are sacred to us. Learn how we protect your personal information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Our Commitment to Privacy</h2>
          <p className="text-gray-600 mb-4">
            At Mere Humsafar, we understand the sensitive nature of matrimonial information. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with Indian privacy laws.
          </p>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-12">
          {/* Information Collection */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start mb-6">
              <FaDatabase className="text-secondary text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Information We Collect</h2>
                <p className="text-gray-600">
                  To provide our services, we collect necessary information including:
                </p>
              </div>
            </div>
            <ul className="list-disc pl-8 text-gray-600 space-y-2">
              <li>Basic profile information (name, age, education)</li>
              <li>Contact details (email, phone number)</li>
              <li>Family and partner preferences</li>
              <li>Photos (optional and fully controlled by you)</li>
              <li>Communication history on our platform</li>
            </ul>
          </div>

          {/* Data Usage */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start mb-6">
              <FaUserLock className="text-secondary text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-serif">How We Use Your Information</h2>
                <p className="text-gray-600">
                  Your data is used exclusively for matrimonial purposes:
                </p>
              </div>
            </div>
            <ul className="list-disc pl-8 text-gray-600 space-y-2">
              <li>To create and manage your profile</li>
              <li>To suggest compatible matches</li>
              <li>To facilitate communication between interested members</li>
              <li>To improve our services and user experience</li>
              <li>To comply with legal requirements in India</li>
            </ul>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start mb-6">
              <FaLock className="text-secondary text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Data Protection</h2>
                <p className="text-gray-600">
                  We implement robust security measures to protect your information:
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  <FaShieldAlt className="text-secondary mr-2" />
                  Technical Measures
                </h3>
                <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Regular security audits</li>
                  <li>Secure servers located in India</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  <FaShieldAlt className="text-secondary mr-2" />
                  Privacy Controls
                </h3>
                <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1">
                  <li>Profile visibility settings</li>
                  <li>Photo protection options</li>
                  <li>Contact information safeguards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start mb-6">
              <FaShieldAlt className="text-secondary text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Your Privacy Rights</h2>
                <p className="text-gray-600">
                  As an Indian user, you have the right to:
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Access your personal data",
                "Request correction of inaccurate information",
                "Delete your account and data",
                "Opt-out of marketing communications",
                "Restrict processing of your data",
                "Lodge complaints with Indian authorities"
              ].map((right, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                    <FaCheck className="text-secondary text-xs" />
                  </div>
                  <span className="text-gray-600">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Privacy;