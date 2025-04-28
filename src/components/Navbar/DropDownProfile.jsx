import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoMdSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function DropDownProfile() {
  const profileMenu = [
    { name: 'Your Profile', href: '/profile', icon: <FaUserAlt className='text-purple-900' /> },
    { name: 'Settings', href: '/setting', icon: <IoMdSettings className='text-gray-700' /> },
    { name: 'Sign out', icon: <FaSignOutAlt className='text-yellow-700' /> },
  ];

  return (
    <div>
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
            <img
              src="https://res.cloudinary.com/dantjdntl/image/upload/v1744956337/samples/animals/three-dogs.jpg"
              className="size-8 rounded-full"
              alt="User avatar"
            />
          </MenuButton>
        </div>



        <MenuItems transition className=" border-2 border-gray-500 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >

          <div className=' ml-3 p-2 '>
            <h1 className='text-black text-md font-semibold' >Signed in as </h1>
            <span className='text-gray-500 text-sm'>user@example.com</span>
          </div>


          {profileMenu.map((item, index) => (
            <MenuItem key={index}>
              <Link to={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
