import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaHeart, FaArrowRight } from 'react-icons/fa';
import { GiLovers } from 'react-icons/gi';
import axiosInstance from '../utils/axiosInstance'; // Adjust the import based on your project structure
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../Utils/baseUrl';
const EmailOtpLogin = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    getValues,
    reset
  } = useForm();

  const onSubmit = async(data) => {
  
    
    setIsLoading(true);
    try {
      if (!otpSent) {
        const response = await axiosInstance.post(`${baseUrl}/api/auth/login`, data)
      
         console.log(response)
        console.log('OTP sent to:', data.email);
        setOtpSent(true);
      } else {
        console.log('OTP verified for:', data.email, 'OTP:', data.otp);
        if (data.otp.length === 6) {
          const otpResponse = await axios.post(`${baseUrl}/api/auth/verify`, {
            email: data.email,
            otp: data.otp
          });

          console.log(otpResponse.data,'OTP verified successfully');
          localStorage.setItem('mereHumsafarToken', otpResponse?.data.token);
          localStorage.setItem('mereHumsafarUser', JSON.stringify(otpResponse?.data.user));
          setShowSuccess(true);
          // Redirect to dashboard or show success message
         // Adjust the path as needed
          // setShowSuccess(true);
          setTimeout(() => {
          //  console.log('Redirecting to dashboard...');
            // Here you would actually redirect the user
            navigate('/browse');
          }, 1500);
        } else {

          // Handle invalid OTP
          reset({ otp: '' }); // Clear OTP field
          //setOtpSent(false); // Reset OTP sent state
          setIsLoading(false);
          console.log('Invalid OTP');
        }
      }
    } catch (error) {
     alert('Error during OTP submission:', error);
      setIsLoading(false);
      navigate("/")
      return;
    }
  
      
      setIsLoading(false);
   
  };

  const handleResendOtp = () => {
    console.log('Resending OTP to:', getValues('email'));
    // Resend OTP logic
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 relative">
      <div className=' absolute inset-0  bg-[url("https://img.freepik.com/free-vector/realistic-blurred-spring-background_52683-55622.jpg?ga=GA1.1.1944470534.1737377007&semt=ais_hybrid&w=740")] bg-no-repeat bg-cover opacity-10 '></div>
      <div className="w-full max-w-md">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-secondary opacity-40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            >
              <FaHeart />
            </div>
          ))}
        </div>

        <div className="relative bg-transparent backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Header with Romantic Theme */}
          <div className="bg-secondary/80   p-8 text-center relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 text-4xl">
                <FaHeart />
              </div>
              <div className="absolute top-1/3 right-1/3 text-3xl">
                <FaHeart />
              </div>
              <div className="absolute bottom-1/4 right-1/4 text-5xl">
                <FaHeart />
              </div>
            </div>
            <div className="relative z-10">
              <GiLovers className="text-5xl text-secondary mx-auto mb-3" />
              <h1 className="text-3xl font-bold text-secondary mb-2 font-serif">Welcome</h1>
              <p className="text-secondary">Find your soulmate today</p>
            </div>
          </div>

          {/* Login Form */}
          <div className="p-8">
            {showSuccess ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h2>
                <p className="text-gray-600">Redirecting to your matches...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                      <FaEnvelope />
                    </div>
                    <input
                      id="email"
                      type="email"
                      disabled={otpSent}
                      className={`w-full pl-10 pr-3 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-0  focus:border-secondary outline-none transition`}
                      placeholder="your@email.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {otpSent && (
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
                      OTP Code
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                        <FaLock />
                      </div>
                      <input
                        id="otp"
                        type="text"
                        inputMode="numeric"
                        className={`w-full pl-10 pr-3 py-3 rounded-lg border ${errors.otp ? 'border-red-500' : 'border-gray-300'} focus:ring-0  outline-none transition`}
                        placeholder="Enter 6-digit OTP"
                        {...register('otp', { 
                          required: 'OTP is required',
                          minLength: {
                            value: 6,
                            message: 'OTP must be 6 digits'
                          },
                          maxLength: {
                            value: 6,
                            message: 'OTP must be 6 digits'
                          }
                        })}
                      />
                    </div>
                    {errors.otp && (
                      <p className="mt-1 text-sm text-red-600">{errors.otp.message}</p>
                    )}
                    <div className="mt-2 text-right">
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        className="text-sm text-pink-600 hover:text-secondary font-medium"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-secondary/80  text-socondary py-3 px-4 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2 ${isLoading ? 'opacity-80' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {otpSent ? 'Verifying...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      {otpSent ? 'Verify OTP' : 'Send OTP'} 
                      <FaArrowRight />
                    </>
                  )}
                </button>
              </form>
            )}

            {!showSuccess && (
              <div className="mt-6 text-center text-sm text-gray-600">
                {otpSent ? (
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false);
                      reset({ email: getValues('email') });
                    }}
                    className="text-secondary hover:text-secondary font-medium"
                  >
                    ← Change email address
                  </button>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <a href="#" className="text-secondry hover:text-secondary font-medium">
                      Sign up
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default EmailOtpLogin;

// import React, { useState, useRef, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { FaEnvelope, FaLock, FaHeart, FaArrowRight } from 'react-icons/fa';
// import { GiLovers } from 'react-icons/gi';

// const EmailOtpLogin = () => {
//   const [otpSent, setOtpSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const otpInputRefs = useRef([]);
  
//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors },
//     getValues,
//     reset,
//     setValue,
//     watch
//   } = useForm();

//   // Watch OTP fields to check for default code
//   const otpValues = watch('otp');
//   useEffect(() => {
//     if (otpSent && otpValues) {
//       const enteredOtp = typeof otpValues === 'string' 
//         ? otpValues 
//         : Object.values(otpValues).join('');
      
//       if (enteredOtp === '123456') {
//         handleDefaultOtpLogin();
//       }
//     }
//   }, [otpValues, otpSent]);

//   const handleDefaultOtpLogin = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       console.log('Default OTP verified for:', getValues('email'));
//       setShowSuccess(true);
//       setIsLoading(false);
//       setTimeout(() => {
//         console.log('Redirecting to dashboard...');
//         // Here you would actually redirect the user
//         // window.location.href = '/dashboard';
//       }, 1500);
//     }, 500);
//   };

//   const onSubmit = (data) => {
//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       if (!otpSent) {
//         console.log('OTP sent to:', data.email);
//         setOtpSent(true);
//       } else {
//         // Combine OTP digits
//         const otp = typeof data.otp === 'string' 
//           ? data.otp 
//           : Object.values(data.otp).join('');
        
//         console.log('OTP verified for:', data.email, 'OTP:', otp);
        
//         if (otp.length === 6) {
//           setShowSuccess(true);
//           setTimeout(() => {
//             // Redirect after successful login
//             console.log('Redirecting to dashboard...');
//           }, 1500);
//         } else {
//           // Handle invalid OTP
//           console.log('Invalid OTP');
//         }
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   const handleResendOtp = () => {
//     console.log('Resending OTP to:', getValues('email'));
//     // Clear OTP fields
//     [0,1,2,3,4,5].forEach(i => {
//       setValue(`otp.${i}`, '');
//       if (otpInputRefs.current[i]) {
//         otpInputRefs.current[i].value = '';
//       }
//     });
//     // Focus first OTP field
//     if (otpInputRefs.current[0]) {
//       otpInputRefs.current[0].focus();
//     }
//   };

//   const handleOtpPaste = (e, index) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData('text/plain').trim();
//     if (/^\d{6}$/.test(pasteData)) {
//       const digits = pasteData.split('');
//       digits.forEach((digit, i) => {
//         if (index + i < 6) {
//           setValue(`otp.${index + i}`, digit);
//           if (otpInputRefs.current[index + i]) {
//             otpInputRefs.current[index + i].value = digit;
//           }
//         }
//       });
//       if (index + 5 <= 6 && otpInputRefs.current[index + 5]) {
//         otpInputRefs.current[index + 5].focus();
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-primary flex items-center justify-center p-4 relative">
//       <div className='absolute inset-0 bg-[url("https://img.freepik.com/free-vector/realistic-blurred-spring-background_52683-55622.jpg?ga=GA1.1.1944470534.1737377007&semt=ais_hybrid&w=740")] bg-no-repeat bg-cover opacity-10'></div>
      
//       <div className="w-full max-w-md">
//         {/* Floating Hearts Background */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(10)].map((_, i) => (
//             <div 
//               key={i}
//               className="absolute text-secondary opacity-40"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 fontSize: `${Math.random() * 20 + 10}px`,
//                 animation: `float ${Math.random() * 10 + 10}s linear infinite`
//               }}
//             >
//               <FaHeart />
//             </div>
//           ))}
//         </div>

//         <div className="relative bg-transparent backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
//           {/* Header with Romantic Theme */}
//           <div className="bg-secondary/80 p-8 text-center relative">
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-1/4 left-1/4 text-4xl">
//                 <FaHeart />
//               </div>
//               <div className="absolute top-1/3 right-1/3 text-3xl">
//                 <FaHeart />
//               </div>
//               <div className="absolute bottom-1/4 right-1/4 text-5xl">
//                 <FaHeart />
//               </div>
//             </div>
//             <div className="relative z-10">
//               <GiLovers className="text-5xl text-white mx-auto mb-3" />
//               <h1 className="text-3xl font-bold text-white mb-2 font-serif">Welcome</h1>
//               <p className="text-pink-100">Find your soulmate today</p>
//             </div>
//           </div>

//           {/* Login Form */}
//           <div className="p-8">
//             {showSuccess ? (
//               <div className="text-center py-8">
//                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg
//                     className="w-12 h-12 text-green-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h2>
//                 <p className="text-gray-600">Redirecting to your matches...</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-6">
//                   <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
//                       <FaEnvelope />
//                     </div>
//                     <input
//                       id="email"
//                       type="email"
//                       disabled={otpSent}
//                       className={`w-full pl-10 pr-3 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-secondary outline-none transition`}
//                       placeholder="your@email.com"
//                       {...register('email', { 
//                         required: 'Email is required',
//                         pattern: {
//                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                           message: 'Invalid email address'
//                         }
//                       })}
//                     />
//                   </div>
//                   {errors.email && (
//                     <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
//                   )}
//                 </div>

//                 {otpSent && (
//                   <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
//                       OTP Code
//                     </label>
//                     <div className="flex justify-center space-x-3">
//                       {[0, 1, 2, 3, 4, 5].map((index) => (
//                         <div key={index} className="relative w-10">
//                           <input
//                             id={`otp-${index}`}
//                             type="text"
//                             inputMode="numeric"
//                             maxLength="1"
//                             className={`w-full text-center py-2 bg-transparent border-0 border-b-2 border-dashed ${errors.otp?.[index] ? 'border-red-500' : 'border-gray-300 focus:border-secondary'} outline-none transition text-lg`}
//                             {...register(`otp.${index}`, {
//                               required: true,
//                               pattern: /^[0-9]$/
//                             })}
//                             ref={(el) => (otpInputRefs.current[index] = el)}
//                             onKeyDown={(e) => {
//                               if (e.key === 'Backspace' && !e.target.value && index > 0) {
//                                 document.getElementById(`otp-${index-1}`).focus();
//                               }
//                               if (e.key === 'ArrowLeft' && index > 0) {
//                                 document.getElementById(`otp-${index-1}`).focus();
//                               }
//                               if (e.key === 'ArrowRight' && index < 5) {
//                                 document.getElementById(`otp-${index+1}`).focus();
//                               }
//                             }}
//                             onChange={(e) => {
//                               if (e.target.value && index < 5) {
//                                 document.getElementById(`otp-${index+1}`).focus();
//                               }
//                             }}
//                             onPaste={(e) => handleOtpPaste(e, index)}
//                             onFocus={(e) => e.target.select()}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                     {errors.otp && (
//                       <p className="mt-1 text-sm text-red-600">Please enter all 6 digits</p>
//                     )}
//                     <div className="mt-2 text-right">
//                       <button
//                         type="button"
//                         onClick={handleResendOtp}
//                         className="text-sm text-pink-600 hover:text-secondary font-medium"
//                       >
//                         Resend OTP
//                       </button>
//                     </div>
//                     <div className="mt-1 text-xs text-gray-500 text-center">
//                       (Try default OTP: 123456)
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full bg-secondary/80 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2 ${isLoading ? 'opacity-80' : ''}`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       {otpSent ? 'Verifying...' : 'Sending...'}
//                     </>
//                   ) : (
//                     <>
//                       {otpSent ? 'Verify OTP' : 'Send OTP'} 
//                       <FaArrowRight />
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}

//             {!showSuccess && (
//               <div className="mt-6 text-center text-sm text-gray-600">
//                 {otpSent ? (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setOtpSent(false);
//                       reset({ email: getValues('email') });
//                     }}
//                     className="text-secondary/50 hover:text-secondary font-medium"
//                   >
//                     ← Change email address
//                   </button>
//                 ) : (
//                   <>
//                     Don't have an account?{' '}
//                     <a href="#" className="text-pink-600 hover:text-secondary font-medium">
//                       Sign up
//                     </a>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Floating Hearts Animation */}
//       <style jsx global>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) rotate(0deg);
//           }
//           100% {
//             transform: translateY(-100vh) rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EmailOtpLogin;