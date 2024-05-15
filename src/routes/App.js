import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import '../assets/css/style.css'
import Login from "../pages/Login";
import Home from "../pages/Home";


function App() {
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
      element:<Home />
    },
    {
      path:"/cart",
      element:<Home />
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
