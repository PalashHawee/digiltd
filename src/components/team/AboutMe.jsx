import React from "react";
import Achievements from "./Achievements";

const AboutMeSection = () => {
  return (
    <section className="bg-gradient-to-b from-customBlue-800 to-customGreen-800 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="relative group flex flex-col items-center">
          {/* Main Profile Picture */}
          <div className="relative overflow-hidden rounded-lg w-64 h-64 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/ceo.jpeg" // Replace with your image link
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 12 Years of Success */}
          <div className="mt-6 text-center">
            <p className="text-5xl font-bold text-blue-400">12</p>
            <p className="text-lg">Successful Years</p>
          </div>

          {/* Icon Section */}
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Passionate Developer Who Loves to Code
          </h2>
          <p className="mb-6 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem reiciendis dolorum iure error quia nemo?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-semibold">Name</p>
              <p>Alan Walker</p>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p>20, Bordeshi, Dhaka</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>hello@foliox.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p>+123 456 7890</p>
            </div>
          </div>
          <a
            href="#"
            className="bg-blue-500 px-6 py-3 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors "
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="mt-5">
        <Achievements />
      </div>
    </section>
  );
};

export default AboutMeSection;
