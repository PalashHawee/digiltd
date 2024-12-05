import React from "react";
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";

const awards = [
  {
    name: "Best Developer",
    icon: <FaTrophy size={50} />,
    color: "bg-yellow-500",
  },
  {
    name: "Employee of the Year",
    icon: <FaMedal size={50} />,
    color: "bg-green-500",
  },
  { name: "Top Performer", icon: <FaStar size={50} />, color: "bg-blue-500" },
  {
    name: "Excellence in Innovation",
    icon: <FaAward size={50} />,
    color: "bg-purple-500",
  },
];

const Awards = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-semibold mb-8 text-white">
        Awards & Recognitions
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out ${award.color} hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-white">{award.icon}</div>
            <h3 className="mt-4 text-white text-lg">{award.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
