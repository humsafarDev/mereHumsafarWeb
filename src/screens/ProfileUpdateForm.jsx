import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from "react-hook-form";
import { FaHeart, FaUserFriends } from 'react-icons/fa';
import { FiBook, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import axios from "axios"
import { baseUrl } from '../Utils/baseUrl';
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Country, State, City } from 'country-state-city';
import { BsWatch } from 'react-icons/bs';
import { anualIncomeArr, diets, genders, heightOptions } from '../Utils/const';
import { MultiSelect } from "primereact/multiselect";
import { FaFemale, FaMale, FaQuran, FaPrayingHands, FaMoon, FaDonate, FaKaaba, FaMosque } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react-refresh/only-export-components
export const religiousPracticesArr = [
  {
    name: "Hijab",
    id: "hijab",
    description: "Wearing a headscarf to cover hair and neck",
    icon: <FaFemale />,
  },
  {
    name: "Beard",
    id: "beard",
    description: "Growing facial hair as a sign of faith",
    icon: <FaMale />,
  },
  {
    name: "Qur'an",
    id: "quran",
    description: "Reciting or reading the Islamic holy book",
    icon: <FaQuran />,
  },
  {
    name: "Salah",
    id: "salah",
    description: "Performing the five daily prayers",
    icon: <FaPrayingHands />,
  },
  {
    name: "Fasting",
    id: "fasting",
    description: "Observing fasts during Ramadan or other times",
    icon: <FaMoon />,
  },
  {
    name: "Charity",
    id: "charity",
    description: "Giving to those in need, such as Zakat or Sadaqah",
    icon: <FaDonate />,
  },
  {
    name: "Hajj",
    id: "hajj",
    description: "Making a pilgrimage to Mecca, if able",
    icon: <FaKaaba />,
  },
  {
    name: "Modesty",
    id: "modesty",
    description: "Dressing and behaving modestly in accordance with Islamic teachings",
    icon: <FaMosque />,
  },
];

