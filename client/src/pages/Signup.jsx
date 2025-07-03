import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400">
      <div className="bg-teal-100 px-10 py-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold italic text-center mb-8">Helpdesk System</h1>
            <h2 className="text-center -mt-7 mb-5">Sign up here</h2>

        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 bg-white mb-4 border border-black rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-white mb-6 border border-black rounded-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-white mb-4 border border-black rounded-sm"
          />

          <button
            type="submit"
            className="w-[60%] ml-18 bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg mb-4 cursor-pointer"
          >
            Sign Up
          </button>

          <div className="flex justify-between text-sm">
           <Link to="/forgotpassword" className="text-black hover:underline">Forgot password</Link>
           <Link to="/login" className="text-black hover:underline">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
