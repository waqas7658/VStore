import React, { useState } from "react";
import login from "../assets/Images/login.jpg";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: email,

        password,
      });

      if (response.status == 200) {
        toast.success("Login Successfully");
        localStorage.setItem("login", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.alert("Try Again");
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container  my-5">
        <section className="flex flex-col md:flex-row h-screen items-center shadow-lg">
          <div className=" bg-slate-100 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img src={login} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
            <div className="w-full">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>

              <form
                className="mt-6"
                action="#"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="mt-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autoFocus
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    minLength="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                >
                  Log In
                </button>
              </form>

              <hr className="my-6 border-gray-300 w-full" />

              <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    {/* SVG Paths */}
                  </svg>
                  <span className="ml-4">Log in with Google</span>
                </div>
              </button>

              <p className="mt-8">
                Need an account?
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
