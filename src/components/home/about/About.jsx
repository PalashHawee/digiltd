import React from "react";

import HeroSection from "../Hero";
import CardCon from "./Card";
import HappyClients from "../HappyClient";
import ContactUs from "../Contact";
import Footer from "@/components/Footer";
import VisionMissionValues from "@/components/visionMission/VisionMissionValues";
import Contact from "@/components/contact/Contact";
import SisterConcerns from "./SisterConcern";

import TeamMember from "./Leadership";

const AboutSection = () => {
  return (
    <>
      <div>
        <HeroSection />
        {/* <CardCon /> */}

        <div className="container mx-auto px-4 py-16">
          <VisionMissionValues />
        </div>
        <TeamMember/>
        <SisterConcerns/>
        {/* <HappyClients /> */}
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

export default AboutSection;
