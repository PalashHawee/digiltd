import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // You can use any icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="text-gray-400">Phone: +1 (123) 456-7890</li>
              <li className="text-gray-400">Email: info@company.com</li>
              <li className="text-gray-400">
                Address: 123 Main Street, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
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

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <button className="mt-2 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Diligence Universal Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
