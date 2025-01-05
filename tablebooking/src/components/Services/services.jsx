// import React from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { MdElectricMoped } from "react-icons/md";


const Services = () => {
  return (
    <div className=" bg-gray-800 text-white">
    <div className="container py-5">
        {/* header section */}

        <div className="text-center ">
            <h1 className="text-4xl font-semibold">Our Services</h1>
        </div>
        {/* icons section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 ">
            <div className="flex justify-center items-center gap-3 cursor-pointer">
                <FaMobileAlt className="text-2xl"/>
                <p className="text-2xl font-semibold">Online Booking</p>
            </div>
            <div className="flex justify-center items-center gap-3 cursor-pointer">
               <MdOutlineFastfood  className="text-2xl" />
               <p className="text-2xl font-semibold">Fast Food</p>
            </div>
            <div className="flex justify-center items-center gap-3 cursor-pointer">
                <MdFoodBank  className="text-2xl"/>
                <p className="text-2xl font-semibold">Healthy Food</p>
            </div>
            <div className="flex justify-center items-center gap-3 cursor-pointer">
            <MdElectricMoped  className="text-2xl" />
            <p className="text-2xl font-semibold">Delivery</p>
            </div>
        </div>

        

    </div>
     {/* Footer */}
     <footer className="w-full bg-gray-800 text-white text-center py-4 ">
        <p>Copyright © {new Date().getFullYear()} Table reservation. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Services