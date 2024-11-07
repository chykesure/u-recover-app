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
import BookSession from './views/BookSession';
import Testimonies from './views/Testimonies';
import TestimoniesDetails from './views/TestimoniesDetails';

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
      <Route path="/talk-to-counsellor" element={<BookSession />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/testimonies" element={<Testimonies />} />
      <Route path="/testimonies-details" element={<TestimoniesDetails />} />
      {/* Add more routes as needed */}
    </Routes>

  );
};

export default App;
