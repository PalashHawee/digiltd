import React from "react";
import { motion } from "framer-motion";

const SisterConcerns = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Sister Concerns
        </motion.h2>

        {/* List of Sister Concerns */}
        <ul className="space-y-6">
          {/* Diligence Agro */}
          <motion.li
            className="bg-white shadow-lg rounded-lg py-6 px-8 hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/agro.png"
              alt="Diligence Agro Logo"
              className="mx-auto w-16 mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-700">
              Diligence Agro
            </h3>
          </motion.li>

          {/* Diligence Universal School */}
          <motion.li
            className="bg-white shadow-lg rounded-lg py-6 px-8 hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/school.png"
              alt="Diligence Universal School Logo"
              className="mx-auto w-16 mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-700">
              Diligence Universal School
            </h3>
          </motion.li>

          {/* Diligence Engineering */}
          <motion.li
            className="bg-white shadow-lg rounded-lg py-6 px-8 hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/engineering.png"
              alt="Diligence Engineering Logo"
              className="mx-auto w-16 mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-700">
              Diligence Engineering
            </h3>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default SisterConcerns;
