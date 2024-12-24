
import { IoIosArrowDown } from "react-icons/io";
import profile from '../../assets/112.jpg';

const Navbar = () => {
  
        return (
            <div className="py-6">
              <div className="container flex justify-between items-center">
                {/* logo section */}
                <div>
                  <p className="text-lg font-semibold">
                    FOOD <span className="text-red-600">EAT</span>
                  </p>
                </div>
                 {/* menu section */}
                 <div className="flex justify-center items-center gap-6">
                  <ul className=" gap-8 hidden sm:flex">
                    <li className="hover:border hover:border-b-4 border-primary uppercase">HOME</li>
                    <li className="hover:border hover:border-b-4 border-primary uppercase">MENU</li>
                    <li className="hover:border hover:border-b-4 border-primary uppercase">ABOUT</li>
                  </ul>
                 </div>
                 <div className="flex gap-4 items-center"> 
                  {/* login section */}
                  <img src={profile} alt="profile pic" className="w-10 rounded-full" />
                  <IoIosArrowDown />
                 </div>
              </div>
            </div>
          )
    
       
        
    
  
}

export default Navbar