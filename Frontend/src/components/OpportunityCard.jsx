import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const OpportunityCard = ({ opportunity, handleDeleteItem, handleEditItem }) => {
  const {
    _id,
    title,
    description,
    organization,
    location,
    applicationDeadline,
    link,
    postedDate,
    tags,
    status,
    isAdmin
  } = opportunity;

  // Format the application deadline and posted date for better readability
  const formattedDeadline = new Date(applicationDeadline).toLocaleDateString();
  const formattedPostedDate = new Date(postedDate).toLocaleDateString();

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-6 w-full sm:w-11/12 md:w-9/12 lg:w-1/2 xl:w-1/3 mx-auto">
      {/* Title and Admin Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-2xl text-gray-900">{title}</div>
        {isAdmin && (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEditItem(opportunity)}
              className="text-blue-600 hover:text-blue-800 transition"
              title="Edit"
            >
              <FaPencilAlt size={20} />
            </button>
            <button
              onClick={() => handleDeleteItem(_id)}
              className="text-red-600 hover:text-red-800 transition"
              title="Delete"
            >
              <MdDelete size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="text-gray-700 text-sm mt-2">{description}</div>

      {/* Opportunity Details */}
      <div className="mt-4">
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Organization:</span> {organization}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Location:</span> {location}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Deadline:</span> {formattedDeadline}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Posted on:</span> {formattedPostedDate}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Status:</span> 
          <span className={`font-semibold ${status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-3">
        {tags.length > 0 && (
          <div className="flex flex-wrap space-x-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Apply Link */}
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
        >
          Apply Here
        </a>
      </div>
    </div>
  );
};

export default OpportunityCard;
