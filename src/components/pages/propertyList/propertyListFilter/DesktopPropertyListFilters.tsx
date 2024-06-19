import FlyoutWrapper from '@/components/common/Flyout'
import BedsAndBathsFlyout from '@/components/common/Search/BedsAndBathsFlyout'
import LookingForFlyout from '@/components/common/Search/LookingForFlyout'
import MoreFiltersFlyout from '@/components/common/Search/MoreFiltersFlyout'
import PropertyLocationSearch from '@/components/common/Search/PropertyLocationSearch'
import PropertyPriceFlyout from '@/components/common/Search/PropertyPriceFlyout'
import PropertyPurposeSubPurposeFlyout from '@/components/common/Search/PropertyPurposeSubPurposeFlyout'
import PropertySizeFlyout from '@/components/common/Search/PropertySizeFlyout'
import { useAppSelector } from '@/hooks/reduxHooks'
import { propertyTypeData } from '@/utils/data/property'
import {
  getBedsAndBathsValue,
  getPropertyPriceValue,
  getPropertySizeValue,
} from '@/utils/getFilterValues'
import { DownArrowIcon, FilterIcon, SaveIcon } from '@/utils/icon'
import React from 'react'

const DesktopPropertyListFilters: React.FC = () => {
  const {
    selectedPropertyType,
    selectedBedsBaths,
    selectedPurpose,
    selectedPropertyPrice,
    selectedPropertySize,
  } = useAppSelector((state) => state.propertySearch)

  return (
    <header className='border-b border-lightgray-100'>
      <div className='custom_screen_width grid grid-cols-14 gap-2.5 py-6 text-sm font-light md:text-base'>
        <div className='col-span-1'>
          <FlyoutWrapper
            direction='right'
            flyoutContent={(close) => (
              <PropertyPurposeSubPurposeFlyout close={close} />
            )}
          >
            <div className='flex h-full w-full items-center justify-between gap-0.5 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className=''>{selectedPurpose.purpose.label}</p>
              <DownArrowIcon className='w-full min-w-max flex-grow' />
            </div>
          </FlyoutWrapper>
        </div>

        <div className='col-span-4'>
          <PropertyLocationSearch />
        </div>

        <div className='col-span-2'>
          <FlyoutWrapper
            flyoutContent={(close) => <LookingForFlyout close={close} />}
          >
            <div className='flex w-full items-center justify-between gap-1 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className='truncate'>
                {selectedPropertyType.subType.label ||
                  selectedPropertyType.type.label}
              </p>
              <DownArrowIcon />
            </div>
          </FlyoutWrapper>
        </div>

        {selectedPropertyType.type.value === propertyTypeData[0].id && (
          <div className='col-span-2'>
            <FlyoutWrapper
              flyoutContent={(close) => <BedsAndBathsFlyout close={close} />}
            >
              <div className='flex w-full items-center justify-between gap-0.5 rounded-6xs border border-gray-400 px-4 py-3'>
                <input
                  name='bedsAndBaths'
                  placeholder='Beds & Baths'
                  className='placeholder-text-black w-full truncate border-0 bg-transparent text-black'
                  value={
                    (getBedsAndBathsValue(selectedBedsBaths), 'Beds & Baths')
                  }
                  readOnly
                />
                <DownArrowIcon className='text-xl' />
              </div>
            </FlyoutWrapper>
          </div>
        )}

        <div className='col-span-2'>
          <FlyoutWrapper
            flyoutContent={(close) => <PropertyPriceFlyout close={close} />}
          >
            <div className='flex w-full items-center justify-between gap-0.5 rounded-6xs border border-gray-400 px-4 py-3'>
              <input
                name='propertyPrice'
                placeholder='Price (BDT)'
                className='placeholder-text-black w-full truncate border-0 bg-transparent text-black'
                value={getPropertyPriceValue(
                  selectedPropertyPrice,
                  'Price (BDT)'
                )}
                readOnly
              />
              <DownArrowIcon className='text-xl' />
            </div>
          </FlyoutWrapper>
        </div>

        {selectedPropertyType.type.value !== propertyTypeData[0].id && (
          <div className='col-span-2'>
            <FlyoutWrapper
              flyoutContent={(close) => <PropertySizeFlyout close={close} />}
            >
              <div className='flex w-full items-center justify-between gap-0.5 rounded-6xs border border-gray-400 px-4 py-3'>
                <input
                  name='propertySize'
                  placeholder='Size (BDT)'
                  className='placeholder-text-black w-full truncate border-0 bg-transparent text-black'
                  value={getPropertySizeValue(
                    selectedPropertySize,
                    'Area (sqft)'
                  )}
                  readOnly
                />
                <DownArrowIcon className='text-xl' />
              </div>
            </FlyoutWrapper>
          </div>
        )}

        <div className='col-span-2'>
          <FlyoutWrapper
            flyoutContent={(close) => <MoreFiltersFlyout close={close} />}
          >
            <div className='flex w-full items-center justify-between gap-0.5 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className='truncate'>More Filters</p>
              <FilterIcon />
            </div>
          </FlyoutWrapper>
        </div>

        <div className='col-span-1 flex w-full items-center justify-between gap-0.5 rounded-6xs bg-lightgray-100 px-4 py-3 font-normal text-darkslateblue-100'>
          <SaveIcon className='flex-shrink-0' />
          <p className=''>Save</p>
        </div>
      </div>
    </header>
  )
}

export default DesktopPropertyListFilters
