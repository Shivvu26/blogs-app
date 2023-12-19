import BlogPoster from './BlogPoster';
import PostCards from './BlogCard';
import Blogs from './Blogs';
import BlogCreate from './BlogCreate';
import { Link } from "react-router-dom";


const AllContent = () => {

  return (
    <main className="container">
      <Link to="blog-create"></Link>
      <BlogPoster />
      <PostCards />
      <Blogs />
    </main>
  )
}

export default AllContent;