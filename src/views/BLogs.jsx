import png1 from '../assets/Thubnail.png';
import png2 from '../assets/pexels-vlada-karpovich-4050347.png'
import React, { useState } from 'react';
import { faHome, faNewspaper, faPen, faBlog, faPenFancy, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeartbeat, FaSoap, FaPrayingHands, FaHeart, FaCross, FaHandsHelping } from 'react-icons/fa';
import { GiHolyGrail } from 'react-icons/gi';
import { FiChevronDown } from 'react-icons/fi';

import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

const blogs = [
    { title: 'My Depression Experience in 2024 1', author: 'By Hannah Linus 1', image: png1 },
    { title: 'My Depression Experience in 2024 2', author: 'By Hannah Linus 2', image: png1 },
    { title: 'My Depression Experience in 2024 3', author: 'By Hannah Linus 3', image: png1 },
    { title: 'My Depression Experience in 2024 4', author: 'By Hannah Linus 4', image: png1 },
    { title: 'My Depression Experience in 2024 5', author: 'By Hannah Linus 5', image: png1 },
    { title: 'My Depression Experience in 2024 6', author: 'By Hannah Linus 6', image: png1 },
    { title: 'My Depression Experience in 2024 7', author: 'By Hannah Linus 7', image: png1 },
    { title: 'My Depression Experience in 2024 8', author: 'By Hannah Linus 8', image: png1 },
    { title: 'My Depression Experience in 2024 9', author: 'By Hannah Linus 9', image: png1 },
];

const carouse = [
    { title: 'Marriage', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaHeartbeat className="text-3xl text-red-400 font-bold" /> },
    { title: 'Service', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaSoap className="text-3xl text-red-400 font-bold" /> },
    { title: 'Fellowship', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaHandsHelping className="text-3xl text-red-400 font-bold" /> },
    { title: 'Faith', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaCross className="text-3xl text-red-400 font-bold" /> },
    { title: 'Harmony', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaHeart className="text-3xl text-red-400 font-bold" /> },
    { title: 'Prayer', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaPrayingHands className="text-3xl text-red-400 font-bold" /> },
    { title: 'Worship', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <GiHolyGrail className="text-3xl text-red-400 font-bold" /> },
    { title: 'Love', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaHeartbeat className="text-3xl text-red-400 font-bold" /> },
    { title: 'Cross', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaCross className="text-3xl text-red-400 font-bold" /> },
    { title: 'Love', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaHeartbeat className="text-3xl text-red-400 font-bold" /> },
    { title: 'Unity', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaHeart className="text-3xl text-red-400 font-bold" /> },
    { title: 'Article Title 12', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <FaHeartbeat className="text-3xl text-red-400 font-bold" /> },
];

const Blogs = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        navigate('/login');
    };
    const handleClickArticle = () => {
        navigate('/articles');
    };
    const handleClickBlogs = () => {
        navigate('/blogs');
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = blogs.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const slidesToShow = window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4;

    const translateXValue = -(currentIndex * (100 / slidesToShow));

    return (
        <div style={{ height: `125vh`, overflowX: '' }}>
            {/* HEADER BAR */}
            <nav className="navbar w-full fixed top-0 left-0 bg-white z-20 shadow-md">
                <div className="navbar-logo">
                    <img src="../images/ucover.png" alt="Logo" />
                </div>
                <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} style={{ backgroundColor: `black` }} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`navbar-dialog ${isOpen ? 'open' : ''}`}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Home
                    </Link>
                    <Link to="/articles" onClick={handleClickArticle}>
                        <FontAwesomeIcon icon={faNewspaper} className="icon" />
                        Articles
                    </Link>
                    <Link to="/articles-writeup">
                        <FontAwesomeIcon icon={faPen} className="icon" />
                        Articles Write-Up
                    </Link>
                    <Link to="/blogs" onClick={handleClickBlogs}>
                        <FontAwesomeIcon icon={faBlog} className="icon" />
                        Blogs
                    </Link>
                    <Link to="/blogs-writeup">
                        <FontAwesomeIcon icon={faPenFancy} className="icon" />
                        Blogs Write-Up
                    </Link>
                    
                    <Link to="/counsellors-profile">
                        <FontAwesomeIcon icon={faUserFriends} className="icon" />
                        Counsellors Profile
                    </Link>
                    <Link to="/aboutus">
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        About Us
                    </Link>
                    <Link to="/login" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSignInAlt} className="icon" />
                        Log in
                    </Link>
                </div>
            </nav>

            {/* CARD SECTION */}
            <section className="relative bg-cover bg-center opacity-90 pt-20 mt-80"
                style={{ backgroundImage: `url(${png2})`, height: `40vh`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-80"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
                    <h2 className="text-5xl font-bold text-white">Blogs</h2>
                    <p className="text-3xl text-center mt-2 text-white">Discover engaging and informative blog posts on various topics</p>
                </div>
            </section>



            {/* CAROUSE SECTION */}
            <section className="container mx-auto p-4">
                <div className="mb-4">
                    <h1 className="uppercase font-bold text-green-400"> | Articles</h1>
                    <h2 className="font-semibold text-xl">Our blog categories curated for you</h2>
                </div>

                <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(${translateXValue}%)` }}>
                        {carouse.map((article, index) => (
                            <div key={index} className="flex flex-col sm:flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 items-center justify-center flex-shrink-0">
                                <div className="bg-white flex flex-col sm:flex-row justify-center sm:justify-start items-center p-4 shadow-md rounded-lg w-full sm:w-auto">
                                    <div className="flex justify-center items-center h-20 w-20 bg-green-100 rounded-full shadow-full">
                                        {article.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 sm:ml-4 text-center sm:text-left font-bold text-black">{article.title}</h3>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        ></div>
                    ))}
                </div>
                <div className="flex justify-center mt-2 space-x-4">
                    <button
                        className="bg-green-800 font-bold text-white p-2 h-10 w-10 flex items-center justify-center rounded-full"
                        onClick={prevSlide}
                    >
                        &lt;
                    </button>
                    <button
                        className="bg-green-800 font-bold text-white p-2 h-10 w-10 flex items-center justify-center rounded-full"
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </div>
            </section>


            {/* Popular Articles Section */}
            <section className="container mx-auto p-6 mt-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Popular Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogs.map((article, index) => (
                        <div key={index} className="bg-white p-6 shadow-md rounded-lg h-full transition duration-300 hover:shadow-lg">
                            <img src={article.image} alt={article.title} className="w-full h-48 object-fit h-72 rounded-md mb-4" />
                            <h3 className="text-2xl font-bold mb-2 text-black">{article.title}</h3>
                            <p className="text-sm font-bold text-blue-600" style={{ color: 'black' }}>Written by: "{article.author}"</p>
                        </div>
                    ))}
                </div>

            </section>


            {/* View All Articles Button Section */}
            <section>
                <div className="flex items-center rounded-full justify-center mt-10">
                    <hr className="flex-grow border-t border-gray-300 mr-4" />
                    <a href="/articles" className="flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md text-sm hover:bg-green-700 transition duration-300">
                        View All Articles <FiChevronDown className="ml-2" />
                    </a>
                    <hr className="flex-grow border-t border-gray-300 ml-4" />
                </div>
            </section>

            <footer className="footer mt-5 mb-4">
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

        </div>
    );
};

export default Blogs;

