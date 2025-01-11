import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import FiMenu for the hamburger icon
// import Cart from '../listitems/carttable';

import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// import UserProfile from "../profile/profile"

const Navbar = () => {
  const navigate = useNavigate();

  // State to manage menu visibility on small screens
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  // const [isCartVisible, setIsCartVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  // Close menu when a menu item is clicked
  const handleMenuItemClick = (path) => {
    setIsMenuVisible(false); // Close the menu
    navigate(path); // Navigate to the selected path
  };

  return (
    <div className="sticky top-0   py-1 bg-lime-100 z-50 shadow-md">
      <div className="container flex justify-between items-center ">
        {/* Logo Section */}
        <div>
          <p className="text-4xl font-bold ">
            Eat- <span className="text-orange-500">Food</span>
          </p>
        </div>

        {/* Menu Section */}
        <div className="flex gap-4">
          <div className="flex justify-center items-center gap-6">
            {/* Hamburger Icon for Small Screens */}
            <FiMenu
              onClick={toggleMenu}
              className="sm:hidden cursor-pointer text-5xl bg-saffron p-2 rounded-md text-white"
            />

            {/* Menu Items */}
            <ul
              className={`gap-8 ${
                isMenuVisible
                  ? "flex flex-col absolute top-16 right-0 p-4 "
                  : "hidden"
              } sm:flex sm:flex-row sm:relative sm:top-0 sm:bg-transparent sm:shadow-none`}
            >
              <li
                onClick={() => {
                  handleMenuItemClick("/home");
                }}
                className="hover:shadow-lg p-2 rounded uppercase cursor-pointer m-2 font-semibold hover:bg-orange-500 hover:text-white border-y-2 border-orange-500 animate-border"
              >
                HOME
              </li>
              <li
                onClick={() => {
                  handleMenuItemClick("/categories");
                }}
                className="hover:shadow-lg p-2 rounded uppercase cursor-pointer m-2 font-semibold hover:bg-orange-500 hover:text-white  animate-border"
              >
                MENU
              </li>
              <li
                onClick={() => {
                  handleMenuItemClick("/about");
                }}
                className="hover:shadow-lg p-2 rounded uppercase cursor-pointer m-2 font-semibold hover:bg-orange-500 hover:text-white  animate-border"
              >
                ABOUT
              </li>
              <li
                onClick={() => {
                  handleMenuItemClick("/contact");
                }}
                className="hover:shadow-lg p-2 rounded uppercase cursor-pointer m-2 font-semibold hover:bg-orange-500 hover:text-white animate-border"
              >
                CONTACT
              </li>
              <li
                onClick={() => {
                  handleMenuItemClick("/cart");
                }}
                className="hover:shadow-lg p-2 rounded uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white text-3xl m-2   animate-border"
              >
                <FaCartPlus />
              </li>
            </ul>
          </div>

          <div
            className="hover:shadow-lg p-2 rounded   uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white text-3xl  h-12 "
            onClick={() => {
              handleMenuItemClick("./profile");
            }}
          >
            <CgProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
