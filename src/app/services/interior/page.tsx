import { serviceUrls } from '@/api/urls/serviceUrls'
import PreviousWorksGallery from '@/components/common/PreviousWorksGallery'
import HomeBanner from '@/components/pages/home/HomeBanner'
import InteriorHero from '@/components/pages/interior/InteriorHero'
import InteriorInfo from '@/components/pages/interior/InteriorInfo'
import InteriorServices from '@/components/pages/interior/InteriorServices'
import { ISingleServerResponse } from '@/types/pages/common'
import { InteriorData } from '@/types/pages/interior'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

const Interior: NextPage = async () => {
  const data = await fetchData<ISingleServerResponse<InteriorData>>(
    serviceUrls.getInteriorData
  )

  // Destructure the necessary data from `data.contact`
  const { contact_title, contact_img, contect_number, contact_description } =
    data.results.interior_data

  return (
    <div className=''>
      <InteriorHero data={data.results} />
      <InteriorInfo />
      <InteriorServices
        services={data.results.interior_data.interior_allservices}
      />
      {/* Pass the contact data to HomeBanner */}
      <HomeBanner
        imageUrl={contact_img}
        title={contact_title}
        description={contact_description}
        actionText={contect_number}
      />
      <PreviousWorksGallery items={data.results.previous_work_data} />
    </div>
  )
}

export default Interior
