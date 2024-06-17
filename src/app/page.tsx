import ExclusiveOffers from '@/components/pages/home/ExclusiveOffers/ExclusiveOffers'
import HomeHeroSection from '@/components/pages/home/Hero'
import HomeBanner from '@/components/pages/home/HomeBanner'
import HomeGallerySection from '@/components/pages/home/HomeGallerySection'
import HomeImageCards from '@/components/pages/home/HomeImageCards'
import HomeMultiColorCards from '@/components/pages/home/HomeMultiColorCards'
import HomePopularLinks from '@/components/pages/home/HomePopularLinks'
import HomeVideoCards from '@/components/pages/home/HomeVideoCards'
import type { NextPage } from 'next'

const Home: NextPage = async () => {
  // const {
  //   isLoading,
  //   data,
  // } = useSWR<IListServerResponse<ILogResult[]>>(homePageApi.landing)

  // const data = await fetchData<ISingleServerResponse<ILandingPageData>>(
  //   homePageApi.landing
  // )

  return (
    <div className='w-full bg-gray-100 font-ubuntu text-darkslateblue-100'>
      <HomeHeroSection />
      <ExclusiveOffers />
      <HomeGallerySection />
      <HomeBanner />
      <HomeVideoCards />
      <HomeMultiColorCards />
      <HomeImageCards />
      <HomePopularLinks />
    </div>
  )
}

export default Home
