import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyWorksSection = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const worksData = [
    {
      title: "Website Design",
      description:
        "Creative and responsive web designs tailored to your needs.",
      icon: "💻", // Replace with an actual SVG or icon
    },
    {
      title: "Graphic Design",
      description:
        "Professional and stunning graphics for branding and marketing.",
      icon: "🎨", // Replace with an actual SVG or icon
    },
    {
      title: "Digital Marketing",
      description:
        "Reach your audience with proven digital marketing strategies.",
      icon: "📈", // Replace with an actual SVG or icon
    },
    {
      title: "Photography",
      description:
        "Capture the moments that matter with professional photography.",
      icon: "📷", // Replace with an actual SVG or icon
    },
    {
      title: "Consultancy",
      description:
        "Expert advice and guidance to take your business to the next level.",
      icon: "💡", // Replace with an actual SVG or icon
    },
    {
      title: "Web Development",
      description:
        "Robust and scalable web development solutions for your projects.",
      icon: "📂", // Replace with an actual SVG or icon
    },
  ];

  return (
    <section className="bg-gradient-to-b from-customGreen-800 to-customBlue-800 py-16 px-6 md:px-20 text-white">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
          My Works
        </h2>
        <p
          className="text-gray-300 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore the diverse range of services I offer to help you succeed.
        </p>

        {/* Grid of Works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {worksData.map((work, index) => (
            <div
              key={index}
              className="bg-customBlue-800 rounded-lg p-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-blue-400">{work.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
              {/* Description */}
              <p className="text-gray-300">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorksSection;
