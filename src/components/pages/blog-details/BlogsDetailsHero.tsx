import { IBlogData } from '@/types/pages/blog'
import { IMAGE_URL } from '@/utils/config'
import formatDate from '@/utils/formatDate'
import Image from 'next/image'

interface IProps {
  blog: IBlogData
}

const BlogsDetailsHero: React.FC<IProps> = ({ blog }) => {
  return (
    <div className='custom_screen_width relative mb-10 h-[35vw] w-full overflow-hidden'>
      <div className='relative h-full w-full'>
        <Image
          className='h-full w-full rounded-6xs object-cover'
          alt=''
          src={IMAGE_URL + blog.image}
          fill
        />
        <div className='absolute inset-0 bg-black/30'></div>
      </div>
      <div className='absolute bottom-20 left-20 space-y-3'>
        <p className='flex h-9 w-fit items-center justify-center bg-black/40 px-6 font-medium text-white'>
          {blog.category?.name}
        </p>

        <div className='text-2xl font-medium text-white [-webkit-text-stroke:0.2px_#000] [text-shadow:0px_0px_0.5px_rgba(0,_0,_0,_0.65)]'>
          {blog.title}
        </div>

        <p className='font-medium text-white'>{formatDate(blog.created_at)}</p>
      </div>
    </div>
  )
}

export default BlogsDetailsHero
