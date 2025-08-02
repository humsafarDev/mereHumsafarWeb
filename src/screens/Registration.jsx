import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaHeart, FaArrowRight, FaPhone, FaCalendar, FaUser, FaGlobe, FaArrowLeft } from 'react-icons/fa';
import { GiLovers } from 'react-icons/gi';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';
import axiosInstance from '../utils/axiosInstance';
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [education , setEducation] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [employedIn, setEmployedIn] = useState([]);
  const [marital, setMarital] = useState([]);
  const [caste, setCaste] = useState([]);
  //get userData from localStorage
  const userData = JSON.parse(localStorage.getItem('userData')) || {};
  const onSubmit = async(data) => {
const modified = {
  ...data,
  name: data.name, // Trim whitespace from name
  liveWithFamily: data.liveWithFamily=== "yes"? true : false, // Default to 'no' if not provided
  email: userData.email || '',
  height: parseInt(data.height) || '', // Default to empty string if not provided

  profileForId: userData.profileFor.id || '', // Default to empty string if not provided
  profileFor: userData.profileFor || '',
}

try{
  // Send data to the server
 const makeProfileResponse =await axiosInstance.put(`/api/master/complete-profile?email=${userData.email}`, modified)
  const makeProfileData = makeProfileResponse.data;
  // Handle the response as needed
  if (makeProfileData.success) {
    // Clear userData from localStorage
    localStorage.removeItem('userData');
    // Redirect to the next page or show success message
    window.location.href = '/dashboard'; // Redirect to the dashboard or any other page
  } else {
    console.error('Error making profile:', makeProfileData.message);
  }

}catch(err){
  console.error('Error submitting form:', err);
  return;

}
    console.log('Form Submitted:', data);
  };

  const fetchAllApis = async () => {
    try {
      const [
        educationResult,
        occupationResult,
        employedInResult,
        maritalResult,
        casteResult,
      ] = await Promise.allSettled([
        axiosInstance.get('/api/master/education'),
        axiosInstance.get('/api/master/occupation'),
        axiosInstance.get('/api/master/employed-in'),
        axiosInstance.get('/api/master/marital'),
        axiosInstance.get('/api/master/caste'),
      ]);
  
      if (educationResult.status === 'fulfilled') {
        setEducation(educationResult.value.data);
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
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  useEffect(() => {

    fetchAllApis();
  }, [])

  const genderOptions = [
    {
      label: "MALE",
      value: "MALE"
    },
    {
      label: "FEMALE",
      value: "FEMALE"
    },
    {
      label: "OTHER",
      value: "OTHER"
    }
  ]
  const nextStep = async () => {
    const valid = await trigger();
    if (valid) setStep(step + 1);
  };



  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/realistic-blurred-spring-background_52683-55622.jpg?ga=GA1.1.1944470534.1737377007&semt=ais_hybrid&w=740')] bg-no-repeat bg-center bg-cover opacity-10 z-0"></div>

      <div className="w-full max-w-4xl mx-auto z-10">
        <div className="relative bg-white bg-opacity-90 backdrop-blur-xl p-10 md:p-16 rounded-3xl shadow-2xl transition-all duration-300">

          <div className="flex justify-center mb-8">
            <GiLovers className="text-2xl text-pink-600 animate-bounce" />
          </div>

          <h1 className="text-3xl font-bold text-center text-secondary mb-10">Create Account</h1>

          <form onSubmit={handleSubmit(onSubmit)} >

            {
              step == 1 &&
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Name */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                      <FaUser />
                    </div>
                    <input
                      id="name"
                      type="text"

                      className={`w-full pl-10 pr-3 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-0  focus:border-secondary outline-none transition`}
                      placeholder="Enter your Full Name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Minimum 2 characters' },
                        maxLength: { value: 50, message: 'Maximum 50 characters' }

                      })}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                      <FaPhone />
                    </div>
                    <input
                      id="phoneNumber"
                      type="text"
                      className={`w-full pl-10 pr-3 py-3 rounded-lg border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-secondary outline-none transition`}
                      placeholder="Enter your Pone Number"
                      {...register('phoneNumber', {
                        required: 'Phone Number is required',
                        minLength: { value: 9, message: 'Minimum 2 characters' },
                        maxLength: { value: 12, message: 'Maximum 50 characters' }
                      })}
                    />
                  </div>
                  {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
                </div>

                {/* Date Of Birth */}
                <div>
                  <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-medium mb-2">Date Of Birth</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                      <FaCalendar />
                    </div>
                    <input
                      datepicker
                      id="default-datepicker"
                      type="date"

                      className={`w-full pl-10 pr-3 py-3 rounded-lg border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-secondary outline-none transition`}
                      placeholder="Enter your Date Of Birth"
                      {...register('dateOfBirth', {
                        required: 'Date of Birth is required',
                        minLength: { value: 2, message: 'Minimum 2 characters' },
                        maxLength: { value: 50, message: 'Maximum 50 characters' }
                      })}
                    />
                  </div>
                  {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
                </div>



                {/* Country */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Country
                  </label>
                  <Select
                    options={Country.getAllCountries().map(country => ({
                      value: country.isoCode,
                      label: country.name
                    }))}


                    onChange={(selectedOption) => {
                      setValue('country', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Profile For"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('country', { required: 'Profile For is required' })}
                  />
                  {errors.profileForId && (
                    <p className="mt-1 text-sm text-red-600">{errors.profileForId.message}</p>
                  )}
                </div>
                {/* State */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    State
                  </label>
                  <Select
                    options={State.getStatesOfCountry(watch("country"))?.map(country => ({
                      value: country.isoCode,
                      label: country.name
                    }))}
                    isDisabled={!watch('country')}

                    onChange={(selectedOption) => {
                      setValue('state', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select State"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('state', { required: 'Profile For is required' })}
                  />
                  {errors.profileForId && (
                    <p className="mt-1 text-sm text-red-600">{errors.profileForId.message}</p>
                  )}
                </div>
                {/* City */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    City
                  </label>
                  <Select
                    options={City.getCitiesOfState(watch("country"), watch("state"))?.map(country => ({
                      value: country.name,
                      label: country.name
                    }))}
                    isDisabled={!watch('state') && !watch('country')}

                    onChange={(selectedOption) => {
                      setValue('city', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select City"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('city', { required: 'Profile For is required' })}
                  />
                  {errors.profileForId && (
                    <p className="mt-1 text-sm text-red-600">{errors.profileForId.message}</p>
                  )}
                </div>
              </div>
            }

            {
              step == 2 &&
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Gender */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Gender
                  </label>
                  <Select
                    options={genderOptions}

                    onChange={(selectedOption) => {
                      setValue('gender', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Gender"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('gender', { required: 'Gender is required' })}
                  />
                  {errors.profileForId && (
                    <p className="mt-1 text-sm text-red-600">{errors.profileForId.message}</p>
                  )}
                </div>

                {/* Live With Family  */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Live With Family Member
                  </label>
                  <Select
                    options={[{
                      label: "Yes",
                      value: "yes"
                    }, {
                      label: "No",
                      value: "no"
                    }]}

                    onChange={(selectedOption) => {
                      setValue('liveWithFamily', selectedOption?.value);
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Live With Family"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('gender')}
                  />
                  {errors.liveWithFamily && (
                    <p className="mt-1 text-sm text-red-600">{errors.liveWithFamily.message}</p>
                  )}
                </div>

                {/* Marital Status */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Marital Status
                  </label>
                  <Select
                    options={
                      marital.map((status) => ({
                        label: status.name,
                        value: status.id
                      }))
                    }


                    onChange={(selectedOption) => {
                      setValue('maritalStatus', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Marital Status"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('maritalStatus', { required: 'Marital Status is required' })}
                  />
                  {errors.maritalStatus && (
                    <p className="mt-1 text-sm text-red-600">{errors.maritalStatus.message}</p>
                  )}
                </div>
                {/* Mother Tongue */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Mother Tongue
                  </label>
                  <Select
                    options={
                      [
                        { label: "English", value: "english" },
                        { label: "Hindi", value: "hindi" },
                        { label: "Spanish", value: "spanish" },
                        { label: "French", value: "french" }
                      ]
                    }

                    onChange={(selectedOption) => {
                      setValue('motherTongue', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Mother Tongue"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('motherTongue', { required: 'mother Tongue is required' })}
                  />
                  {errors.motherTongue && (
                    <p className="mt-1 text-sm text-red-600">{errors.motherTongue.message}</p>
                  )}
                </div>
                {/* Caste */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Caste
                  </label>
                  <Select
                    options={
                      caste.map((caste) => ({
                        label: caste.name,
                        value: caste.id
                      }))
                    }


                    onChange={(selectedOption) => {
                      setValue('caste', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Caste"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('caste', { required: 'Caste is required' })}
                  />
                  {errors.caste && (
                    <p className="mt-1 text-sm text-red-600">{errors.caste.message}</p>
                  )}
                </div>
                {/* Height */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Height
                  </label>
                  <Select
                    options={
                      [
                        { label: "4'0\"", value: "4'0\"" },

                        { label: "4'1\"", value: "4'1\"" },
                        { label: "4'2\"", value: "4'2\"" },
                        { label: "4'3\"", value: "4'3\"" },
                        { label: "4'4\"", value: "4'4\"" },
                        { label: "4'5\"", value: "4'5\"" },
                        { label: "4'6\"", value: "4'6\"" },
                        { label: "4'7\"", value: "4'7\"" },
                        { label: "4'8\"", value: "4'8\"" },
                        { label: "4'9\"", value: "4'9\"" },
                        { label: "5'0\"", value: "5'0\"" },
                        { label: "5'1\"", value: "5'1\"" },
                        { label: "5'2\"", value: "5'2\"" },
                        { label: "5'3\"", value: "5'3\"" },
                        { label: "5'4\"", value: "5'4\"" },
                        { label: "5'5\"", value: "5'5\"" },
                        { label: "5'6\"", value: "5'6\"" },
                        { label: "5'7\"", value: "5'7\"" },
                        { label: "5'8\"", value: "5'8\"" },
                        { label: "5'9\"", value: "5'9\"" },
                        { label: "6'", value: '6"' },
                        { label: "6'1\"", value: "6'1\"" },
                        { label: "6'2\"", value: "6'2\"" },
                        { label: "6'3\"", value: "6'3\"" },
                        { label: "6'4\"", value: "6'4\"" },
                        { label: "6'5\"", value: "6'5\"" },
                        { label: "6'6\"", value: "6'6\"" },
                        { label: "6'7\"", value: "6'7\"" },
                        { label: "6'8\"", value: "6'8\"" },
                        { label: "6'9\"", value: "6'9\"" }
                      ]
                    }


                    onChange={(selectedOption) => {
                      setValue('height', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Height"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('caste', { required: 'Height is required' })}
                  />
                  {errors.height && (
                    <p className="mt-1 text-sm text-red-600">{errors.height.message}</p>
                  )}
                </div>
              </div>
            }

            {
              step == 3 && <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Heighest Education */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Highest Education
                  </label>
                  <Select
                    options={
                      education.map((edu) => ({
                        label: edu.name,
                        value: edu.id
                      }))
                    }


                    onChange={(selectedOption) => {
                      setValue('highestEducation', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Highest Education"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('highestEducation', { required: 'Highest Education is required' })}
                  />
                  {errors.highestEducation && (
                    <p className="mt-1 text-sm text-red-600">{errors.highestEducation.message}</p>
                  )}
                </div>

                {/* occupation */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Occupation
                  </label>
                  <Select
                    options={
                      occupation.map((occ) => ({
                        label: occ.name,
                        value: occ.id
                      }))
                    }


                    onChange={(selectedOption) => {
                      setValue('occupation', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Occupation"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('occupation', { required: 'Occupation is required' })}
                  />
                  {errors.occupation && (
                    <p className="mt-1 text-sm text-red-600">{errors.occupation.message}</p>
                  )}
                </div>

                {/* Employed In */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Employed In
                  </label>
                  <Select
                    options={
                      employedIn.map((emp) => ({
                        label: emp.name,
                        value: emp.id
                      }))
                    }


                    onChange={(selectedOption) => {
                      setValue('employedIn', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select employed In"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('employedIn', { required: 'Employed In is required' })}
                  />
                  {errors.employedIn && (
                    <p className="mt-1 text-sm text-red-600">{errors.employedIn.message}</p>
                  )}
                </div>

                {/* Annual Income */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Annual Income
                  </label>
                  <Select
                    options={
                      [
                        { label: "Less than $10,000", value: "less_than_10000" },
                        { label: "$10,000 - $50,000", value: "10000_to_50000" },
                        { label: "$50,000 - $100,000", value: "50000_to_100000" },
                        { label: "$100,000 - $200,000", value: "100000_to_200000" },
                        { label: "More than $200,000", value: "more_than_200000" }
                      ]
                    }


                    onChange={(selectedOption) => {
                      setValue('annualIncome', selectedOption?.value, { shouldValidate: true });
                    }}
                    classNamePrefix="custom-select"
                    className="w-full"
                    placeholder="Select Annual Income"
                  />
                  {/* Hidden input for react-hook-form to track */}
                  <input
                    type="hidden"
                    {...register('annualIncome', { required: 'Annual Income In is required' })}
                  />
                  {errors.annualIncome && (
                    <p className="mt-1 text-sm text-red-600">{errors.annualIncome.message}</p>
                  )}
                </div>
              </div>
            }
            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex justify-between mt-8">
              {
                step == 1 && <button
                  onClick={nextStep}
                  type="button"
                  className="flex items-center gap-2 bg-secondary hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Next <FaArrowRight />
                </button>
              }

              {
                step == 2 && <>
                 
                  <button
                    onClick={prevStep}
                    type="button"
                    className="flex items-center gap-2 bg-secondary hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <FaArrowLeft /> Back
                  </button>
                  <button
                    onClick={nextStep}
                    type="button"
                    className="flex items-center gap-2 bg-secondary hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >

                    <FaArrowRight /> Next
                  </button>
                </>
              }

              {step == 3 && <>


              

                <button
                  onClick={prevStep}
                  type="button"
                  className="flex items-center gap-2 bg-secondary hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >

                  <FaArrowLeft />  Back
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-secondary hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Submit <FaArrowRight />
                </button>

              </>

              }


            </div>
          </form>
        </div>
      </div>

      {/* Floating hearts animation */}
      <style jsx="true">{`
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
      .heart {
        position: absolute;
        font-size: 24px;
        color: #f43f5e;
        animation: float 10s linear infinite;
      }
    `}</style>
    </div>
  );
};

export default SignupPage;
