import { homePageApi } from '@/api/urls'
import Section from '@/components/common/Section'
import PropertyGuidelineHero from '@/components/pages/PropertyGuideline/PropertyGuidelineHero'
import ExclusiveOffers from '@/components/pages/home/ExclusiveOffers/ExclusiveOffers'
import HomeBanner from '@/components/pages/home/HomeBanner'
import HomeImageGallery from '@/components/pages/home/HomeImageGallery'
import HomePopularLinks from '@/components/pages/home/HomePopularLinks'
import { ISingleServerResponse } from '@/types/pages/common'
import { ILandingPageData } from '@/types/pages/home'
import { propertyPurposeData, propertyTypeData } from '@/utils/data/property'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

const PropertyGuidelinePage: NextPage = async () => {
  const data = await fetchData<ISingleServerResponse<ILandingPageData>>(
    homePageApi.landing
  )

  // const propertyPurposeData = await fetchData<
  //   ISingleServerResponse<IPropertyPurpose[]>
  // >(propertyUrls.purposes)

  // const propertyTypeData = await fetchData<
  //   ISingleServerResponse<IPropertyType[]>
  // >(propertyUrls.type)

  return (
    <div className='w-full bg-gray-100 font-ubuntu text-sm text-darkslateblue-100 md:text-base'>
      <PropertyGuidelineHero
        propertyPurposeData={propertyPurposeData}
        propertyTypeData={propertyTypeData}
      />
      <Section>
        <HomeImageGallery
          areaImages={data.results.area_image_data.areaimage_content}
        />
      </Section>
      <ExclusiveOffers />
      <HomePopularLinks />
      <HomeBanner />
    </div>
  )
}

export default PropertyGuidelinePage
