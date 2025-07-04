import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value;

    // Dummy credentials for testing
    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('token', 'dummy-token');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400">
      <div className="bg-teal-100 px-10 py-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold italic text-center mb-8">Helpdesk System</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 bg-white mb-4 border border-black rounded-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 bg-white mb-6 border border-black rounded-sm"
          />

          {error && (
            <div className="text-red-600 text-sm mb-4">{error}</div>
          )}

          <button
            type="submit"
            className="w-[60%] mx-auto block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg mb-4"
          >
            Sign In
          </button>

          <div className="flex justify-between text-sm">
            <Link to="/forgotpassword" className="text-black hover:underline">Forgot password</Link>
            <Link to="/signup" className="text-black hover:underline">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
