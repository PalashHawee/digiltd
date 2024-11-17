import React from "react";
import HeroSection from "./Hero";
import AboutSection from "./about/About";
import HappyClients from "./HappyClient";
import ContactUs from "./Contact";
import MeetTheTeam from "../team/Team";
import WorkProcess from "../workProcess/WrokProcess";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <AboutSection /> */}
      <HappyClients />
      <MeetTheTeam />
      <WorkProcess />
          <ContactUs />
          <Footer />
    </div>
  );
};

export default Home;
