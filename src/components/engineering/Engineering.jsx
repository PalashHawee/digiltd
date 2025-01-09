import React from "react";
import Navbar from "../home/NavBar";
import Footer from "../Footer";

const EngineeringLandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white p-12 md:p-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: 'url("/images/engineeringservice.jpg")',
            }}
          ></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
              Engineering Services for Real Estate
            </h1>
            <p className="text-lg sm:text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Innovative solutions to transform your real estate projects into
              sustainable and modern developments.
            </p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
        </section>

        {/* Real Estate Service Section */}
        <div className="p-8 md:p-16">
          <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
            ⚙️ Real Estate Engineering Services
          </h2>
          <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            We specialize in delivering comprehensive solutions for real estate
            projects, including architectural design, construction management,
            and property development services.
          </p>
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
            <img
              className="w-32 h-32 rounded-full mb-6"
              src="/images/real-estate-service.jpg"
              alt="Real Estate Service"
            />
            <h3 className="text-xl font-semibold mb-4">Real Estate Service</h3>
            <p className="text-center text-gray-700">
              Our services help you achieve your vision for modern and
              sustainable real estate developments, tailored to meet industry
              standards and client expectations.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default EngineeringLandingPage;
