import FlyoutWrapper from '@/components/common/Flyout'
import BedsAndBathsFlyout from '@/components/common/Search/BedsAndBathsFlyout'
import LookingForFlyout from '@/components/common/Search/LookingForFlyout'
import MoreFiltersFlyout from '@/components/common/Search/MoreFiltersFlyout'
import PropertyLocationSearch from '@/components/common/Search/PropertyLocationSearch'
import PropertyPriceFlyout from '@/components/common/Search/PropertyPriceFlyout'
import PropertyPurposeSubPurposeFlyout from '@/components/common/Search/PropertyPurposeSubPurposeFlyout'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
  getBedsAndBathsValue,
  getPropertyPriceValue,
} from '@/utils/getFilterValues'
import { DownArrowIcon, FilterIcon, SearchIcon } from '@/utils/icon'
import React from 'react'

const DesktopPropertyListFilters: React.FC = () => {
  const {
    selectedPropertyType,
    selectedBedsBaths,
    selectedPurpose,
    selectedPropertyPrice,
  } = useAppSelector((state) => state.propertySearch)

  return (
    <header className='border-b border-lightgray-100 '>
      <div className='custom_screen_width grid grid-cols-29 gap-2.5 py-6 text-sm font-light md:text-base'>
        <div className='col-span-2 '>
          <FlyoutWrapper
            direction='right'
            flyoutContent={(close: () => void) => (
              <PropertyPurposeSubPurposeFlyout close={close} />
            )}
          >
            <div className='flex h-full w-full items-center justify-between gap-0.5 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className='h-full min-h-max'>
                {selectedPurpose.purpose.label}
                &nbsp;
              </p>
              <DownArrowIcon className='w-full min-w-max flex-grow' />
            </div>
          </FlyoutWrapper>
        </div>

        <div className='col-span-8 '>
          <PropertyLocationSearch />
        </div>

        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <LookingForFlyout close={close} />
            )}
          >
            <div className='flex w-full items-center justify-between gap-1 rounded-6xs border border-gray-400 px-4 py-3'>
              <p className=''>
                {' '}
                {selectedPropertyType.subType.label ||
                  selectedPropertyType.type.label}{' '}
                &nbsp;
              </p>
              <DownArrowIcon />
            </div>
          </FlyoutWrapper>
        </div>
        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <BedsAndBathsFlyout close={close} />
            )}
          >
            <div className='flex w-full items-center justify-between gap-1 overflow-hidden rounded-6xs border border-gray-400 px-4 py-3'>
              <input
                name='bedsAndBaths'
                placeholder='Beds & Baths'
                className='w-full overflow-ellipsis border-0 bg-transparent placeholder:text-black'
                value={getBedsAndBathsValue(selectedBedsBaths)}
              />
              <DownArrowIcon className='text-xl' />
            </div>
          </FlyoutWrapper>
        </div>
        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <PropertyPriceFlyout close={close} />
            )}
          >
            <div className='flex w-full items-center justify-between gap-1 overflow-hidden rounded-6xs border border-gray-400 px-4 py-3'>
              <input
                name='propertyPrice'
                placeholder='Price(BDT)'
                className='w-full overflow-ellipsis border-0 bg-transparent placeholder:text-black'
                value={getPropertyPriceValue(selectedPropertyPrice)}
              />
              <DownArrowIcon className='text-xl' />
            </div>
          </FlyoutWrapper>
        </div>
        <div className='col-span-4'>
          <FlyoutWrapper
            flyoutContent={(close: () => void) => (
              <MoreFiltersFlyout close={close} />
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
