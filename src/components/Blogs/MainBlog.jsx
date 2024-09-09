import '../../App.css'
import Header from '../Blogs/Header'
import Hero from '../Blogs/Hero'
import Carousel from './Carousel'
import BlogList from './Blogs'
import Footer from './Footer'


function MainBlog() {


  return (
    <>
   
      <div className="antiinitialised text-2xl">
          <Header />
          <Hero/>
          <Carousel />
          <BlogList />
          <Footer />
          
          
       
      </div>
    </>
  )
}

export default MainBlog
