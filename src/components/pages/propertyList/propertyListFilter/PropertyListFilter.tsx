import BoxTabsUpdate from '@/components/common/BoxTabsUpdate'
import FlyoutWrapper from '@/components/common/Flyout'
import PropertyListSortFlyout from '@/components/common/Search/PropertySortFlyout'
import { setSelectedPurpose } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { propertySortOptions } from '@/types/propertyFilter'
import { propertyPurposeData } from '@/utils/data/property'
import { findNameOption } from '@/utils/findOption'
import { DownArrowIcon, FilterListIcon, GridIcon, ListIcon } from '@/utils/icon'
import classNames from 'classnames'
import React, { Dispatch, SetStateAction } from 'react'
interface IProps {
  isCardVertical: boolean
  setIsCardVertical: Dispatch<SetStateAction<boolean>>
}

const PropertyListFilter: React.FC<IProps> = ({
  isCardVertical,
  setIsCardVertical,
}) => {
  const dispatch = useAppDispatch()
  const { selectedPurpose, sortBy } = useAppSelector(
    (state) => state.propertySearch
  )
  return (
    <div className='mt-3 flex items-end justify-between gap-4 text-sm font-light md:mt-0 md:items-center md:text-base'>
      <div className='flex flex-shrink flex-wrap items-center gap-x-4 gap-y-1'>
        <h2 className='hidden sm:block'>Occupancy Status:</h2>
        <BoxTabsUpdate
          selectedTab={selectedPurpose.completion}
          setSelectedTab={(selectedTab) =>
            dispatch(
              setSelectedPurpose({
                purpose: selectedPurpose.purpose,
                completion: selectedTab,
              })
            )
          }
          tabs={
            propertyPurposeData
              .find(
                (purpose) =>
                  purpose.id.toString() === selectedPurpose.purpose.value
              )
              ?.subPurpose.map((subPurpose) => ({
                label: subPurpose.title,
                value: subPurpose.id.toString(),
              })) || []
          }
          size='small'
        />
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
              'rounded-6xs px-3.5 py-1',
              !isCardVertical && 'bg-cornflowerblue'
            )}
            onClick={() => setIsCardVertical(false)}
          >
            <ListIcon className='cursor-pointer text-xl' />
          </div>

          <div
            className={classNames(
              'rounded-6xs px-3.5 py-1',
              isCardVertical && 'bg-cornflowerblue'
            )}
            onClick={() => setIsCardVertical(true)}
          >
            <GridIcon className='cursor-pointer text-xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyListFilter
