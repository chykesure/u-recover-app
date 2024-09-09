import { useState } from "react";
import png1 from '../../assets/WhatsApp Image 2024-07-28 at 9.53.37 PM.png'
const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img src={png1} className="h-8 mr-2" />
          <h1 className="text-xl font-bold">U-Recover</h1>
        </div>
        <nav className="hidden md:flex space-x-4 text-xl">
          <a href="/" className="hover:underline cursor-pointer">Home</a>
          <a href="/articles" className="hover:underline cursor-pointer">Articles</a>
          <a href="/about" className="hover:underline cursor-pointer">About</a>
          <a href="/contact" className="hover:underline cursor-pointer">Contact</a>
        </nav>

      

 {/* Toggle Button */}
 {!isNavVisible && (
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      {isNavVisible && (
        <div className="fixed inset-0 z-50 w-full h-2/4 p-4  bg-white flex flex-col items-center justify-center">
          {/* Close Button */}
          <button onClick={toggleNav} className="absolute top-4 right-4 text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:underline cursor-pointer text-lg font-semibold">Home</a>
            <a href="#" className="hover:underline cursor-pointer text-lg font-semibold">Articles</a>
            <a href="#" className="hover:underline cursor-pointer text-lg font-semibold">Contact Us</a>
            <a href="#" className="hover:underline cursor-pointer text-lg font-semibold">Privacy Policy</a>
          </nav>
        </div>
      )}

        





      </div>
    </header>
  );
};

export default Header;
