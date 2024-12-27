import React from 'react';
import { IoIosAdd } from "react-icons/io";

const AddItemButton = ({ onClickHandle }) => {
  return (
    <button 
      onClick={onClickHandle} 
      className="bg-gradient-to-r from-green-400 to-green-600 text-white text-3xl font-extrabold w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 hover:from-green-500 hover:to-green-700"
    >
      <span className="material-icons"><IoIosAdd /></span>
    </button>
  );
};

export default AddItemButton;
