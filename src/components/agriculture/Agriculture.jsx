import React from "react";
import Navbar from "../home/NavBar";
import Footer from "../Footer";

const AgricultureLandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-green-100 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-green-600 text-white p-12 md:p-24">
          {/* Background Image with Color Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/heroagriculture.jpg")',
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(34, 197, 94, 0.7)", // Green background with overlay effect
            }}
          ></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
              Premium Food Products for a Sustainable Future
            </h1>
            <p className="text-lg sm:text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Supporting Farmers and Promoting Agro Sustainability for the Next
              Generation.
            </p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>

        {/* Sections */}
        <div className="p-8 md:p-16">
          {/* Premium Food Product Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              🌱 Premium Food Products
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              Our premium food products are sourced from the finest farms,
              ensuring top-quality produce. We work directly with farmers to
              provide the freshest ingredients for your table.
            </p>
            <div className="flex justify-center">
              <img
                className="w-full sm:w-2/3 md:w-1/2 rounded-lg shadow-xl"
                src="/images/foods.jpg"
                alt="Premium Food Product"
              />
            </div>
          </div>

          {/* Supporting Farmers Section */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              🚜 Supporting Farmers
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              We believe in empowering farmers by providing them with the tools,
              training, and support they need to succeed. Our goal is to help
              farmers thrive and build sustainable farming communities.
            </p>
            <div className="flex justify-center">
              <img
                className="w-full sm:w-2/3 md:w-1/2 rounded-lg shadow-xl"
                src="/images/farmer.jpg"
                alt="Supporting Farmers"
              />
            </div>
          </div>

          {/* Agro Sustainability Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              🌍 Agro Sustainability
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              We are committed to promoting sustainability in agriculture
              through eco-friendly practices, renewable energy solutions, and
              responsible resource management. Together, we can ensure a greener
              future.
            </p>
            <div className="flex justify-center">
              <img
                className="w-full sm:w-2/3 md:w-1/2 rounded-lg shadow-xl"
                src="/images/agro.jpg"
                alt="Agro Sustainability"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default AgricultureLandingPage;
