import React from 'react';
import couple from "../assets/marriedCouple.png"

const HowItWorksSection = () => { 
  const steps = [
    'Sign up and build your profile with details that matter.',
    'Explore personalized matches based on your preferences.',
    'Show interest, send messages, and get to know each other safely.',
    'Involve families, plan meetings, and move toward a happy union.',
    'Get Support Along the Way.',
  ];

  return (
    <div className=' py-16 w-full relative bg-gradient-to-t from-transparent to-primary'>
     <div className=" relative z-10 ">
        <div className="text-center ">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            How It <span className="text-secondary font-medium">Works</span> 
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 "></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our commitment to creating meaningful connections
          </p>
        </div>
        </div>
   
    <section className=" px-4 max-w-7xl mx-auto  md:px-8 lg:px-16 overflow-hidden min-h-[500px] flex items-center justify-center">
      {/* Background Floral Ornaments with very low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/watercolor-colorful-butterfly-background_23-2150127756.jpg?ga=GA1.1.1944470534.1737377007&w=740')`,
          opacity: 0.08, // Very low opacity to match the subtle background
          
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-8 md:gap-16">
        {/* Left Side: How It Works Text */}
        <div className="w-full md:w-[60%] text-left p-2 ">
        
          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-3 h-3 bg-secondary rounded-full mt-2 mr-3"></span>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Couple Illustration */}
        <div className="w-full  md:w-[40%] flex justify-center items-center p-4">
         
            <img
              src={couple}
              alt="Couple Illustration"
              className="max-w-full h-auto object-contain"
            //   style={{ maxWidth: '500px' }} // Adjust max-width as needed
            />
          
        </div>
      </div>
    </section>
     </div>
  );
};

export default HowItWorksSection;