import png1 from '../../assets/pexels-linkedin-1251832.png'
import { FiChevronDown } from 'react-icons/fi';

const articles = [
  { title: 'Article Title 1', author: 'Author 1', image: png1 },
  { title: 'Article Title 2', author: 'Author 2', image: png1 },
  { title: 'Article Title 3', author: 'Author 3', image: png1 },
  { title: 'Article Title 4', author: 'Author 4', image: png1 },
  { title: 'Article Title 5', author: 'Author 5', image: png1 },
  { title: 'Article Title 6', author: 'Author 6', image: png1 },
  { title: 'Article Title 7', author: 'Author 7', image: png1 },
  { title: 'Article Title 8', author: 'Author 8', image: png1 },
  { title: 'Article Title 9', author: 'Author 9', image: png1 },
 
];

const RelatedArticles = () => {
  return (
    <>
    
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.
             Nulla dapibus magna non ullamcorper rhoncus. Sed sodales augue et pulvinar lacinia. 
             Nullam dolor arcu, interdum quis nisl non, congue semper ante. Duis lacinia velit eu
           
            </p>
            <p className="text-gray-700 text-sm">Written by {article.author}</p>
          </div>
        ))}
      </div>
    </section>
    <section>
    <div className="flex items-center rounded-full justify-center mt-8 ">
        <hr className="flex-grow border-t border-gray-300 mr-4 " />
        <a href="/articles" className="flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-md text-sm hover:bg-green-700 transition duration-300">
          View All Articles <FiChevronDown className="ml-2" />
        </a>
        <hr className="flex-grow border-t border-gray-300 ml-4" />
      </div>
    </section>


        </>
  );
};

export default RelatedArticles;
