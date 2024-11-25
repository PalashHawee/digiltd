import React from "react";
import Navbar from "../home/NavBar";
import Footer from "../Footer";

const CEOMessage = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-64 sm:h-80 lg:h-96"
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
      >
        <Navbar />
        <div className="absolute inset-0 bg-custom-blue flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            The Message of the CEO
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* CEO Image */}
          <div className="flex justify-center items-start">
            <img
              src="/images/ceo.jpeg" // Replace with your image path
              alt="CEO of diligence Ltd"
              className="w-56 h-56 lg:w-64 lg:h-64 rounded-lg object-cover shadow-lg border-4 border-gray-200"
            />
          </div>

          {/* CEO Message */}
          <div className="md:col-span-2">
            <div className="bg-green-700 p-6 rounded-t-lg text-white">
              <h2 className="text-2xl font-bold">THE MESSAGE OF THE CEO</h2>
            </div>
            <div className="bg-white p-6 rounded-b-lg shadow-lg">
              <p className="text-gray-700 text-lg sm:text-xl">
                Diligence Universal Ltd. was launched in Bangladesh as a direct
                sales company, but now we have also launched many other
                businesses as a sister concern. In the age of globalization,
                keeping with rapid growth, Diligence Universal Ltd. stretched
                itself to cover new boundaries and responded effectively to the
                long-term needs of the corporate industry.
              </p>
              <p className="text-gray-700 text-lg sm:text-xl mt-4">
                Our Motto is "...Changing the Way of Thinking." We started a new
                way of doing business and expanded our horizons to cover
                backward integration. In addition, we diversified to promote IT
                solutions, business development, branding, marketing,
                telecommunication projects, and tourism and hospitality
                management. Diligence Universal Ltd. is now engaged in many
                fields, with several enterprises involved in diverse businesses.
              </p>
              <p className="text-gray-700 text-lg sm:text-xl mt-4">
                We take pride in the fact that, over the period, with the
                cooperation of our business partners and clientele, we have
                achieved meaningful gains in strength as well as goodwill. We do
                not strive to be the market leader for glory, but we aim to be
                at the center as far as quality and prices are concerned.
              </p>
              <p className="text-gray-700 text-lg sm:text-xl mt-4">
                We believe businesses should be equipped with cutting-edge
                technologies to make their operations innovative as well as
                globally competitive. Our vision is to become a one-stop B2B and
                B2C solution provider by ensuring the highest level of customer
                satisfaction and helping you optimize your investment. Let me
                assure you that Diligence Universal Ltd. will strive to match
                the global need to enhance the quality of our products and
                services and will evolve to new heights for the company. Our
                vivid understanding of market dynamics will help us in the
                attainment of these goals.
              </p>
              <div className="text-right mt-6">
                <p className="text-lg font-semibold">Farzana Abedin</p>
                <p className="text-gray-500">CEO & Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CEOMessage;
