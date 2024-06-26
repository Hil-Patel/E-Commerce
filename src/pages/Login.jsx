import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LogInForm from "../components/LogInForm";

const Login = () => {
  const [loggedInStatus, setloggedInStatus] = useState(false);
  

  const changeLogStatus =(value)=>{
    setloggedInStatus(value);
  }

  return (
    <>
      <Navbar loggedInStatus={loggedInStatus} />
      <div className="fixed flex flex-col bg-gray-100 p-3 right-5 mt-5 rounded-md">
        <div>username : mor_2314</div>
        <div>password : 83r5^_</div>

      </div>
      <LogInForm changeLogStatus={ changeLogStatus } />
    </>
  );
};

export default Login;
