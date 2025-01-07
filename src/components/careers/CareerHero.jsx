import React from "react";
import { motion } from "framer-motion";

const CareerHero = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div className="relative">
        <img
          src="/images/career.jpg" // Replace with the correct image path
          alt="Team Collaboration"
          className="w-full h-[60vh] sm:h-[70vh] object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-24">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Build Your Career at Diligence Universal
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Join a workplace where innovation meets purpose. Let’s grow together!
        </motion.p>
        {/* <motion.a
          href="#openings"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-md shadow-lg hover:bg-blue-600 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Explore Opportunities
        </motion.a> */}
          </div>
          
    </div>
  );
};

export default CareerHero;
