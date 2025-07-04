import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoCloseSharp } from "react-icons/io5";
import { BsBagHeartFill } from "react-icons/bs";
import Search from './Search';
import DropDownProfile from './DropDownProfile';
import DropDownMenuData from './DropDownMenuData';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [showProfile, setShowProfile] = useState(true);

  // 🔄 Placeholder logic
  const placeholders = [
    "Search fresh organic veggies...",
    "Find your favorite groceries...",
    "Try searching 'cold-pressed oils'",
    "Explore eco-friendly products..."
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-[#f8f5d7] shadow-md relative">
      <nav className="flex items-center justify-between 2xl:px-20 px-6 py-4">

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            {menuOpen ? <FaBars /> : <IoCloseSharp />}
          </button>

          <Link to="/">
            <div className="flex items-center gap-2">
              <BsBagHeartFill className="text-green-600 md:text-2xl text-xl" />
              <h1 className="logo font-extrabold text-2xl text-green-600 select-none">
                Pure<span className="text-green-700">Buy</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop search input */}
        <div className="flex-grow max-w-md mx-6 hidden md:block">
          <Search placeholder={placeholders[placeholderIndex]} />
        </div>

        {/* Profile/Login buttons */}
        {showProfile ? (
          <DropDownProfile />
        ) : (
          <div className="flex items-center md:gap-4 gap-1.5 select-none">
            <Link to='login'>
              <button className="bg-white text-gray-800 rounded-full py-2 md:px-6 px-4 shadow-md hover:bg-gray-200 transition font-medium text-sm">
                Log in
              </button>
            </Link>
            <Link to='signup'>
              <button className="bg-green-600 text-white rounded-full py-2 md:px-6 px-4 shadow-md hover:bg-green-700 transition font-medium text-sm">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile search input */}
      <div className="md:hidden flex justify-center px-4 py-2 bg-[#f0eecb] border-t border-gray-300">
        <Search placeholder={placeholders[placeholderIndex]} />
      </div>

      {/* Dropdown Menu */}
      {!menuOpen && <DropDownMenuData />}
    </header>
  );
}
