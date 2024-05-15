import React from "react";
import NavbarOption from "./NavbarOption";
import logo from "../assets/img/logo.png"

const Navbar = ({ loggedInStatus }) => {
  return (
    <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ShopCart
          </span>
        </div>

        {loggedInStatus && <NavbarOption />}
      </div>
    </nav>
  );
};

export default Navbar;
