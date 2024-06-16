import PropertyListPageComponent from '@/components/pages/propertyList/PropertyListPage'
import { propertyPurposeData, propertyTypeData } from '@/utils/data/property'
import type { NextPage } from 'next'

const PropertyListPage: NextPage = async () => {
  // const propertyPurposeData = await fetchData<
  //   ISingleServerResponse<IPropertyPurpose[]>
  // >(propertyUrls.purposes)

  // const propertyTypeData = await fetchData<
  //   ISingleServerResponse<IPropertyType[]>
  // >(propertyUrls.type)

  return (
    <div className=''>
      <PropertyListPageComponent
        propertyPurposeData={propertyPurposeData}
        propertyTypeData={propertyTypeData}
      />
    </div>
  )
}

export default PropertyListPage
