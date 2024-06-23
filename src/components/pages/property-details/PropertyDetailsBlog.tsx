import { IPropertyDetails } from '@/types/pages/property'
import React from 'react'

interface IProps {
  data: IPropertyDetails
}

const PropertyDetailsBlog: React.FC<IProps> = ({ data }) => {
  // const isForSale =
  //   data.property_purpose.property_purpose.purpose_title.toLowerCase() ===
  //   'sale'
  return (
    <div
      id='overview'
      className='space-y-8 pt-6 font-inter text-black md:pt-8 '
    >
      <div className='space-y-3'>
        <h1 className='text-xl font-medium md:text-2xl'>{data.title}</h1>
        {/* <div className='text-xl font-medium md:text-2xl'>
          {`${isForSale ? 'Buy' : 'Rent'} This Nice Flat Of ${
            data.size
          } Sq Ft, Which Is Located At ${data.address.location}.`}
        </div> */}
        <div
          className='font-lato text-sm leading-[28px] md:text-base'
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        />
      </div>

      {/* <div className='space-y-3'>
        <div className='text-2xl'>Feature</div>
        <div className='font-lato text-sm leading-[28px] md:text-base'>
          <p className='m-0'>{data.keywords.join(', ')}</p>
          <p className='m-0'>{`Covered Area: ${data.size}`}</p>
          <p className='m-0'>{`Number of Floors: ${data.floor_plans.length}`}</p>
          {data.property_features.map((feature) => (
            <p key={feature.id} className='m-0'>
              {feature.features_type}
            </p>
          ))}
          <p className='m-0'>
            {`Nearby Amenities: ${data.property_features.map(
              (feature) => ` ${feature.features_type}`
            )}`}
          </p>
          <p className='m-0'>
            {`We suggest to make up your mind and steal this deal offered at the best value.`}
          </p>
        </div>
      </div> */}

      <div className='font-inter text-xl font-medium md:text-2xl'>
        Property Information
      </div>
      <ul className='grid gap-x-28 gap-y-3 sm:grid-cols-2'>
        <li className='grid grid-cols-2 border-b border-dimgray pb-2'>
          <span>Type:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.type.type}
          </span>
        </li>
        <li className='grid grid-cols-2 border-b border-dimgray pb-2'>
          <span>Completion:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.purpose.property_purpose.name}
          </span>
        </li>
        <li className='grid grid-cols-2 border-b border-dimgray pb-2'>
          <span>Purpose:</span>
          <span className='text-base font-medium md:text-lg'>
            {data.purpose.property_purpose.name}
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

export default PropertyDetailsBlog
