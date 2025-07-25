import React from 'react';

function AcceptedRequests() {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Accepted Requests</h2>
      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div key={item} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">User {item} accepted your connection request</p>
                <p className="text-sm text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcceptedRequests;