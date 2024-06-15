import { IBlogData } from '@/types/pages/blog'
import { IMAGE_URL, SITE_PAGES } from '@/utils/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProps {
  blog: IBlogData
}

const HorizontalBlogCard: React.FC<IProps> = ({ blog }) => {
  return (
    <Link
      href={SITE_PAGES.blogDetailsPage(blog.id)}
      className='grid grid-cols-1 gap-4 md:grid-cols-[324px,1fr]'
    >
      <div className='relative h-[246px] w-full overflow-hidden md:w-[324px]'>
        <Image
          className='rounded-md'
          src={IMAGE_URL + blog.image}
          alt={blog.title}
          fill
        />
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <div className='text-sm font-medium text-gray-500'>
            {blog.category.name}
          </div>
          <div className='two_line_limit mt-1 text-xl font-bold'>
            {blog.title}
          </div>
          <div
            className='four_line_limit mt-2 text-justify font-lato text-sm leading-[20px] md:text-base'
            dangerouslySetInnerHTML={{
              __html: blog.description.replace(/<img[^>]*>/g, ''),
            }}
          />
        </div>
        <div className='mt-4 flex items-center'>
          <div className='text-sm font-medium text-gray-500'>
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <button className='ml-auto h-9 cursor-pointer rounded-6xs bg-salmon px-6'>
            <div className='font-ubuntu text-xs font-medium text-white md:text-base'>
              Read More
            </div>
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HorizontalBlogCard
