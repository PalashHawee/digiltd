import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-6 text-white sticky top-0 z-50 bg-gray-800 shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold flex items-center">
        <img src={Logo} alt="BizSolve Logo" className="h-10 mr-2 w-15" />
        <span>Diligence</span>
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
        className={`md:flex md:space-x-6 text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        } md:block`} // Toggle visibility based on isMenuOpen state
      >
        <li>
          <Link to="/" className="block py-2 px-4 hover:text-green-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 px-4 hover:text-green-400">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/team" className="block py-2 px-4 hover:text-green-400">
            Meet the Team
          </Link>
        </li>
        <li>
          <Link to="/services" className="block py-2 px-4 hover:text-green-400">
            Our Services
          </Link>
        </li>
        <li>
          <Link to="/works" className="block py-2 px-4 hover:text-green-400">
            Our Works
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block py-2 px-4 hover:text-green-400">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
