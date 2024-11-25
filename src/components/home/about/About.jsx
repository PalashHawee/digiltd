import React from "react";

import HeroSection from "../Hero";
import CardCon from "./Card";
import HappyClients from "../HappyClient";
import ContactUs from "../Contact";
import Footer from "@/components/Footer";
import VisionMissionValues from "@/components/visionMission/VisionMissionValues";

const AboutSection = () => {
  return (
    <div>
      <HeroSection />
      <CardCon />

      <div className="container mx-auto px-4 py-16">
        <VisionMissionValues/>
      </div>
      <HappyClients />
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default AboutSection;
