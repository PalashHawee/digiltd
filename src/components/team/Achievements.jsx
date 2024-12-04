import React, { useEffect, useState } from "react";

const Achievements = () => {
  const achievementsData = [
    { number: 20, label: "Digital Products" },
    { number: 280, label: "Direct Clients" },
    { number: 3000, label: "Total Projects", format: "K" },
    { number: 9, label: "Awards Win", format: "+" },
  ];

  const [counts, setCounts] = useState(
    achievementsData.map(() => 0) // Initialize counters to 0
  );

  useEffect(() => {
    const handleCounting = () => {
      const intervalIds = achievementsData.map((achievement, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const updatedCounts = [...prevCounts];
            if (updatedCounts[index] < achievement.number) {
              updatedCounts[index] += Math.ceil(achievement.number / 50); // Adjust speed
            } else {
              updatedCounts[index] = achievement.number;
              clearInterval(intervalIds[index]);
            }
            return updatedCounts;
          });
        }, 200); // Adjust interval speed
      });

      return () => intervalIds.forEach((id) => clearInterval(id));
    };

    handleCounting();
  }, [achievementsData]);

  return (
    <section className=" py-16 px-6 md:px-20 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="bg-customGreen-900 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <p className="text-4xl font-bold text-blue-400">
              {counts[index]}
              {achievement.format}
            </p>
            <p className="mt-2 text-lg">{achievement.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
