import  { useState } from 'react';
import { FaHeartbeat, FaSoap, FaPrayingHands, FaHeart, FaCross, FaHandsHelping } from 'react-icons/fa';
import { GiHolyGrail } from 'react-icons/gi';

const articles = [
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

const Carousel= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = articles.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const slidesToShow = window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4;

  const translateXValue = -(currentIndex * (100 / slidesToShow));

  return (
    <section className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="uppercase font-bold text-green-400"> | Blogs</h1>
        <h2 className="font-semibold text-xl">Our blog categories curated for you</h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(${translateXValue}%)` }}>
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col sm:flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 items-center justify-center flex-shrink-0">
              <div className="bg-white flex flex-col justify-center items-center p-4 shadow-md rounded-lg w-full sm:w-auto">
                <div className="mr-4 flex justify-center items-center h-20 w-20 bg-green-100 rounded-full shadow-full">
                  {article.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center font-bold">{article.title}</h3>
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
  );
};

export default Carousel;
