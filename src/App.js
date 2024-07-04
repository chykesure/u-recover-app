// src/App.js
import React from 'react';
import Navbar from './views/Navbar';
import Homepage from './views/Homepage';
import Booksession from './views/Booksession';
import Quotepage from './views/Quotepage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Booksession />
      <Quotepage />
    </div>
  );
};

export default App;
