/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState, useRef, useContext } from "react";
import { likeContext, userContext } from "../routes/App";
import { toast } from "react-toastify";
import disliked from "../assets/img/disliked.jpg"
import liked from "../assets/img/liked.png"

const ItemCard = ({ dataValue }) => {
  // using array length to display stars 
  const ratingArray = useRef([]);
  //storing item data in data
  const [data, setdata] = useState({});
  //cartItem declared in app.js
  const [cartItem, setCartItem] = useContext(userContext);
  //using to check if product is already in cart 
  const storedIncart = useRef(false);
  const [alreadyInCart, setAlreadyInCart] = useState(storedIncart.current);
  //used to store quantity of this product in cart
  const [cartItemCount,setcartItemCount] = useState(0);
  //used to display if product is liked or not
  const [isLiked,setIsLiked]=useState(false);
  //storing list of liked product
  const [like,setLike]=useContext(likeContext);

  const handleLikeDislike=()=>{
    if(isLiked){
      setIsLiked(false);
      const temp=like;
      for (let index = 0; index < like.length; index++) {
        if(like[index].id===dataValue.id){
          temp.splice(index,1)
          setLike(temp);
        }
      }
    }
    else{
      setIsLiked(true);
      setLike([...like,data]);
    }
  }

  const increaseCount = () => {
    const temp = cartItem;
    for (let index = 0; index < temp.length; index++) {
      if (temp[index].id === data.id) {
        temp[index].count = temp[index].count + 1;
        setcartItemCount(temp[index].count);
      }
    }
    setCartItem(temp);
  };

  const decreaseCount=()=>{
    const temp = cartItem;
    for (let index = 0; index < temp.length; index++) {
      if (temp[index].id === data.id) {
        temp[index].count = temp[index].count - 1;
        setcartItemCount(temp[index].count);
        if(cartItemCount<=1){
          setAlreadyInCart(false);
          storedIncart.current=false;
          temp.splice(index,1);
        }
      }
    }
    setCartItem(temp);
  }


  const addToCart = () => {
    setAlreadyInCart(true);
    storedIncart.current = true;
        const temp = cartItem;
        temp.push({ ...data, count: 1 });
        setcartItemCount(1) ;
        setCartItem(temp);
        toast.success("Added to cart successfully",{theme: "dark",pauseOnHover: false,})
      };

  useEffect(() => {
    if (dataValue && dataValue.rating) {
      setdata(dataValue);

      // genrating stars
      const dataRate = dataValue.rating.rate;
      ratingArray.current.length = Math.round(dataRate);
      for (let index = 0; index < Math.round(dataRate); index++) {
        ratingArray.current[index] = 0;
      }

      //checking if product is already like or not
      for (let index = 0; index < like.length; index++) {
        if(like[index].id===dataValue.id){
          setIsLiked(true)
        }
      }

      //check the quantity of product added to cart  
      const temp = cartItem;
      if (storedIncart.current === false) {
        for (let index = 0; index < temp.length; index++) {
          if (temp[index].id === dataValue.id) {
            storedIncart.current = true;
            setcartItemCount ( temp[index].count);
            setAlreadyInCart(true);
          }
        }
      }
    }
  }, [dataValue]);

  return (
    <div className="mt-8 item-card">
      <div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <img
            className="p-8 rounded-t-lg photo"
            src={data.image}
            alt="product"
          />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900  title-product">
              {data.title}
            </h5>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {ratingArray.current.map((val,index) => (
                <div key={index}>
                  <svg
                  
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
              {data.rating?.rate}
            </span>
          </div>
          <div className="flex items-center mt-2.5 text-gray-500">
            Category: {data.category}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-3xl font-bold text-gray-900 ">
              ${data.price}
            </span>
            {isLiked?<img src={liked} alt="" onClick={handleLikeDislike} className="w-8"/>:<img src={disliked} alt="" onClick={handleLikeDislike} className="w-8"/>}
            {alreadyInCart ? (
              <div className="count-change">
                <button className="inc-dec-btn" onClick={decreaseCount}>-</button>
                <p>{cartItemCount}</p>
                <button className="inc-dec-btn" onClick={increaseCount}>
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={addToCart}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
