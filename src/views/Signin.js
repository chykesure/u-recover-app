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
        <div className="signin-logo">
          <img src="../images/ucover.png" alt="Logo" />
        </div>
        <h2>Sign up to get started</h2>
        <p>New here? You have come to the right place</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              required
              aria-label="Full name"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
          </div>
          <div className="input-group">
            <div className="password-container">
              <input
                type={showPassword.password1 ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                required
                aria-label="Password"
              />
              <span
                className="show-password"
                onClick={() => handlePasswordToggle('password1')}
                aria-label={
                  showPassword.password1 ? 'Hide password' : 'Show password'
                }
              >
                {showPassword.password1 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="input-group">
            <div className="password-container">
              <input
                type={showPassword.password2 ? 'text' : 'password'}
                id="confirm-password"
                placeholder="Confirm password"
                required
                aria-label="Confirm password"
              />
              <span
                className="show-password"
                onClick={() => handlePasswordToggle('password2')}
                aria-label={
                  showPassword.password2 ? 'Hide password' : 'Show password'
                }
              >
                {showPassword.password2 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="signin-button">Sign Up</button>
          <div className="separator">
            <span>OR</span>
          </div>
          <button type="button" className="google-signin">
            <FaGoogle style={{ marginRight: '8px' }} />
            Sign up with Google
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;


