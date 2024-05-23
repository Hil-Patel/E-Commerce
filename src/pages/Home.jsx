import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ItemCard from "../components/ItemCard";
import axios from "axios";

const Home = () => {
  const [productData, setproductData] = useState([{}]);

  const tempData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=8");
      setproductData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    tempData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar loggedInStatus={true} />
      <HeroSection />
      <div className="home-product p-10">
      {productData.length > 0 ? (
        productData.map((val,id) => (
            <ItemCard key={id} dataValue={val} />
          ))
        ) : (
          <p>no data</p>
        )}
      </div>
    </>
  );
};

export default Home;
