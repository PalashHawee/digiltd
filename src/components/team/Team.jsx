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
import Gallery from "./gallery/Gallery";

import Contact from "../contact/Contact";
import Footer from "../Footer";
import AboutFarzanaAbedin from "./Meet";




const HeroSection = () => {
  
  

  return (
    <>
      <Navbar />
      <div>
        

        <div className="bg-gray-800">
          <Hero />
        </div>
        <AboutFarzanaAbedin />
        <AboutMeSection />
        {/* <Achievements/> */}
        {/* <MyWorksSection /> */}
        <Resume />

        {/* <ClientFeedbackSection /> */}
        {/* <Gallery /> */}

        {/* Contact Section */}
        <div
          id="contact-section"
          className="min-h-screen bg-gradient-to-b from-customBlue-700 to-customBlue-800  flex items-center justify-center"
        >
          <div className="text-center px-6 sm:px-12">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HeroSection;
