import React from 'react';
import '../components/Footer.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">U-RECOVER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sapien sit fermentum risus varius orci nibh. 
            Suspendisse nascetur purus tempus turpis mattis fermentum curabitur cursus aliquet. 
            Maecenas sagittis. Suspendisse nascetur purus tempus turpis mattis fermentum curabitu.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/talk-to-counsellor">Talk to a Counsellor</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/testimonies">Testimonies</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        &copy; U-Recover 2024
      </div>
    </footer>
  );
};

export default Footer;
