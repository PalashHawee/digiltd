import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      description: `Engr. Abedin’s rise to prominence began with a solid academic foundation. She earned a Bachelor's degree in Metallurgical Engineering from Bangladesh University of Engineering & Technology (BUET), one of the country's most prestigious institutions. Later, she expanded her expertise by pursuing a Master’s in Public Health (MPH) from North South University, Dhaka. Her diverse academic background empowered her to bridge the gap between technical disciplines and health, positioning her to take on leadership roles in various industries.`,
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
            
            <h3 className="text-lg font-semibold text-white mt-2">
              {item.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
