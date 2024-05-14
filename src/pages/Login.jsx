import React from "react";
import Navbar from "../components/Navbar";
import LogInForm from "../components/LogInForm";

const Login = () => {
  return (
    <>
      <Navbar loggedInStatus={false}/>
      <LogInForm/>
    </>
  );
};

export default Login;