const ProfileUpdateForm = () => {
  const nav = useNavigate()
  const userData = JSON?.parse(localStorage.getItem("mereHumsafarUser") ?? "{}")
  const [education, setEducation] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [occupation, setOccupation] = useState([])
  const [employedIn, setEmployedIn] = useState([])
  const [marital, setMarital] = useState([])
  const [profileFor, setProfileFor] = useState([])
  const [caste, setCaste] = useState([])
  const [motherTongue, setMotherTongue] = useState([])

  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { isSubmitting },
    reset, watch
  } = useForm(
    {
      defaultValues: {
        religiousPracticeArr:[]
      }
    }
  );



  const fetchProfile = async () => {

    await axios.get(`${baseUrl}/api/master/profile/${userData?.email}`).then((res) => {
      setSelectedUser(res?.data)
      console.log("fetch profile api res", res?.data)
    }).catch((err) => {
      console.log("error in fetch profile api", err)
    })

  }


  useEffect(() => {
    if (selectedUser?.id) {
      setValue("firstName", selectedUser?.firstName || "")
      setValue("middleName", selectedUser?.middleName || "")
      setValue("lastName", selectedUser?.lastName || "")
      setValue("aboutMe", selectedUser?.aboutMe || "")
      setValue("fatherOccupation", selectedUser?.fatherOccupation || "")
      setValue("motherOccupation", selectedUser?.motherOccupation || "")
      setValue("siblings", selectedUser?.siblings || "")
      setValue("religiousPractices", selectedUser?.religiousPractices || "")
       setValue("hobbies", selectedUser?.hobbies || "")
    setValue("isSmoke", selectedUser?.isSmoke =="false" ? false : selectedUser?.isSmoke == "true" ? true : false)
     setValue("isDrink", selectedUser?.isDrink =="false" ? false : selectedUser?.isDrink == "true" ? true : false)
      setValue("diet", {name:selectedUser?.diet, id: selectedUser?.diet})
      setValue("phoneNumber", selectedUser?.phoneNumber || "")
      
      setValue("liveWithFamily", {name:selectedUser?.liveWithFamily == "1" ? "Yes" : "No", id: selectedUser?.liveWithFamily == "1" ? "Yes" : "No"})
      setValue("maritalStatusTypeId", selectedUser?.maritalStatus || null)
      setValue("motherTongueId", selectedUser?.motherTongue || null)
      setValue("casteTypeId", selectedUser?.caste || null)
      setValue("educationTypeId", selectedUser?.highestEducation || null)
      setValue("occupationTypeId", selectedUser?.occupation|| null)
      setValue("employedInId", selectedUser?.employedIn || null)
      setValue("annualIncome", selectedUser?.annualIncome || null)
      setValue("dateOfBirth", selectedUser?.dateOfBirth ? new Date(selectedUser?.dateOfBirth) : null)
      setValue("country", selectedUser?.country ? {name: JSON?.parse(selectedUser?.country)?.name, isoCode:JSON?.parse(selectedUser?.country)?.isoCode } :{ name: "India", isoCode: "IN" })
      setValue("state", selectedUser?.state ? {name:JSON?.parse(selectedUser?.state)?.name, isoCode:JSON?.parse(selectedUser?.state)?.isoCode } :{ name: "Maharashtra", isoCode: "MH" , countryCode: "IN"})
      setValue("city", selectedUser?.city ? {name:JSON?.parse(selectedUser?.city)?.name , isoCode: JSON?.parse(selectedUser?.city)?.isoCode}: { name: "Mumbai", isoCode: "MUM", stateCode: "MH", countryCode: "IN" })
      setValue("profileForId", selectedUser?.profileFor || null)
      setValue("gender", {name: selectedUser?.gender , id: selectedUser?.gender})
      setValue("religiousPracticeArr", selectedUser?.religiousPractices ? religiousPracticesArr?.filter(d => selectedUser?.religiousPractices?.split(",")?.includes(d.name)) : [])
      setValue("height", selectedUser?.height? { name: heightOptions?.find(h => `${h.id}` == `${selectedUser?.height}`)?.name, id: selectedUser?.height } : null)

    }

  }, [selectedUser])


  useEffect(() => {
    fetchProfile();
  }, [])



  const onSubmitHandler = async(data) => {
   
    const modified = {
      ...data,
      country: JSON.stringify(data?.country) || "",
      state: JSON.stringify(data?.state) || "",
      city: JSON.stringify(data?.city) || "",
      fatherOccupation: data?.fatherOccupation,
      casteTypeId: data?.casteTypeId?.id,
      aboutMe: data?.aboutMe,
      liveWithFamily: data?.liveWithFamily?.name === "Yes" ? 1 : 0,
    diet: data?.diet?.name || null,
      height: data?.height?.id || null,
      gender: data?.gender?.name || null,
      educationTypeId: data?.educationTypeId?.id || null,
      occupationTypeId: data?.occupationTypeId?.id || null,
      employedInId: data?.employedInId?.id || null,
      maritalStatusTypeId: data?.maritalStatusTypeId?.id || null,
      motherTongueId: data?.motherTongueId?.id || null,
      
    
      dateOfBirth: data?.dateOfBirth ? new Date(data?.dateOfBirth)?.toISOString() : null,
      email: userData?.email,
      profileForId: data?.profileForId?.id || null,
      religiousPracticeArr:[],
      annualIncome: data?.annualIncome?.id || null,
      religiousPractices: data?.religiousPracticeArr?.length > 0 ?  data?.religiousPracticeArr?.map(d => d.name).join(",") : "",


    }

    try {

       const url = `${baseUrl}/api/master/complete-profile?email=${userData?.email}`;

    await  axios.put(url, modified)
        .then((response) => {
          // ✅ API succeeded

          reset()
          nav("/dashboard/profile")
          console.log("Response:", response.data);
        })
        .catch((error) => {
          // ❌ API failed
          console.error("Error:", error.response ? error.response.data : error.message);
        });

    } catch (err) {
      console.error("Error:", err);

    }
  };


  const fetchAllApis = async () => {
    try {
      const [
        educationResult,
        occupationResult,
        employedInResult,
        maritalResult,
        casteResult, profileForResult,
        motherTongueResult
      ] = await Promise.allSettled([
        axios.get(`${baseUrl}/api/master/education`),
        axios.get(`${baseUrl}/api/master/occupation`),
        axios.get(`${baseUrl}/api/master/employed-in`),
        axios.get(`${baseUrl}/api/master/marital`),
        axios.get(`${baseUrl}/api/master/caste`),
        axios.get(`${baseUrl}/api/master/profile-for`),
        axios.get(`${baseUrl}/api/master/language`)
      ]);

      if (educationResult.status === 'fulfilled') {
        setEducation(educationResult.value.data);
      }
      if (profileForResult.status === "fulfilled") {
        setProfileFor(profileForResult.value.data)
      }

      if (occupationResult.status === 'fulfilled') {
        setOccupation(occupationResult.value.data);
      }

      if (employedInResult.status === 'fulfilled') {
        setEmployedIn(employedInResult.value.data);
      }

      if (maritalResult.status === 'fulfilled') {
        setMarital(maritalResult.value.data);
      }

      if (casteResult.status === 'fulfilled') {
        setCaste(casteResult.value.data);
      }
      if (motherTongueResult.status === 'fulfilled') {
        setMotherTongue(motherTongueResult.value.data);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  useEffect(() => {

    fetchAllApis();
  }, [])




  // Mock data for dropdowns (replace with actual API data)



  return (
    <div className="min-h-screen bg-gradient-to-br from-secondry-200 to-secondarydark-200 py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-secondary-600">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-secondarydark-700 to-secondary-600 p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-secondarydark-400 to-secondary-400"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-white mb-2">Update Profile</h1>
              <p className="text-primary-200">Keep your information up to date</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-8">
              {/* Personal Information Section */}
              <section className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg border border-primary-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-xl mr-4">
                    <FiUser className="text-primary-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-800">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      First Name *
                    </label>

                    <Controller
                      name="firstName"
                      control={control}
                      rules={{ required: "First name is required" }} // validation rules here
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <input
                            {...field}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-500 focus:border-transparent"
                              }`}
                            placeholder="Enter first name"
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-2">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  {/* Middle Name (optional field, no error handling) */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Middle Name
                    </label>

                    <Controller
                      name="middleName"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Enter middle name"
                        />
                      )}
                    />
                  </div>

                  {/* Last Name (required + error handling) */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Last Name *
                    </label>

                    <Controller
                      name="lastName"
                      control={control}
                      rules={{ required: "Last name is required" }} // validation
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <input
                            {...field}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-500 focus:border-transparent"
                              }`}
                            placeholder="Enter last name"
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-2">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">




                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Profile For
                    </label>

                    <Controller
                      name="profileForId"
                      control={control}
                      rules={{ required: "Please select profile for" }} // validation
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null} // Controlled value
                            onChange={(e) => field.onChange(e.value)} // Update RHF state
                            options={profileFor} // Dropdown options
                            optionLabel="name" // Display field
                            placeholder="Select Profile For"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />

                          {error && (
                            <p className="text-red-500 text-sm mt-2">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>



                  {/* ✅ Marital Status Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Marital Status
                    </label>

                    <Controller
                      name="maritalStatusTypeId"
                      control={control}
                      rules={{ required: "Marital status is required" }} // validation
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}  // Controlled by RHF
                            onChange={(e) => field.onChange(e.value)} // update RHF state
                            options={marital}
                            optionLabel="name"
                            placeholder="Select Marital Status"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-2">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>


                  {/* ✅ Gender Select */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Gender *
                    </label>

                    <Controller
                      name="gender"
                      control={control}
                      rules={{ required: "Gender is required" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={genders?.map((d) => ({ name: d, id: d }))}
                            optionLabel="name"
                            placeholder="Select Gender"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>


                </div>



                <div className="mt-6">
                  <label className="block text-sm font-semibold text-primary-700 mb-3">
                    About Me
                  </label>

                  <Controller
                    name="aboutMe"
                    control={control}
                    rules={{
                      required: "About Me is required",
                      minLength: { value: 10, message: "At least 10 characters required" }
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <textarea
                          {...field}
                          rows={4}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                              ? "border-red-500 focus:ring-red-500"
                              : "border-primary-300 focus:ring-primary-500 focus:border-transparent"
                            }`}
                          placeholder="Tell us about yourself..."
                        />
                        {error && (
                          <p className="text-red-500 text-sm mt-2">{error.message}</p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>

              {/* Contact Information Section */}
              <section className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl shadow-lg border border-secondary-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary-100 p-3 rounded-xl mr-4">
                    <FiPhone className="text-secondary-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-800">Contact Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ✅ Email (Disabled - Not editable, no validation needed) */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      value={userData?.email || ""}
                      disabled
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl bg-secondary-100 cursor-not-allowed"
                    />
                    {/* <p className="text-xs text-secondary-600 mt-2">Email cannot be changed</p> */}
                  </div>


                  {/* ✅ Phone Number (Controlled via Controller + Validation) */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Phone Number *
                    </label>

                    <Controller
                      name="phoneNumber"
                      control={control}
                      rules={{
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/, // 🔒 only 10 digits
                          message: "Enter a valid 10-digit phone number"
                        }
                      }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <input
                            {...field}
                            type="tel"
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-secondary-300 focus:ring-secondary-500 focus:border-transparent"
                              }`}
                            placeholder="Enter phone number"
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-2">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>

                </div>
              </section>

              {/* Family Background Section */}
              <section className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg border border-primary-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-xl mr-4">
                    <FaUserFriends className="text-primary-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-800">Family Background</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ✅ Father's Occupation */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Father's Occupation
                    </label>
                    <Controller
                      name="fatherOccupation"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Father's occupation"
                        />
                      )}
                    />
                  </div>

                  {/* ✅ Mother's Occupation */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Mother's Occupation
                    </label>
                    <Controller
                      name="motherOccupation"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Mother's occupation"
                        />
                      )}
                    />
                  </div>

                  {/* ✅ Number of Siblings (with validation) */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Number of Siblings
                    </label>
                    <Controller
                      name="siblings"
                      control={control}
                      rules={{
                        required: "Please enter number of siblings",
                        min: { value: 0, message: "Number of siblings cannot be negative" }
                      }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <input
                            {...field}
                            type="number"
                            min="0"
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-500 focus:border-transparent"
                              }`}
                            placeholder="0"
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-2">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  {/* ✅ Live with Family (Yes/No) */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Live with Family
                    </label>
                    <Controller
                      name="liveWithFamily"
                      control={control}
                      rules={{ required: "Please select an option" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={[{ name: "Yes", id: "Yes" }, { name: "No", id: "No" }]}
                            optionLabel="name"
                            placeholder="Select Option"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>
                </div>
              </section>

              {/* Lifestyle Section */}
              <section className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl shadow-lg border border-secondary-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary-100 p-3 rounded-xl mr-4">
                    <FaHeart className="text-secondary-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-800">Lifestyle</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ✅ Diet Preference */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Diet Preference
                    </label>

                    <Controller
                      name="diet"
                      control={control}
                      rules={{ required: "Please select a diet preference" }} // validation
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={diets.map(diet => ({ name: diet, id: diet }))}
                            optionLabel="name"
                            placeholder="Select Education"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>

        {/* ✅ Religious Practices */}
<div>
  <label className="block text-sm font-semibold text-secondary-700 mb-3">
    Religious Practices
  </label>

  <Controller
    name="religiousPracticeArr"
    control={control}
    render={({ field, fieldState }) => (
      <MultiSelect
        {...field}
        value={field.value || []}   // ✅ controlled value (array)
        options={religiousPracticesArr}
       
        onChange={(e) => field.onChange(e.value)}  // ✅ update form value
        optionLabel="name"
        placeholder="Select Religious Practices"
        itemTemplate={(option) => (
        <div className="flex items-center gap-2">
          <span>{option.icon}</span>
          <span>{option.name}</span>
        </div>
      )}
    
        showSelectAll    // ✅ select all option
        className={`w-full  border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${fieldState?.error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-secondary-300 focus:ring-secondary-500 focus:border-transparent"
                              }`}
      />
    )}
  />
  
</div>


                  <div className="flex items-center space-x-6 bg-white p-4 rounded-xl border border-secondary-200">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={getValues("isSmoke") ?? false}
                        {...register("isSmoke")}
                        className="w-5 h-5 text-secondary-600 focus:ring-secondary-500 rounded"
                      />
                      <span className="ml-3 text-secondary-700 font-medium">Do you smoke?</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={getValues("isDrink") ?? false}
                        {...register("isDrink")}
                        className="w-5 h-5 text-secondary-600 focus:ring-secondary-500 rounded"
                      />
                      <span className="ml-3 text-secondary-700 font-medium">Do you drink?</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Hobbies & Interests
                    </label>

                    <Controller
                      name="hobbies"
                      control={control}
                      rules={{ required: "Please enter your hobbies and interests" }} // optional validation
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <input
                            {...field}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-secondary-300 focus:ring-secondary-500 focus:border-transparent"
                              }`}
                            placeholder="Your hobbies and interests"
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-2">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>

              </section>

              {/* Education & Career Section */}
              <section className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg border border-primary-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-xl mr-4">
                    <FiBook className="text-primary-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-800">Education & Career</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ✅ Education */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Education
                    </label>

                    <Controller
                      name="educationTypeId"
                      control={control}
                      rules={{ required: "Please select education" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={education}
                            optionLabel="name"
                            placeholder="Select Education"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>

                  {/* ✅ Occupation */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Occupation
                    </label>

                    <Controller
                      name="occupationTypeId"
                      control={control}
                      rules={{ required: "Please select occupation" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={occupation}
                            optionLabel="name"
                            placeholder="Select Occupation"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>

                  {/* ✅ Employed In */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Employed In
                    </label>

                    <Controller
                      name="employedInId"
                      control={control}
                      rules={{ required: "Please select employment type" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={employedIn}
                            optionLabel="name"
                            placeholder="Select Employed In"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>

                  {/* ✅ Annual Income */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-700 mb-3">
                      Annual Income
                    </label>

                    <Controller
                      name="annualIncome"
                      control={control}
                      rules={{ required: "Please select annual income" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={anualIncomeArr}
                            optionLabel="label"
                            placeholder="Select Annual Income"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>
                </div>
              </section>

              {/* Location & Personal Details Section */}
              <section className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl shadow-lg border border-secondary-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary-100 p-3 rounded-xl mr-4">
                    <FiMapPin className="text-secondary-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-800">Location & Personal Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* ✅ Country */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Country
                    </label>

                    <Controller
                    key={watch("country")?.isoCode}
                      name="country"
                      control={control}
                      rules={{ required: "Please select a country" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            filter
                            options={Country.getAllCountries()?.map(c => ({ name: c?.name, isoCode: c?.isoCode }))}
                            optionLabel="name"
                            placeholder="Select Country"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>

                  {/* ✅ State */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      State *
                    </label>

                    <Controller
                    key={watch("country")?.isoCode}
                      name="state"
                      control={control}
                      rules={{ required: "Please select a state" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            filter
                            options={State.getStatesOfCountry(getValues("country")?.isoCode)?.map(s => ({ name: s?.name, isoCode: s?.isoCode })) || []}
                            optionLabel="name"
                            placeholder="Select State"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>

                  {/* ✅ City */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      City *
                    </label>

                    <Controller
                    key={watch("state")?.isoCode}
                      name="city"
                      control={control}
                      rules={{ required: "Please select a city" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            filter
                            options={City.getCitiesOfState(getValues("country")?.isoCode, getValues("state")?.isoCode)?.map(c=>({name:c.name, isoCode:c.isoCode}))}
                            optionLabel="name"
                            placeholder="Select City"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {/* ✅ Date of Birth */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Date of Birth
                    </label>

                    <Controller
                      name="dateOfBirth"
                      control={control}
                      rules={{ required: "Please select date of birth" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Calendar
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            showIcon
                            placeholder="Select Date of Birth"
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-secondary-300 focus:ring-secondary-500 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>

                  {/* ✅ Height */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Height (cm)
                    </label>

                    <Controller
                      name="height"
                      control={control}
                      rules={{ required: "Please select height" }}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Dropdown
                            {...field}
                            value={field.value || null}
                            onChange={(e) => field.onChange(e.value)}
                            options={heightOptions}
                            optionLabel="name"
                            placeholder="Select Height (cm)"
                            className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                              }`}
                          />
                          {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                        </>
                      )}
                    />
                  </div>




                  {/* ✅ Mother Tongue */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Mother Tongue
                    </label>

                    <Controller
                      name="motherTongueId"
                      control={control}
                      render={({ field }) => (
                        <Dropdown
                          {...field}
                          value={field.value || null}
                          onChange={(e) => field.onChange(e.value)}
                          options={motherTongue}
                          optionLabel="name"
                          placeholder="Select Mother Tongue"
                          className="w-full border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                        />
                      )}
                    />
                  </div>

                </div>


                {/* ✅ Caste */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-secondary-700 mb-3">
                    Caste *
                  </label>

                  <Controller
                    name="casteTypeId"
                    control={control}
                    rules={{ required: "Please select caste" }}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Dropdown
                          {...field}
                          value={field.value || null}
                          onChange={(e) => field.onChange(e.value)}
                          options={caste}
                          optionLabel="name"
                          placeholder="Select Caste"
                          className={`w-full border rounded-xl focus:outline-none focus:ring-2 transition-all
            ${error
                              ? "border-red-500 focus:ring-red-500"
                              : "border-primary-300 focus:ring-primary-300 focus:border-transparent"
                            }`}
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                      </>
                    )}
                  />
                </div>
              </section>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-secondarydark-400 to-secondary-400 text-white rounded-xl hover:from-secondarydark-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold shadow-lg"
                >
                  {isSubmitting ? 'Updating Profile...' : 'Update Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;