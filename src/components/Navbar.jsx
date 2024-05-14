import React from "react";
import NavbarOption from "./NavbarOption";

const Navbar = ({ loggedInStatus }) => {
  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </div>

        {loggedInStatus && <NavbarOption />}
      </div>
    </nav>
  );
};

export default Navbar;
