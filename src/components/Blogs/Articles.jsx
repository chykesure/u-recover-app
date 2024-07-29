import png1 from '../../assets/pexels-mastercowley-897817.png'
import { FiChevronDown } from 'react-icons/fi';


const articles = [
  { title: 'My Depression Experience in 2020', author: 'Author 1', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 2', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 3', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 4', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 5', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 6', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 7', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 8', image: png1 },
  { title: 'My Depression Experience in 2020', author: 'Author 9', image: png1 },
 
];

const ArticleList = () => {
  return (
    <>
    
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Popular Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
           
            <p className="text-gray-700 text-sm">By {article.author}</p>
          </div>
        ))}
      </div>
    </section>
    <section>
    <div className="flex items-center rounded-full justify-center mt-8 ">
        <hr className="flex-grow border-t border-gray-300 mr-4 " />
        <a href="/articles" className="flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-md text-sm hover:bg-green-700 transition duration-300">
          See More <FiChevronDown className="ml-2" />
        </a>
        <hr className="flex-grow border-t border-gray-300 ml-4" />
      </div>
    </section>


        </>
  );
};

export default ArticleList;
