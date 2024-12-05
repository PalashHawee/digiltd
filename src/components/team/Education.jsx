import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      duration: "03/2022 – 07/2024",
      institution: "Axtra",
      degree: "BA Business Management",
    },
    {
      id: 2,
      duration: "03/2022 – 07/2023",
      institution: "Axtra",
      degree: "BA Business Management",
    },
    {
      id: 3,
      duration: "03/2023 – 07/2024",
      institution: "Axtra",
      degree: "BA Business Management",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-customBlue-800 to-customGreen-800 py-10">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        Education
      </h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="group transition transform hover:scale-105 hover:bg-customBlue-800 bg-gradient-to-b from-customBlue-800 to-customGreen-800 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
          >
            <p className="text-sm text-white">{item.duration}</p>
            <p className="text-base font-medium text-white flex items-center">
              <span className="h-2 w-2 bg-orange-500 rounded-full inline-block mr-2"></span>
              {item.institution}
            </p>
            <h3 className="text-lg font-semibold text-white mt-2">
              {item.degree}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;