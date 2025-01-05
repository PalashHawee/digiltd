import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // You can use any icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Company Info Section */}
          <div className="flex flex-col items-center sm:items-start">
            {/* Company Logo */}
            <img
              src="/images/Asset 4@4x.png" // Update with the actual path to your logo
              alt="Company Logo"
              className="h-12 mb-4" // Adjust size as needed
            />
            <ul>
              <Link
                to="/about"
                className="block py-2 px-4 hover:text-green-400"
              >
                About Us
              </Link>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-4 hover:text-green-400"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 hover:text-green-400"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/farzana"
                  className="block py-2 px-4 hover:text-green-400"
                >
                  Meet Engr. Fazana Abedin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="text-gray-400">Phone: +8801955510730</li>
              <li className="text-gray-400">
                Email: info@diligenceuniversal.com
              </li>
              <li className="text-gray-400">
                <h3>Corporate Office</h3>
                Address: House 39, Road 24, Gulshan 1, Dhaka-1212, Bangladesh
              </li>
              <br />
              <li className="text-gray-400">
                <h3>Project Office</h3>
                Address: 1st Floor, House 31, Road 5,Block C Banasree,Rampura,
                Dhaka, Bangladesh
              </li>
              <br />
              <li className="text-gray-400">
                <h3>Project Site</h3>
                Address: Chor Chamardah, Kolati Union, Keranigonj, Dhaka
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Stay connected with us on social media:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                {/* <LinkedIn className="h-6 w-6" /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Diligence Universal Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
