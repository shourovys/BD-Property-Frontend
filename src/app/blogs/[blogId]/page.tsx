import { blogUrls } from '@/api/urls/blogUrls'
import ContactCard from '@/components/common/ContactCard'
import LinkCard from '@/components/common/LinkCard'
import NewsletterForm from '@/components/common/NewsletterForm'
import BlogDetailsSection from '@/components/pages/blog-details/BlogDetailsSection'
import BlogsDetailsHero from '@/components/pages/blog-details/BlogsDetailsHero'
import RelatedBlogs from '@/components/pages/blog-details/RelatedBlogs'
import { IBlogDetailsResponse } from '@/types/pages/blog'
import { ISingleServerResponse } from '@/types/pages/common'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

interface IProps {
  params: {
    blogId: string
  }
}

const Blog: NextPage<IProps> = async ({ params: { blogId } }) => {
  const blogDetailsData = await fetchData<
    ISingleServerResponse<IBlogDetailsResponse>
  >(blogUrls.details(blogId))

  return (
    <div className='bg-gray-100 font-ubuntu text-sm text-black md:text-base'>
      <BlogsDetailsHero blog={blogDetailsData.results.bloge_details} />
      <div className='custom_screen_width grid-cols-4 space-y-8 py-6 lg:grid lg:gap-8 lg:space-y-0'>
        <div className='col-span-3'>
          <BlogDetailsSection blog={blogDetailsData.results.bloge_details} />
        </div>
        <div className='col-span-1 space-y-8'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 lg:gap-8'>
            <ContactCard />
            <NewsletterForm />
          </div>
          <LinkCard />
        </div>
      </div>
      <RelatedBlogs relatedBlogs={blogDetailsData.results.related_post} />
    </div>
  )
}

export default Blog
