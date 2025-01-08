import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility
  const menuRef = useRef(null); // Ref for the dropdown menu
  const dropdownRef = useRef(null); // Ref for the Sectors dropdown

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close menu if clicked outside
        setIsDropdownOpen(false); // Close dropdown if clicked outside
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
        <li
          className="relative"
          ref={dropdownRef} // Reference for the dropdown menu
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="block py-2 px-4 hover:text-green-400 uppercase font-semibold focus:outline-none">
            Sectors
          </button>
          {/* Dropdown Menu */}
          <ul
            className={`absolute left-0 top-full bg-gray-800 shadow-lg text-sm text-white w-48 transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li className="relative">
              <button className="block py-2 px-4 w-full text-left hover:text-green-400 focus:outline-none">
                Agriculture
              </button>
              <ul className="pl-4">
                <li>
                  <Link
                    to="/agriculture/premium-food-products"
                    className="block py-2 px-4 hover:text-green-400"
                  >
                    Premium Food Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/agriculture/supporting-farmers"
                    className="block py-2 px-4 hover:text-green-400"
                  >
                    Supporting Farmers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/agriculture/agro-sustainability"
                    className="block py-2 px-4 hover:text-green-400"
                  >
                    Agro Sustainability
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <button className="block py-2 px-4 w-full text-left hover:text-green-400 focus:outline-none">
                Education
              </button>
              <ul className="pl-4">
                <li>
                  <Link
                    to="/education/school-programs"
                    className="block py-2 px-4 hover:text-green-400"
                  >
                    School Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education/partnerships"
                    className="block py-2 px-4 hover:text-green-400"
                  >
                    Partnerships in Education
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <button className="block py-2 px-4 w-full text-left hover:text-green-400 focus:outline-none">
                Engineering
              </button>
              <ul className="pl-4">
                <li>
                  <Link
                    to="/engineering/services"
                    className="block py-2 px-4 hover:text-green-400"
                  >
                    Engineering Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/engineering/ongoing-projects"
                    className="block py-2 px-4 hover:text-green-400"
                  >
                    Ongoing Projects
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
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
