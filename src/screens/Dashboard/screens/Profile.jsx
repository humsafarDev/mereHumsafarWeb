import React, { useState, useRef, useEffect } from 'react';
import { FiEdit2, FiHeart, FiShare2, FiMessageSquare, FiUser, FiMapPin, FiPhone, FiMail, FiEdit, FiCamera, FiSave } from 'react-icons/fi';
import { FaPrayingHands, FaQuran, FaMosque, FaFemale, FaHandsHelping, FaHome, FaUserFriends } from 'react-icons/fa';
import { isValid } from '../../../Utils/common';
import axios from 'axios';
import { baseUrl } from '../../../Utils/baseUrl';

function Profile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
    const [profiledata, setProfileData] = React.useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);


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
  const profileData ={
    name: "Aisha Khan",
    age: 26,
    profession: "Doctor",
    location: "Karachi, Pakistan",
    height: "5'3\"",
    religion: "Muslim",
    sect: "Sunni (Hanafi)",
    education: "MBBS (Aga Khan University)",
    income: "PKR 150,000/month",
    about: "I'm a practicing Muslimah who prays five times daily and observes hijab. I value deen over dunya and seek a partner who shares my commitment to Islamic values.",
    family: {
      father: "Business Owner (Textiles)",
      mother: "Homemaker",
      siblings: "2 brothers, 1 sister"
    },
    religiousPractices: {
      salah: "Regular 5 times daily",
      fasting: "All Ramadan + Sunnah fasts",
      hijab: "Full hijab with abaya",
      quran: "Daily recitation"
    },
    lifestyle: {
      diet: "Halal only",
      smoke: "Never",
      drink: "Never"
    },
    hobbies: ["Islamic studies", "Charity work", "Teaching Quran"],
    profilePhoto: "https://img.freepik.com/free-photo/fashion-model-seaside-covering-her-head-with-black-shawl-sitting-stones_114579-8550.jpg?ga=GA1.1.1944470534.1737377007&semt=ais_hybrid&w=740"
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedInputChange = (parent, e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [name]: value
      }
    }));
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileData(prev => ({
  //         ...prev,
  //         profilePhoto: reader.result
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  

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
    <div className=" mx-auto  font-sans">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        {/* Profile Header */}
        <div className="p-1 flex items-start justify-between bg-gradient-to-r from-secondary/5 to-primary/5">
          <div className="flex items-center">
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
            <div className="ml-4">
                            <h1 className="text-2xl font-bold text-gray-800">{profiledata?.firstName}, {profileData?.age}</h1>
              
              <div className="flex items-center text-secondary/80 mt-1">
                <FaFemale className="mr-1" />
                                 <span>{profileData?.profession}</span>
                
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <FiMapPin className="mr-1" />
                              <span>{profileData?.location}</span>
                
              </div>
            </div>
          </div>
          <button 
            // onClick={() => setIsEditing(!isEditing)}
            className="bg-secondary/10 text-secondary p-2 rounded-full hover:bg-secondary/20 transition-all"
          >
             <FiEdit className="w-5 h-5" />
          </button>
        </div>

        {/* All Sections in One View */}
        <div className="p-6 space-y-8">
          {/* About Section */}
          <div className="bg-white rounded-xl  shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FiUser className="text-secondary mr-2 text-lg" />
              <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
            </div>
           
              <p className="text-gray-700 leading-relaxed">{profileData?.about}</p>
            
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-32 text-gray-500 font-medium">Height</div>
                  <div>
                   
                      <span className="text-gray-700">{profileData?.height}</span>
                    
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 text-gray-500 font-medium">Education</div>
                  <div>
                  
                      <span className="text-gray-700">{profileData?.education}</span>
                    
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 text-gray-500 font-medium">Income</div>
                  <div>
                   
                      <span className="text-gray-700">{profileData?.income}</span>
                    
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Lifestyle</h4>
                <div className="space-y-3">
                  {Object.entries(profileData?.lifestyle).map(([key, value]) => (
                    <div key={key} className="flex items-center bg-secondary/5 px-4 py-2 rounded-lg">
                      <span className="capitalize text-gray-600 w-24">{key}:</span>
                      <span className="font-medium text-secondary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Family Section */}
          <div className="bg-white rounded-xl  shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FaUserFriends className="text-secondary mr-2 text-lg" />
              <h3 className="text-xl font-semibold text-gray-800">Family Background</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-32 text-gray-500 font-medium">Father</div>
                  <div>
                  
                      <span className="text-gray-700">{profileData?.family?.father}</span>
                    
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 text-gray-500 font-medium">Mother</div>
                  <div>
                  
                      <span className="text-gray-700">{profileData.family.mother}</span>
                  
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-32 text-gray-500 font-medium">Siblings</div>
                  <div>
                                          <span className="text-gray-700">{profileData.family.siblings}</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Religious Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FaMosque className="text-secondary mr-2 text-lg" />
              <h3 className="text-xl font-semibold text-gray-800">Religious Practices</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-4 rounded-lg border border-secondary/10">
                <div className="flex items-center text-secondary mb-2">
                  <FaPrayingHands className="mr-2" />
                  <span className="font-medium">Salah</span>
                </div>
               
                  <p className="text-gray-700">{profileData?.religiousPractices?.salah}</p>
                
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-4 rounded-lg border border-secondary/10">
                <div className="flex items-center text-secondary mb-2">
                  <FaQuran className="mr-2" />
                  <span className="font-medium">Quran</span>
                </div>
              
                  <p className="text-gray-700">{profileData?.religiousPractices?.quran}</p>
                
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-4 rounded-lg border border-secondary/10">
                <div className="flex items-center text-secondary mb-2">
                  <FaMosque className="mr-2" />
                  <span className="font-medium">Sect</span>
                </div>
               
                  <p className="text-gray-700">{profileData.sect}</p>
                
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-4 rounded-lg border border-secondary/10">
                <div className="flex items-center text-secondary mb-2">
                  <FaFemale className="mr-2" />
                  <span className="font-medium">Hijab</span>
                </div>
                                 <p className="text-gray-700">{profileData?.religiousPractices?.hijab}</p>
              
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="bg-white rounded-xl  shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FaHandsHelping className="text-secondary mr-2 text-lg" />
              <h3 className="text-xl font-semibold text-gray-800">Hobbies & Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {profileData?.hobbies?.map((hobby, index) => (
                <span key={index} className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl  shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FiPhone className="text-secondary mr-2 text-lg" />
              <h3 className="text-xl font-semibold text-gray-800">Contact Through Wali</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-secondary bg-secondary/5 p-4 rounded-lg">
                <FiPhone className="mr-3 text-lg" />
                <div>
                  <div className="text-sm text-gray-500">Father's Contact</div>
                  <div className="font-medium">+92 300 1234567</div>
                </div>
              </div>
              <div className="flex items-center text-secondary bg-secondary/5 p-4 rounded-lg">
                <FiMail className="mr-3 text-lg" />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">wali@example.com</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 italic mt-4 p-3 bg-gray-50 rounded-lg">
                According to Islamic guidelines, all communication should be through wali
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-gray-50 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-secondary text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-all shadow-md">
            <FiMessageSquare className="mr-2" />
            Send Proposal
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm">
            <FiShare2 className="mr-2" />
            Share Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;