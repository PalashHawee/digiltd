import React from "react";

import HeroSection from "../Hero";
import CardCon from "./Card";
import HappyClients from "../HappyClient";
import ContactUs from "../Contact";
import Footer from "@/components/Footer";

const AboutSection = () => {
  return (
    <div>
      <HeroSection />
      <CardCon />

      <div className="container mx-auto px-4 py-16">
        {/* Main Description */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700">
            Biz Solve is a sister concern of Alive Spectra Ltd. We are an
            integrated advertisement agency going beyond the usual stereotypes
            and systems with creativity and producing 360° projects. Every
            customer and every project is different for us. We are working with
            our customers based on the transparency principle. Our creative
            team, strategists & expert team are directly in touch with our
            customers and the whole team works in harmony.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WHY WORK WITH US? */}
          <div>
            <h2 className="text-2xl font-bold mb-4">WHY WORK WITH US?</h2>
            <p className="text-gray-600">
              We are working with our customers based on the transparency
              principle. Our creative team, strategists & customer team are
              directly in touch with our customers and the whole team works in
              harmony. We pay attention to research & build our works on
              rational values. We follow a sustainable "success" policy by
              closely pursuing new channels & technologies. We are a creatively
              driven team who are passionate about new ideas & how these can be
              developed to drive more business for our clients. We love what we
              do and take the time to listen and understand your objectives
              before delivering our recommendations in plain creative language.
              Through our down-to-earth approach, our clients come to see us as
              "part of the team."
            </p>
          </div>

          {/* WE DEVELOP YOUR BUSINESS GROWTH */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              WE DEVELOP YOUR BUSINESS GROWTH
            </h2>
            <p className="text-gray-600">
              We live in the age of modern connectivity. Digital Vision in this
              age of social media, more windows than ever are at our fingertips.
              Because of this, the logo of BizSolve is the window. Currently,
              with a touch or a little swipe to the right and left, we can go to
              the new world. Your company and your products are at your
              fingertips on our mobile device. BizSolve will make your clients
              more interested in any of your company&apos;s services at the
              moment with timely marketing.
            </p>
          </div>

          {/* OUR MISSION */}
          <div>
            <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
            <p className="text-gray-600">
              Our experienced team is ready to Design, research, plan, cost,
              develop, and launch. Driven to get the best results for our
              clients.
            </p>
          </div>

          {/* OUR VISION */}
          <div>
            <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
            <p className="text-gray-600">
              We are a creative team who are passionate about new ideas & how
              these can be developed to drive more business for our clients. We
              love what we do & take the time to listen and understand your
              objectives before delivering our recommendations in plain creative
              language. Through our down-to-earth approach, our clients come to
              see us as "part of the team."
            </p>
          </div>
        </div>
      </div>
      <HappyClients />
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default AboutSection;
