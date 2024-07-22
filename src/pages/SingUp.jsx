import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, SingUp } = userAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover absolute block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/22b3a04c-221f-4049-9d2c-d0c75b87ba22/ET-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3b014ae5-274e-4624-888e-3d5e58d2816b_small.jpg"
          alt="sign up"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] mx-auto h-[600px] bg-black/75 text-white">
            <div className="max-w-[320] mx-auto py-16 px-5 sm:px-10 ">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-200"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-200"
                  type="password"
                  autoComplete="current-passwrord"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-200">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-400">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
