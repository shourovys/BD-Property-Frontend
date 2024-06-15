import { listUserPropertyUrls } from '@/api/urls'
import ListYourPropertyBlogs from '@/components/pages/listYourProperty/ListYourPropertyBlogs'
import ListYourPropertyExperiences from '@/components/pages/listYourProperty/ListYourPropertyExperiences'
import ListYourPropertyFAQ from '@/components/pages/listYourProperty/ListYourPropertyFAQ'
import ListYourPropertyHero from '@/components/pages/listYourProperty/ListYourPropertyHero'
import ListYourPropertyHowWorks from '@/components/pages/listYourProperty/ListYourPropertyHowWorks'
import { ISingleServerResponse } from '@/types/pages/common'
import { IPropertyAndBlogData } from '@/types/pages/listYourProperty'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

const ListYourProperty: NextPage = async () => {
  const propertyPurposeData = await fetchData<
    ISingleServerResponse<IPropertyAndBlogData>
  >(listUserPropertyUrls.pageData)

  return (
    <div className='w-full bg-gray-100 font-lato text-xl text-black'>
      <ListYourPropertyHero data={propertyPurposeData.results} />
      <ListYourPropertyHowWorks />
      <ListYourPropertyExperiences
        experience={
          propertyPurposeData.results?.PropertyAddContent.customers_experience
        }
      />
      <ListYourPropertyFAQ />
      <ListYourPropertyBlogs
        blogData={propertyPurposeData.results?.BlogContent}
      />
    </div>
  )
}

export default ListYourProperty
