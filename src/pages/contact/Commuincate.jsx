import React from "react";
// import FormContact from "./form";
import CommunicateForm from "./CommuicateForm";
import Navbar from "@/components/home/NavBar";
import HeroSection from "@/components/home/Hero";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";

const Communicate = () => {
  <Navbar />;
  return (
    <div>
      <HeroSection />
      <div className="min-h-screen bg-gradient-to-b from-customBlue-700 to-customBlue-800  flex items-center justify-center">
        <div className="text-center px-6 sm:px-12">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Communicate;
