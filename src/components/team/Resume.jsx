import React, { useState } from "react";
import AboutMeSection from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Awards from "./Awards";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutMeSection />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "awards":
        return <Awards />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-b from-customBlue-800 to-customGreen-800 py-12 px-6 lg:px-20">
      <h2 className="text-center text-white text-3xl font-bold mb-8">
        All over my details find here...
      </h2>
      {/* Buttons container */}
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveSection("about")}
          className={`px-4 py-2 text-sm font-medium rounded mb-4 sm:mb-0 w-full sm:w-auto ${
            activeSection === "about"
              ? "bg-customBlue-500 text-white"
              : "bg-customGreen-500 text-white"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveSection("experience")}
          className={`px-4 py-2 text-sm font-medium rounded mb-4 sm:mb-0 w-full sm:w-auto ${
            activeSection === "experience"
              ? "bg-customGreen-500 text-white"
              : "bg-customBlue-500 text-white"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveSection("education")}
          className={`px-4 py-2 text-sm font-medium rounded mb-4 sm:mb-0 w-full sm:w-auto ${
            activeSection === "education"
              ? "bg-customGreen-500 text-white"
              : "bg-customBlue-500 text-white"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveSection("skills")}
          className={`px-4 py-2 text-sm font-medium rounded mb-4 sm:mb-0 w-full sm:w-auto ${
            activeSection === "skills"
              ? "bg-customGreen-500 text-white"
              : "bg-customBlue-500 text-white"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection("awards")}
          className={`px-4 py-2 text-sm font-medium rounded mb-4 sm:mb-0 w-full sm:w-auto ${
            activeSection === "awards"
              ? "bg-customGreen-500 text-white"
              : "bg-customBlue-500 text-white"
          }`}
        >
          Awards
        </button>
      </div>

      {/* Section content */}
      <div className="shadow rounded-lg p-6">{renderSection()}</div>
    </section>
  );
};

export default Resume;
