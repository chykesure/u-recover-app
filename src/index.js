
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // or 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import your App component
import './index.css'; // Import global styles if any

const root = ReactDOM.createRoot(document.getElementById('root')); // or ReactDOM.render() for older versions

root.render(
  <Router> {/* Wrap the App component with BrowserRouter */}
    <App />
  </Router>
);

