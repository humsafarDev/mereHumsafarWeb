
// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../../../assets/logo.png"
// import { 
//   FiHome,
//   FiUser,
//   FiSettings,
//   FiBell,
//   FiChevronRight,
//   FiPieChart
// } from "react-icons/fi";

// const DashboardSidebar = () => {
//   return (
//     <aside className="w-64 h-[96vh] bg-secondary/80 backdrop-blur-sm text-white fixed shadow-xl flex flex-col m-4 rounded-2xl border border-white/10 overflow-hidden">
//       {/* Background image container */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <div 
//           className="w-full h-full bg-[url('https://img.freepik.com/free-vector/realistic-blurred-floral-background_52683-63510.jpg')] bg-cover bg-no-repeat  opacity-10"
         
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-secondary/5 to-secondary/10"></div>
//       </div>

//       {/* Sidebar Content */}
//       <div className="relative z-10 flex flex-col h-full">
//         {/* Sidebar Header with Logo */}
//         <div className="p-6 pb-4 border-b border-primary/30">
//           <div className=" flex flex-col items-center justify-center space-x-3">
//             <img src={logo} className="h-20 w-auto bg-primary py-1 px-1.3 rounded-full" alt="" />
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
//               Mere Humsafar
//             </h2>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex-1 px-3 py-6 overflow-y-auto">
//           <ul className="space-y-2">
        

//             <li>
//               <NavLink
//                 to="/dashboard/profile"
//                 className={({ isActive }) =>
//                   `flex items-center justify-between p-3 rounded-xl transition-all group ${
//                     isActive
//                       ? "bg-primary text-secondary font-medium shadow-md backdrop-blur-sm"
//                       : "text-white/80 hover:bg-secondary/5 hover:text-white"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     <div className="flex items-center">
//                       <div className={`p-2 mr-3 rounded-lg ${isActive ? "bg-secondary/5" : "bg-white/5 group-hover:bg-secondary/5"}`}>
//                         <FiUser className="w-5 h-5" />
//                       </div>
//                       <span>Profile</span>
//                     </div>
//                     <FiChevronRight className="w-4 h-4 opacity-70 transform group-hover:translate-x-1 transition-transform" />
//                   </>
//                 )}
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/dashboard/notifications"
//                 className={({ isActive }) =>
//                   `flex items-center justify-between p-3 rounded-xl transition-all group ${
//                     isActive
//                       ? "bg-primary text-secondary font-medium shadow-md backdrop-blur-sm"
//                       : "text-white/80 hover:bg-secondary/5 hover:text-white"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     <div className="flex items-center">
//                       <div className={`p-2 mr-3 rounded-lg ${isActive ? "bg-secondary/5" : "bg-white/5 group-hover:bg-secondary/5"}`}>
//                         <FiBell className="w-5 h-5" />
//                       </div>
//                       <span>Notifications</span>
//                     </div>
//                     <FiChevronRight className="w-4 h-4 opacity-70 transform group-hover:translate-x-1 transition-transform" />
//                   </>
//                 )}
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/dashboard/settings"
//                 className={({ isActive }) =>
//                   `flex items-center justify-between p-3 rounded-xl transition-all group ${
//                     isActive
//                       ? "bg-primary text-secondary font-medium shadow-md backdrop-blur-sm"
//                       : "text-white/80 hover:bg-secondary/5 hover:text-white"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     <div className="flex items-center">
//                       <div className={`p-2 mr-3 rounded-lg ${isActive ? "bg-secondary/5" : "bg-white/5 group-hover:bg-secondary/5"}`}>
//                         <FiSettings className="w-5 h-5" />
//                       </div>
//                       <span>Settings</span>
//                     </div>
//                     <FiChevronRight className="w-4 h-4 opacity-70 transform group-hover:translate-x-1 transition-transform" />
//                   </>
//                 )}
//               </NavLink>
//             </li>
//           </ul>
//         </nav>

//         {/* Sidebar Footer */}
//         <div className="p-4 border-t border-white/10 text-xs text-white/60">
//           <p>© {new Date().getFullYear()} My App</p>
//           <p className="mt-1">v2.1.0</p>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default DashboardSidebar;


import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiUser,
  FiBell,
  FiSettings,
  FiChevronRight,
  FiX,
  FiHome,
} from "react-icons/fi";

import { MdDashboard } from "react-icons/md";

const navItems = [
  { path: "/",  icon: <FiHome className="w-5 h-5" /> },
  { path: "/dashboard/widgets",  icon: <MdDashboard className="w-5 h-5" /> },
  { path: "/dashboard/profile",  icon: <FiUser className="w-5 h-5" /> },
  { path: "/dashboard/notifications",icon: <FiBell className="w-5 h-5" /> },
  { path: "/dashboard/settings", icon: <FiSettings className="w-5 h-5" /> },
];

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
    setIsOpen(false); // auto-close on route change
  }, [location]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`md:h-[95vh]  h-screen w-14  text-white z-50 bg-white backdrop-blur-md md:rounded-2xl
        transform transition-transform duration-300 fixed lg:sticky lg:top-4 lg:left-4 top-0 left-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:flex-shrink-0  lg:rounded-2xl lg:border lg:border-secondary-400`}
      >
        {/* Background */}
        <div className="absolute inset-0 md:rounded-2xl z-0 bg-[url('https://img.freepik.com/free-vector/realistic-blurred-floral-background_52683-63510.jpg')] bg-cover bg-no-repeat opacity-5" />
        <div className="absolute inset-0 md:rounded-2xl bg-gradient-to-b from-white-200 via-gray-400 to-white-100 z-0 opacity-40" />

        {/* Sidebar Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Close Icon for Mobile */}
          <div className="lg:hidden absolute top-4 right-4">
            <button onClick={() => setIsOpen(false)}>
              <FiX className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="flex-1 p-1 py-6">
            <ul className="space-y-6 flex flex-col items-center juatify-center">
              {navItems.map(({ path, icon }) => {
                const isActive = activeItem === path;
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setActiveItem(path)}
                      className={`flex items-center justify-center rounded-xl transition-all group ${
                        isActive
                          ? "bg-gradient-to-b from-secondary-400 via-secondary-600 to-secondarydark-700 text-white font-semibold"
                          : "text-secondary "
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-lg ${
                            isActive
                              ? "bg-primary-10"
                              : "bg-white/5 group-hover:bg-white/10"
                          }`}
                        >
                          {icon}
                        </div>
                      
                      </div>
                     
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

         
        </div>
      </aside>

      <div className="w-[100vw] h-14 flex justify-center items-center fixed  bottom-2 p-2 md:hidden block">
         <ul className="flex items-center justify-between backdrop-blur-lg w-[90%] border p-1 bg-white/20 rounded-2xl">
              {navItems.map(({ path,  icon }) => {
                const isActive = activeItem === path;
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setActiveItem(path)}
                      className={`flex items-center justify-evenly rounded-xl transition-all group ${
                        isActive
                          ? "bg-secondary-400 text-primary-200 font-semibold"
                          : "text-secondary "
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-lg ${
                            isActive
                              ? "bg-primary/10"
                              : "bg-white/5 group-hover:bg-white/10"
                          }`}
                        >
                          {icon}
                        </div>
                      
                      </div>
                     
                    </NavLink>
                  </li>
                );
              })}
            </ul>
      
      </div>
    </>
  );
};

export default DashboardSidebar;
