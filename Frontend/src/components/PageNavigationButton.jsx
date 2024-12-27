import React from 'react';

const PageNavigationButton = ({ name, onClickHandle, isClickable }) => {
  return (
    <button
      onClick={onClickHandle}
      disabled={!isClickable}
      className={`${
        isClickable ? 'bg-gradient-to-r from-blue-400 to-indigo-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      } border border-blue-400 rounded-xl h-12 w-48 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
    >
      {name}
    </button>
  );
};

export default PageNavigationButton;
