import React from 'react';
import { FaUser, FaHeart, FaImage, FaCog, FaSearch, FaEnvelope, FaLock, FaStar } from 'react-icons/fa';

function DashboardWidgets() {
  // Fake data for matrimonial site
  const profileData = {
  name: "Ayesha Khan",
  age: 25,
  profession: "UI/UX Designer",
  location: "Hyderabad, India",
  completeness: 85,
  lastActive: "2 hours ago"
};

const interestRequests = [
  { id: 1, name: "Mohammad Faizan", age: 28, sent: "1 day ago" },
  { id: 2, name: "Abdul Rahman", age: 30, sent: "3 days ago" },
  { id: 3, name: "Zaid Ali", age: 27, sent: "1 week ago" }
];

const photoRequests = [
  { id: 1, name: "Fatima Syed", age: 24, requested: "Yesterday" },
  { id: 2, name: "Zoya Siddiqui", age: 23, requested: "2 days ago" }
];


  return (
    <div className="min-h-screen w-full p-4 ">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/hand-drawn-floral-wallpaper_52683-67169.jpg?t=st=1753447039~exp=1753450639~hmac=be3911a00385e3ad28afae0ccf05736bfe8541880389d2d88d3e310f81607ca9&w=1380')] bg-cover bg-center bg-no-repeat opacity-5 "></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Profile Widget - 2 columns on medium+ screens */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-3xl">
                {profileData.name.charAt(0)}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-6 h-6 border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{profileData.name}, {profileData.age}</h2>
              <p className="text-gray-600">{profileData.profession}</p>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                <FaSearch className="text-blue-500" /> {profileData.location}
              </p>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Profile Completeness</span>
                  <span className="font-medium">{profileData.completeness}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" 
                    style={{ width: `${profileData.completeness}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 text-secondary  px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <FaStar className="text-yellow-500" /> Premium Member
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex justify-between">
              <div className="text-center">
                <p className="text-gray-500 text-sm">Last Active</p>
                <p className="font-medium">{profileData.lastActive}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">Matches</p>
                <p className="font-medium">24</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">Interests</p>
                <p className="font-medium">15</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">Messages</p>
                <p className="font-medium">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interest Requests Widget */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <FaHeart className="text-red-500" /> Interest Requests
            </h3>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
              {interestRequests.length} New
            </span>
          </div>
          <div className="space-y-4">
            {interestRequests.map(request => (
              <div key={request.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  {request.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{request.name}, {request.age}</p>
                  <p className="text-gray-500 text-xs">Sent {request.sent}</p>
                </div>
                <div className="flex gap-1">
                  <button className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    ✓
                  </button>
                  <button className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm font-medium text-secondary  hover:text-blue-800 transition">
            View All Requests
          </button>
        </div>

        {/* Photo Requests Widget */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <FaImage className="text-purple-500" /> Photo Requests
            </h3>
            <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
              {photoRequests.length} New
            </span>
          </div>
          <div className="space-y-4">
            {photoRequests.map(request => (
              <div key={request.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  {request.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{request.name}, {request.age}</p>
                  <p className="text-gray-500 text-xs">Requested {request.requested}</p>
                </div>
                <button className="px-3 py-1 bg-secondary  text-white text-sm rounded-full hover:bg-blue-700 transition">
                  View
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm font-medium text-secondary  hover:text-blue-800 transition">
            View All Requests
          </button>
        </div>

        {/* Settings Widget - 2 columns */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
            <FaCog className="text-gray-500" /> Account Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10  text-secondary  flex items-center justify-center">
                  <FaUser />
                </div>
                <h4 className="font-medium">Profile Settings</h4>
              </div>
              <p className="text-gray-500 text-sm">Update your personal information, education & career details</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FaSearch />
                </div>
                <h4 className="font-medium">Match Preferences</h4>
              </div>
              <p className="text-gray-500 text-sm">Set your partner preferences for better matches</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10  text-secondary flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <h4 className="font-medium">Privacy Settings</h4>
              </div>
              <p className="text-gray-500 text-sm">Control who can see your profile and contact you</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <FaLock />
                </div>
                <h4 className="font-medium">Account Security</h4>
              </div>
              <p className="text-gray-500 text-sm">Change password and manage account security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardWidgets;