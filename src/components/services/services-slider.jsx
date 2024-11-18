import React, { useState, useEffect } from "react";

const services = [
  {
    title: "Digital Marketing",
    paragraph:
      "We offer a wide range of online marketing services including SEO, SEM, SMM, SMO, Paid Ads, content marketing, etc.",
    keyServices: [
      "Original content production for the brand",
      "Management of Social Media Accounts",
      "Community Management & Moderator Services",
      "Google Ads",
      "Video Marketing & Production",
      "Search Engine Optimization",
    ],
    image: "/images/digital_marketing.png", // Updated image
  },
  {
    title: "Web Development",
    paragraph:
      "Providing custom web solutions tailored to your needs with cutting-edge technologies for maximum performance.",
    keyServices: [
      "Responsive Website Design",
      "E-commerce Platforms",
      "API Integration",
      "SEO-friendly Websites",
      "Progressive Web Apps",
    ],
    image: "images/web_development.png", // Updated image
  },
  {
    title: "Content Creation",
    paragraph:
      "Crafting high-quality content to engage audiences and promote your brand effectively across platforms.",
    keyServices: [
      "Blog Writing",
      "Video Production",
      "Graphics Design",
      "Copywriting",
      "Social Media Content",
    ],
    image: "images/content_creation.png", // Updated image
  },
  {
    title: "Brand Strategy",
    paragraph:
      "Building a strong brand identity and creating strategies to make your business stand out in the market.",
    keyServices: [
      "Brand Positioning",
      "Market Research",
      "Logo Design",
      "Campaign Management",
      "Storytelling",
    ],
    image: "images/brand_strategy.png", // Updated image
  },
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="relative bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            className="rounded-t-lg md:rounded-none md:rounded-l-lg object-cover w-full h-64 md:h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center md:text-left">
            {services[currentIndex].title}
          </h2>
          <p className="text-gray-600 mt-4 text-center md:text-left">
            {services[currentIndex].paragraph}
          </p>
          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700 text-left">
            {services[currentIndex].keyServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
