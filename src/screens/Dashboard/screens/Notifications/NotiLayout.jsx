import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function NotiLayout() {
  const [activeTab, setActiveTab] = useState('interested');
  const tabs = [
    { name: 'interested', label: 'Interested Requests', count: 5 },
    { name: 'accepted', label: 'Accepted Requests', count: 3 },
    { name: 'photo', label: 'Photo Requests', count: 2 },
    { name: 'other', label: 'Other Notifications', count: 8 },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications</h1>
      
      {/* Tabs Navigation */}
      <div className="mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={`/dashboard/notifications/${tab.name}`}
              end
              onClick={() => handleTabClick(tab.name)}
              className={`
                relative py-4 px-2 font-medium text-sm focus:outline-none transition-all duration-200
                ${
                  activeTab === tab.name 
                    ? 'text-primary bg-gradient-to-r from-secondary to-secondarydark rounded-xl shadow-md' 
                    : 'bg-gray-100 rounded-xl text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              <>
                {tab.label}
                {tab.count > 0 && (
                  <span className={`ml-2 inline-flex items-center py-1 px-2 rounded-full text-xs font-medium 
                    ${
                      activeTab === tab.name 
                        ? 'bg-white/20 text-white' 
                        : 'bg-secondary/5 text-secondary'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Notification Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default NotiLayout;