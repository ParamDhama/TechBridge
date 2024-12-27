import { useLocation, useNavigate } from "react-router-dom"; // React Router for navigation
import PageNavigationButton from "./PageNavigationButton"; // Import the button component

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

  // Button click handler
  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the route
  };

  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50 w-64">
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
    </>
  );
}

export default Navbar;
