import { IPropertyDetails } from '@/types/pages/property'
import React from 'react'

interface IProps {
  data: IPropertyDetails
}

const PropertyDetailsPropertyInfo: React.FC<IProps> = ({ data }) => {
  return (
    <div className='space-y-4 font-lato text-sm text-black md:text-base'>
      <div className='font-inter text-xl font-medium md:text-2xl'>
        Property Information
      </div>
      <ul className='grid gap-x-28 gap-y-3 sm:grid-cols-2'>
        <li className='grid grid-cols-2 border-b border-dimgray pb-2'>
          <span>Type:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.type.name}
          </span>
        </li>
        <li className='grid grid-cols-2 border-b border-dimgray pb-2'>
          <span>Completion:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.purpose.purpose.name}
          </span>
        </li>
        <li className='grid grid-cols-2 border-b border-dimgray pb-2'>
          <span>Purpose:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.purpose.purpose.name}
          </span>
        </li>
        {/* <li className='grid grid-cols-2 pb-2 border-b border-dimgray'>
          <span>Last Updated:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.lastUpdated}
          </span>
        </li> */}
        <li className='grid grid-cols-2 border-b border-dimgray pb-2'>
          <span>Reference no.:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.referenceNo}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default PropertyDetailsPropertyInfo
