import{ useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Cart from '../listitems/carttable'; // Ensure this component is defined
import profile from "../../assets/112.jpg";

const Navbar = () => {
  // State to manage cart visibility
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([
   
  ]);

  // Toggle cart visibility
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
    <Cart/>
  };

   

  return (
    <div className="py-6 sticky top-0 bg-white z-5">
      <div className="container flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <p className="text-lg font-bold">
            FOOD <span className="text-red-600">WORLD</span>
          </p>
        </div>

        {/* Menu Section */}
        <div className="flex justify-center items-center gap-6">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:shadow-lg p-2 bg-white rounded hover:border-b-4 border-primary uppercase cursor-pointer font-semibold">
              HOME
            </li>
            <li className="hover:shadow-lg p-2 bg-white rounded hover:border-b-4 border-primary uppercase cursor-pointer font-semibold">
              MENU
            </li>
            <li className="hover:shadow-lg p-2 bg-white rounded hover:border-b-4 border-primary uppercase cursor-pointer font-semibold">
              ABOUT
            </li>
          </ul>
        </div>

        {/* Login and Cart Section */}
        <div className="flex gap-4 items-center">
          <img src={profile} alt="profile pic" className="w-10 rounded-full" />
          <IoIosArrowDown />
          <FiShoppingCart onClick={toggleCart} className="cursor-pointer" />
        </div>
      </div>

      {/* Cart Table */}
      {isCartVisible && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-10">
          {/* <Cart /> */}
           {/* Render the Cart Component */}
       
        </div>
      )}
    </div>
  );
};

export default Navbar;