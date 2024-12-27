import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import OpportunityCard from '../components/OpportunityCard';
import AddItemButton from '../components/AddItemButton';
import OpportunityCreateForm from '../components/OpportunityCreateForm';
import useOpportunities from '../hooks/useOpportunities';

const Content = () => {
  const location = useLocation();
  const type = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);
  const {
    data,
    isAdmin,
    openForm,
    editMode,
    newItem,
    setOpenForm,
    handleDeleteItem,
    handleFormSubmit,
    handleChange,
    handleEditItem,
    handleSearch,
    resetForm,
  } = useOpportunities(type);


  return (
    <div className='w-full'>
     {openForm && (
        <OpportunityCreateForm
          handleChange={handleChange}
          handleFormSubmit={handleFormSubmit}
          handleClearForm={resetForm}
          newItem={newItem} // Pass newItem as prop
          editMode={editMode}
          setOpenForm={setOpenForm}  // Pass setOpenForm here
        />
      )}

      <div className='w-full fixed  top-4'>
        <div className='flex w-9/12 justify-between items-center'>
      <SearchBar onSearch={handleSearch} />
      {/* <h1 className='text-3xl'>{type || 'All Opportunities'}</h1> */}
      {(isAdmin&!openForm)?<AddItemButton onClickHandle={()=>setOpenForm(true)}/>:<span></span>}
      </div>
      </div>
      {/* Search Bar Component */}
      
      {/* Display the filtered data */}
      <div className="overflow-x-auto h-[80vh] mt-24 w-11/12">
        {data.length > 0 ? ( // FIX: Replace searchQuery with data
          data.map((item, index) => (
            <OpportunityCard
              key={index}
              opportunity={{ ...item, isAdmin }}
              handleDeleteItem={handleDeleteItem}
              handleEditItem={() => handleEditItem(item)}
            />
          ))
        ) : (
          <p className='text-white text-2xl'>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Content;