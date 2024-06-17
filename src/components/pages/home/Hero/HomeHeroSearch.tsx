import SlideOver from '@/components/atomic/SlideOver'
import FlyoutWrapper from '@/components/common/Flyout'
import BedsAndBathsFlyout from '@/components/common/Search/BedsAndBathsFlyout'
import PropertyListLink from '@/components/common/Search/HOC/PropertyListLink'
import LookingForFlyout from '@/components/common/Search/LookingForFlyout'
import PropertyPriceFlyout from '@/components/common/Search/PropertyPriceFlyout'
import PropertySizeFlyout from '@/components/common/Search/PropertySizeFlyout'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
  getBedsAndBathsValue,
  getPropertyPriceValue,
  getPropertySizeValue,
} from '@/utils/getFilterValues'
import { DownArrowIcon, SearchIcon } from '@/utils/icon'
import type { NextPage } from 'next'
import MobilePropertyListFilters from '../../propertyList/propertyListFilter/MobilePropertyListFilters'
import LocationSelector from './LocationSelector'

interface IHomeHeroSearchProps {
  openSlideOver: boolean
  handleSlideOverClose: () => void
}

const HomeHeroSearch: NextPage<IHomeHeroSearchProps> = ({
  openSlideOver,
  handleSlideOverClose,
}) => {
  const {
    selectedPropertyType,
    selectedBedsBaths,
    selectedPropertySize,
    selectedPropertyPrice,
  } = useAppSelector((state) => state.propertySearch)

  return (
    <section className='hidden w-full max-w-sm rounded-3xs border border-salmon bg-white px-4 pb-3 pt-4 font-ubuntu text-sm font-light text-darkslateblue-100 sm:block md:w-3/5 md:min-w-[600px] md:max-w-full md:flex-row md:pb-3 md:pt-3 md:text-sm lg:w-3/6 lg:min-w-[750px]'>
      <div className='grid min-w-[200px] grid-cols-1 gap-y-2 md:grid-cols-4 md:gap-x-4 md:gap-y-0'>
        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <LookingForFlyout close={close} />
          )}
        >
          <div className='border-lightgray-100 text-start md:border-r md:pr-2'>
            <p className='text-gray-600'>Looking For</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {selectedPropertyType.subType.label ||
                  selectedPropertyType.type.label}
                &nbsp;
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>
        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <BedsAndBathsFlyout close={close} />
          )}
        >
          <div className='h-full border-lightgray-100 text-start md:border-r md:pr-2'>
            <p className='text-gray-600'>Bed & Bath</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {getBedsAndBathsValue(selectedBedsBaths)}
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>

        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <PropertySizeFlyout close={close} />
          )}
        >
          <div className='h-full border-lightgray-100 text-start md:border-r md:pr-2'>
            <p className='text-gray-600'>Property Size</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {getPropertySizeValue(selectedPropertySize)}
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>

        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <PropertyPriceFlyout close={close} />
          )}
        >
          <div className='h-full border-lightgray-100 text-start'>
            <p className='text-gray-600'>Property Price</p>
            <div className='flex items-center justify-between'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 py-1.5 pl-0 text-sm text-black md:text-base'>
                {getPropertyPriceValue(selectedPropertyPrice)}
              </p>
              <DownArrowIcon className='text-base md:text-lg' />
            </div>
          </div>
        </FlyoutWrapper>
      </div>

      <div className='mt-2 flex w-full items-center justify-center border-t border-lightgray-100 pt-2'>
        <LocationSelector />
        <PropertyListLink>
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
        <MobilePropertyListFilters onSlideOverClose={handleSlideOverClose} />
      </SlideOver>
    </section>
  )
}

export default HomeHeroSearch
