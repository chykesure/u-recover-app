import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import '../components/Login.css';
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
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <img src="../images/ucover.png" alt="Logo" />
        </div>
        <h2>Login to your account</h2>
        <p>Welcome back! Provide your email and password</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password*</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                required
                aria-label="Password"
              />
              <span
                className="show-password"
                onClick={handlePasswordToggle}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="login-button"
            onClick={() => navigate('/dashboard')}
          >
            Login
          </button>
          <div className="separator">
            <span>OR</span>
          </div>
          <button type="button" className="google-login">
            <FaGoogle style={{ marginRight: '8px' }} />
            Continue with Google
          </button>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
