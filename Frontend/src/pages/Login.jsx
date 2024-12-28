import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigator = useNavigate();
  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://techbridge-qt0l.onrender.com/api/login', {
        username,
        password,
      });
      // Save token and decode role
      localStorage.setItem('token', response.data.token);

      setError('');
      alert('Login successful');
      navigator('/internship')
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-5/6 ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back!</h2>
        <p className="text-sm text-center text-gray-500">
          Please login to access your account
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Field */}
          <div className="relative">
            <label className="block text-gray-700">Username</label>
            <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-400">
              <FaUser className="mx-3 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 text-gray-700 focus:outline-none"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-400">
              <FaLock className="mx-3 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-gray-700 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginComponent;
