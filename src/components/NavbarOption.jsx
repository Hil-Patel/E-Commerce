import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cart from "../assets/img/cart.jpg";
import { userContext } from "../routes/App";

const NavbarOption = () => {
  const [item] = useContext(userContext);
  const [uniqueItem, setUniqueItem] = useState(item.length);
  const rerender = () => {
    setInterval(() => {
      setUniqueItem(item.length);
    }, 10);

  };

  useEffect(() => {
    rerender();
  });
  return (
    <>
      <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="cart-gap ">
          
          <NavLink to={"/cart"}>
            <button className="flex align-center cart">
            <img src={cart} alt="" className="w-9" />
            {uniqueItem ? <span>({uniqueItem})</span>:null}
            

            </button>
          </NavLink>
          <NavLink to={"/"}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Log Out
            </button>
          </NavLink>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          <li>
            <NavLink to={"/home"}>
              <div
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"}>
              <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Products
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Cart
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favourite"}>
              <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Favourite
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarOption;
