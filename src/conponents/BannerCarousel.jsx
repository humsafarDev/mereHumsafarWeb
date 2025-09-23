// // src/components/BannerCarousel.jsx
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     id: 1,
//     image: "https://i.pinimg.com/originals/.../shabbir98138-image.jpg", // turn0image0
//     title: "Find the One Who Completes Your Soul",
//     subtitle: "Cherish Every Moment With Nikah",
//   },
//   {
//     id: 2,
//     image: "https://i.pinimg.com/originals/.../muslim-couple-portrait.jpg", // turn0image4
//     title: "Verified Profiles. Trusted Matches.",
//     subtitle: "Start your journey with confidence.",
//   },
//   {
//     id: 3,
//     image: "https://linandjirsablog.com/.../kulsoom-zeshan.jpg", // turn0image8
//     title: "Love Starts with a Simple Hello",
//     subtitle: "Your perfect match is just a click away.",
//   },
//   {
//     id: 4,
//     image: "https://i.pinimg.com/originals/.../golden-background-couple.jpg", // turn0image10
//     title: "Celebrate Your Forever",
//     subtitle: "Your guiding light to lifelong companionship.",
//   },
// ];



// const BannerCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[500px] overflow-hidden text-white">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <div
//             className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "top",
//               backgroundRepeat: "no-repeat",
//               height: "100%",
//               width: "100%",
//             }}
//           >
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="relative z-10 max-w-2xl">
//               <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
//                 {slide.title}
//               </h1>
//               <p className="text-lg italic mt-2 drop-shadow-sm">
//                 {slide.subtitle}
//               </p>
//               <Link to="/signup">
//                 <button className="mt-6 bg-secondary text-white px-6 py-2 rounded hover:bg-red-600 transition">
//                   Register Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white hover:bg-white/50 p-2 rounded-full z-20"
//       >
//         ❮
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white hover:bg-white/50 p-2 rounded-full z-20"
//       >
//         ❯
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, idx) => (
//           <div
//             key={idx}
//             className={`h-2 w-2 rounded-full ${
//               idx === current ? "bg-white" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BannerCarousel;



// src/components/BannerCarousel.jsx


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     id: 1,
//     image: "https://i.pinimg.com/736x/e5/5d/58/e55d587b9c1b9621f47b96189761c470.jpg",
//     title: "Find the One Who Completes Your Soul",
//     subtitle: "Cherish Every Moment With Nikah",
//   },
//   {
//     id: 2,
//     image: "https://i.pinimg.com/736x/94/38/35/943835f61f02050500d3476ea8522342.jpg",
//     title: "Verified Profiles. Trusted Matches.",
//     subtitle: "Start your journey with confidence.",
//   },
//   {
//     id: 3,
//     image: "https://i.pinimg.com/736x/53/ff/fc/53fffcf21625bd46f359fafa2a3bc5eb.jpg",
//     title: "Love Starts with a Simple Hello",
//     subtitle: "Your perfect match is just a click away.",
//   },

// ];

// const BannerCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[90vh] w-full overflow-hidden text-white">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <div className="w-full h-full flex">
//             {/* Image Section - Full height image with no gap */}
//             <div className="w-[45%] h-full overflow-hidden relative">
//               <img
//                 src={slide.image}
//                 alt="Couple"
//                 className="w-full h-full  object-cover object-center"
//               />
//               {/* Diagonal overlay to blend with text section */}
//               <div className="absolute right-0 top-0 w-24 h-[100%] bg-gradient-to-l from-black to-transparent" />
//             </div>

//             {/* Text Section with sharp diagonal cut */}
//             <div className="w-[55%] relative bg-gradient-to-br from-black to-secondary">
              
             
              
//               {/* Text Content */}
//               <div className="h-full flex flex-col items-start justify-center pl-12 pr-4">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//                   {slide.title}
//                 </h1>
//                 <p className="text-xl italic mb-8 text-white/90">
//                   {slide.subtitle}
//                 </p>
//                 <Link to="/signup">
//                   <button className="bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg hover:scale-105">
//                     Register Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows - Larger and more visible */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 p-3 rounded-full z-20 backdrop-blur-sm transition-all hover:scale-110"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 p-3 rounded-full z-20 backdrop-blur-sm transition-all hover:scale-110"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Enhanced Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
//               idx === current ? "bg-secondary w-8" : "bg-primary hover:bg-white/60 w-3"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BannerCarousel;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../Utils/baseUrl";

const slides = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/e5/5d/58/e55d587b9c1b9621f47b96189761c470.jpg",
    title: "Find the One Who Completes Your Soul",
    subtitle: "Cherish Every Moment With Nikah",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/94/38/35/943835f61f02050500d3476ea8522342.jpg",
    title: "Verified Profiles. Trusted Matches.",
    subtitle: "Start your journey with confidence.",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/53/ff/fc/53fffcf21625bd46f359fafa2a3bc5eb.jpg",
    title: "Love Starts with a Simple Hello",
    subtitle: "Your perfect match is just a click away.",
  },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);
const [bannerData, setBannerData] = useState([]);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);
  const fetchBanner = async() => {

    const res =await axios.get(`${baseUrl}/api/master/banner`);
    
    console.log("banner data", res.data);
    setBannerData(res.data);  
  }

  useEffect(() => {
fetchBanner();

  }, [])

  return (
    <section className="relative h-[90vh]  w-full overflow-hidden text-white">
      {bannerData?.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="w-full h-full flex flex-col lg:flex-row">
            {/* Image Section - Full height on mobile, half width on desktop */}
            <div className="w-full lg:w-[45%] h-[50vh] lg:h-full overflow-hidden relative">
              <img
                src={slide.image}
                alt="Couple"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay for better text visibility on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/70 to-transparent" />
            </div>

            {/* Text Section - Full width on mobile, half on desktop */}
            <div className="w-full lg:w-[55%] h-[50vh] md:h-full relative bg-gradient-to-br from-secondarydark to-secondary flex items-center justify-center lg:justify-start">
              <div className="px-6 lg:pl-12 py-8 lg:py-0 text-center lg:text-left max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl italic mb-8 text-white/90">
                  {slide.subtitle}
                </p>
                <Link to="/signup">
                  <button className="bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-lg hover:scale-105 active:scale-95">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 p-3 rounded-full z-20 backdrop-blur-sm transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 p-3 rounded-full z-20 backdrop-blur-sm transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Enhanced Dots - Centered and responsive */}
      <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;
