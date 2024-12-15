import React, { useState } from "react";
import galleryData from "./galleryData";

const Gallery = () => {
  const [filter, setFilter] = useState("Show All");

  // Filtered items based on the selected category
  const filteredItems =
    filter === "Show All"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  return (
    <div className="  bg-gradient-to-b from-customBlue-700 to-customBlue-800  text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["Show All", "Nature", "Cars", "People"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full border ${
                filter === category
                  ? "bg-customBlue-500 text-white"
                  : "bg-transparent text-white border-purple-600"
              } hover:bg-customBlue-600 hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
