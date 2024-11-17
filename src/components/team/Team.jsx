import React from "react";
import Navbar from "../home/NavBar";
import HeroSection from "../home/Hero";
import ContactUs from "../home/Contact";

// Sample team data
const teamData = [
  {
    name: "John Doe",
    position: "CEO",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual image URLs
  },
  {
    name: "Jane Smith",
    position: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Johnson",
    position: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sarah Lee",
    position: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // Add more members if needed
];

const MeetTheTeam = () => {
  return (
    <div>
      {/* <HeroSection/> */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Meet The Team</h1>
        <p className="text-center mb-8 px-40">
          Three creative minds, with a passion for bringing conceptual designs
          to life, through the combination of both knowledge and experience,
          striving to achieve perfection in every aspect of our business, while
          elevating our clients’ vision.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <ContactUs/> */}
    </div>
  );
};

export default MeetTheTeam;
