import Section from '@/components/common/Section'
import { IBlogData } from '@/types/pages/blog'
import React from 'react'
import SmallBlogCard from './SmallBlogCard'

interface IProps {
  relatedBlogs: IBlogData[]
}

const RelatedBlogs: React.FC<IProps> = ({ relatedBlogs }) => {
  return (
    <Section>
      <div className='space-y-4'>
        <h2 className='text-2xl font-medium [text-shadow:0px_0px_0.5px_rgba(0,_0,_0,_0.65)]'>
          Related Post
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {relatedBlogs.map((blog) => (
            <SmallBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default RelatedBlogs
