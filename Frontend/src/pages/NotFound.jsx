import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Warning icon

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-5/6">
      <FaExclamationTriangle className="text-white text-8xl mb-6 animate-bounce" />
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-white mb-6">Oops! The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-white text-red-500 rounded-lg hover:bg-red-100 transition duration-300"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
