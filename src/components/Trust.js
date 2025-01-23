import React from "react";
import { featuresData } from "../data/Data";

const Features = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-300 py-16 px-8 rounded-2xl shadow-lg">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center hover:scale-105 transition transform duration-300"
          >
            <div className={`${feature.bgColor} p-4 rounded-2xl shadow-md mb-3`}>
              <span className={`text-3xl ${feature.iconColor}`}>{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
