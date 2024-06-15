import SlideOver from '@/components/atomic/SlideOver'
import FlyoutWrapper from '@/components/common/Flyout'
import BedsAndBathsFlyout from '@/components/common/Search/BedsAndBathsFlyout'
import PropertyListLink from '@/components/common/Search/HOC/PropertyListLink'
import LookingForFlyout from '@/components/common/Search/LookingForFlyout'
import PropertyPriceFlyout from '@/components/common/Search/PropertyPriceFlyout'
import PropertySizeFlyout from '@/components/common/Search/PropertySizeFlyout'
import { ISelectOption, emptySelectOption } from '@/types/components/common'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import {
  getBedsAndBathsValue,
  getPropertyPriceValue,
  getPropertySizeValue,
} from '@/utils/getFilterValues'
import { DownArrowIcon, SearchIcon } from '@/utils/icon'
import {
  IPropertySearchState,
  PropertySearchAction,
} from '@/utils/reducers/PropertySearchReducer'
import type { NextPage } from 'next'
import { Dispatch, useEffect } from 'react'
import MobilePropertyListFilters from '../../propertyList/propertyListFilter/MobilePropertyListFilters'
import LocationSelector from './LocationSelector'

interface IHomeHeroSearchProps {
  propertyPurposeData: IPropertyPurpose[]
  propertyTypeData: IPropertyType[]
  state: IPropertySearchState
  dispatch: Dispatch<PropertySearchAction>
  openSlideOver: boolean
  handleSlideOverClose: () => void
}

const HomeHeroSearch: NextPage<IHomeHeroSearchProps> = ({
  propertyPurposeData,
  propertyTypeData,
  state,
  dispatch,
  openSlideOver,
  handleSlideOverClose,
}) => {
  const setSelectedPurpose = (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => {
    dispatch({ type: 'SET_SELECTED_PURPOSE', payload: propertyPurpose })
  }

  const setSelectedPropertyType = (
    propertyType: IPropertySearchState['selectedPropertyType']
  ) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY_TYPE', payload: propertyType })
  }

  const setSelectedBedsBaths = (
    bedsBaths: IPropertySearchState['selectedBedsBaths']
  ) => {
    dispatch({ type: 'SET_SELECTED_BEDS_BATHS', payload: bedsBaths })
  }

  const setSelectedPropertyPrice = (propertyPrice: {
    min: string
    max: string
  }) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY_PRICE', payload: propertyPrice })
  }

  const setSelectedPropertyLocation = (propertyLocation: ISelectOption[]) => {
    dispatch({
      type: 'SET_SELECTED_PROPERTY_LOCATION',
      payload: propertyLocation,
    })
  }

  const setSelectedPropertySize = (propertySize: {
    min: string
    max: string
  }) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY_SIZE', payload: propertySize })
  }

  const setSelectedKeywords = (keywords: string[]) => {
    dispatch({ type: 'SET_SELECTED_KEYWORDS', payload: keywords })
  }

  const setTourType = (tourType: string) => {
    dispatch({ type: 'SET_SELECTED_TOUR_TYPE', payload: tourType })
  }

  const applyAll = (localFilterState: IPropertySearchState) => {
    dispatch({ type: 'APPLY_ALL', payload: localFilterState })
  }

  const resetAll = () => {
    dispatch({ type: 'RESET_ALL' })
  }

  const initPropertyType = {
    type: propertyTypeData.length
      ? {
          label: propertyTypeData[0].type,
          value: propertyTypeData[0].id.toString(),
        }
      : emptySelectOption,
    subType: emptySelectOption,
  }

  useEffect(() => {
    setSelectedPropertyType(initPropertyType)
  }, [])

  return (
    <section className='hidden w-full max-w-sm rounded-3xs border border-salmon bg-white px-4 pb-3 pt-4 font-ubuntu text-sm font-light text-darkslateblue-100 sm:block md:w-3/5 md:min-w-[600px] md:max-w-full md:flex-row md:pb-3 md:pt-3 md:text-sm lg:w-3/6'>
      <div className='grid min-w-[200px] grid-cols-1 gap-y-2 md:grid-cols-4 md:gap-x-4 md:gap-y-0'>
        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <LookingForFlyout
              propertyTypeData={propertyTypeData}
              close={close}
              selectedPropertyType={
                // state.selectedPropertyType.subType.value &&
                // state.selectedPropertyType.type.value
                //   ?
                state.selectedPropertyType
                // : initPropertyType
              }
              setSelectedPropertyType={setSelectedPropertyType}
            />
          )}
        >
          <div className='border-lightgray-100 text-start md:border-r md:pr-2'>
            <p className='text-gray-600'>Looking For</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {state.selectedPropertyType.subType.label ||
                  state.selectedPropertyType.type.label}
                &nbsp;
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>
        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <BedsAndBathsFlyout
              close={close}
              selectedBedsBaths={state.selectedBedsBaths}
              setSelectedBedsBaths={setSelectedBedsBaths}
            />
          )}
        >
          <div className='h-full border-lightgray-100 text-start md:border-r md:pr-2'>
            <p className='text-gray-600'>Bed & Bath</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {getBedsAndBathsValue(state.selectedBedsBaths)}
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>

        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <PropertySizeFlyout
              close={close}
              selectedPropertySize={state.selectedPropertySize}
              setSelectedPropertySize={setSelectedPropertySize}
            />
          )}
        >
          <div className='h-full border-lightgray-100 text-start md:border-r md:pr-2'>
            <p className='text-gray-600'>Property Size</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {getPropertySizeValue(state.selectedPropertySize)}
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>

        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <PropertyPriceFlyout
              close={close}
              selectedPropertyPrice={state.selectedPropertyPrice}
              setSelectedPropertyPrice={setSelectedPropertyPrice}
            />
          )}
        >
          <div className='h-full border-lightgray-100 text-start'>
            <p className='text-gray-600'>Property Price</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {getPropertyPriceValue(state.selectedPropertyPrice)}
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>
      </div>

      <div className='mt-2 flex w-full items-center justify-center border-t border-lightgray-100 pt-2'>
        <LocationSelector
          selectedPropertyLocation={state.selectedPropertyLocation}
          setSelectedPropertyLocation={setSelectedPropertyLocation}
        />
        <PropertyListLink state={state}>
          <button className='cursor-pointer rounded-6xs bg-darkslateblue-100 px-10 py-2 md:p-3'>
            <SearchIcon className='h-5 w-5 text-white md:h-7 md:w-7 md:text-base' />
          </button>
        </PropertyListLink>
      </div>

      <SlideOver
        isOpen={openSlideOver}
        onClose={handleSlideOverClose}
        size='full'
        comesFrom='yAxes'
      >
        <MobilePropertyListFilters
          propertyPurposeData={propertyPurposeData}
          propertyTypeData={propertyTypeData}
          state={state}
          setSelectedPurpose={setSelectedPurpose}
          setSelectedPropertyType={setSelectedPropertyType}
          setSelectedBedsBaths={setSelectedBedsBaths}
          setSelectedPropertyPrice={setSelectedPropertyPrice}
          setSelectedPropertyLocation={setSelectedPropertyLocation}
          setSelectedPropertySize={setSelectedPropertySize}
          setSelectedKeywords={setSelectedKeywords}
          setTourType={setTourType}
          resetAll={resetAll}
          onSlideOverClose={handleSlideOverClose}
        />
      </SlideOver>
    </section>
  )
}

export default HomeHeroSearch
