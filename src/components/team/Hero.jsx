import React, { Suspense } from "react";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import Shape from "./ThreeDShape";

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
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
        <div className="bg">
          {/* 3D */}
          <Canvas>
            <Suspense fallback="loading...">
              <Shape />
            </Suspense>
          </Canvas>
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
          <motion.a
            onClick={scrollToSection}
            className="contactLink cursor-pointer"
            animate={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="contactButton"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="#295ae7" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="circleText">
                  <textPath href="#innerCirclePath">Contact Me •</textPath>
                </text>
                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
