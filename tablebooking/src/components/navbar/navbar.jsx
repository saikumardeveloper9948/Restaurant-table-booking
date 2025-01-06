import { useState } from "react";
import {  FiMenu } from "react-icons/fi"; // Import FiMenu for the hamburger icon
import Cart from '../listitems/carttable';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const handleabout = () => {
    // navigate("/about");
  // };

  // State to manage cart visibility
  const [isCartVisible, setIsCartVisible] = useState(false);

  // State to manage menu visibility on small screens
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle cart visibility
  
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
    <div className="py-6 sticky top-0 bg-white z-50 shadow-md">
      <div className="container flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <p className="text-lg font-bold">
            FOOD <span className="text-orange-500">WORLD</span>
          </p>
        </div>

        {/* Menu Section */}
        <div className="flex justify-center items-center gap-6">
          {/* Hamburger Icon for Small Screens */}
          <FiMenu
            onClick={toggleMenu}
            className="sm:hidden cursor-pointer text-5xl bg-saffron p-2 rounded-md text-white"
          />

          {/* Menu Items */}
          <ul
            className={`gap-8 ${
              isMenuVisible ? "flex flex-col absolute top-16 right-0 bg-white w-auto  p-4 shadow-lg" : "hidden"
            } sm:flex sm:flex-row sm:relative sm:top-0 sm:bg-transparent sm:shadow-none`}
          >
            <li className="hover:shadow-lg p-2 rounded   uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white">
              HOME
            </li>
            <li className="hover:shadow-lg p-2 rounded   uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white">
              MENU
            </li>
            <li
              onClick={()=>{handleMenuItemClick("/about")}}
              className="hover:shadow-lg p-2 rounded   uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white"
            >
              ABOUT
            </li>
            <li className="hover:shadow-lg p-2 rounded   uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white">
              CONTACT
            </li>
            <li 
            onClick={()=>{handleMenuItemClick("")}}
            className="hover:shadow-lg p-2 rounded   uppercase cursor-pointer font-semibold hover:bg-orange-500 hover:text-white">
             CART
            </li>
          </ul>
        </div>

        {/* Login and Cart Section */}
        {/* <div className="flex gap-4 items-center">
          <FiShoppingCart onClick={toggleCart} className="cursor-pointer" />
        </div> */}
      </div>

      {/* Cart Table */}
      {isCartVisible && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 z-10">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;