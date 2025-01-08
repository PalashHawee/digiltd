import React from "react";
import HeroSection from "./Hero";
// import AboutSection from "./about/About";
import HappyClients from "./HappyClient";
import ContactUs from "./Contact";
// import MeetTheTeam from "../team/Team";
import WorkProcess from "../workProcess/WrokProcess";
import Footer from "../Footer";
import ServiceSlider from "../services/Services";
import WorkGallery from "../work-gallery/WorkGallery";
import FeedbackSlider from "../client-feedback/ClientFeedback";
import VisionMissionValues from "../visionMission/VisionMissionValues";
import Contact from "../contact/Contact";
import Introduction from "./about/Intro";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Introduction/>
        <VisionMissionValues />
        {/* <MeetTheTeam /> */}
        {/* <WorkProcess /> */}
        {/* <ServiceSlider /> */}
        {/* <WorkGallery /> */}
        {/* <FeedbackSlider /> */}
        {/* <HappyClients /> */}
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

export default Home;
