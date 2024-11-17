import React from "react";
import { Home } from "lucide-react"; // Import an icon from Lucide (you can replace it with any other icon)
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const cardData = [
  {
    title: "Card Title 1",
    description:
      "This is a short description of the first card. It contains some content.",
  },
  {
    title: "Card Title 2",
    description:
      "This is a short description of the second card. It contains some content.",
  },
  {
    title: "Card Title 3",
    description:
      "This is a short description of the third card. It contains some content.",
  },
  {
    title: "Card Title 4",
    description:
      "This is a short description of the fourth card. It contains some content.",
  },
];

const CardCon = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-custom-blue">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="w-full bg-white shadow-lg rounded-lg overflow-hidden shadow-gray-500 transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <CardHeader className="flex items-center space-x-4">
              {/* Icon instead of Logo */}
              <Home className="h-8 w-8 text-gray-800" />{" "}
              {/* Replace with any Lucide icon */}
              {/* Card Title */}
              <h1 className="text-xl font-semibold">{card.title}</h1>
            </CardHeader>
            <CardContent>
              <p>{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardCon;
