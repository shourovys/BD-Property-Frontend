import { IBlogData } from '@/types/pages/blog'
import HorizontalBlogCard from './HorizontalBlogCard'

interface IProps {
  blogs: IBlogData[]
}

const BlogList: React.FC<IProps> = ({ blogs }) => {
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-1'>
      {blogs.map((blog) => (
        <HorizontalBlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogList
