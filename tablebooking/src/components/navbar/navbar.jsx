import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import FiMenu for the hamburger icon
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useCart } from "../contextapi/cartcontext";

// import UserProfile from "../profile/profile"

const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalQuantity } = useCart();

  // State to manage menu visibility on small screens
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
          <div className="flex justify-center items-center gap-3  ">
            {/* Hamburger Icon for Small Screens */}
            <FiMenu
              onClick={toggleMenu}
              className="sm:hidden cursor-pointer text-5xl bg-saffron p-2 rounded-md text-white"
            />

            {/* Menu Items */}
            <ul
              className={`gap-8 ${
                isMenuVisible
                  ? "flex flex-col absolute top-16 right-0 p-4  bg-white rounder-lg "
                  : "hidden"
              } sm:flex sm:flex-row sm:relative sm:top-0 sm:bg-transparent sm:shadow-none`}
            >
              <li
                onClick={() => {
                  handleMenuItemClick("/home");
                }}
                className="hover:shadow-lg p-2  rounded uppercase cursor-pointer m-2 font-semibold hover:bg-orange-500 hover:text-white border-y-2 border-orange-500 animate-border"
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
                className="hover:shadow-lg p-2 rounded uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white text-3xl m-2 flex animate-border group"
              >
                <FaCartPlus />
                {getTotalQuantity() > 0 && (
                  <sup className="text-red-500 mt-3 group-hover:text-white">
                    {getTotalQuantity()}
                  </sup>
                )}
              </li>
            </ul>
          </div>

          <div
            className="hover:shadow-lg p-2 rounded   uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white text-3xl  h-12  my-2"
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
