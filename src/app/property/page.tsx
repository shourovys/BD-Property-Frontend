import { propertyUrls } from '@/api/urls/propertyUrls'
import PropertyListPageComponent from '@/components/pages/propertyList/PropertyListPage'
import { ISingleServerResponse } from '@/types/pages/common'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

const PropertyListPage: NextPage = async () => {
  const propertyPurposeData = await fetchData<
    ISingleServerResponse<IPropertyPurpose[]>
  >(propertyUrls.purposes)

  const propertyTypeData = await fetchData<
    ISingleServerResponse<IPropertyType[]>
  >(propertyUrls.type)

  return (
    <div className=''>
      <PropertyListPageComponent
        propertyPurposeData={propertyPurposeData.results}
        propertyTypeData={propertyTypeData.results}
      />
    </div>
  )
}

export default PropertyListPage
