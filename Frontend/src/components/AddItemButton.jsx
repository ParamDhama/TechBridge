import React from 'react';
import { IoIosAdd } from "react-icons/io"; // Import the add icon

const AddItemButton = ({ onClickHandle }) => {
  return (
    <button 
      onClick={onClickHandle} 
      className="bg-gradient-to-r from-green-400 to-green-600 text-white text-3xl font-extrabold w-14 h-14 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 hover:from-green-500 hover:to-green-700"
    >
      <IoIosAdd /> {/* Directly using the IoIosAdd icon */}
    </button>
  );
};

export default AddItemButton;
