import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./conponents/widget/Layout";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Browse from "./screens/Browse";
import SuccessStories from "./screens/SuccessStories";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Privacy from "./screens/Privacy";
import DashboardLayout from "./screens/Dashboard/components/widget/DashboardLayout"
import Dashboard from "./screens/Dashboard/screens/Dashboard"
import Profile from "./screens/Dashboard/screens/Profile"
import Settings from "./screens/Dashboard/screens/Settings"
import NotiLayout from "./screens/Dashboard/screens/Notifications/NotiLayout";
import InterestedRequests from "./screens/Dashboard/screens/Notifications/InterestedRequests";
import AcceptedRequests from "./screens/Dashboard/screens/Notifications/AcceptedRequests";
import PhotoRequests from "./screens/Dashboard/screens/Notifications/PhotoRequests";
import OtherNotifications from "./screens/Dashboard/screens/Notifications/OtherNotifications";
import DashboardWidgets from "./screens/Dashboard/screens/DashboardWidgets";

import PrivateRoute from "./conponents/PrivateRoute";
import Registration from "./screens/Registration";
import axios from "axios";
import { baseUrl } from "./Utils/baseUrl";
import ProfileUpdateForm from "./screens/ProfileUpdateForm";
import ChatBox from "./screens/ChatBox";


function App() {

  const [appsettingData, setAppSettingData] = useState(null)


  const fetchAppSetting = async () => {
  
      const response = await axios.get(`${baseUrl}/api/master/app-setting`)

      if(response.status === 200){
          setAppSettingData(response?.data)
         
      }
      
  }

  useEffect(() => {
fetchAppSetting()
  }, [])

  useEffect(() => {
    const root = document.documentElement;
    const colors = appsettingData?.themeColor;

    // loop करके सारे variables set कर दो
    if(colors?.id){

    
    Object.entries(colors).forEach(([key, value]) => {
      if (key !== "id" && key !== "title" && value) {
        const cssVar = "--color-" + key.replace(/([A-Z])/g, "-$1").toLowerCase();
        root.style.setProperty(cssVar, value);

        console.log(cssVar, "cssvar")
      }
    });
  }
  }, [appsettingData]);

//create a function if user token is exist in localStorage then redirect to dashboard otherwise redirect to login page



  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="registration" element={
  <PrivateRoute>
    <Registration />
  </PrivateRoute>
} />
        {/* Dashboard Routes */}
        <Route path="dashboard" element={
  <PrivateRoute>
    <DashboardLayout />
  </PrivateRoute>
}>



          <Route index  element={<DashboardWidgets />} />
          <Route path="widgets" element={<DashboardWidgets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile-update/:id" element={<ProfileUpdateForm/>} />
          <Route path="settings" element={<Settings />} />
          <Route path ="chat" element = {<ChatBox/>}/>

          
          {/* Nested Notifications Routes */}
          <Route path="notifications" element={<NotiLayout />}>
            <Route index element={<InterestedRequests />} />
            <Route path="interested" element={<InterestedRequests />} />
            <Route path="accepted" element={<AcceptedRequests />} />
            <Route path="photo" element={<PhotoRequests />} />
            <Route path="other" element={<OtherNotifications />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;