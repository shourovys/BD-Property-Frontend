import { IBlogData } from '@/types/pages/blog'
import { IMAGE_URL, SITE_PAGES } from '@/utils/config'
import formatDate from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProps {
  blog: IBlogData
}

const BlogCard: React.FC<IProps> = ({ blog }) => {
  return (
    <Link
      href={SITE_PAGES.blogDetailsPage(blog.id)}
      className='w-full rounded-lg bg-white pb-2 font-lato shadow-lg md:pb-4'
    >
      <div className='relative h-60 w-full'>
        <Image
          className='rounded-t-lg'
          src={IMAGE_URL + blog.image}
          alt={blog.title}
          fill
        />
      </div>
      <div className='space-y-3 px-6 py-4 md:space-y-4 md:px-[30px] md:py-5'>
        <div className='space-y-2 md:space-y-3'>
          <h5 className='two_line_limit text-lg font-bold tracking-tight text-gray-900 md:text-xl'>
            {blog.title}
          </h5>
          <p className='inline-flex items-center rounded bg-lightgray-200 px-3 py-1 text-center text-xs font-bold uppercase md:px-5 '>
            {blog.category.name}
          </p>
        </div>
        <div
          className='three_line_limit text-xs text-gray-500 md:text-base'
          dangerouslySetInnerHTML={{
            __html: blog.description.replace(/<img[^>]*>/g, ''),
          }}
        />
        <p className='text-xs text-gray-600 md:text-base'>
          {formatDate(blog.created_at)}
        </p>
      </div>
    </Link>
  )
}

export default BlogCard
