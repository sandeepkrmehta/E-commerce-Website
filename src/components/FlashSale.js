import React, { useState } from "react";
import { products } from "../data/Data";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";
import Heading from "../common/Heading";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const productsPerPage = 16; // Number of products per page

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="w-10/12 m-auto">
        <Heading heading={"Our Products"} />
        {/* Updated grid layout to use flexbox with wrapping */}
        <div className="flex flex-wrap gap-3 justify-center">
          {currentProducts.map((item, index) => (
            <div key={index} className="mt-8 w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="overflow-hidden relative">
                <div className="image-container relative">
                  <div className="rounded-3xl">
                    <img src={item.img} alt="img" className="rounded-3xl" />
                  </div>

                  <div className="opacity-0 absolute top-0 right-0 m-4">
                    <div>
                      <div className="bg-white p-4 rounded-full mb-2">
                        <IoMdHeartEmpty />
                      </div>
                      <div className="bg-white p-4 rounded-full">
                        <IoMdSearch />
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 absolute -bottom-3 right-0 bg-white p-4 rounded-s-2xl">
                    <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-3xl">
                      <button
                        className="text-2xl"
                        onClick={() => handleOpen(item.id)}
                      >
                        <BiCart />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product-details mt-2">
                  <p className="mb-2">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="pagination flex justify-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-gray-300 rounded-full mx-1 hover:bg-gray-400 transition-all duration-300"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-6 py-3 mx-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              } hover:bg-blue-600 hover:text-white transition-all duration-300`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-gray-300 rounded-full mx-1 hover:bg-gray-400 transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>

      <Modal
        data={products.find((item) => item.id === isModalOpen)}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default FlashSale;
