// PropertyListHeader.tsx

import { useAppSelector } from '@/hooks/reduxHooks'
import React from 'react'

const PropertyListHeader: React.FC = () => {
  const { propertySearch } = useAppSelector((state) => state)

  const {
    selectedPurpose,
    selectedPropertyType,
    selectedBedsBaths,
    selectedPropertyLocation,
  } = propertySearch

  // Extract data for dynamic title
  const purpose = selectedPurpose.purpose.label === 'Buy' ? 'Sale' : 'Rent'
  const type = selectedPropertyType.type.label
  const subType = selectedPropertyType.subType.label || ''
  const location = selectedPropertyLocation.length
    ? selectedPropertyLocation[0].label
    : ''
  const beds =
    selectedBedsBaths.beds.length === 1
      ? `${selectedBedsBaths.beds[0].label} Bedroom `
      : ''
  const propertyType = subType ? subType + 's' : type + ' Properties'

  // Construct the title dynamically
  const title = `${beds}${propertyType} ${purpose} in ${
    location || 'Bangladesh'
  }`

  return <h1 className='text-base font-medium md:text-lg'>{title}</h1>
}

export default PropertyListHeader
