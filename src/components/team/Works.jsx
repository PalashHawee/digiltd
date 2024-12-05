import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyWorksSection = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // State to control modal visibility and work details
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Ref for the modal container to handle outside clicks
  const modalRef = useRef(null);

  // Data for works
  const worksData = [
    {
      title: "Website Design",
      description:
        "Creative and responsive web designs tailored to your needs.",
      icon: "💻",
      details:
        "I design user-friendly, responsive websites that look great on all devices. My approach is to blend functionality with aesthetics, ensuring a seamless experience for users.",
    },
    {
      title: "Graphic Design",
      description:
        "Professional and stunning graphics for branding and marketing.",
      icon: "🎨",
      details:
        "I create visually appealing designs that communicate your brand's message effectively. From logos to marketing materials, I offer creative solutions for all your design needs.",
    },
    {
      title: "Digital Marketing",
      description:
        "Reach your audience with proven digital marketing strategies.",
      icon: "📈",
      details:
        "With strategic SEO, content marketing, and paid ads, I help businesses expand their online presence and drive growth through digital marketing.",
    },
    {
      title: "Photography",
      description:
        "Capture the moments that matter with professional photography.",
      icon: "📷",
      details:
        "From portraits to events, I offer professional photography services that preserve the memories that matter most to you.",
    },
    {
      title: "Consultancy",
      description:
        "Expert advice and guidance to take your business to the next level.",
      icon: "💡",
      details:
        "I provide expert consulting services to help you improve your business operations, marketing strategies, and overall growth.",
    },
    {
      title: "Web Development",
      description:
        "Robust and scalable web development solutions for your projects.",
      icon: "📂",
      details:
        "I specialize in building scalable, high-performance websites and applications tailored to your specific business needs.",
    },
  ];

  // Function to open modal with selected work details
  const openModal = (work) => {
    setModalContent(work);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Handle outside click to close modal
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Add event listener for outside click
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

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
              className="bg-customBlue-800 rounded-lg p-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              onClick={() => openModal(work)} // Open modal on click
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

        {/* Modal for displaying details */}
        {isModalOpen && modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
              ref={modalRef}
              className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"
            >
              <h2 className="text-3xl font-semibold mb-4">
                {modalContent.title}
              </h2>
              <p className="text-gray-700 mb-4">{modalContent.details}</p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-customBlue-500 text-white py-2 px-4 rounded-lg hover:bg-customGreen-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWorksSection;
