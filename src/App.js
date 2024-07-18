// src/App.js
import React from 'react';
import Navbar from './views/Navbar';
import Homepage from './views/Homepage';
import Booksession from './views/Booksession';
import Quotepage from './views/Quotepage';
import Articles from './views/Articles';
import LatestBlog from './views/Latestblog';
import Meetup from './views/Meetup';
import Testimony from './views/Testimony';
import Resources from './views/Resources';

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
    </div>
  );
};

export default App;
