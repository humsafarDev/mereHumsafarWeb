import React, { useEffect } from 'react';
import { FaUser, FaHeart, FaImage, FaCog, FaSearch, FaEnvelope, FaLock, FaStar } from 'react-icons/fa';
import { isValid } from '../../../Utils/common'; // Assuming you have a package for email validation
import axios from 'axios';
import { baseUrl } from '../../../Utils/baseUrl';

function DashboardWidgets() {
  // Fake data for matrimonial site

  const userData = JSON.parse(localStorage.getItem("userData"));
  const [loading , setLoading] = React.useState(false);
  const [profiledata, setProfileData] = React.useState(null);
  console.log("userData", userData);

  //https://merehumsafar-backend.onrender.com/api/master/profile/lily@gmail.com

  useEffect(() => {
    setLoading(true);
    const promise = async () => {
      try {

        const response = await fetch(`${baseUrl}/api/master/profile/${userData?.email}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfileData(data);
        setLoading(false);
        //  console.log("Fetched user data:", data);
        localStorage.setItem("userData", JSON.stringify(data));

      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setLoading(false);
      }
    }

    if (isValid(userData?.email)) {
      promise();
    } else {
      console.error("Invalid email address:", userData?.email);
    }


  }, [userData?.email]);
  const findAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const profileData = {
    firstName: profiledata?.firstName,
    middleName: profiledata?.middleName,
    lastName: profiledata?.lastName,
    
    age: findAge(profiledata?.dateOfBirth), // Assuming dob is in 'YYYY-MM-DD' format
    email: profiledata?.email,  
   
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

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    try {
      const formData = new FormData();
      formData.append('image', file);
  
      setLoading(true); // Show loader
  
      // Step 1: Upload image
      const uploadRes = await axios.post(
        `${baseUrl}/api/master/profile/upload`,
        formData
      );
  
      const uploadedImageId = uploadRes?.data?.id;
  
      // ✅ Check if image upload was successful
      if (uploadRes.status === 200 && uploadedImageId) {
        console.log("✅ Image uploaded successfully:", uploadedImageId);
  
        // Step 2: Update profile with uploadedImageId
        const email = profiledata?.email;
  
        const updateRes = await axios.put(
          `${baseUrl}/api/master/complete-profile?email=${email}`,
          { uploadedImageId }
        );
  
        if (updateRes.status === 200) {
          // Step 3: Fetch latest profile
          const latestProfileRes = await fetch(
            `${baseUrl}/api/master/profile/${email}`
          );
  
          if (!latestProfileRes.ok) {
            throw new Error("❌ Failed to fetch latest profile data");
          }
  
          const latestProfileData = await latestProfileRes.json();
          setProfileData(latestProfileData);
          localStorage.setItem("userData", JSON.stringify(latestProfileData));
          console.log("✅ Latest profile data fetched");
        } else {
          console.error("❌ Profile update failed");
        }
      } else {
        console.error("❌ Image upload failed");
        return; // stop further execution
      }
    } catch (error) {
      console.error("❌ Error during image upload or profile update:", error);
    } finally {
      setLoading(false); // Always hide loader
    }
  };
  
  



  return (
    <>
      {
        loading ? <>
          <div className="flex items-center justify-center min-h-screen">

            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
          </div>
        </>
        :   <div className="min-h-screen w-full p-4 ">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/hand-drawn-floral-wallpaper_52683-67169.jpg?t=st=1753447039~exp=1753450639~hmac=be3911a00385e3ad28afae0ccf05736bfe8541880389d2d88d3e310f81607ca9&w=1380')] bg-cover bg-center bg-no-repeat opacity-5 "></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Profile Widget - 2 columns on medium+ screens */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

            <div className="relative w-24 h-24">
              {/* Profile Image */}
              <img
                src={`${baseUrl}${profiledata?.uploadedImage?.imagePath}`} // fallback image
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-white"
              />

              {/* Green active dot */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-6 h-6 border-2 border-white"></div>

              {/* Upload icon overlay */}
              <label
                htmlFor="profileUpload"
                className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer shadow-md hover:shadow-lg transition"
                title="Upload profile picture"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l3-3m-3 3l-3-3m6-9h.01M6 9h.01" />
                </svg>
                <input
                  id="profileUpload"
                  type="file"
                accept="image/png, image/jpeg, image/jpg"
                  className="hidden"
                onChange={handleImageUpload} // 👇 function to handle upload
                />
              </label>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{profileData.firstName}, {profileData.age}</h2>
              <p className="text-gray-600">{profileData.profession}</p>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                <FaSearch className="text-blue-500" /> {`${profiledata?.country}, ${profiledata?.state}, ${profiledata?.city}`}
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
      }
    </>
  
  );
}

export default DashboardWidgets;