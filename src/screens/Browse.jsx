


// import React, { useState } from 'react';
// import { FaSearch, FaHeart, FaRegHeart, FaUser, FaBriefcase, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
// import { GiLovers } from 'react-icons/gi';

// const recommendedProfiles = [
//   {
//     id: 1,
//     name: 'Aisha Khan',
//     age: 28,
//     profession: 'Doctor',
//     location: 'Karachi',
//     photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Looking for a life partner who values education and family. Enjoy traveling and exploring new cultures.',
//     isLiked: false,
//     compatibility: 92,
//     lastActive: '2 hours ago'
//   },
//   {
//     id: 2,
//     name: 'Ali Ahmed',
//     age: 32,
//     profession: 'Software Engineer',
//     location: 'Lahore',
//     photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Seeking a compassionate and understanding partner. Love reading and outdoor activities.',
//     isLiked: true,
//     compatibility: 88,
//     lastActive: 'Today'
//   },
//   {
//     id: 3,
//     name: 'Fatima Raza',
//     age: 26,
//     profession: 'Teacher',
//     location: 'Islamabad',
//     photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Want to build a happy family with shared values. Enjoy cooking and art exhibitions.',
//     isLiked: false,
//     compatibility: 95,
//     lastActive: '1 day ago'
//   },
//   {
//     id: 4,
//     name: 'Omar Sheikh',
//     age: 30,
//     profession: 'Business Owner',
//     location: 'Faisalabad',
//     photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Looking for a partner to share life\'s journey with. Passionate about entrepreneurship and philanthropy.',
//     isLiked: false,
//     compatibility: 85,
//     lastActive: 'Online now'
//   },
//   {
//     id: 5,
//     name: 'Sana Malik',
//     age: 27,
//     profession: 'Architect',
//     location: 'Rawalpindi',
//     photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Creative soul looking for meaningful connection. Love design, photography and hiking.',
//     isLiked: false,
//     compatibility: 90,
//     lastActive: 'Yesterday'
//   },
//   {
//     id: 6,
//     name: 'Bilal Hussain',
//     age: 31,
//     profession: 'Financial Analyst',
//     location: 'Multan',
//     photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Seeking someone who values both career and family life. Enjoy sports and financial planning.',
//     isLiked: false,
//     compatibility: 87,
//     lastActive: '3 days ago'
//   },
//   {
//     id: 7,
//     name: 'Zainab Ali',
//     age: 25,
//     profession: 'Journalist',
//     location: 'Peshawar',
//     photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Looking for an intellectual companion. Love writing, current affairs and coffee shops.',
//     isLiked: false,
//     compatibility: 93,
//     lastActive: 'Online now'
//   },
//   {
//     id: 8,
//     name: 'Usman Khan',
//     age: 29,
//     profession: 'Dentist',
//     location: 'Quetta',
//     photo: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     about: 'Warm-hearted professional seeking serious relationship. Enjoy volunteering and health activities.',
//     isLiked: false,
//     compatibility: 84,
//     lastActive: '1 week ago'
//   }
// ];

// function Browse() {
//   const [profiles, setProfiles] = useState(recommendedProfiles);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');

//   const toggleLike = (id) => {
//     setProfiles(profiles.map(profile => 
//       profile.id === id ? {...profile, isLiked: !profile.isLiked} : profile
//     ));
//   };

//   const filteredProfiles = profiles.filter(profile => {
//     const matchesSearch = 
//       profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       profile.profession.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesFilter = 
//       activeFilter === 'all' || 
//       (activeFilter === 'online' && profile.lastActive.includes('Online')) ||
//       (activeFilter === 'new' && profile.lastActive.includes('hours') || profile.lastActive.includes('Today'));
    
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="min-h-screen bg-primary mx-auto max-w-7xl ">
//       {/* Integrated Banner with Search */}
//       <div className="w-full h-72 md:h-80 relative overflow-hidden rounded-xl">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/d7/a4/55/d7a4551262852aaf5c79c1d6a7b98318.jpg')] bg-cover bg-center bg-no-repeat">
//           <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-secondary/60"></div>
//         </div>
        
