import { blogUrls } from '@/api/urls/blogUrls'
import ContactCard from '@/components/common/ContactCard'
import NewsletterForm from '@/components/common/NewsletterForm'
import PopularSearches from '@/components/common/PopularSearches'
import ServerPagination from '@/components/common/ServerPagination'
import BlogList from '@/components/pages/blogs/BlogList'
import BlogsHeroImage from '@/components/pages/blogs/BlogsHeroImage'
import { IBlogData } from '@/types/pages/blog'
import { IListServerResponse } from '@/types/pages/common'
import { SITE_PAGES } from '@/utils/config'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

interface IProps {
  searchParams: { page?: string }
}

const Blogs: NextPage<IProps> = async ({ searchParams: { page } }) => {
  const limitPerPage = 10
  const blogData = await fetchData<IListServerResponse<IBlogData[]>>(
    blogUrls.list(`page=${page || 1}&page_size=${limitPerPage}`)
  )
  return (
    <div className=''>
      <BlogsHeroImage />
      <div className='custom_screen_width grid-cols-4 space-y-8 py-6 lg:grid lg:gap-8 lg:space-y-0'>
        <div className='col-span-3'>
          <BlogList blogs={blogData.results} />
          <ServerPagination
            pathName={SITE_PAGES.blogPage}
            page={Number(page) || 1}
            total={blogData.count}
            itemPerPage={limitPerPage}
          />
        </div>
        <div className='col-span-1 space-y-8'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 lg:gap-8'>
            <ContactCard />
            <NewsletterForm />
          </div>
          <PopularSearches />
        </div>
      </div>
    </div>
  )
}

export default Blogs
