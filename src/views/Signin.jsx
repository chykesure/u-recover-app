import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import '../components/Signin.css';

function Signin() {
  const [showPassword, setShowPassword] = useState({
    password1: false,
    password2: false,
  });

  const handlePasswordToggle = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        {/* Logo */}
        <div className="p-8 rounded-lg max-w-md w-full flex justify-center items-center">
          <img src="../images/ucover.png" alt="Logo" className="logo-image w-28 h-28 rounded-full" />
        </div>


        {/* Title and Subtext */}
        <h2 className="signin-title">Sign up to get started</h2>
        <p className="signin-subtext">
          New here? You have come to the right place
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="input-group">
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              required
              aria-label="Full name"
              className="signin-input"
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
              className="signin-input"
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <div className="password-container">
              <input
                type={showPassword.password1 ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                required
                aria-label="Password"
                className="signin-input"
              />
              <span
                className="show-password"
                onClick={() => handlePasswordToggle('password1')}
              >
                {showPassword.password1 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <div className="password-container">
              <input
                type={showPassword.password2 ? 'text' : 'password'}
                id="confirm-password"
                placeholder="Confirm password"
                required
                aria-label="Confirm password"
                className="signin-input"
              />
              <span
                className="show-password"
                onClick={() => handlePasswordToggle('password2')}
              >
                {showPassword.password2 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="signin-button">
            Sign Up
          </button>

          {/* Separator */}
          <div className="separator">
            <span className="separator-line"></span>
            <span className="separator-text">OR</span>
            <span className="separator-line"></span>
          </div>

          {/* Google Sign Up */}
          <button type="button" className="google-signin">
            <FaGoogle style={{ marginRight: '8px' }} />
            Sign up with Google
          </button>
        </form>

        {/* Sign In Link */}
        <p className="login-link">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
