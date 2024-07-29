
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-5 bg-gray-800 text-white pt-8 pb-4">
      <div className="container mx-auto">
        {/* Three Columns */}
        <div className="flex flex-col md:flex-row space-y-4 p-4 justify-between mb-8 ">
          <div className="w-full md:w-2/4">
            <h3 className="text-xl font-semibold mb-4 uppercase ">U-Recover</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius enim in eros elementum tristique.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada. 
                Nulla dapibus magna non ullamcorper
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="text-lg">
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Articles</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="mw-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-400  bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full shadow-md font-bold"><FiFacebook size={24} /></a>
              <a href="#" className="text-gray-800 hover:text-gray-400  bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full shadow-md font-bold"><FiTwitter size={24} /></a>
              <a href="#" className="text-gray-800 hover:text-gray-400  bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full shadow-md font-bold"><FiInstagram size={24} /></a>
            </div>
          </div>
        </div>
        
        {/* Full Horizontal Line */}
        <hr className="border-gray-600 mb-4" />
        
        {/* Copyright Notice */}
        <div className="flex justify-between">
          <p className="text-lg">Copyright &copy; U Recover App {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
