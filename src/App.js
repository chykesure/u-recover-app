// src/App.js
import React from 'react';
<<<<<<< HEAD
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
=======
import Navbar from './views/Navbar';
import Homepage from './views/Homepage';
import Booksession from './views/Booksession';
import Quotepage from './views/Quotepage';
import Articles from './views/Articles';
import LatestBlog from './views/Latestblog';
import Meetup from './views/Meetup';
import Testimony from './views/Testimony';
import Resources from './views/Resources';
import Footer from './views/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Booksession />
      <Quotepage />
      <Articles />
      <LatestBlog />
      <Meetup />
      <Testimony />
      <Resources />
      <Footer />
    </div>
>>>>>>> 3609f9201f9da47202ae07832bfd3e716e8c1c05
  );
};

export default App;
