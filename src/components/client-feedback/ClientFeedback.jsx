import React, { useState, useEffect } from "react";

const feedbackData = [
  {
    name: "Sujana Chowdhury",
    position: "CEO",
    feedback:
      "When our company was starting the business, we didn’t have good IT support. Biz Solve provided all the IT support for our company. They provided a good logo design for our company branding, and our company loved it.",
    image: "/images/client_3.png",
  },
  {
    name: "John Doe",
    position: "Marketing Manager",
    feedback:
      "Biz Solve helped us increase our online presence with outstanding social media management. Highly recommended!",
    image: "/images/client_1.png",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    feedback:
      "Their technical support and branding services were exceptional. We’ve seen a huge improvement in our workflow.",
    image: "/images/client_2.png",
  },
];

const FeedbackSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-green-500 rounded-xl">
      <div className="w-full max-w-4xl p-8 text-white">
        <div className="flex items-center">
          <div className="text-5xl mr-6">“</div>
          <div className="text-2xl font-bold">What Our Clients Are Saying</div>
        </div>
        <div className="mt-8 flex items-center gap-6 transition-transform duration-1000 ease-in-out">
          <img
            src={feedbackData[currentIndex].image}
            alt={feedbackData[currentIndex].name}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <p className="text-lg italic">
              {feedbackData[currentIndex].feedback}
            </p>
            <p className="mt-4 font-bold">{feedbackData[currentIndex].name}</p>
            <p className="text-sm">{feedbackData[currentIndex].position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
