import React from "react";

const WorkGallery = () => {
  const works = [
    { id: 1, image: "/images/vector_image_1.png", title: "Project 1" },
    { id: 2, image: "/images/vector_image_2.png", title: "Project 2" },
    { id: 3, image: "/images/vector_image_3.png", title: "Project 3" },
    { id: 4, image: "/images/vector_image_4.png", title: "Project 4" },
  ];

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        Work Gallery
      </h2>
      <div className="text-center mb-4 space-x-4">
        <button className="px-4 py-2 border rounded hover:bg-gray-200">
          Web Development
        </button>
        <button className="px-4 py-2 border rounded hover:bg-gray-200">
          Branding
        </button>
        <button className="px-4 py-2 border rounded hover:bg-gray-200">
          Graphics Design
        </button>
        <button className="px-4 py-2 border rounded hover:bg-gray-200">
          Events
        </button>
      </div>
      <div className="px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-40 object-cover"
            />
            <div className="text-center p-2 font-semibold">{work.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkGallery;
