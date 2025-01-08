import React from "react";

const TeamMember = () => {
  return (
    <div className="bg-blue-500 p-8">
      {/* Leadership Heading */}
      <h2 className="text-3xl font-semibold text-center mb-6 text-black">
        Our Leadership Team
      </h2>

      {/* Team Member Image, Heading, and Subheading */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-6 md:space-y-0">
        {/* Team Member Image */}
        <div className="flex justify-center">
          <img
            className="w-48 h-48 object-cover rounded-full border-4 border-primary"
            src="/images/ceo.jpeg" // Replace with actual image path
            alt="Engr. Farzana Abedin"
          />
        </div>

        {/* Team Member Information */}
        <div className="flex flex-col items-center md:items-start md:ml-6">
          <h2 className="text-2xl font-semibold text-center md:text-left text-gray-800 mb-4">
            🌟 Meet Engr. Farzana Abedin, FIEB 🌟
          </h2>
          <p className="text-white text-center md:text-left mb-8">
            A Leader in Education, Business, and Social Impact
          </p>
        </div>
      </div>

      {/* Content Sections in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1 */}
        <div className="group relative p-6 rounded-lg bg-blue-700 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-semibold text-xl text-white group-hover:text-white">
            🎓 Educational Leadership
          </h3>
          <p className="text-white">
            As Chairman & Head of School at Stanford Universal School, Engr.
            Abedin has transformed the institution into a hub of academic
            excellence. Her previous roles as Vice Principal at Oxford
            International School further underscore her dedication to enhancing
            education standards.
          </p>
        </div>

        {/* Section 2 */}
        <div className="group relative p-6 rounded-lg bg-blue-700 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-semibold text-xl text-white group-hover:text-white">
            🚜 Entrepreneurial Vision
          </h3>
          <p className="text-white">
            In 2018, she ventured into agro-business, founding Diligence
            Universal Limited and launching Diligence Agro. This initiative
            focuses on modernizing agricultural practices in Bangladesh, driving
            sustainability and business innovation.
          </p>
        </div>

        {/* Section 3 */}
        <div className="group relative p-6 rounded-lg bg-blue-700 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-semibold text-xl text-white group-hover:text-white">
            📰 Media & Journalism
          </h3>
          <p className="text-white">
            Engr. Abedin also plays a pivotal role in the media industry as
            Executive Editor of The Daily Sokaler Somoy and Advisory Editor of
            The Daily Sangbad Protidin. She extends her influence through her
            role as Director of Nagorik TV, a USA-based Bangladeshi news
            channel.
          </p>
        </div>

        {/* Section 4 */}
        <div className="group relative p-6 rounded-lg bg-blue-700 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-semibold text-xl text-white group-hover:text-white">
            💼 Social Impact
          </h3>
          <p className="text-white">
            As the Chairman of EarthCare Foundation, Engr. Abedin is a dedicated
            humanitarian, working to ensure human rights and providing vital
            services to underprivileged communities in Bangladesh. From
            education to public health and legal aid, her work is making a
            tangible difference.
          </p>
        </div>

        {/* Section 5 */}
        <div className="group relative p-6 rounded-lg bg-blue-700 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-semibold text-xl text-white group-hover:text-white">
            🏆 Recognitions
          </h3>
          <p className="text-white">
            Her exceptional contributions have earned her prestigious awards,
            including the International Women’s Day Award-2024 and the Danbir
            Haji Mohammad Mohsin Award-2024, celebrating her achievements in
            education and human rights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
