import React from 'react';
import { FaHome } from 'react-icons/fa'; // Home icon
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700">
      <div className="text-center bg-white p-8 md:p-12 rounded-3xl shadow-2xl w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12">
        {/* Icon */}
        <FaHome className="text-blue-600 text-7xl mx-auto mb-6 animate-bounce" />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Welcome to TechBridge!
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Explore amazing opportunities and grow with us. Start your journey today!
        </p>

        {/* Explore Button */}
        <div>
          <button
            onClick={() => navigate('/internship')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
