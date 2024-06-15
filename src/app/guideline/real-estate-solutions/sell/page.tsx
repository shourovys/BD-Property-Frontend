import { guidelineUrls } from '@/api/urls/guidelineUrls'
import PageSection from '@/components/pages/guideline/PageSection'
import { ISingleServerResponse } from '@/types/pages/common'
import { IGuideline } from '@/types/pages/guideline'
import fetchData from '@/utils/fetchData'
import { NextPage } from 'next'

const PropertySellGuidelinePage: NextPage = async () => {
  const { results } = await fetchData<ISingleServerResponse<IGuideline[]>>(
    guidelineUrls.sell
  )

  const headerGuideline = results.find((item) => item.is_header)
  const sortedGuideline = results
    .filter((item) => !item.is_header)
    .sort((a, b) => a.id - b.id)
  const allGuideline = headerGuideline
    ? [headerGuideline, ...sortedGuideline]
    : sortedGuideline

  return (
    <div className='w-full bg-gray-100 font-lato text-2xl lg:text-3xl [&>*:nth-child(1)]:h-[calc(100vh-70px)]'>
      {allGuideline.map((guideline, index) => (
        <PageSection key={guideline.id} {...guideline} index={index} />
      ))}
    </div>
  )
}

export default PropertySellGuidelinePage
