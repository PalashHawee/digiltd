import React from "react";
// import FormContact from "./form";
import CommunicateForm from "./CommuicateForm";
import Navbar from "@/components/home/NavBar";
import HeroSection from "@/components/home/Hero";
import Footer from "@/components/Footer";

const Communicate = () => {
  <Navbar/>
  return (
    <div>
      <HeroSection />
      <div className="bg-custom-blue text-white py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              HAVE ANY PROJECTS? <br />
              FEEL FREE TO <span className="text-green-400">CONTACT US</span>
            </h2>
            <div className="space-y-6 mt-8">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="text-custom-green">HOTLINE</p>
                  <p>+88 01969 944 000</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="text-custom-green">Email Address</p>
                  <p>info@bizsolve.com.bd</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-custom-green">Location</p>
                  <p>Plot#60, Road#28, Gulshan-1, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <CommunicateForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Communicate;