//         {/* Content */}
//         <div className="relative h-full flex flex-col items-center justify-center px-4 pt-12 pb-6">
//           <div className="text-center mb-4">
//             <GiLovers className="text-5xl md:text-6xl text-white opacity-90 mb-3 mx-auto" />
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif tracking-wide">
//               Find Your Soulmate
//             </h1>
//             <p className="text-lg text-white/90 font-light">
//               Where Hearts Meet and Love Stories Begin
//             </p>
//           </div>

//           {/* Search Bar Inside Banner */}
//           <div className="w-full max-w-2xl px-4 mt-2">
//             <div className="flex items-center rounded-full overflow-hidden shadow-lg">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="px-6 py-3 w-full outline-none text-gray-700 "
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button className="bg-gradient-to-r from-secondary to-secondarydark text-white px-6 py-3 hover:opacity-90 transition-all duration-300 flex items-center">
//                 <FaSearch className="text-2xl" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-8">
//           <button 
//             onClick={() => setActiveFilter('all')} 
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'all' ? 'bg-secondary text-white' : 'bg-white text-secondary border border-gray-200 hover:bg-purple-50'}`}
//           >
//             All Profiles
//           </button>
//           <button 
//             onClick={() => setActiveFilter('online')} 
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'online' ? 'bg-secondary text-white' : 'bg-white text-secondary border border-gray-200 hover:bg-purple-50'}`}
//           >
//             Online Now
//           </button>
//           <button 
//             onClick={() => setActiveFilter('new')} 
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'new' ? 'bg-secondary text-white' : 'bg-white text-secondary border border-gray-200 hover:bg-purple-50'}`}
//           >
//             New Profiles
//           </button>
//         </div>

//         {/* Recommended Profiles Section */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl font-bold text-black mb-3 font-serif">
//             {activeFilter === 'all' ? 'Handpicked Matches' : 
//              activeFilter === 'online' ? 'Currently Online' : 'New Members'}
//           </h2>
//           <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
//           <p className="text-secondary/80">
//             {filteredProfiles.length} {filteredProfiles.length === 1 ? 'match' : 'matches'} found
//           </p>
//         </div>

//         {/* Profile Grid */}
//         {filteredProfiles.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {filteredProfiles.map(profile => (
//               <div key={profile.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 {/* Profile Image */}
//                 <div className="relative h-64  overflow-hidden">
//                   <img 
//                     src={profile.photo} 
//                     alt={profile.name} 
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
//                   {/* Compatibility Badge */}
//                   <div className="absolute top-3 left-3 bg-secondary text-primary px-2 py-1 rounded-full text-xs font-bold flex items-center">
//                     <FaStar className="mr-1" />
//                     {profile.compatibility}% Match
//                   </div>
                  
//                   {/* Online Status */}
//                   <div className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${profile.lastActive.includes('Online') ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
//                     {profile.lastActive}
//                   </div>
                  
//                   {/* Like Button */}
//                   <button 
//                     onClick={() => toggleLike(profile.id)}
//                     className="absolute bottom-3 right-3 bg-primary p-2 rounded-full shadow-md  transition-all duration-300 hover:scale-110"
//                   >
//                     {profile.isLiked ? (
//                       <FaHeart className="text-secoundary text-lg" />
//                     ) : (
//                       <FaRegHeart className="text-gray-500 text-lg hover:text-secoundary" />
//                     )}
//                   </button>
//                 </div>

//                 {/* Profile Details */}
//                 <div className="p-5">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-lg font-bold text-gray-800">
//                       {profile.name}, <span className="text-gray-600">{profile.age}</span>
//                     </h3>
//                   </div>
                  
//                   <div className="flex items-center text-gray-600 mb-2">
//                     <FaBriefcase className="mr-2 text-secondary text-sm" />
//                     <span className="text-sm">{profile.profession}</span>
//                   </div>
                  
//                   <div className="flex items-center text-gray-600 mb-3">
//                     <FaMapMarkerAlt className="mr-2 text-secondary text-sm" />
//                     <span className="text-sm">{profile.location}</span>
//                   </div>

//                   <p className="text-gray-600 text-xs mb-4 line-clamp-2 ">{profile.about}</p>

//                   <button className="w-full bg-gradient-to-r from-secondary to-secondarydark text-white py-2 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center text-sm font-medium">
//                     <FaUser className="mr-2" />
//                     View Full Profile
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12 flex flex-col justify-center items-center">
//             <div className="text-secondary text-5xl mb-4">
//               <GiLovers />
//             </div>
//             <h3 className="text-xl text-gray-700 font-medium mb-2">No matches found</h3>
//             <p className="text-gray-700/70">Try adjusting your search or filters</p>
//           </div>
//         )}

//         {/* Call to Action */}
//         {filteredProfiles.length > 0 && (
//           <div className="mt-12 text-center">
//             <button className="px-6 py-2 bg-white border-2 border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-purple-200 text-sm">
//               Load More Profiles
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Browse;

import React, { useState } from 'react';
import { FaSearch, FaHeart, FaRegHeart, FaUser, FaBriefcase, FaMapMarkerAlt, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiLovers } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// Ensure your custom CSS for pagination is imported here if it's in a separate file
// For example, if you have a file named 'CustomSwiper.css' for custom dot styles:
// import './CustomSwiper.css';

const recommendedProfiles = [
  {
    id: 1,
    name: 'Aisha Khan',
    age: 28,
    profession: 'Doctor',
    location: 'Karachi',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Looking for a life partner who values education and family. Enjoy traveling and exploring new cultures.',
    isLiked: false,
    compatibility: 92,
    lastActive: '2 hours ago'
  },
  {
    id: 2,
    name: 'Ali Ahmed',
    age: 32,
    profession: 'Software Engineer',
    location: 'Lahore',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Seeking a compassionate and understanding partner. Love reading and outdoor activities.',
    isLiked: true,
    compatibility: 88,
    lastActive: 'Today'
  },
  {
    id: 3,
    name: 'Fatima Raza',
    age: 26,
    profession: 'Teacher',
    location: 'Islamabad',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Want to build a happy family with shared values. Enjoy cooking and art exhibitions.',
    isLiked: false,
    compatibility: 95,
    lastActive: '1 day ago'
  },
  {
    id: 4,
    name: 'Omar Sheikh',
    age: 30,
    profession: 'Business Owner',
    location: 'Faisalabad',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Looking for a partner to share life\'s journey with. Passionate about entrepreneurship and philanthropy.',
    isLiked: false,
    compatibility: 85,
    lastActive: 'Online now'
  },
  {
    id: 5,
    name: 'Sana Malik',
    age: 27,
    profession: 'Architect',
    location: 'Rawalpindi',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Creative soul looking for meaningful connection. Love design, photography and hiking.',
    isLiked: false,
    compatibility: 90,
    lastActive: 'Yesterday'
  },
  {
    id: 6,
    name: 'Bilal Hussain',
    age: 31,
    profession: 'Financial Analyst',
    location: 'Multan',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Seeking someone who values both career and family life. Enjoy sports and financial planning.',
    isLiked: false,
    compatibility: 87,
    lastActive: '3 days ago'
  },
  {
    id: 7,
    name: 'Zainab Ali',
    age: 25,
    profession: 'Journalist',
    location: 'Peshawar',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Looking for an intellectual companion. Love writing, current affairs and coffee shops.',
    isLiked: false,
    compatibility: 93,
    lastActive: 'Online now'
  },
  {
    id: 8,
    name: 'Usman Khan',
    age: 29,
    profession: 'Dentist',
    location: 'Quetta',
    photo: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Warm-hearted professional seeking serious relationship. Enjoy volunteering and health activities.',
    isLiked: false,
    compatibility: 84,
    lastActive: '1 week ago'
  },
  // New profiles added below
  {
    id: 9,
    name: 'Hina Shah',
    age: 24,
    profession: 'Graphic Designer',
    location: 'Hyderabad',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Creative professional looking for someone who appreciates art and design. Enjoy painting and digital art.',
    isLiked: false,
    compatibility: 89,
    lastActive: 'Online now'
  },
  {
    id: 10,
    name: 'Kamran Malik',
    age: 33,
    profession: 'Pilot',
    location: 'Karachi',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Aviation enthusiast seeking a partner to share my love for travel and adventure.',
    isLiked: false,
    compatibility: 91,
    lastActive: 'Today'
  },
  {
    id: 11,
    name: 'Mehak Aslam',
    age: 27,
    profession: 'Psychologist',
    location: 'Lahore',
    photo: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Looking for an emotionally intelligent partner. Value deep conversations and personal growth.',
    isLiked: false,
    compatibility: 94,
    lastActive: '30 minutes ago'
  },
  {
    id: 12,
    name: 'Faisal Iqbal',
    age: 35,
    profession: 'University Professor',
    location: 'Islamabad',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Academic looking for an intellectually stimulating partner. Enjoy literature and philosophical discussions.',
    isLiked: false,
    compatibility: 86,
    lastActive: 'Online now'
  },
  {
    id: 13,
    name: 'Sadia Noor',
    age: 26,
    profession: 'Fashion Designer',
    location: 'Karachi',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Creative spirit seeking someone who appreciates aesthetics and style. Love attending fashion events.',
    isLiked: false,
    compatibility: 90,
    lastActive: 'Today'
  },
  {
    id: 14,
    name: 'Tariq Mahmood',
    age: 31,
    profession: 'Chef',
    location: 'Lahore',
    photo: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Food lover looking for a partner to share culinary adventures. Enjoy experimenting with new recipes.',
    isLiked: false,
    compatibility: 88,
    lastActive: 'Online now'
  },
  {
    id: 15,
    name: 'Nadia Akhtar',
    age: 29,
    profession: 'Environmental Scientist',
    location: 'Islamabad',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Nature lover seeking an eco-conscious partner. Enjoy hiking and environmental activism.',
    isLiked: false,
    compatibility: 93,
    lastActive: '1 hour ago'
  },
  {
    id: 16,
    name: 'Haris Javed',
    age: 34,
    profession: 'Investment Banker',
    location: 'Karachi',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Finance professional looking for a balanced relationship. Enjoy traveling and reading about economics.',
    isLiked: false,
    compatibility: 87,
    lastActive: '2 days ago'
  },
  {
    id: 17,
    name: 'Rabia Sultan',
    age: 25,
    profession: 'Event Planner',
    location: 'Lahore',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Social butterfly looking for an outgoing partner. Love organizing gatherings and meeting new people.',
    isLiked: false,
    compatibility: 89,
    lastActive: 'Online now'
  },
  {
    id: 18,
    name: 'Asim Riaz',
    age: 36,
    profession: 'Civil Engineer',
    location: 'Islamabad',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Looking for a stable, long-term relationship. Enjoy architecture and urban planning.',
    isLiked: false,
    compatibility: 85,
    lastActive: 'Today'
  },
  {
    id: 19,
    name: 'Zara Sheikh',
    age: 23,
    profession: 'Medical Student',
    location: 'Karachi',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Ambitious student looking for someone supportive. Value education and personal development.',
    isLiked: false,
    compatibility: 92,
    lastActive: 'Online now'
  },
  {
    id: 20,
    name: 'Saad Abdullah',
    age: 28,
    profession: 'Marketing Manager',
    location: 'Lahore',
    photo: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    about: 'Creative professional seeking an equally dynamic partner. Enjoy digital marketing and social media trends.',
    isLiked: false,
    compatibility: 90,
    lastActive: 'Yesterday'
  }
];

// Helper component for custom navigation buttons
const CustomSwiperNavigation = ({ prevEl, nextEl }) => (
  <div className="absolute hidden top-[50%] -translate-y-1/2 left-0 right-0 md:flex justify-between z-10 px-4 pointer-events-none md:-px-8">
    <button className={`${prevEl} pointer-events-auto !flex items-center justify-center !h-10 !w-10 !rounded-full !bg-white !text-secondary !shadow-lg transition-all duration-300 hover:!bg-secondary hover:!text-white`}>
      <FaChevronLeft className="text-lg" />
    </button>
    <button className={`${nextEl} pointer-events-auto !flex items-center justify-center !h-10 !w-10 !rounded-full !bg-white !text-secondary !shadow-lg transition-all duration-300 hover:!bg-secondary hover:!text-white`}>
      <FaChevronRight className="text-lg" />
    </button>
  </div>
);

function Browse() {
  const [profiles, setProfiles] = useState(recommendedProfiles);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleLike = (id) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, isLiked: !profile.isLiked } : profile
    ));
  };

  // Filter profiles for different sections
  const newProfiles = profiles.filter(profile =>
    profile.lastActive.includes('hours') || profile.lastActive.includes('Today')
  );

  const onlineNow = profiles.filter(profile =>
    profile.lastActive.includes('Online')
  );

  const mostMatch = [...profiles].sort((a, b) => b.compatibility - a.compatibility).slice(0, 6);

  const ProfileCard = ({ profile }) => (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Profile Image - Smaller on mobile */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Compatibility Badge */}
        <div className="absolute top-3 left-3 bg-secondary text-primary px-2 py-1 rounded-full text-xs font-bold flex items-center">
          <FaStar className="mr-1" />
          {profile.compatibility}% Match
        </div>

        {/* Online Status */}
        <div className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${profile.lastActive.includes('Online') ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
          {profile.lastActive}
        </div>

        {/* Like Button */}
        <button
          onClick={() => toggleLike(profile.id)}
          className="absolute bottom-3 right-3 bg-primary p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
        >
          {profile.isLiked ? (
            <FaHeart className="text-secondary text-lg" />
          ) : (
            <FaRegHeart className="text-gray-500 text-lg hover:text-secondary" />
          )}
        </button>
      </div>

      {/* Profile Details */}
      <div className="p-4 md:p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1 md:mb-2">
            <h3 className="text-base md:text-lg font-bold text-gray-800">
              {profile.name}, <span className="text-gray-600">{profile.age}</span>
            </h3>
          </div>

          <div className="flex items-center text-gray-600 mb-1 md:mb-2">
            <FaBriefcase className="mr-2 text-secondary text-sm" />
            <span className="text-xs md:text-sm">{profile.profession}</span>
          </div>

          <div className="flex items-center text-gray-600 mb-2 md:mb-3">
            <FaMapMarkerAlt className="mr-2 text-secondary text-sm" />
            <span className="text-xs md:text-sm">{profile.location}</span>
          </div>

        

        </div>

        {/* View Full Profile Button - Hidden on mobile */}
        <button className="hidden md:flex w-full bg-gradient-to-r from-secondary to-secondarydark text-white py-2 rounded-lg hover:opacity-90 transition-all duration-300 items-center justify-center text-sm font-medium">
          <FaUser className="mr-2" />
          View Full Profile
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary mx-auto max-w-7xl">
      {/* Integrated Banner with Search */}
      <div className="w-full h-72 md:h-80 relative overflow-hidden rounded-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/d7/a4/55/d7a4551262852aaf5c79c1d6a7b98318.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-secondary/60"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 pt-12 pb-6">
          <div className="text-center mb-4">
            <GiLovers className="text-5xl md:text-6xl text-white opacity-90 mb-3 mx-auto" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif tracking-wide">
              Find Your Soulmate
            </h1>
            <p className="text-lg text-white/90 font-light">
              Where Hearts Meet and Love Stories Begin
            </p>
          </div>

          {/* Search Bar Inside Banner */}
          <div className="w-full max-w-2xl px-4 mt-2">
            <div className="flex items-center rounded-full overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search..."
                className="px-6 py-3 w-full outline-none text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-gradient-to-r from-secondary to-secondarydark text-white px-6 py-3 hover:opacity-90 transition-all duration-300 flex items-center">
                <FaSearch className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* New Profiles Section */}
        <div className="mb-12 relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-black mb-3 font-serif">New Profiles</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-secondary/80">
              {newProfiles.length} {newProfiles.length === 1 ? 'new profile' : 'new profiles'} joined recently
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1.2}
            navigation={{
              prevEl: '.swiper-button-prev-new-profiles',
              nextEl: '.swiper-button-next-new-profiles',
            }}
            pagination={{
              el: '.swiper-pagination-new-profiles',
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            className="pb-10"
          >
            {newProfiles.map(profile => (
              <SwiperSlide key={`new-${profile.id}`} className="h-auto">
                <ProfileCard profile={profile} />
              </SwiperSlide>
            ))}
            {/* Custom Navigation for New Profiles */}
            <CustomSwiperNavigation
              prevEl="swiper-button-prev-new-profiles"
              nextEl="swiper-button-next-new-profiles"
            />
            {/* Custom Pagination for New Profiles - Hidden on mobile */}
            <div className="swiper-pagination-new-profiles custom-swiper-pagination mt-4 !relative !bottom-0 hidden md:block"></div>
          </Swiper>
        </div>

        {/* Online Now Section */}
        <div className="mb-12 relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-black mb-3 font-serif">Online Now</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-secondary/80">
              {onlineNow.length} {onlineNow.length === 1 ? 'member' : 'members'} currently online
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1.2}
            navigation={{
              prevEl: '.swiper-button-prev-online-now',
              nextEl: '.swiper-button-next-online-now',
            }}
            pagination={{
              el: '.swiper-pagination-online-now',
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            className="pb-10"
          >
            {onlineNow.map(profile => (
              <SwiperSlide key={`online-${profile.id}`} className="h-auto">
                <ProfileCard profile={profile} />
              </SwiperSlide>
            ))}
            {/* Custom Navigation for Online Now */}
            <CustomSwiperNavigation
              prevEl="swiper-button-prev-online-now"
              nextEl="swiper-button-next-online-now"
            />
            {/* Custom Pagination for Online Now - Hidden on mobile */}
            <div className="swiper-pagination-online-now custom-swiper-pagination mt-4 !relative !bottom-0 hidden md:block"></div>
          </Swiper>
        </div>

        {/* Most Match Section */}
        <div className="mb-12 relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-black mb-3 font-serif">Best Matches</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-secondary/80">
              Profiles with highest compatibility
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1.2}
            navigation={{
              prevEl: '.swiper-button-prev-most-match',
              nextEl: '.swiper-button-next-most-match',
            }}
            pagination={{
              el: '.swiper-pagination-most-match',
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            className="pb-10"
          >
            {mostMatch.map(profile => (
              <SwiperSlide key={`match-${profile.id}`} className="h-auto">
                <ProfileCard profile={profile} />
              </SwiperSlide>
            ))}
            {/* Custom Navigation for Most Match */}
            <CustomSwiperNavigation
              prevEl="swiper-button-prev-most-match"
              nextEl="swiper-button-next-most-match"
            />
            {/* Custom Pagination for Most Match - Hidden on mobile */}
            <div className="swiper-pagination-most-match custom-swiper-pagination mt-4 !relative !bottom-0 hidden md:block"></div>
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-6 py-2 bg-white border-2 border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-purple-200 text-sm">
            View All Profiles
          </button>
        </div>
      </div>
    </div>
  );
}

export default Browse;