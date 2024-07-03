import React, { useState } from 'react';
import '../components/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComments, faBell, faQuoteLeft, faBook, faUsers, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="../images/ucover.png" alt="Logo" />
            </div>
            <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`navbar-dialog ${isOpen ? 'open' : ''}`}>
                <a href="#home">
                    <FontAwesomeIcon icon={faHome} className="icon" />
                    Home
                </a>
                <a href="#profile">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    My Profile
                </a>
                <a href="#talkto">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                    Talk to a Counsellor
                </a>
                <a href="#notification">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                    Notification
                </a>
                <a href="#testimonies">
                    <FontAwesomeIcon icon={faQuoteLeft} className="icon" />
                    Testimonies
                </a>
                <a href="#resources">
                    <FontAwesomeIcon icon={faBook} className="icon" />
                    Resources
                </a>
                <a href="#counsellors">
                    <FontAwesomeIcon icon={faUsers} className="icon" />
                    Our Counsellors
                </a>
                <a href="#aboutus">
                    <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                    About Us
                </a>
                <a href="#login">
                    <FontAwesomeIcon icon={faSignInAlt} className="icon" />
                    Log in
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
