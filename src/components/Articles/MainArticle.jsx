import '../../App.css'
import Header from './Header'
import Hero from './Hero'
import Carousel from './Carousel'
import ArticleList from './Articles'
import Footer from './Footer'
function MainArticle() {


  return (
    <>
   
      <div className="antiinitialised text-2xl">
          <Header />
          <Hero/>
          <Carousel />
          <ArticleList />
          <Footer />
          
          
       
      </div>
    </>
  )
}

export default MainArticle
