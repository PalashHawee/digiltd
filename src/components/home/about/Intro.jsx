import React from "react";

const Introduction = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to{" "}
            <span className="text-green-600">Diligence Universal Limited</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            Diligence Universal Limited operates in various fields, including
            <span className="text-green-600"> Agro-food Production</span>,
            <span className="text-green-600"> Education</span>,
            <span className="text-green-600"> Restaurant Management</span>, and
            <span className="text-green-600"> Real Estate Development</span>. We
            focus on innovation, eco-friendly practices, and staying true to our
            core values.
          </p>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            Our goal is to provide top-quality services and solutions that
            benefit customers while making a positive impact on society and the
            environment. With strong teamwork, careful planning, and the latest
            technologies, we face challenges head-on and deliver smart
            solutions.
          </p>
        </div>

        {/* Right Side: Image or Visual */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/Asset 4@4x.png"
            alt="Diligence Universal Limited"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Section: Additional Values */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Commitment
        </h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
          We prioritize protecting the environment, making thoughtful choices
          for society, and addressing the needs of people and businesses today.
          Our eco-friendly approach and dedication to innovation set us apart in
          a competitive market.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
