import React, { useRef, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";

const OpportunityCreateForm = ({ handleChange, handleFormSubmit, handleClearForm, newItem, editMode, setOpenForm }) => {
  const formRef = useRef(null);

  // Close the form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setOpenForm(false); // Close form when clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up the event listener
    };
  }, [setOpenForm]);

  return (
    <div className="fixed top-20 left-0 right-0 z-50 mx-auto p-4 w-full max-w-4xl bg-white">
      {/* Close Button */}
      <button className='fixed top-20 right-6 text-red-800 w-12 h-12 text-2xl' onClick={() => setOpenForm(false)}>
        <RxCross2 />
      </button>

      <h1 className="text-3xl mb-4 text-center">{editMode ? 'Update Opportunity' : 'Create Opportunity'}</h1>

      <form onSubmit={handleFormSubmit} className="space-y-4 p-4 border rounded shadow-md">
        <div className="overflow-y-auto h-[80vh] p-2">

          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={newItem.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block font-medium">Organization</label>
            <input
              type="text"
              name="organization"
              value={newItem.organization}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={newItem.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block font-medium">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              value={newItem.applicationDeadline}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Link */}
          <div>
            <label className="block font-medium">Link</label>
            <input
              type="url"
              name="link"
              value={newItem.link}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium">Tags (comma separated)</label>
            <input
              type="text"
              name="tags"
              value={newItem.tags.join(', ')} // Convert array back to string
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium">Status</label>
            <select
              name="status"
              value={newItem.status || 'Active'} // Fallback to 'Active'
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 w-full md:w-auto">
            {editMode ? 'Update Opportunity' : 'Create Opportunity'}
          </button>

          <button
            type="reset"
            className="bg-white text-gray-700 border border-gray-800 p-2 rounded mt-4 w-full md:w-auto"
            onClick={handleClearForm} // Reset to default
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default OpportunityCreateForm;
