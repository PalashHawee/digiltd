import React, { useState } from "react";
import Navbar from "../home/NavBar";
import AboutMeSection from "./AboutMe";
// import Achievements from "./Achievements";
import MyWorksSection from "./Works";
// import ResumeSection from "./Resume";
import Resume from "./Resume";
import ClientFeedbackSection from "./Feedback";
import Hero from "./Hero";
import "./hero.css";



const HeroSection = () => {
  
  

  return (
    <div>
      <div className="bg-gray-800">
        <Navbar />
      </div>

      <div className="bg-gray-800">
        <Hero/>
      </div>
      <AboutMeSection />
      {/* <Achievements/> */}
      <MyWorksSection />
      <Resume />

      <ClientFeedbackSection />

      {/* Contact Section */}
      <div
        id="contact-section"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <div className="text-center px-6 sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Contact Me
          </h2>
          <p className="text-gray-600 mt-4">Feel free to get in touch!</p>
          {/* Add your contact form or content here */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
