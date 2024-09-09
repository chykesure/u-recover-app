import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import BlogList from "../Shared/Blogs"
import Resources from "../Shared/Resources"
import Counsellor from '../Shared/Counsellor'

import BlogTrend from "./BlogTrend"
function MainBlogWriteup() {
  return (
    <div className="antiinitialised text-2xl">
        <Header />
        <BlogTrend />
        <Counsellor />
        <BlogList title='Related Blogs' />
        <Resources />
        <Footer />
    </div>
  )
}

export default MainBlogWriteup
