import React from "react";

const HappyClients = () => {
  const clients = [
    {
      name: "US-Bangladesh Chamber of Commerce",
      logo: "https://www.bizsolve.com.bd/images/clients/USBCCI-LOGO.png", // Replace with actual path
    },
    {
      name: "Beacon Pharmaceuticals Limited",
      logo: "https://www.bizsolve.com.bd/images/clients/beacon.png",
    },
    {
      name: "Atop",
      logo: "https://www.bizsolve.com.bd/images/clients/atop.png",
    },
    {
      name: "Creative Centralian",
      logo: "https://www.bizsolve.com.bd/images/clients/creative-centralian.png",
    },
    {
      name: "Shadow by Farhana",
      logo: "https://www.bizsolve.com.bd/images/clients/shadow.png",
    },
    {
      name: "Banolata Agro",
      logo: "https://www.bizsolve.com.bd/images/clients/banolata-agro.png",
    },
    {
      name: "Alive Spectra",
      logo: "https://www.bizsolve.com.bd/images/clients/alive-spectra.png",
    },
    {
      name: "Team Alive",
      logo: "https://www.bizsolve.com.bd/images/clients/team-alive.png",
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
