import { SITE_PAGES } from '@/utils/config'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

// Define your main component
const PropertyBuySellGuidelinePage: React.FC = () => {
  return (
    <div
      className='relative h-[calc(100vh-70px)] w-full bg-black bg-cover bg-center font-lato text-2xl text-white lg:text-3xl'
      style={{ backgroundImage: `url('/mask-group-1@2x.png')` }}
    >
      {/* Black overlay above background image and billow contact*/}
      <div className='absolute inset-0 bg-black opacity-40 ' />

      <div className='absolute h-full w-full'>
        <div
          className={classNames(
            'custom_screen_width flex h-full w-full flex-col items-center justify-center gap-6 space-y-3 text-start md:space-y-6'
          )}
        >
          <h1 className='mb-6 inline-block text-center font-lato text-4xl leading-[48px] text-white md:mb-12 md:text-5xl lg:text-6xl'>
            BD-Property Real Estate Solutions
          </h1>
          <div className='inline-block text-xl leading-[23px] text-white md:text-2xl'>
            What are you interested in?
          </div>
          <div className='flex w-full items-center justify-center gap-4 font-ubuntu font-medium text-black'>
            <Link
              href={SITE_PAGES.buyGuideline}
              className='w-full max-w-[240px] rounded-3xs bg-white py-3 text-center text-sm md:py-4 md:text-base'
            >
              Buy A Property
            </Link>
            <Link
              href={SITE_PAGES.sellGuideline}
              className='w-full max-w-[240px] rounded-3xs bg-white py-3 text-center text-sm md:py-4 md:text-base'
            >
              Sell A Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyBuySellGuidelinePage
