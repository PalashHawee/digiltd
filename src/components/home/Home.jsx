import React from "react";
import HeroSection from "./Hero";
import AboutSection from "./about/About";
import HappyClients from "./HappyClient";
import ContactUs from "./Contact";
import MeetTheTeam from "../team/Team";
import WorkProcess from "../workProcess/WrokProcess";
import Footer from "../Footer";
import ServiceSlider from "../services/services-slider";
import WorkGallery from "../work-gallery/WorkGallery";
import FeedbackSlider from "../client-feedback/ClientFeedback";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MeetTheTeam />
      <WorkProcess />
      <ServiceSlider />
      <WorkGallery />
      <FeedbackSlider/>
      <HappyClients />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
