import { useState } from 'react';
import { FaHeartbeat, FaSoap, FaPrayingHands, FaHeart, FaCross, FaHandsHelping } from 'react-icons/fa';
import { GiHolyGrail } from 'react-icons/gi';
import { MdFormatQuote } from 'react-icons/md'; // Importing a quote icon

const articles = [
  { name: 'Victor Adetunde', content: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit.  amet, consectetur adipiscing elit.', icon: <FaHeartbeat className="text-3xl text-red-400 font-bold" /> },
  { name: 'Jane Doe', content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.', icon: <FaSoap className="text-3xl text-red-400 font-bold" /> },
  { name: 'John Smith', content: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. , consectetur adipiscing elit.', icon: <FaHandsHelping className="text-3xl text-red-400 font-bold" /> },
  { name: 'Emily Johnson', content: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetur adipiscing elit. met, consectetur adipiscing elit.', icon: <FaCross className="text-3xl text-red-400 font-bold" /> },
  { name: 'Michael Brown', content: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetur adipiscing elit. met, consectetur adipiscing elit.', icon: <FaHeart className="text-3xl text-red-400 font-bold" /> },
  { name: 'Sarah Davis', content: 'Lorem ipsum dolor sit ameLorem ipsum dolor sit amet, consectetur adipiscing elit. t, consectetur adipiscing elit.', icon: <FaPrayingHands className="text-3xl text-red-400 font-bold" /> },
  { name: 'Chris Lee', content: 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.  consectetur adipiscing elit.', icon: <GiHolyGrail className="text-3xl text-red-400 font-bold" /> },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = articles.length;

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };

  const translateXValue = -(currentIndex * (100 / (window.innerWidth < 768 ? 1 : 2)));

  return (
    <section className="container mx-auto p-4">
      <div className='first flex flex-col items-center mb-4'>
            <h2 className='text-green-700 font-semibold tracking-wide text-lg'> Testimonials </h2>
            <strong className='tracking-wide capitalize font-semibold text-xl'> Read what others have to say </strong>
      </div>
      <div className="second relative overflow-hidden">
       
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(${translateXValue}%)` }}>
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col  w-full p-2 items-center justify-center flex-shrink-0 md:w-1/2">
              <div className="bg-gray-50  flex flex-col justify-center items-center p-4 shadow-md rounded-lg w-full">
                <div className="flex justify-center items-center h-24 w-24 bg-green-100 rounded-full shadow-full">
                  {article.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center font-bold">{article.name}</h3>
                <blockquote className="mt-6 text-green-600 text-lg italic mb-4 flex items-center">
                  <MdFormatQuote className="text-4xl mr-2 mb-6" /> 
                  {article.content}
                </blockquote>
                <button className="bg-green-700 text-white text-lg font-semibold px-4 py-2 rounded-md">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <label key={index} className="cursor-pointer">
            <input
              type="radio"
              name="carousel"
              checked={index === currentIndex}
              onChange={() => handleRadioChange(index)}
              className="hidden"
            />
            <div className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}></div>
          </label>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
