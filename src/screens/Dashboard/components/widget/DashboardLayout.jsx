// import React from "react";
// import { Outlet } from "react-router-dom";
// import DashboardNavbar from "./DashboardNavbar";
// import DashboardSidebar from "./DashboardSidebar";

// const DashboardLayout = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Sidebar positioned above header */}
//       <div className="fixed inset-y-0 z-50">
//         <DashboardSidebar />
//       </div>

//       {/* Main content area */}
//       <div className="flex flex-col flex-1 ml-72"> {/* ml-72 matches sidebar width */}
//         {/* Sticky header */}
//         <header className="sticky top-0 z-40">
//           <DashboardNavbar />
//         </header>

//         {/* Content container with proper padding */}
//         <main className="flex-1 p-4 overflow-auto">
//           <div className="max-w-7xl mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Header from "../../../../conponents/widget/Header";
import Footer from "../../../../conponents/widget/Footer";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isLg = window.innerWidth >= 1024;
      setIsLargeScreen(isLg);
      if (isLg) setIsSidebarOpen(false); // auto-close drawer if screen grows
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
     
      <DashboardSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-40">
          <DashboardNavbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        <main className="flex-1 p-4 overflow-auto">
          <div className="md:p-4 p-2 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
