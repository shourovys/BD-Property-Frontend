import { useAppSelector } from '@/hooks/reduxHooks'
import Image from 'next/image'
import React from 'react'

const PropertyListLocationInfo: React.FC = () => {
  const { selectedPropertyLocation } = useAppSelector(
    (state) => state.propertySearch
  )

  const location = selectedPropertyLocation.length
    ? {
        label: selectedPropertyLocation
          .map((location) => location.label)
          .join(', '),
      }
    : { label: 'All Over Bangladesh' }

  return (
    <div className='flex gap-4 rounded-lg border border-lightgray-200 p-4 shadow-sm'>
      <Image
        className='rounded-lg object-cover'
        alt={location.label}
        src={'/rectangle-27@2x.png'}
        width={114}
        height={104}
        placeholder='blur'
        blurDataURL='/placeholder-image.png'
      />
      <div className='space-y-1'>
        <div className='text-lg font-medium'>{location.label}</div>
        <div className='text-sm font-light leading-relaxed text-gray-700'>
          {`List of Properties of ${location.label}`}
        </div>
      </div>
    </div>
  )
}

export default PropertyListLocationInfo
