import React from 'react';

function PhotoRequests() {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Photo Requests</h2>
      <div className="space-y-4">
        {[1].map((item) => (
          <div key={item} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">User {item} requested additional photos</p>
                <p className="text-sm text-gray-500 mt-1">3 days ago</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-primary text-white rounded-md text-sm">Approve</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">Decline</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoRequests;