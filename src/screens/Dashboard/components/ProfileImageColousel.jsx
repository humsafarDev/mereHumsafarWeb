import React, { useState } from "react";
import { isValidArray } from "../chat/lib/utils";

const ProfileImageCarousel = ({images=[]}) => {
  
console.log("corousel ", images)
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Profile Image */}
        <img
          src={images[currentIndex]}
          alt="Profile"
          className="rounded-lg object-cover h-80 w-64 shadow-md transition-all duration-500"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          Plus
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
           { isValidArray(images) ? images?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            ></button> 
          )) : ""}
        </div>
      </div>
    </div>
  );
};

export default ProfileImageCarousel;
