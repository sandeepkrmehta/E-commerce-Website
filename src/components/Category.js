import React from "react";
import { category } from "../data/Data";

const Category = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Categories</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {category.map((item) => (
          <div
            key={item.id}
            className="flex-1 sm:w-[calc(50%-12px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-12px)] max-w-[240px]"
          >
            {/* Card Container */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Image Wrapper */}
              <div className="relative w-full h-40 overflow-hidden rounded-t-2xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              {/* Card Content */}
              <div className="p-4 text-center">
                <p className="text-gray-700 font-medium capitalize">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
