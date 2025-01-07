import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const menuRef = useRef(null); // Ref for the dropdown menu

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick); // Add event listener
    return () => document.removeEventListener("mousedown", handleOutsideClick); // Cleanup on unmount
  }, []);

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 text-white sticky top-0 z-50 bg-gray-800 shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold flex items-center">
        <Link to="/" className="flex items-center">
          {/* Link logo to the homepage */}
          <img src={Logo} alt="Diligence Logo" className="h-10 w-15" />
          <span>
            <span>iligence</span>
            <span className="text-green-600 ml-2">Universal Ltd</span>
          </span>
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu on click
        className="md:hidden block text-3xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <X /> : <Menu />}{" "}
        {/* Show X icon when menu is open, Menu when it's closed */}
      </button>

      {/* Navigation Links (Hidden on mobile, visible on desktop) */}
      <ul
        ref={menuRef} // Reference for handling outside click
        className={`absolute md:relative right-0 md:right-auto top-16 md:top-auto bg-gray-800 md:bg-transparent w-full md:w-auto shadow-lg md:shadow-none md:flex md:space-x-6 text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        } md:block`} // Toggle visibility based on isMenuOpen state
      >
        <li>
          <Link
            to="/"
            className="block py-2 px-4 hover:text-green-400"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 px-4 hover:text-green-400"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/farzana"
            className="block py-2 px-4 hover:text-green-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Meet the Team
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="block py-2 px-4 hover:text-green-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Services
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            className="block py-2 px-4 hover:text-green-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:text-green-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
