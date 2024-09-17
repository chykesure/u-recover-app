// src/App.js
import React from 'react';

import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import LandingPage from './views/Landingpage';
import Login from './views/Login'; // Example import
import SignUp from './views/Signin'; // Example import
import Dashboard from './views/Dashboard'; // Example import
import ArticleList from './views/Articles';
import Blogs from './views/BLogs';
import ArticlesWriteup from './views/ArticlesWriteup';
import BlogsWriteup from './views/BlogsWriteup';
import CounsellorProfile from './views/CounsellorProfile';
import AboutUs from './views/AboutUs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/articles-writeup" element={<ArticlesWriteup />} />
      <Route path="/blogs-writeup" element={<BlogsWriteup />} />
      <Route path="/counsellors-profile" element={<CounsellorProfile />} />
      <Route path="/aboutus" element={<AboutUs />} />
      {/* Add more routes as needed */}
    </Routes>

  );
};

export default App;