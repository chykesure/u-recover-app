import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Resources from "../Shared/Resources"
import Counsellor from '../Shared/Counsellor'
import RelatedArticles from "./RelatedArticles"
import FullArticle from "./FullArticle"




function MainArticleWriteup() {
  return (
    <div className="antiinitialised text-2xl">
        
        <Header />
        <FullArticle />
        <Counsellor />
        <RelatedArticles />
        <Resources />
        <Footer />

      
    </div>
  )
}

export default MainArticleWriteup
