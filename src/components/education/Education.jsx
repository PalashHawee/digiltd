import React from "react";
import Navbar from "../home/NavBar";
import Footer from "../Footer";

const EducationLandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white p-12 md:p-24">
          {/* Overlay with background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                'url("/images/heroeducation.jpg")',
            }}
          ></div>
          {/* Content on top of overlay */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
              School Programs and Partnerships in Education
            </h1>
            <p className="text-lg sm:text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Empowering students with quality education through collaborative
              programs and strong partnerships.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>

        {/* School Programs Section */}
        <div className="p-8 md:p-16">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              📚 School Programs
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              Our school programs are designed to offer a well-rounded education
              to students of all ages. We provide specialized programs in
              technology, arts, sciences, and business, ensuring a diverse
              learning experience.
            </p>
            <div className="flex justify-center">
              <img
                className="w-full sm:w-2/3 md:w-1/2 rounded-lg shadow-xl"
                src="/images/schoolprogram.jpg"
                alt="School Programs"
              />
            </div>
          </div>

          {/* Partnerships in Education Section */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              🤝 Partnerships in Education
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              We actively collaborate with various institutions and
              organizations to enhance educational opportunities. Our
              partnerships provide students with access to specialized programs,
              internships, and career support.
            </p>
            <div className="flex justify-center">
              <img
                className="w-full sm:w-2/3 md:w-1/2 rounded-lg shadow-xl"
                src="/images/partnershipeducation.jpg"
                alt="Partnerships in Education"
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

export default EducationLandingPage;
