import React, { useState } from "react";
import Navbar from "../home/NavBar";

const HeroSection = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  // Track mouse enter and leave events
  const handleMouseEnter = () => {
    setCirclePosition({ x: 20, y: 20 });
  };

  const handleMouseLeave = () => {
    setCirclePosition({ x: 0, y: 0 });
  };

  // Scroll to the contact section
  const handleCircleClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-gray-800">
        <Navbar />
      </div>

      <div className="bg-gray-800 relative bg-peach-100 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:flex-row lg:justify-between font-sans">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:max-w-lg flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hello, I’m{" "}
            <span className="inline-block relative text-yellow-500">✌️</span>
            <br />
            <span className="text-white">Eng. Farzana Abedin</span>
          </h1>
          <p className="text-white text-lg mt-3">Managing Director</p>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-green-600 transition">
              Let’s Talk
            </button>
            <button className="px-6 py-2 border border-green-600 text-white rounded hover:bg-green-600 hover:text-white transition">
              My Work
            </button>
          </div>

          {/* Worldwide Clients */}
          <div className="mt-10">
            <p className="text-white font-semibold text-lg">
              1.2k+ Worldwide Clients
            </p>
            <div className="mt-4 flex justify-center lg:justify-start space-x-6">
              {/* Social Media Links */}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
                title="Behance"
              >
                <i className="fab fa-behance text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>

              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
                title="GitHub"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Content (Profile Picture & Animated Circle) */}
        <div className="relative mt-8 lg:mt-0 flex justify-center items-center lg:justify-end w-full lg:w-1/2">
          {/* Profile Picture */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg z-10">
            <img
              src="/images/ceo.jpeg"
              alt="Mark Henry"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          {/* Animated Circle (Positioned below on small screens only) */}
          <div
            className="flex justify-center mt-8 sm:mt-12 lg:mt-0 lg:absolute lg:bottom-[-20px] lg:left-0 lg:right-0 lg:mx-auto z-20 cursor-pointer"
            style={{
              transform: `translate(${circlePosition.x}px, ${circlePosition.y}px)`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCircleClick}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-blue-900   border-4 border-green-600 animate-spin-slow hover:animate-pulse flex items-center justify-center">
              <div className="text-white font-semibold text-sm sm:text-lg">
                Contact Me
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact-section"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <div className="text-center px-6 sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Contact Me
          </h2>
          <p className="text-gray-600 mt-4">Feel free to get in touch!</p>
          {/* Add your contact form or content here */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
