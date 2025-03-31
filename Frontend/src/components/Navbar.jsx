import { useLocation, useNavigate } from "react-router-dom"; // React Router for navigation
import PageNavigationButton from "./PageNavigationButton"; // Import the button component
import { useState } from "react"; // Import useState for managing the sidebar visibility

// Dynamic links array
const links = [
  { name: "Internships", path: "/internship" },
  { name: "Scholarships", path: "/scholarship" },
  { name: "Hackathons", path: "/hackathon" },
  { name: "Competitions", path: "/competition" },
  { name: "Conferences", path: "/conference" },
];

function Navbar() {
  const navigate = useNavigate(); // React Router navigation hook
  const location = useLocation();
  const type =
    location.pathname.substring(1).charAt(0).toUpperCase() +
    location.pathname.substring(2);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for toggling sidebar visibility
  
  // Button click handler
  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the route
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false); // Close the sidebar on mobile after navigation
    }
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50 w-64 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        {/* Logo */}
        <div
          className="p-6 text-2xl font-bold cursor-pointer"
          onClick={() => handleButtonClick("/")}
        >
          TechBridge
        </div>

        <div className="p-4 text-lg font-semibold">{type}</div>

        {/* Navigation Buttons */}
        <nav className="flex flex-col items-start space-y-6 p-10">
          {links.map((link) => (
            <PageNavigationButton
              key={link.name}
              name={link.name}
              isClickable={link.name !== type + "s"}
              onClickHandle={() => handleButtonClick(link.path)}
            />
          ))}
        </nav>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden fixed top-4 right-4 z-60">
        <button
          onClick={toggleSidebar}
          className="text-white p-2 rounded-md focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Navbar;
