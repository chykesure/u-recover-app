<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 3609f9201f9da47202ae07832bfd3e716e8c1c05
