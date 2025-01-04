import React from "react";
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaAward,
  FaGraduationCap,
  FaBroadcastTower,
} from "react-icons/fa";

const awards = [
  {
    name: `Pioneering Diligence Universal Limited and Diligence Agro
`,
    icon: <FaTrophy size={50} />,
    color: "bg-yellow-500",
  },
  {
    name: `Advocacy for Human Rights and Women Empowerment`,
    icon: <FaMedal size={50} />,
    color: "bg-green-500",
  },
  {
    name: `Leadership in the Field of Education`,
    icon: <FaGraduationCap size={50} />,
    color: "bg-blue-500",
  },
  {
    name: "Contributions to Journalism and Media",
    icon: <FaBroadcastTower size={50} />,
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
