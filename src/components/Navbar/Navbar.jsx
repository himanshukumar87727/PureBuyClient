import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoCloseSharp } from "react-icons/io5";
import { BsBagHeartFill } from "react-icons/bs";
import Search from './Search';
import DropDownProfile from './DropDownProfile';
import DropDownMenuData from './DropDownMenuData';


export default function Navbar() {

  const [open, SetOpen] = useState(true)

  return (
    <header className="w-full bg-[#f8f5d7] shadow-md">
      <nav className="flex  items-center justify-between 2xl:px-20 px-6 py-4">

        <div className="flex items-center gap-4">
          <button onClick={() => SetOpen(!open)} className="text-2xl text-gray-800 focus:outline-none ">
            {open ? <FaBars /> : <IoCloseSharp />}
          </button>

          <div className="flex items-center gap-2">
            <BsBagHeartFill className="text-green-600 md:text-2xl text-xl" />
            <h1 className="logo font-extrabold text-2xl text-green-600 select-none">Pure<span className='text-green-700'>Buy</span>
            </h1>
          </div>
        </div>

        <div className="flex-grow max-w-md mx-6 hidden md:block">
          <Search />
        </div>

        <div className="flex items-center md:gap-4 gap-1.5 select-none">

          <button className="bg-white text-gray-800 rounded-full py-2 md:px-6 px-4 shadow-md hover:bg-gray-200 transition font-medium text-sm">
            Log in
          </button>
          <button className="bg-green-600 text-white rounded-full py-2 md:px-6 px-4 shadow-md hover:bg-green-700 transition font-medium text-sm">
            Sign up
          </button>

          {open ? <></> : <DropDownMenuData />}

        </div>
      </nav>

      <div className="md:hidden flex justify-center px-4 py-2 bg-[#f0eecb] border-t border-gray-300">
        <Search />
      </div>
    </header>
  );
}
