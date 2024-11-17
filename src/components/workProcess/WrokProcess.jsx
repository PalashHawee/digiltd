import React from "react";
import { Settings, Code, CheckCircle } from "lucide-react"; // Replace with your preferred icons

// Work Process Data
const processData = [
  {
    title: "Plan",
    description:
      "We carefully plan every project to ensure success and efficiency.",
    icon: <Settings className="h-12 w-12 text-custom-blue" />, // Tailwind-customized icon
  },
  {
    title: "Develop",
    description:
      "Our team develops solutions using the latest technologies and best practices.",
    icon: <Code className="h-12 w-12 text-custom-blue" />,
  },
  {
    title: "Deliver",
    description:
      "We ensure on-time delivery of high-quality results tailored to your needs.",
    icon: <CheckCircle className="h-12 w-12 text-custom-blue" />,
  },
];

const WorkProcess = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center bg-customGreen-700">
      <h2 className="text-3xl font-bold mb-8">Our Work Process</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {processData.map((process, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">{process.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
            {/* Description */}
            <p className="text-gray-600">{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
