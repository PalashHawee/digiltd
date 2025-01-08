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
          {/* Overlay with background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                'url("/images/engineeringservice.jpg")',
            }}
          ></div>
          {/* Content on top of overlay */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
              Engineering Services and Ongoing Projects
            </h1>
            <p className="text-lg sm:text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Providing innovative engineering solutions for a sustainable
              future through advanced projects and cutting-edge technologies.
            </p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>

        {/* Engineering Services Section */}
        <div className="p-8 md:p-16">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              ⚙️ Engineering Services
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              Our engineering services cover a wide range of industries, from
              construction to technology solutions. We provide exceptional
              engineering designs, project management, and consulting services
              to meet your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl">
                <img
                  className="w-32 h-32 rounded-full mb-6"
                  src="/images/engineering-service-1.jpg"
                  alt="Service 1"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Civil Engineering
                </h3>
                <p className="text-center text-gray-700">
                  Expertise in infrastructure design and construction, including
                  roads, bridges, and buildings.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl">
                <img
                  className="w-32 h-32 rounded-full mb-6"
                  src="/images/engineering-service-2.jpg"
                  alt="Service 2"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Mechanical Engineering
                </h3>
                <p className="text-center text-gray-700">
                  Design and development of mechanical systems and components
                  for various industrial applications.
                </p>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl">
                <img
                  className="w-32 h-32 rounded-full mb-6"
                  src="/images/engineering-service-3.jpg"
                  alt="Service 3"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Electrical Engineering
                </h3>
                <p className="text-center text-gray-700">
                  Providing electrical solutions for energy-efficient systems
                  and power distribution networks.
                </p>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl">
                <img
                  className="w-32 h-32 rounded-full mb-6"
                  src="/images/engineering-service-4.jpg"
                  alt="Service 4"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Environmental Engineering
                </h3>
                <p className="text-center text-gray-700">
                  Specializing in sustainable engineering solutions to protect
                  the environment and improve public health.
                </p>
              </div>
            </div>
          </div>

          {/* Ongoing Projects Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeInUp">
              🚧 Ongoing Projects
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              We are currently involved in several impactful projects that push
              the boundaries of engineering innovation. Here are a few of our
              ongoing projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl">
                <img
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  src="/images/project-1.jpg"
                  alt="Project 1"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Bridge Construction
                </h3>
                <p className="text-center text-gray-700">
                  A major bridge construction project aimed at improving
                  connectivity in the region.
                </p>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl">
                <img
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  src="/images/project-2.jpg"
                  alt="Project 2"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Renewable Energy Systems
                </h3>
                <p className="text-center text-gray-700">
                  Implementation of renewable energy solutions to reduce carbon
                  footprints in urban areas.
                </p>
              </div>

              {/* Project 3 */}
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl">
                <img
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  src="/images/project-3.jpg"
                  alt="Project 3"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Smart City Infrastructure
                </h3>
                <p className="text-center text-gray-700">
                  Developing smart city solutions that integrate technology for
                  enhanced urban living.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default EngineeringLandingPage;
