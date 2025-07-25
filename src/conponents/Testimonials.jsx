


import React from "react";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aisha Khan",
    location: "Lahore, Pakistan",
    text: "Alhamdulillah, I found my perfect match through this platform. The verification process gave me confidence, and our families connected seamlessly.",
  },
  {
    id: 2,
    name: "Mohammed Ali",
    location: "Dubai, UAE",
    text: "As a busy professional, I appreciated how serious everyone was. We're now happily married with a baby on the way!",
  },
  {
    id: 3,
    name: "Fatima & Omar",
    location: "London, UK",
    text: "The privacy controls made us comfortable. Two years later, we're grateful for this halal journey to finding each other.",
  },
  {
    id: 4,
    name: "Yusuf Ahmed",
    location: "Toronto, Canada",
    text: "The family involvement features made all the difference. Our nikah was exactly six months after we first connected!",
  },
  {
    id: 5,
    name: "Sarah Abdullah",
    location: "Istanbul, Turkey",
    text: "I was skeptical about online platforms, but the genuine profiles and safety measures exceeded my expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-2 text-gray-800">
          Stories of <span className="text-secondary font-medium">Blessed</span> Unions
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>

        <div className="relative">
          {/* Left Gradient */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none"></div>

          {/* Right Gradient */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none"></div>

          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="z-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4 py-6 hide-scrollbar"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="mx-4 w-80 md:w-96 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-[180px] flex flex-col justify-between hide-scrollbar"
              >
                <div className="overflow-y-auto scrollbar-thin pr-1">
                  {/* <FaQuoteLeft className="text-secondary text-2xl " /> */}
                  <p className="text-gray-600  italic mb-4">{testimonial.text}</p>
                </div>
                <div className="border-t border-secondary/20 pt-4">
                  <h4 className="font-medium text-xs text-gray-800">{testimonial.name}</h4>
                  <p className="text-xs text-secondary">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
