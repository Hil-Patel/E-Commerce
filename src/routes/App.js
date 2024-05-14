import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import '../assets/css/style.css'
import Login from "../pages/Login";


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/home",
      element:<h1>home</h1>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
