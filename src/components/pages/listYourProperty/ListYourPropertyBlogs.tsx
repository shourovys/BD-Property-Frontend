import Section from '@/components/common/Section'
import { IBlogData } from '@/types/pages/blog'
import React from 'react'
import BlogCard from '../blogs/BlogCard'

interface IProps {
  blogData: IBlogData[]
}

const ListYourPropertyBlogs: React.FC<IProps> = ({ blogData }) => {
  return (
    <Section
      title='Learn More About Property Selling'
      description='Read the articles to expand your knowledge about how to sell your flat quickly, find tenants, a seller’s journey and more'
      center
    >
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Section>
  )
}

export default ListYourPropertyBlogs
