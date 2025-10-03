import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import ChatBg from "../assets/chatBg.jpeg";
export default function ChatBox() {
  const myProfile = {
    name: "Sailendra",
    age: 27,
    location: "Gorakhpur, India",
    img: "https://via.placeholder.com/100",
  };

  const currentChatUser = {
    name: "Priya",
    age: 25,
    location: "Lucknow, India",
    img: "https://via.placeholder.com/100",
  };

  const recentChats = [
    { id: 1, name: "Amit", img: "https://via.placeholder.com/50" },
    { id: 2, name: "Neha", img: "https://via.placeholder.com/50" },
    { id: 3, name: "Raj", img: "https://via.placeholder.com/50" },
    { id: 4, name: "Anjali", img: "https://via.placeholder.com/50" },
  ];

  return (
    <div
      className="h-screen flex flex-col p-4 space-y-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-6d65b0a76a1b?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header with Recent Chats */}
      <div className="flex items-center space-x-4 bg-pink-600 text-white p-3 rounded-2xl overflow-x-auto shadow-md">
        {recentChats.map((chat) => (
          <div
            key={chat.id}
            className="flex flex-col items-center space-y-1 cursor-pointer"
          >
            <img
              src={chat.img}
              alt={chat.name}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <p className="text-xs">{chat.name}</p>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 rounded-2xl overflow-hidden shadow-lg border bg-white">
        {/* Left Sidebar (My Profile) */}
        <div className="w-1/5 bg-white border-r p-4 flex flex-col items-center rounded-l-2xl">
          <img
            src={myProfile.img}
            alt={myProfile.name}
            className="w-20 h-20 rounded-full mb-2"
          />
          <h3 className="font-semibold text-gray-700">{myProfile.name}</h3>
          <p className="text-sm text-gray-500">
            {myProfile.age} yrs • {myProfile.location}
          </p>
        </div>

        {/* Center Chat Section */}
        <div className="flex-1 flex flex-col relative">
          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 rounded-2xl"
            style={{
    backgroundImage: `url(${ChatBg})`,
    backgroundSize: "cover",      // cover the entire area
    backgroundPosition: "center", // center the image
    
    backgroundRepeat: "no-repeat",// prevent tiling
  }}
          >
            <div className="flex justify-start">
              <div className="bg-gray-200 p-2 rounded-xl max-w-xs">
                Hello! How are you?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-pink-500 text-white p-2 rounded-xl max-w-xs">
                I’m good 😊 What about you?
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 border-t flex items-center space-x-2 bg-white rounded-b-2xl">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition">
              <FaPaperPlane />
            </button>
          </div>
        </div>

        {/* Right Sidebar (Current Chat User Profile) */}
        <div className="w-1/5 bg-white border-l p-4 flex flex-col items-center rounded-r-2xl">
          <img
            src={currentChatUser.img}
            alt={currentChatUser.name}
            className="w-20 h-20 rounded-full mb-2"
          />
          <h3 className="font-semibold text-gray-700">
            {currentChatUser.name}
          </h3>
          <p className="text-sm text-gray-500">
            {currentChatUser.age} yrs • {currentChatUser.location}
          </p>
        </div>
      </div>
    </div>
  );
}
