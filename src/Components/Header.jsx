import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2  relative">
      <div className="flex items-center gap-2">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-2.5 rounded-2xl">
          Hoster is Hiring
        </button>
      </div>
      <ul className="hidden lg:flex lg:justify-between lg:items-center lg:font-lato lg:text-gray-400 lg:gap-10">
        <li className="flex gap-10">
          <a href="#">Plans</a>
          <a href="#">Find Domain</a>
          <a href="#">Why Hoster</a>
        </li>
      </ul>
      <div className="hidden lg:flex items-center font-lato gap-6">
        <a className="text-gray-400" href="#">SignIn</a>
        <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-700 text-white">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars
          onClick={toggleDropdown}
          className={`cursor-pointer transition-transform transform ${
            isDropdownOpen ? 'rotate-180 scale-125' : 'rotate-0 scale-100'
          } duration-500`}
        />
      </div>
      <div
        className={`lg:hidden absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 transition-opacity duration-500 ${
          isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <a href="#" className="text-gray-700">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-700">About Us</a>
          </li>
          <li>
            <a href="#" className="text-gray-700">Contact Us</a>
          </li>
          <li>
            <a href="#" className="text-gray-700">Plans</a>
          </li>
          <li>
            <a href="#" className="text-gray-700">Find Domain</a>
          </li>
          <li>
            <a href="#" className="text-gray-700">Why Hoster</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
