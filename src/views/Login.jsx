import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 rounded-lg max-w-md w-full">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src="../images/ucover.png"
            alt="Logo"
            className="w-28 h-28 rounded-full"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Login to your account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Provide your email and password
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Email address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password*
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Password"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={handlePasswordToggle}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Login
          </button>

          {/* Separator */}
          <div className="flex items-center justify-center my-4">
            <span className="h-px w-1/3 bg-gray-300"></span>
            <span className="px-2 text-gray-500">OR</span>
            <span className="h-px w-1/3 bg-gray-300"></span>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full bg-gray-100 text-gray-700 py-2 rounded-md flex justify-center items-center border hover:bg-gray-200 transition duration-200"
          >
            <FaGoogle className="mr-2 text-red-500" />
            Continue with Google
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
