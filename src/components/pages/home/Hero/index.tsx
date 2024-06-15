'use client'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import {
  IPropertySearchState,
  propertySearchInitialState,
  propertySearchReducer,
} from '@/utils/reducers/PropertySearchReducer'
import { useReducer, useState } from 'react'
import HomeHeroSearch from './HomeHeroSearch'
import HomeHeroTabButtons from './HomeHeroTabButtons'

interface IProps {
  propertyPurposeData: IPropertyPurpose[]
  propertyTypeData: IPropertyType[]
  // bgVideo: string
}

const HomeHeroSection = ({
  propertyPurposeData,
  propertyTypeData,
} // bgVideo,
: IProps) => {
  const [state, dispatch] = useReducer(
    propertySearchReducer,
    propertySearchInitialState
  )

  const setSelectedPurpose = (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => {
    dispatch({ type: 'SET_SELECTED_PURPOSE', payload: propertyPurpose })
  }

  const [openSlideOver, setOpenSlideOver] = useState<boolean>(false)

  const handleSlideOverOpen = () => setOpenSlideOver(true)
  const handleSlideOverClose = () => setOpenSlideOver(false)

  // Update filter state in the URL when the filter state is applied or reset
  // const updateFilterStateToQuery = () => {
  //   const queryParams = {
  //     purposeValue: propertyPurposeData[0].id,
  //     purposeLabel: propertyPurposeData[0].purpose_title,

  //     subPurposeValue: propertyPurposeData[0].sub_purpose[0]?.id,
  //     subPurposeLabel: propertyPurposeData[0].sub_purpose[0]?.purpose_title,

  //     typeValue: propertyTypeData[0].id,
  //     typeLabel: propertyTypeData[0].type,

  //     subTypeValue: propertyTypeData[0].property_sub_type[0]?.id,
  //     subTypeLabel: propertyTypeData[0].property_sub_type[0]?.sub_type,
  //   }

  //   updateRouteQueryWithReplace({
  //     pathName: pathName,
  //     query: queryParams,
  //   })
  // }

  // useEffect(() => {
  //   updateFilterStateToQuery()
  // }, [])

  return (
    <div className='relative h-96 w-full bg-black bg-cover bg-center sm:h-[650px]'>
      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 h-full w-full object-cover before:backdrop-blur-[31.11px]'
      >
        <source src='/videoplayback.mp4' type='video/mp4' />

        {/* <img
        src={IMAGE_URL + bgVideo}
        alt='video'
        className='absolute inset-0 h-full w-full object-cover before:backdrop-blur-[31.11px]'
      /> */}
      </video>
      {/* Black overlay */}
      <div className='absolute inset-0 bg-black opacity-70 sm:opacity-50'></div>
      <div className='custom_screen_width relative flex h-full w-full flex-col items-center justify-center gap-4 pb-20 sm:pb-0'>
        <h1 className='max-w-xs text-center text-2xl text-white sm:hidden'>
          Search properties for sale and for rent in Bangladesh
        </h1>
        <HomeHeroTabButtons
          propertyPurposeData={propertyPurposeData}
          selectedPurpose={state.selectedPurpose}
          setSelectedPurpose={setSelectedPurpose}
          openSlideOver={openSlideOver}
          handleSlideOverOpen={handleSlideOverOpen}
        />
        <HomeHeroSearch
          propertyPurposeData={propertyPurposeData}
          propertyTypeData={propertyTypeData}
          state={state}
          dispatch={dispatch}
          openSlideOver={openSlideOver}
          handleSlideOverClose={handleSlideOverClose}
        />
      </div>
    </div>
  )
}

export default HomeHeroSection
