import React from "react";
import ReactTypingEffect from "react-typing-effect";

const ServicesHero = () => {
  return (
    <div className="bg-gray-800 text-white py-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Typing Effect */}
        <ReactTypingEffect
          text={["Our Services"]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          className="text-5xl font-bold sm:text-6xl lg:text-7xl"
        />
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl">
          Explore our wide range of services, designed to help you achieve
          excellence in agriculture, education, engineering, and consulting.
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;
