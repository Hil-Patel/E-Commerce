import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import '../assets/css/style.css'
import Login from "../pages/Login";
import Product from "../pages/Product";
import Home from "../pages/Home";
import {useState,createContext} from "react";
import Cart from "../pages/Cart";

export const userContext=createContext();

function App() {
  const cartItem=useState([]);

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/home",
      element:<Home />
    },
    {
      path:"/product",
      element:<Product />
    },
    {
      path:"/cart",
      element:<Cart/>
    },
  ])
  return (
    <>
    <userContext.Provider value={cartItem}>

    <RouterProvider router={router}/>
    </userContext.Provider>
    </>
    
  );
}

export default App;
