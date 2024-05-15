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
      <LogInForm changeLogStatus={changeLogStatus}/>
    </>
  );
};

export default Login;
