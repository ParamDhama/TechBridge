import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar'; // Navbar Component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="lg:w-[18.5vw] bg-gray-800 p-4">
          <Navbar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen  overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internship" element={<Content />} />
            <Route path="/scholarship" element={<Content />} />
            <Route path="/hackathon" element={<Content />} />
            <Route path="/competition" element={<Content />} />
            <Route path="/conference" element={<Content />} />
            <Route path="/collaboration" element={<Content />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
