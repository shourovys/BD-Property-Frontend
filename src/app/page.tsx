import { homePageApi } from '@/api/urls'
import ExclusiveOffers from '@/components/pages/home/ExclusiveOffers/ExclusiveOffers'
import HomeHeroSection from '@/components/pages/home/Hero'
import HomeBanner from '@/components/pages/home/HomeBanner'
import HomeGallerySection from '@/components/pages/home/HomeGallerySection'
import HomeImageCards from '@/components/pages/home/HomeImageCards'
import HomeMultiColorCards from '@/components/pages/home/HomeMultiColorCards'
import HomePopularLinks from '@/components/pages/home/HomePopularLinks'
import HomeVideoCards from '@/components/pages/home/HomeVideoCards'
import { ISingleServerResponse } from '@/types/pages/common'
import { ILandingPageData } from '@/types/pages/home'
import { propertyPurposeData, propertyTypeData } from '@/utils/data/property'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

const Home: NextPage = async () => {
  // const {
  //   isLoading,
  //   data,
  // } = useSWR<IListServerResponse<ILogResult[]>>(homePageApi.landing)

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
    <div className='w-full bg-gray-100 font-ubuntu text-darkslateblue-100'>
      <HomeHeroSection
        propertyPurposeData={propertyPurposeData}
        propertyTypeData={propertyTypeData}
        // bgVideo={data.results.title_videos_data.video}
      />
      <ExclusiveOffers />
      <HomeGallerySection areaImageData={data.results.area_image_data} />
      <HomeBanner />
      <HomeVideoCards videos={data.results.slider_video_data} />
      <HomeMultiColorCards />
      <HomeImageCards images={data.results.slider_image_data} />
      <HomePopularLinks />
    </div>
  )
}

export default Home
