import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaUsers,
  FaGraduationCap,
  FaSuitcase,
  FaNewspaper,
  FaHandsHelping,
} from "react-icons/fa";

const skills = [
  {
    name: "Leadership and Strategic Planning",
    icon: <FaUsers size={40} />,
    color: "bg-blue-500",
  },
  {
    name: "Education Sector Expertise",
    icon: <FaGraduationCap size={40} />,
    color: "bg-green-500",
  },
  {
    name: "Entrepreneurship and Business Management",
    icon: <FaSuitcase size={40} />,
    color: "bg-green-700",
  },
  {
    name: "Media and Communication",
    icon: <FaNewspaper size={40} />,
    color: "bg-orange-600",
  },
  {
    name: "Human Rights Advocacy and Social Welfare",
    icon: <FaHandsHelping size={40} />,
    color: "bg-blue-600",
  },
];

const Skills = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-semibold mb-8 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out ${skill.color} hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-white">{skill.icon}</div>
            <h3 className="mt-4 text-white text-lg">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
