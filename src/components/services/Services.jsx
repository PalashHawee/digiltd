import React from "react";
import { motion } from "framer-motion";
import Navbar from "../home/NavBar";
import ServicesHero from "./HeroService";
import Footer from "../Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="relative bg-gray-800">
          <ServicesHero />
        </div>

        <div className="bg-gray-50 py-16 px-6 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Page Heading */}
            <motion.h2
              className="text-4xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Services
            </motion.h2>

            {/* Services Grid */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Agro Services */}
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="/images/agro.png"
                  alt="Agro Services"
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                  Agro Services
                </h3>
                <p className="text-gray-600 text-center">
                  Agro product cultivation, processing, and distribution. We
                  focus on sustainability and quality in every step of the
                  process.
                </p>
              </motion.div>

              {/* Educational Services */}
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <img
                  src="/images/school.png"
                  alt="Educational Services"
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                  Educational Services
                </h3>
                <p className="text-gray-600 text-center">
                  Holistic education for students at Diligence Universal School,
                  nurturing future leaders through excellence and care.
                </p>
              </motion.div>

              {/* Engineering Services */}
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-yellow-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <img
                  src="/images/engineering.png"
                  alt="Engineering Services"
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                  Engineering Services
                </h3>
                <p className="text-gray-600 text-center">
                  Cutting-edge engineering solutions for diverse industries,
                  delivering innovation and precision to meet your needs.
                </p>
              </motion.div>

              {/* Consulting Services */}
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-purple-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <img
                  src="/images/consulting.png"
                  alt="Consulting Services"
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                  Consulting Services
                </h3>
                <p className="text-gray-600 text-center">
                  Providing expert guidance and solutions to help businesses
                  achieve their goals with efficiency and effectiveness.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
