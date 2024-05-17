import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import '../assets/css/style.css'
import Login from "../pages/Login";
import Product from "../pages/Product";
import Home from "../pages/Home";
import {useState,createContext} from "react";
import Cart from "../pages/Cart";
import Favourite from "../pages/Favourite";

export const userContext=createContext();
export const likeContext=createContext();
function App() {
  const cartItem=useState([]);
  const like=useState([])
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
    {
      path:"/favourite",
      element:<Favourite />
    },
  ])
  return (
    <>
    <userContext.Provider value={cartItem}>
    <likeContext.Provider value={like}>
    <RouterProvider router={router}/>
    </likeContext.Provider>
    </userContext.Provider>
    </>
    
  );
}

export default App;
