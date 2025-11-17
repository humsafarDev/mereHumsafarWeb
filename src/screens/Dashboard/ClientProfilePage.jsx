import { useEffect, useState } from "react";
import {
  CheckCircle,
  Lock,
  Phone,
  Mail,
  MapPin,
  User,
  Heart,
  Film,
  Dumbbell,
  Utensils,
  PiggyBank,
  Book,
  Home,
  Search,
  Edit,
} from "lucide-react";
import useScrollToTop from "../../Utils/useScrollToTop";
import ProfileImageCarousel from "./components/ProfileImageColousel";
import { anualIncomeArr, heightOptions } from "../../Utils/const";
 import { religiousPracticesArr } from '../ProfileUpdateForm';
import { FaQuran } from "react-icons/fa";
import { calculateAge, findIconByName, getAnnualIncomeById, getHeightNameById, isValid } from "./chat/lib/utils";
import useProfileData from "../../context/useProfileData";
import { baseUrl } from "../../Utils/baseUrl";
import { useNavigate } from "react-router-dom";
import useProfileImagesList from "../../context/useProfileImagesList";
import useAuthUser from "../../context/useAuthUser";
export default function ClientProfilePage({details}) {
  const { profileData, isLoading, isError } = useProfileData(baseUrl);
const user = useAuthUser()


console.log("authUser", user, details)
  const [imagesArray , setImagesArray] = useState([])
const nav = useNavigate()

 // ✅ Fetch function
 const fetchImages = async (id) => {
  if (!isValid(id)) {
    throw new Error("Invalid user id");
  }

  const response = await fetch(`${baseUrl}/api/master/profile-images/user/${id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  // localStorage.setItem("userData", JSON.stringify(data));
  setImagesArray(data)
  // return data;
};



console.log("dfdjjf",imagesArray?.map((d) => d?.imageUrl) )

  // "religiousPractices": "Qur'an,Salah,Hajj",
  // "hobbies": "Cricket ,bike , car,riding",
  // "isSmoke": "false",
  // "isDrink": "false",
 
  // "country": "{\"name\":\"India\",\"isoCode\":\"IN\"}",
  // "state": "{\"name\":\"Lakshadweep\",\"isoCode\":\"LD\"}",
  // "city": "{\"name\":\"Lakshadweep\"}",
  // "liveWithFamily": "1",


 

  const {
    
    firstName,
    middleName,
    lastName,
    aboutMe,
    fatherOccupation,
    motherOccupation,
    siblings,
    religiousPractices,
    hobbies,
    isSmoke,
    isDrink,
    diet,
    email,
    phoneNumber,
    dateOfBirth,
    height,
    country,
    state,
    city,
    liveWithFamily,
    maritalStatus,
    motherTongue,
    caste,
    highestEducation,
    occupation,
    employedIn,
    profileFor,
    uploadedImage,
    annualIncome,
    gender} = details
    

    useEffect(() => {
      if(isValid(details?.id)){
        fetchImages(details?.id)
      }

    }, [details])

      
    const parsedCountry = JSON.parse(country?? "{}")
    const parsedState = JSON.parse(state ?? "{}")
    const parsedCity = JSON.parse(city ?? "{}")
  const [activeTab, setActiveTab] = useState("details");
  useScrollToTop();
 

  const isAuthUser = user?.id === details?.id || false
  console.log("isHidden", isAuthUser)
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-6 p-6 border-b">
        
          <ProfileImageCarousel images={imagesArray?.map((d) => d?.imageUrl) }/>

          {/* Right - Info */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  {`${firstName} ${middleName} ${lastName}`}
                  {
                    isAuthUser &&  <Edit onClick={() => nav(`/dashboard/profile-update/${details?.id}`)} size={18} className="text-secondary-600" />
                  }
                 
                  {/* <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                    2-Way
                  </span> */}
                </h2>
                <p className="text-sm text-green-600 mt-1">Online now</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Like this profile?</p>
              
                <button className="bg-green-500 text-white px-4 py-1 rounded-full text-sm hover:bg-green-600">
                  Connect Now
                </button>
              </div>
            </div>

            <div className="mt-4 text-gray-700 space-y-1 text-sm">
              <p><span className="font-semibold">Age / Height:</span>{` ${calculateAge(dateOfBirth) ??"N/A"} yrs, ${getHeightNameById(height) ?? "N/A"}`}</p>
              {/* <p><span className="font-semibold">Star Sign:</span> Scorpio</p> */}
              <p><span className="font-semibold">Religion / Caste:</span>{caste?.name}</p>
              <p><span className="font-semibold">Mother Tongue:</span>{motherTongue?.name}</p>
              <p><span className="font-semibold">Location:</span>{ `${parsedCity?.name ?? "N/A"}, ${parsedState?.name ?? "N/A"}, ${parsedCountry?.name ?? "N/A"}`}</p>
              <p><span className="font-semibold">Education:</span>{`${highestEducation?.name ?? "N/A"}`}</p>
              <p><span className="font-semibold">Profession:</span> {occupation?.name ?? "N/A"}</p>
              <p><span className="font-semibold">Annual Income:</span>{`${getAnnualIncomeById(annualIncome) ?? "N/A"}`}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b flex">
          <button
            onClick={() => setActiveTab("details")}
            className={`flex-1 py-3 text-center text-sm font-medium ${
              activeTab === "details"
                ? "border-b-2 border-red-500 text-red-600"
                : "text-gray-500"
            }`}
          >
            Detailed Profile
          </button>
          {
            !isAuthUser &&     <button
            onClick={() => setActiveTab("partner")}
            className={`flex-1 py-3 text-center text-sm font-medium ${
              activeTab === "partner"
                ? "border-b-2 border-red-500 text-red-600"
                : "text-gray-500"
            }`}
          >
            Partner Preferences
          </button>
          }
      
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {activeTab === "details" && (
            <>
              {/* About Section */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <User size={20} /> {`${firstName} ${middleName} ${lastName}`}
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ID: SH27541556 <br />
                    {aboutMe}
                  </p>
                </div>
              </section>

              {/* Hobbies */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <Heart size={20} /> Hobbies & Interests
                </h3>
                        
                <div className="flex flex-wrap gap-2">
                  {hobbies?.split(",").map((hobby, i) => (
                    <span
                      key={i}
                      className="bg-white border text-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1"
                    >
              
                      {hobby}
                    </span>
                  ))}
                </div>
              </section>

   {/* Hobbies */}
   <section>
                <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <FaQuran size={20} /> Relegious Practices
                </h3>
                <div className="flex flex-wrap gap-2">
                  {religiousPractices?.split(",").map((hobby, i) => (
                    <span
                      key={i}
                      className="bg-white border text-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1"
                    >
                      {findIconByName(hobby)}
                
                      {hobby}
                    </span>
                  ))}
                </div>
              </section>
              {/* Contact */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Phone size={20} /> Contact Details
                </h3>
                <div className="bg-gray-50 border rounded-lg p-4 space-y-2">
                  <p className="text-sm flex items-center gap-2 text-green-700">
                    <Phone size={16} /> {phoneNumber} <Lock size={14} />
                  </p>
                  <p className="text-sm flex items-center gap-2 text-orange-600">
                    <Mail size={16} />{email} <Lock size={14} />
                  </p>
                  <p className="text-sm text-blue-500">
                    Upgrade Now to view details
                  </p>
                </div>
              </section>

              {/* Background */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Book size={20} /> Background
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Religion: Muslim</p>
                  <p>Caste: {caste?.name}</p>
                  <p>Lives in {`${parsedCity?.name}, ${parsedState?.name}, ${parsedCountry?.name}`}</p>
                </div>
              </section>

              {/* Horoscope */}
              {/* <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Search size={20} /> Horoscope Details
                </h3>
                <div className="bg-yellow-50 border rounded-lg p-4 text-center text-sm text-gray-600">
                  For the common interest of members, quickly enter your Astro
                  details & unhide her info. <br />
                  <span className="text-blue-500 cursor-pointer font-medium">Add My Details</span>
                </div>
              </section> */}

              {/* Family */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Home size={20} /> Family Details
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  
                  <p>Father: {fatherOccupation}</p>
                  <p>Mother: {`${motherOccupation}`}</p>
                  <p>Siblings: {siblings}</p>
                </div>
              </section>
            </>
          )}

          {activeTab === "partner" && (
            <>
              {/* About Section */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <User size={20} /> {`${profileData?.firstName} ${profileData?.middleName} ${profileData?.lastName}`}
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ID: SH27541556 <br />
                    {profileData?.aboutMe}
                  </p>
                </div>
              </section>

              {/* Hobbies */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <Heart size={20} /> Hobbies & Interests
                </h3>
                        
                <div className="flex flex-wrap gap-2">
                  {profileData?.hobbies.split(",").map((hobby, i) => (
                    <span
                      key={i}
                      className="bg-white border text-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1"
                    >
              
                      {hobby}
                    </span>
                  ))}
                </div>
              </section>

   {/* Hobbies */}
   <section>
                <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <FaQuran size={20} /> Relegious Practices
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileData?.religiousPractices?.split(",").map((hobby, i) => (
                    <span
                      key={i}
                      className="bg-white border text-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1"
                    >
                      {findIconByName(hobby)}
                
                      {hobby}
                    </span>
                  ))}
                </div>
              </section>
              {/* Contact */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Phone size={20} /> Contact Details
                </h3>
                <div className="bg-gray-50 border rounded-lg p-4 space-y-2">
                  <p className="text-sm flex items-center gap-2 text-green-700">
                    <Phone size={16} /> {profileData?.phoneNumber} <Lock size={14} />
                  </p>
                  <p className="text-sm flex items-center gap-2 text-orange-600">
                    <Mail size={16} />{profileData?.email} <Lock size={14} />
                  </p>
                  <p className="text-sm text-blue-500">
                    Upgrade Now to view details
                  </p>
                </div>
              </section>

              {/* Background */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Book size={20} /> Background
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Religion: Muslim</p>
                  <p>Caste: {profileData?.caste?.name}</p>
                  <p>Lives in {`${parsedCity?.name}, ${parsedState?.name}, ${parsedCountry?.name}`}</p>
                </div>
              </section>

              {/* Horoscope */}
              {/* <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Search size={20} /> Horoscope Details
                </h3>
                <div className="bg-yellow-50 border rounded-lg p-4 text-center text-sm text-gray-600">
                  For the common interest of members, quickly enter your Astro
                  details & unhide her info. <br />
                  <span className="text-blue-500 cursor-pointer font-medium">Add My Details</span>
                </div>
              </section> */}

              {/* Family */}
              <section>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Home size={20} /> Family Details
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  
                  <p>Father: {profileData?.fatherOccupation}</p>
                  <p>Mother: {`${profileData?.motherOccupation}`}</p>
                  <p>Siblings: {profileData?.siblings}</p>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
