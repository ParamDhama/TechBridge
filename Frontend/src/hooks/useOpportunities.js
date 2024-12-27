import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import apiClient from '../api/apiClient';
import endpoints from '../api/endpoints';

const useOpportunities = (type) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [endpoint, setEndpoint] = useState({});
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    organization: '',
    location: '',
    applicationDeadline: '',
    link: '',
    tags: [],
    status: 'Active',
  });

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decodeToken = jwtDecode(token);
          const expiryDate = new Date(decodeToken.exp * 1000); // Convert to milliseconds
          const currentDate = new Date();

          if (expiryDate > currentDate) {
            setIsAdmin(decodeToken.role === 'admin');
            apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
          } else {
            localStorage.clear();
            setIsAdmin(false);
          }
        }

        setEndpoint(endpoints[type.toUpperCase() + 'S']);
        const response = await apiClient.get(endpoints[type.toUpperCase() + 'S'].GET_ALL);
        setData(response.data);
        setSearchQuery(response.data); // Initialize search results
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [type, refresh]);

  // Delete Item
  const handleDeleteItem = async (id) => {
    try {
      const url = endpoint.DELETE(id);
      await apiClient.delete(url);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  // Submit Form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedItem = {
        ...newItem,
        applicationDeadline: new Date(newItem.applicationDeadline).toISOString(),
      };
      if (editMode) {
        const url = endpoint.UPDATE(newItem._id);
        await apiClient.put(url, formattedItem);
      } else {
        await apiClient.post(endpoint.CREATE, formattedItem);
      }
      resetForm();
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  // Handle Form Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      setNewItem((prev) => ({
        ...prev,
        [name]: value.split(',').map((tag) => tag.trim()),
      }));
    } else {
      setNewItem((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle Edit
  const handleEditItem = (item) => {
    const formattedDate = item.applicationDeadline?.split('T')[0] || '';
    setNewItem({ ...item, applicationDeadline: formattedDate });
    setEditMode(true);
    setOpenForm(true);
  };

  // Handle Search
  const handleSearch = (value) => {
    if (!value) {
      setSearchQuery(data); // Reset to original data
    } else {
      setSearchQuery(
        data.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  // Clear Form
  const resetForm = () => {
    setNewItem({
      title: '',
      description: '',
      organization: '',
      location: '',
      applicationDeadline: '',
      link: '',
      tags: [],
      status: 'Active',
    });
    setEditMode(false);
    setOpenForm(false);
  };

  return {
    data: searchQuery,
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
  };
};

export default useOpportunities;
