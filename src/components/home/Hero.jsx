// src/components/HeroSection.js
import React from "react";
import Navbar from "./NavBar";
import HeroImage from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-800">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="text-center text-white py-20 px-6">
        
        <div className="flex justify-center">
          <img src={HeroImage} alt="Diligence Icon" className="" />
        </div>
      </div>

      {/* Wave Background */}
    </div>
  );
};

export default HeroSection;
