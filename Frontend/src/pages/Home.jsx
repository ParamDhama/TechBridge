import React from 'react';
import { FaHome } from 'react-icons/fa'; // Home icon

const Home = () => {
  return (
    <div className="h-5/6 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="text-center h-4/6 space-y-5  bg-white p-10 rounded-lg shadow-lg max-w-lg">
        <FaHome className="text-blue-500 text-6xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to TechBridge!</h1>
        <p className="text-gray-600 mb-4">
          Explore amazing opportunities and grow with us. Start your journey today!
        </p>
        <div>
        <a
          href="/internship"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 mt-8"
        >
          
          Explore Now
        </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
