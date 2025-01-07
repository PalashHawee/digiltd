import React from "react";
import { motion } from "framer-motion";
import Navbar from "../home/NavBar";
import CareerHero from "./CareerHero";
import Footer from "../Footer";

const Career = () => {
  return (
    <>
          <div>
              <Navbar />
              <CareerHero/>
        <div className="bg-gray-50 py-16 px-6 sm:px-8 lg:px-16">
          {/* Page Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Careers at Diligence Universal
          </motion.h1>

          {/* Career Sections */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Job Openings */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Job Openings
              </h2>
              <p className="text-gray-600">
                Explore our latest job openings to be a part of a dynamic team
                working on innovative projects that make an impact.
              </p>
              <a
                href="/jobs"
                className="inline-block mt-4 text-blue-500 hover:underline font-medium"
              >
                View Openings
              </a>
            </motion.div>

            {/* Internship Programs */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Internship Programs
              </h2>
              <p className="text-gray-600">
                Gain hands-on experience and mentorship by joining one of our
                rewarding internship programs.
              </p>
              <a
                href="/internships"
                className="inline-block mt-4 text-green-500 hover:underline font-medium"
              >
                Learn More
              </a>
            </motion.div>

            {/* Life at Diligence Universal */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-yellow-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Life at Diligence Universal
              </h2>
              <p className="text-gray-600">
                Discover a workplace where innovation, collaboration, and growth
                define our culture.
              </p>
              <a
                href="/life-at-diligence"
                className="inline-block mt-4 text-yellow-500 hover:underline font-medium"
              >
                Explore More
              </a>
            </motion.div>
          </div>
              </div>
              <Footer/>
      </div>
    </>
  );
};

export default Career;
