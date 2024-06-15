import { propertyUrls } from '@/api/urls/propertyUrls'
import PropertyDetailsHero from '@/components/pages/property-details/PropertyDetailsHero'
import PropertyTabSection from '@/components/pages/property-details/PropertyTabSection'
import { ISingleServerResponse } from '@/types/pages/common'
import { IPropertyDetailsResponse } from '@/types/pages/property'
import fetchData from '@/utils/fetchData'

interface IProps {
  params: { propertyId: string }
}

const PropertyDetailsForSaleAnd: React.FC<IProps> = async ({ params }) => {
  const { propertyId } = params

  const data = await fetchData<ISingleServerResponse<IPropertyDetailsResponse>>(
    propertyUrls.propertyDetails(propertyId as string)
  )

  if (!data.results) {
    return null
  }

  return (
    <div className='bg-gray-100 font-ubuntu text-sm text-black lg:text-base'>
      {/* <Breadcrumbs /> */}
      <div className='pt-4 md:pt-6'>
        <PropertyDetailsHero data={data.results.property_details} />
      </div>
      <PropertyTabSection
        data={data.results.property_details}
        recommendedProperty={data.results.related_property}
      />
    </div>
  )
}

export default PropertyDetailsForSaleAnd
