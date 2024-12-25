import { IoIosArrowDown } from "react-icons/io";
import profile from "../../assets/112.jpg";

const Navbar = () => {
  return (
    <div className="py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-lg font-bold">
            FOOD <span className="text-red-600">WORLD</span>
          </p>
        </div>
        {/* menu section */}
        <div className="flex justify-center items-center gap-6">
          <ul className=" gap-8 hidden sm:flex">
            <li className="hover:shadow-lg p-2 bg-white rounded hover:border-b-4 border-primary uppercase cursor-pointer font-semibold">
              HOME
            </li>
            <li className="hover:shadow-lg p-2 bg-white rounded hover:border-b-4 border-primary uppercase cursor-pointer font-semibold">
              MENU
            </li>
            <li className="hover:shadow-lg p-2 bg-white rounded hover:border-b-4 border-primary uppercase cursor-pointer font-semibold" >
              ABOUT
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          {/* login section */}
          <img src={profile} alt="profile pic" className="w-10 rounded-full" />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
