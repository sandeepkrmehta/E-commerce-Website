import React, { useEffect, useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <div
        className={`${sticky ? "header py-4 sticky top-0 z-50 shadow-xl" : ""}`}
      >
        <div className="flex flex-wrap justify-between items-center w-10/12 m-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dbgvjxepr/image/upload/v1737572622/image_f6veyr.png"
              alt="Furniro Logo"
              className="h-10 w-10 mr-2"
            />
            <div className="text-xl font-bold">Furniro</div>
          </div>



          {/* Navigation Menu (Mobile Hidden) */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            Menu
          </button>
          <div
            className={`md:flex flex-wrap text-base py-3 ${isMenuOpen ? "block" : "hidden"} md:block`}
          >
            {navbar.map((nav, key) => (
              <div key={key} className="mr-5">
                <Link
                  className="active link-hover transition-all"
                  to={nav.path}
                >
                  {nav.nav}
                </Link>
              </div>
            ))}
          </div>

          {/* Icons Section */}
          <li className="flex">
            <Link onClick={toggleSidebar} className="mr-5 text-2xl">
              <HiOutlineHeart />
            </Link>
            <Link className="mr-5 text-2xl">
              <HiOutlineUser />
            </Link>
            <Link onClick={toggleSidebar} className="relative mr-5 text-2xl">
              <MdOutlineShoppingBag />
              <div className="items_count">
                <span className="text-white">{totalItems}</span>
              </div>
            </Link>
          </li>
        </div>
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => toggleSidebar()}
      />
    </>
  );
};

export default Header;
