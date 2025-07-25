// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';
// import { BsShieldShaded } from 'react-icons/bs';
// import { GiLoveMystery } from 'react-icons/gi';

// const features = [
//   {
//     icon: <FaCheckCircle className="text-pink-500 text-4xl" />,
//     title: 'Verified Profiles Only',
//     description: 'Every profile goes through a strict verification process to ensure genuine and serious users.',
//   },
//   {
//     icon: <BsShieldShaded className="text-red-500 text-4xl" />,
//     title: 'Privacy First',
//     description: 'Every profile goes through a strict verification process to ensure genuine and serious users.',
//   },
//   {
//     icon: <GiLoveMystery className="text-rose-600 text-4xl" />,
//     title: 'Trusted by Thousands of Families',
//     description: 'Every profile goes through a strict verification process.',
//   },
// ];

// const TrustFeaturesSection = () => {
//   return (
//     <section className="bg-[#fff] py-10 px-4 text-center relative">
//       <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-10">
//         Bringing People <span className="text-rose-500">Together</span>
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {features.map((feature, index) => (
//           <div key={index} className="flex flex-col items-center text-center px-4">
//             {feature.icon}
//             <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
//             <p className="text-sm mt-2 text-gray-600 max-w-xs">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrustFeaturesSection;


import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BsShieldShaded } from 'react-icons/bs';
import { GiLoveMystery } from 'react-icons/gi';

const features = [
  {
    icon: <FaCheckCircle className="text-secondary text-5xl" />,
    title: 'Verified Profiles Only',
    description: 'Every profile goes through a strict verification process to ensure genuine and serious users.',
  },
  {
    icon: <BsShieldShaded className="text-secondary text-5xl" />,
    title: 'Privacy First',
    description: 'Your personal information remains protected with our advanced security measures.',
  },
  {
    icon: <GiLoveMystery className="text-secondary text-5xl" />,
    title: 'Trusted by Thousands',
    description: 'Join a community that has successfully helped countless couples find their perfect match.',
  },
];

const TrustFeaturesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/invitation-card-with-red-color-scheme_53876-58256.jpg?ga=GA1.1.1944470534.1737377007&w=740')] bg-cover bg-center opacity-10 z-0"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Bringing <span className="text-secondary font-medium">Hearts</span> Together
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our commitment to creating meaningful connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-rose-100"
            >
              <div className="flex justify-center flex-col items-center">
                <div className="p-4 bg-rose-50 rounded-full">
                  {feature.icon}
                </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-3 text-gray-600 text-center">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeaturesSection;
