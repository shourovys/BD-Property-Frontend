import { IBlogData } from '@/types/pages/blog'

interface IProps {
  blog: IBlogData
}

const BlogDetailsSection: React.FC<IProps> = ({ blog }) => {
  return (
    <div className='space-y-10'>
      {blog.description && (
        <div
          className='space-y-4 font-lato text-sm leading-[28px] md:text-base'
          dangerouslySetInnerHTML={{
            __html: blog.description,
          }}
        />
      )}
    </div>
  )
}

export default BlogDetailsSection
