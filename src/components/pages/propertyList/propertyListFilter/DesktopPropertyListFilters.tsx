import FlyoutWrapper from '@/components/common/Flyout'
import BedsAndBathsFlyout from '@/components/common/Search/BedsAndBathsFlyout'
import LookingForFlyout from '@/components/common/Search/LookingForFlyout'
import MoreFiltersFlyout from '@/components/common/Search/MoreFiltersFlyout'
import PropertyLocationSearch from '@/components/common/Search/PropertyLocationSearch'
import PropertyPriceFlyout from '@/components/common/Search/PropertyPriceFlyout'
import PropertyPurposeSubPurposeFlyout from '@/components/common/Search/PropertyPurposeSubPurposeFlyout'
import { ISelectOption } from '@/types/components/common'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import {
  getBedsAndBathsValue,
  getPropertyPriceValue,
} from '@/utils/getFilterValues'
import { DownArrowIcon, FilterIcon, SearchIcon } from '@/utils/icon'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import React from 'react'

interface DesktopPropertyListFiltersProps {
  propertyPurposeData: IPropertyPurpose[]
  propertyTypeData: IPropertyType[]
  state: IPropertySearchState
  setSelectedPurpose: (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => void
  setSelectedPropertyType: (
    propertyType: IPropertySearchState['selectedPropertyType']
  ) => void
  setSelectedBedsBaths: (
    bedsBaths: IPropertySearchState['selectedBedsBaths']
  ) => void
  setSelectedPropertyPrice: (propertyPrice: {
    min: string
    max: string
  }) => void
  setSelectedPropertyLocation: (propertyLocation: ISelectOption[]) => void
  setSelectedPropertySize: (propertySize: { min: string; max: string }) => void
  setSelectedKeywords: (keywords: string[]) => void
  setTourType: (tourType: string) => void
  resetAll: () => void
}

const DesktopPropertyListFilters: React.FC<DesktopPropertyListFiltersProps> = ({
  propertyPurposeData,
  propertyTypeData,
  state,
  setSelectedPurpose,
  setSelectedPropertyType,
  setSelectedBedsBaths,
  setSelectedPropertyPrice,
  setSelectedPropertyLocation,
  setSelectedPropertySize,
  setSelectedKeywords,
  setTourType,
  resetAll,
}) => {
  return (
    <header className='border-b border-lightgray-100 '>
      <div className='custom_screen_width grid grid-cols-29 gap-2.5 py-6 text-sm font-light md:text-base'>
        <div className='col-span-2 '>
          <FlyoutWrapper
            direction='right'
            flyoutContent={(close: () => void) => (
              <PropertyPurposeSubPurposeFlyout
                purposeData={propertyPurposeData}
                close={close}
                selectedPurpose={state.selectedPurpose}
                setSelectedPurpose={setSelectedPurpose}
              />
            )}
          >
            <div className='flex h-full w-full items-center justify-between gap-0.5 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className='h-full min-h-max'>
                {state.selectedPurpose.purpose.label}
                &nbsp;
              </p>
              <DownArrowIcon className='w-full min-w-max flex-grow' />
            </div>
          </FlyoutWrapper>
        </div>

        <div className='col-span-8 '>
          <PropertyLocationSearch
            selectedLocations={state.selectedPropertyLocation}
            setSelectedLocations={setSelectedPropertyLocation}
          />
        </div>

        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <LookingForFlyout
                propertyTypeData={propertyTypeData}
                close={close}
                selectedPropertyType={state.selectedPropertyType}
                setSelectedPropertyType={setSelectedPropertyType}
              />
            )}
          >
            <div className='flex w-full items-center justify-between gap-1 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className=''>
                {' '}
                {state.selectedPropertyType.subType.label ||
                  state.selectedPropertyType.type.label}{' '}
                &nbsp;
              </p>
              <DownArrowIcon />
            </div>
          </FlyoutWrapper>
        </div>
        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <BedsAndBathsFlyout
                close={close}
                selectedBedsBaths={state.selectedBedsBaths}
                setSelectedBedsBaths={setSelectedBedsBaths}
              />
            )}
          >
            <div className='flex w-full items-center justify-between gap-1 overflow-hidden rounded-6xs border border-gray-400 px-4 py-3'>
              <input
                name='bedsAndBaths'
                placeholder='Beds & Baths'
                className='w-full overflow-ellipsis border-0 bg-transparent placeholder:text-black'
                value={getBedsAndBathsValue(state.selectedBedsBaths)}
              />
              <DownArrowIcon className='text-xl' />
            </div>
          </FlyoutWrapper>
        </div>
        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <PropertyPriceFlyout
                close={close}
                selectedPropertyPrice={state.selectedPropertyPrice}
                setSelectedPropertyPrice={setSelectedPropertyPrice}
              />
            )}
          >
            <div className='flex w-full items-center justify-between gap-1 overflow-hidden rounded-6xs border border-gray-400 px-4 py-3'>
              <input
                name='propertyPrice'
                placeholder='Price(BDT)'
                className='w-full overflow-ellipsis border-0 bg-transparent placeholder:text-black'
                value={getPropertyPriceValue(state.selectedPropertyPrice)}
              />
              <DownArrowIcon className='text-xl' />
            </div>
          </FlyoutWrapper>
        </div>
        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <MoreFiltersFlyout
                close={close}
                selectedPropertySize={state.selectedPropertySize}
                setSelectedPropertySize={setSelectedPropertySize}
                selectedKeywords={state.selectedKeywords}
                setSelectedKeywords={setSelectedKeywords}
                tourType={state.tourType}
                setTourType={setTourType}
              />
            )}
          >
            <div className='flex w-full items-center justify-between gap-1 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className=''>More Filters</p>
              <FilterIcon />
            </div>
          </FlyoutWrapper>
        </div>

        <div className='col-span-3 flex w-full items-center justify-between gap-1 rounded-6xs bg-lightgray-100 px-4 py-3 font-normal text-darkslateblue-100'>
          <SearchIcon className='text-base font-medium md:text-lg' />
          <p className=''>Search</p>
        </div>
      </div>
    </header>
  )
}

export default DesktopPropertyListFilters
