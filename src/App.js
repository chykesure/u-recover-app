// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import LandingPage from './views/Landingpage';
import Login from './views/Login'; // Example import
import SignUp from './views/Signin'; // Example import

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
