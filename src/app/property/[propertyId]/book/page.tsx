import { propertyUrls } from '@/api/urls/propertyUrls'
import BookForm from '@/components/pages/property-details/book/BookForm'
import { ISingleServerResponse } from '@/types/pages/common'
import { IPropertyDetailsResponse } from '@/types/pages/property'
import fetchData from '@/utils/fetchData'
import formatPrice from '@/utils/formatPrice'
import { AreaIcon, BathIcon, BedIcon } from '@/utils/icon'
import Image from 'next/image'
import React from 'react'

interface IProps {
  params: { propertyId: string }
}

const BookingPage: React.FC<IProps> = async ({ params }) => {
  const { propertyId } = params

  const {
    results: { details: propertyDetails },
  } = await fetchData<ISingleServerResponse<IPropertyDetailsResponse>>(
    propertyUrls.propertyDetails(propertyId as string)
  )
  return (
    <section className='custom_screen_width mt-4 grid gap-6 font-lato sm:gap-8 md:mt-8 md:grid-cols-2 md:gap-16'>
      {/* Property details */}
      <div className='space-y-3 md:space-y-4'>
        <h2 className='text-2xl font-semibold'>{propertyDetails.title}</h2>
        <div className='relative aspect-video h-[300px] w-full rounded md:h-[460px]'>
          <Image
            className='w-full rounded object-fill'
            alt=''
            src={
              propertyDetails.images?.length
                ? propertyDetails.images[0]?.image
                : ''
            } // Use the first image from the array
            fill
          />
        </div>
        <div className='flex-grow space-y-2 text-base md:space-y-3 md:text-lg'>
          <h1 className='font-medium'>
            BDT &nbsp;
            <span className='text-2xl md:text-3xl'>
              {formatPrice(propertyDetails.price)}
            </span>
          </h1>
          <h2 className='font-lato text-base font-semibold md:text-lg'>
            {`${propertyDetails.address.city}, ${propertyDetails.address.location}`}
          </h2>
          <div className='flex items-center gap-8 text-gray-800'>
            <div className='flex items-center gap-2 md:gap-3'>
              <BedIcon className='text-xl text-[#757575] md:text-2xl' />
              <p className='flex-grow font-light'>{propertyDetails.bed}</p>
            </div>
            <div className='flex items-center gap-2 md:gap-3'>
              <BathIcon className='text-lg text-[#757575] md:text-xl' />
              <p className='flex-grow font-light'>{propertyDetails.bath}</p>
            </div>
            <div className='flex items-center gap-2 md:gap-3'>
              <AreaIcon className='text-2xl text-[#757575]' />
              <p className='w-full flex-grow font-light'>{`${propertyDetails.size} Sqft`}</p>
            </div>
          </div>
        </div>
      </div>
      <BookForm />
    </section>
  )
}

export default BookingPage
