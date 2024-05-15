import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";
import axios from "axios";

const Product = () => {
  const [productData, setproductData] = useState([{}]);

  const FetchingData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setproductData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectedCategory=async (val)=>{
    let toFetchCategory=""
    if(val!==""){
        toFetchCategory="/category/"+val;
    }
    try{
        const res=await axios.get(`https://fakestoreapi.com/products${toFetchCategory}`)
        setproductData(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    FetchingData();
  }, []);
  return (
    <>
      <Navbar loggedInStatus={true} />

      <form className="max-w-sm mx-auto mt-8">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an Category
        </label>
        <select
          id="countries"
          onChange={e=>selectedCategory(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue value="">Choose a Category</option>
          <option value="electronics" >Electronics</option>
          <option value="jewelery" >Jewelery</option>
          <option value="men's clothing" >Men's Clothing</option>
          <option value="women's clothing" >Women's Clothing</option>
        </select>
      </form>

      <div className="home-product p-10">
        {productData.length > 0 ? (
          productData.map((val) => <ItemCard key={val.id} dataval={val} />)
        ) : (
          <p>no data</p>
        )}
      </div>
    </>
  );
};

export default Product;
