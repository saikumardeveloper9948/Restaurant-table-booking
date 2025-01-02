import React from "react";
import image from "../../assets/reserved table.jpg"

class Reservation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container w-full lg:px-28 md:px-16 sm:px-7 px-4 pb-6">
                <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1">
                    <div className="md:block hidden h-full">
                        <img src={image} alt="table" className="w-full h-full object-cover object-center rounded-l-xl  space-y-6" />
                    </div>
                    <div className="w-full bg-zinc-800 md:p-8 p-4 flex items-center justify-center md:rounded-r-xl md:rounded-l-none rounded-r-xl rounded-l-xl">
                        <div className="w-full space-y-6">
                            <div className="space-y-1">
                                <h5 className="text-base text-yellow-500 font-normal">
                                    Reservation
                                </h5>
                                <h1 className="text-xl text-neutral-100 font-bold">
                                    Book a table online
                                </h1>
                            </div>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="FullName" className="text-base text-neutral-400 font-normal-block">
                                        Full Name
                                    </label>
                                    <input type="text" id="FullName" placeholder="e.g. Surname. Name" className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-base text-neutral-400 font-normal-block">
                                        E-mail Id
                                    </label>
                                    <input type="email" id="email" placeholder="e.g. name@gmail.com" className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="space-y-1.5">
                                    <label htmlFor="Date&Time" className="text-base text-neutral-400 font-normal-block">
                                        Time & Date 
                                    </label>
                                    <input type="datetime-local" id="Date&Time"  className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="noofpeople" className="text-base text-neutral-400 font-normal-block">
                                        No Of People 
                                    </label>
                                    <select name="noofpeople" id="noofpeople"  className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>

                                    </select>
                                    {/* <input type="email" id="email" placeholder="e.g. name@gmail.com" className="w-full h-12 border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300" /> */}
                                </div>
                                
                            </div>

                            <div className="space-y-1.5">
                            <label htmlFor="specialrequest" className="text-base text-neutral-400 font-normal-block">
                                Any Special Request?
                            </label>
                            <textarea name="specialrequest" id="specialrequest" rows="4" placeholder="e.g. Decorate table for a 2nd anniversary" className="w-full h-28 border-neutral-400/40 bg-neutral-900/5 px-3 py-2 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"></textarea>

                            </div>
                            <button className="w-full h-12 rounded-lg bg-yellow-600 hover:bg-yellow-600/80 !mb-3 text-neutral-100 font-medium ease-in-out duration-300">
                                Book a Table Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reservation;