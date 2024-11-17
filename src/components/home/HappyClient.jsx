import React from "react";

const HappyClients = () => {
  const clients = [
    {
      name: "US-Bangladesh Chamber of Commerce",
      logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg", // Replace with actual path
    },
    {
      name: "Beacon Pharmaceuticals Limited",
      logo: "/path-to-beacon-logo.png",
    },
    {
      name: "Atop",
      logo: "/path-to-atop-logo.png",
    },
    {
      name: "Creative Centralian",
      logo: "/path-to-creative-centralian-logo.png",
    },
    {
      name: "Shadow by Farhana",
      logo: "/path-to-shadow-logo.png",
    },
    {
      name: "Banolata Agro",
      logo: "/path-to-banolata-logo.png",
    },
    {
      name: "Alive Spectra",
      logo: "/path-to-alive-spectra-logo.png",
    },
    {
      name: "Team Alive",
      logo: "/path-to-team-alive-logo.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">OUR HAPPY CLIENT</h2>
        <p className="text-gray-600">
          Three creative minds, with a passion for bringing conceptual designs
          to life, through the combination of both knowledge and experience.
        </p>
      </div>

      {/* Client Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={client.logo}
              alt={client.name}
              className="h-20 w-auto object-contain"
              title={client.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
