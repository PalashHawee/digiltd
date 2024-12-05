import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientFeedbackSection = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Sample data for client feedbacks
  const feedbacks = [
    {
      name: "John Doe",
      photo: "/images/client_1.png",
      opinion:
        "Working with this team was a fantastic experience. They truly understood our needs and delivered on time!",
    },
    {
      name: "Jane Smith",
      photo: "/images/client_2.png",
      opinion:
        "The quality of work and attention to detail exceeded our expectations. Highly recommend them for any project.",
    },
    {
      name: "Tom Lee",
      photo: "/images/client_3.png",
      opinion:
        "They were professional, efficient, and made the entire process easy. I’m thrilled with the results!",
    },
    {
      name: "Emily Davis",
      photo: "/images/logo-1.jpg",
      opinion:
        "A team of dedicated professionals. They listened to my ideas and helped turn them into reality. Wonderful work!",
    },
  ];

  // State to handle current feedback
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  // Change the feedback every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-customGreen-800 to-customBlue-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
          What Our Clients Say
        </h2>

        <div className="flex justify-center items-center space-x-8">
          {/* Client Photo and Feedback */}
          <div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
            data-aos="zoom-in"
          >
            <img
              src={feedbacks[currentFeedbackIndex].photo}
              alt={feedbacks[currentFeedbackIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-lg text-left">
            <p className="text-xl font-semibold mb-4">
              "{feedbacks[currentFeedbackIndex].opinion}"
            </p>
            <p className="font-semibold text-lg">
              - {feedbacks[currentFeedbackIndex].name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
