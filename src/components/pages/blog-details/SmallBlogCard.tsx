import { IBlogData } from '@/types/pages/blog'
import { IMAGE_URL, SITE_PAGES } from '@/utils/config'
import formatDate from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  blog: IBlogData
}

const SmallBlogCard: React.FC<IProps> = ({ blog }) => {
  return (
    <Link
      href={SITE_PAGES.blogDetailsPage(blog.id)}
      className='flex w-full items-center space-x-4 rounded-md bg-whitesmoke-300 p-4'
    >
      <div className='relative h-32 w-[172px] min-w-[172px] max-w-max flex-grow '>
        <Image
          className='rounded-md object-cover'
          alt=''
          src={IMAGE_URL + blog.image}
          fill
        />
      </div>
      <div className='h-full flex-shrink'>
        <p className='mb-0.5 font-medium'>{blog.category.name}</p>
        <h2 className='two_line_limit mb-3 text-xl font-medium'>
          {blog.title}
        </h2>
        <p className='self-end font-medium'>{formatDate(blog.created_at)}</p>
      </div>
    </Link>
  )
}

export default SmallBlogCard
