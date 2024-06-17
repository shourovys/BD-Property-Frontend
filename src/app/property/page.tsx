import PropertyListPageComponent from '@/components/pages/propertyList/PropertyListPage'
import { propertyPurposeData, propertyTypeData } from '@/utils/data/property'
import type { NextPage } from 'next'

const PropertyListPage: NextPage = async () => {
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
