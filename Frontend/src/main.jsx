// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18
import App from './App';
import './index.css'

// Create the root container for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new createRoot API
root.render(<App />);
