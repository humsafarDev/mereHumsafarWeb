import React from 'react';
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { FaHeart, FaQuoteLeft, FaCalendarAlt, FaMapMarkerAlt, FaHeartbeat } from 'react-icons/fa';

const successStories = [
  {
    id: 1,
    coupleName: 'Aisha & Ali',
    weddingDate: 'June 15, 2022',
    location: 'Karachi, Pakistan',
    story: 'We connected through shared values and our love for literature. After months of meaningful conversations, we knew we had found our perfect match. Our families bonded instantly, and our nikkah was everything we dreamed of.',
    photo: 'https://i.pinimg.com/736x/0e/69/48/0e69487e27761a27fa84d2ed9dfd2b15.jpg',
    yearsTogether: '2 years married'
  },
  {
    id: 2,
    coupleName: 'Fatima & Omar',
    weddingDate: 'September 3, 2021',
    location: 'Lahore, Pakistan',
    story: "Living in different cities didn't stop us from finding love. The platform's verification system gave us confidence in each other. After a year of long-distance, we married in a beautiful traditional Pakistani wedding surrounded by family.",
    photo: 'https://i.pinimg.com/736x/b6/f5/ab/b6f5ab5b46fc9e6054a960b27a5173e8.jpg',
    yearsTogether: '3 years married'
  },
  {
    id: 3,
    coupleName: 'Zainab & Usman',
    weddingDate: 'February 14, 2023',
    location: 'Islamabad, Pakistan',
    story: 'We were both skeptical about online matrimonial services, but Allah had other plans. Our first meeting at a family gathering felt like we had known each other for years. Our wedding was a beautiful blend of modern and traditional Pakistani customs.',
    photo: 'https://i.pinimg.com/736x/9f/33/3a/9f333a0cae7b0bc58a9baf4ab8404cf7.jpg',
    yearsTogether: '1 year married'
  },
  {
    id: 4,
    coupleName: 'Sana & Bilal',
    weddingDate: 'November 20, 2020',
    location: 'Rawalpindi, Pakistan',
    story: "As healthcare professionals with busy schedules, we never thought we'd find time for marriage. This platform helped us connect with someone who understood our commitments. Our mehndi and walima ceremonies were filled with joy and Pakistani traditions.",
    photo: "https://i.pinimg.com/736x/eb/51/05/eb510552f96049967187871710eaa660.jpg",
    yearsTogether: '4 years married'
  }
];

function SuccessStories() {
  return (
    <div className="min-h-screen bg-primary my-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
          True Tales of Love & Success
        </h1>
        <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real stories of love and companionship from couples who met through our platform
        </p>
      </div>

      <div className="container mx-auto px-4 space-y-16">
        {successStories.map((story, index) => (
          <div 
            key={story.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
          >
            {/* Couple Photo */}
            <div className="w-full md:w-[30%] h-96 relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={story.photo} 
                alt={story.coupleName} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                {story.yearsTogether}
              </div>
            </div>

            {/* Story Content */}
            <div className="w-full md:w-[70%] bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{story.coupleName}</h2>
                <FaHeart className="text-secondary text-2xl" />
              </div>
              
              <div className="flex items-center text-gray-600 mb-3">
                <FaCalendarAlt className="mr-2 text-secondary" />
                <span>Married on {story.weddingDate}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-6">
                <FaMapMarkerAlt className="mr-2 text-secondary" />
                <span>{story.location}</span>
              </div>

              <div className="relative mb-6">
                <BsFillBalloonHeartFill className="text-secondary/20 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-600 pl-8 italic">
                  {story.story}
                </p>
              </div>

              <button className="bg-gradient-to-r from-secondary to-secondarydark text-white py-2 px-6 rounded-full hover:opacity-90 transition-all duration-300">
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-20 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to begin your own success story?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of Pakistani Muslims finding their perfect match through our trusted platform.
        </p>
        <button className="bg-gradient-to-r from-secondary to-secondarydark text-white py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg font-medium">
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default SuccessStories;