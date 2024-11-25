import React from "react";

const VisionMissionValues = () => {
  return (
    <div className="bg-green-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo and Title */}
        <div className="mb-8">
          <img
            src="/images/agro.png"
            alt="Diligence Agro Logo"
            className="mx-auto w-24 mb-4"
          />
          <h1 className="text-4xl font-bold text-green-800">Diligence Agro</h1>
          <p className="text-lg font-medium text-gray-600">
            Vision, Mission & Slogan
          </p>
        </div>

        {/* Vision, Mission, Values Section */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Vision */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Vision
            </h2>
            <p className="text-gray-700">
              To lead as an agro-food production, processing, and marketing
              company that uplifts the lives of associated businesses, their
              teams, farmers, transporters, and all stakeholders. Our foundation
              is built on innovation, sustainability, and integrity.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Mission
            </h2>
            <p className="text-gray-700">
              Our core responsibility is to provide wholesome, nourishing food.
              We are dedicated to making a meaningful impact on environmental
              improvement and giving back to our communities.
            </p>
          </div>
          {/* Values */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Values
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Safety:</strong> Our top priority
              </li>
              <li>
                <strong>Excellence:</strong> Our passion and drive
              </li>
              <li>
                <strong>Integrity:</strong> We do what’s right
              </li>
              <li>
                <strong>Community:</strong> We are invested in our people and
                our environment
              </li>
              <li>
                <strong>Teamwork:</strong> We stand united, never divided
              </li>
              <li>
                <strong>Respect:</strong> We cherish all of our relationships
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <p className="text-gray-700 text-lg">
            The Diligence Agro team firmly believes that by committing each day
            to our best efforts, practicing honesty, supporting our communities,
            and respecting each other, we will build a business with purpose.
            Choosing us means you receive a quality product, rooted in the
            values of Diligence Agro Farms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
