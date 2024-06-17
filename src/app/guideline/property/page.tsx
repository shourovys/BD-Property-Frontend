import Section from '@/components/common/Section'
import PropertyGuidelineHero from '@/components/pages/PropertyGuideline/PropertyGuidelineHero'
import ExclusiveOffers from '@/components/pages/home/ExclusiveOffers/ExclusiveOffers'
import HomeBanner from '@/components/pages/home/HomeBanner'
import HomeImageGallery from '@/components/pages/home/HomeImageGallery'
import HomePopularLinks from '@/components/pages/home/HomePopularLinks'
import { propertyPurposeData, propertyTypeData } from '@/utils/data/property'
import type { NextPage } from 'next'

const PropertyGuidelinePage: NextPage = async () => {
  // const data = await fetchData<ISingleServerResponse<ILandingPageData>>(
  //   homePageApi.landing
  // )

  return (
    <div className='w-full bg-gray-100 font-ubuntu text-sm text-darkslateblue-100 md:text-base'>
      <PropertyGuidelineHero
        propertyPurposeData={propertyPurposeData}
        propertyTypeData={propertyTypeData}
      />
      <Section>
        <HomeImageGallery />
      </Section>
      <ExclusiveOffers />
      <HomePopularLinks />
      <HomeBanner />
    </div>
  )
}

export default PropertyGuidelinePage
