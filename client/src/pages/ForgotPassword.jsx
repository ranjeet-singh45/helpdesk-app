import React from 'react';
import { Link } from "react-router-dom";

const ForgotPassword = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400">
      <div className="bg-teal-100 px-10 py-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center mt-7 mb-14">Don't worry, Enter your email below and we'll send  you a link to change password.</h2>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-white mb-4 border border-black rounded-sm"
          />
          

          <button
            type="submit"
            className="w-[60%] ml-18 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg mb-4 cursor-pointer"
          >
            Submit
          </button>
          <button
            type="submit"
            className="w-[60%] ml-18 bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg mb-4 cursor-pointer"
          >
            Sign In
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
