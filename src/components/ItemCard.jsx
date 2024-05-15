/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState, useRef } from "react";

const ItemCard = ({ dataValue }) => {
  const ratingArray = useRef([]);
  const [data, setdata] = useState({});

  useEffect(() => {
    if (dataValue && dataValue.rating) {
      setdata(dataValue);
      const rat = dataValue.rating.rate;
      ratingArray.current.length = Math.round(rat);
      for (let index = 0; index < Math.round(rat); index++) {
        ratingArray.current[index] = 0;
      }
    }
  }, [dataValue]);

  return (
    <div className="mt-8">
      <div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div>
          <img className="p-8 rounded-t-lg photo" src={data.image} alt="product" />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white title-product">
              {data.title}
            </h5>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {ratingArray.current.map((val) => (
                <>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </>
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {data.rating?.rate}
            </span>
          </div>
          <div className="flex items-center mt-2.5 text-gray-500 colapse">{data.description}</div>
          <div className="flex items-center mt-2.5 text-gray-500">Category: {data.category}</div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${data.price}
            </span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
