import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  const cartSelector = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartSelector, dispatch]);

  const removeFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  return (
    <div>
      <div
        style={{
          zIndex: "100",
          transform: `translateX(${isSidebarOpen ? "0%" : "100%"})`,
        }}
        className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto"
      >
        {/* Header */}
        <div className="border-b mb-4 flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
          <span
            className="text-gray-600 cursor-pointer hover:text-black transition-all"
            onClick={closeSidebar}
          >
            <FaTimes size={24} />
          </span>
        </div>

        {/* Cart Content */}
        <div className="p-4">
          {cartProducts.length === 0 ? (
            <div className="text-center text-xl font-bold text-gray-600">
              Your cart is empty!
            </div>
          ) : (
            <div>
              {cartProducts.map((item, key) => (
                <div
                  className="flex justify-between items-center mb-6 border-b pb-4"
                  key={key}
                >
                  {/* Product Info */}
                  <div className="flex items-center">
                    <div className="relative w-20 h-20 mr-4">
                      <img
                        src={item.img}
                        alt="product"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <span
                        className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-600 text-white p-1 rounded-full cursor-pointer hover:bg-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTimes size={14} />
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}

              {/* Subtotal Section */}
              <div className="flex justify-between items-center mt-6 bg-gray-800 text-white px-6 py-4 rounded-lg">
                <h2 className="text-lg font-semibold">
                  Subtotal: <span className="font-bold">${totalAmount}</span>
                </h2>
                <Link
                  to="/cart"
                  className="bg-rose-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-rose-600 transition-all"
                >
                  View Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
