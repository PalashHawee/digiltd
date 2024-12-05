import React from "react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      duration: "03/2020 – 07/2024",
      company: "Company A",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      duration: "08/2018 – 02/2020",
      company: "Company B",
      role: "UI/UX Designer",
    },
    {
      id: 3,
      duration: "06/2016 – 07/2018",
      company: "Company C",
      role: "Graphic Designer",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-customBlue-800 to-customGreen-800 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Experience</h2>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="group bg-gradient-to-b from-customBlue-800 to-customGreen-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
          >
            <p className="text-sm text-white">{item.duration}</p>
            <h3 className="text-lg font-semibold text-white mt-2">
              {item.company}
            </h3>
            <p className="text-base text-white">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
