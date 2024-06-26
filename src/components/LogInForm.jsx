import React from "react";
import { useFormik } from "formik";
import { LoginSchemas } from "../schemas/login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const LogInForm = ({changeLogStatus}) => {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchemas,
    onSubmit: (values) => {
      axios
        .post("https://fakestoreapi.com/auth/login", values)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          toast.success("Log In Successful",{theme: "dark",pauseOnHover: false,});
          navigate("/home");
        })
        .catch((rej) => {
          alert("something went wrong !!");
          
        });
    },
  });
  
  return (
    <div className="login-form">
      <form className="log-form mx-auto" onSubmit={formik.handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your username
          </label>

          <input
            type="username"
            id="username"
            name="username"
            value={formik.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          {formik.touched.username && formik.errors.username ? (
            <div className="error mt-1 ml-1">{formik.errors.username}</div>
          ) : null}
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            value={formik.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />

          {formik.touched.password && formik.errors.password ? (
            <div className="error mt-1 ml-1">{formik.errors.password}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
