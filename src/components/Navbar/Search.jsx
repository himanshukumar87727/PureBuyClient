import React from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function Search({ placeholder = "Search..." }) {
  return (
    <div className="relative w-full max-w-sm select-none">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-full bg-white text-black px-4 py-2 pl-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
      />
      <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 pointer-events-none" />
    </div>
  );
}
