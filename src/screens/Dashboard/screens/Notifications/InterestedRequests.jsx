import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InterestedRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Ahmed Khan",
      age: 28,
      profession: "Software Engineer",
      location: "Karachi, Pakistan",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      time: "2 hours ago",
      status: "pending"
    },
    {
      id: 2,
      name: "Fatima Ali",
      age: 25,
      profession: "Doctor",
      location: "Lahore, Pakistan",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      time: "1 day ago",
      status: "pending"
    },
    {
      id: 3,
      name: "Mohammed Hassan",
      age: 30,
      profession: "Business Owner",
      location: "Islamabad, Pakistan",
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      time: "3 days ago",
      status: "pending"
    }
  ]);

  const handleAccept = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: "accepted" } : request
    ));
    // Here you would typically make an API call to update the status
  };

  const handleReject = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: "rejected" } : request
    ));
    // Here you would typically make an API call to update the status
  };

  const viewProfile = (id) => {
    // Navigate to the profile page with the user's ID
    navigate(`/profile/${id}`);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Interested Requests</h2>
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
              <img 
                src={request.photo} 
                alt={request.name}
                className="w-12 h-12 rounded-full object-cover mr-3 cursor-pointer"
                onClick={() => viewProfile(request.id)}
              />
              <div className="flex-1">
                <h3 
                  className="font-medium text-gray-800 hover:text-primary cursor-pointer"
                  onClick={() => viewProfile(request.id)}
                >
                  {request.name}, {request.age}
                </h3>
                <p className="text-sm text-gray-600">{request.profession} • {request.location}</p>
                <p className="text-xs text-gray-500 mt-1">{request.time}</p>
                
                {request.status === "pending" ? (
                  <div className="flex space-x-2 mt-3">
                    <button 
                      onClick={() => handleAccept(request.id)}
                      className="px-4 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors"
                    >
                      Accept
                    </button>
                    <button 
                      onClick={() => handleReject(request.id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <div className="mt-2">
                    <span className={`px-2 py-1 rounded-md text-xs ${
                      request.status === "accepted" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {request.status}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterestedRequests;