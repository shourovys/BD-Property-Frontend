import FlyoutWrapper from '@/components/common/Flyout'
import PropertyListSortFlyout from '@/components/common/Search/PropertySortFlyout'
import PropertySubPurposeFilter from '@/components/common/Search/PropertySubPurposeFilter'
import { useAppSelector } from '@/hooks/reduxHooks'
import { propertySortOptions } from '@/utils/data/property'
import { findNameOption } from '@/utils/findOption'
import { DownArrowIcon, FilterListIcon, GridIcon, ListIcon } from '@/utils/icon'
import classNames from 'classnames'
import React from 'react'

interface IProps {
  isCardVertical: boolean
  handleSetIsCardVertical: (value: boolean) => void
}

const PropertyListFilter: React.FC<IProps> = ({
  isCardVertical,
  handleSetIsCardVertical,
}) => {
  const { sortBy } = useAppSelector((state) => state.propertySearch)

  return (
    <div className='mt-3 flex items-end justify-between gap-4 text-sm font-light md:mt-0 md:items-center md:text-base'>
      <div className=''>
        <PropertySubPurposeFilter showInline />
      </div>

      <div className='flex items-center gap-5 self-end'>
        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <PropertyListSortFlyout close={close} />
          )}
        >
          <div className='flex w-fit flex-grow cursor-pointer items-center justify-between gap-x-0.5 rounded-6xs border-lightgray-100 px-1 py-1 font-medium sm:gap-x-1 sm:border sm:px-2 sm:font-normal'>
            <FilterListIcon className='text-xl md:text-2xl' />
            <span className='w-full min-w-max flex-grow'>
              {findNameOption(propertySortOptions, sortBy)?.label}
            </span>
            <DownArrowIcon className='hidden text-xl sm:block md:text-2xl' />
          </div>
        </FlyoutWrapper>

        <div className='hidden md:flex'>
          <div
            className={classNames(
              'cursor-pointer rounded-6xs px-3.5 py-1',
              !isCardVertical && 'bg-cornflowerblue'
            )}
            onClick={() => handleSetIsCardVertical(false)}
            aria-label='List View'
          >
            <ListIcon className='text-xl' />
          </div>

          <div
            className={classNames(
              'cursor-pointer rounded-6xs px-3.5 py-1',
              isCardVertical && 'bg-cornflowerblue'
            )}
            onClick={() => handleSetIsCardVertical(true)}
            aria-label='Grid View'
          >
            <GridIcon className='text-xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyListFilter
