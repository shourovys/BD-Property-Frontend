'use client'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'

import { useState } from 'react'
import HomeHeroSearch from '../home/Hero/HomeHeroSearch'
import HomeHeroTabButtons from '../home/Hero/HomeHeroTabButtons'

interface IProps {
  propertyPurposeData: IPropertyPurpose[]
  propertyTypeData: IPropertyType[]
}

const PropertyGuidelineHero = ({
  propertyPurposeData,
  propertyTypeData,
}: IProps) => {
  const [openSlideOver, setOpenSlideOver] = useState<boolean>(false)

  const handleSlideOverOpen = () => setOpenSlideOver(true)
  const handleSlideOverClose = () => setOpenSlideOver(false)

  return (
    <div
      className='h-[650px] w-full bg-black bg-cover bg-center before:backdrop-blur-[31.11px] '
      style={{ backgroundImage: `url('/mask-group-1@2x.png')` }}
    >
      <div className='custom_screen_width relative flex h-full w-full flex-col items-center justify-center gap-4 pb-20 sm:pb-0'>
        <h1 className='max-w-xs text-center text-2xl text-white sm:hidden'>
          Search properties for sale and for rent in Bangladesh
        </h1>
        <HomeHeroTabButtons
          // openSlideOver={openSlideOver}
          handleSlideOverOpen={handleSlideOverOpen}
        />
        <HomeHeroSearch
          openSlideOver={openSlideOver}
          handleSlideOverClose={handleSlideOverClose}
        />
      </div>
    </div>
  )
}

export default PropertyGuidelineHero
