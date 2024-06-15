import BoxTabsUpdate from '@/components/common/BoxTabsUpdate'
import FlyoutWrapper from '@/components/common/Flyout'
import PropertyListSortFlyout from '@/components/common/Search/PropertySortFlyout'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import { propertySortOptions } from '@/types/propertyFilter'
import { findNameOption } from '@/utils/findOption'
import { DownArrowIcon, FilterListIcon, GridIcon, ListIcon } from '@/utils/icon'
import {
  IPropertySearchState,
  PropertySearchAction,
} from '@/utils/reducers/PropertySearchReducer'
import classNames from 'classnames'
import React, { Dispatch, SetStateAction } from 'react'
interface IProps {
  propertyPurposeData: IPropertyPurpose[]
  propertyTypeData: IPropertyType[]
  state: IPropertySearchState
  dispatch: Dispatch<PropertySearchAction>
  isCardVertical: boolean
  setIsCardVertical: Dispatch<SetStateAction<boolean>>
}

const PropertyListFilter: React.FC<IProps> = ({
  propertyPurposeData,
  propertyTypeData,
  state: { selectedPurpose, sortBy },
  dispatch,
  isCardVertical,
  setIsCardVertical,
}) => {
  const setSelectedPurpose = (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => {
    dispatch({ type: 'SET_SELECTED_PURPOSE', payload: propertyPurpose })
  }

  const setSortBy = (selected: string) => {
    dispatch({ type: 'SET_SORT_BY', payload: selected })
  }

  return (
    <div className='mt-3 flex items-end justify-between gap-4 text-sm font-light md:mt-0 md:items-center md:text-base'>
      <div className='flex flex-shrink flex-wrap items-center gap-x-4 gap-y-1'>
        <h2 className='hidden sm:block'>Occupancy Status:</h2>
        <BoxTabsUpdate
          selectedTab={selectedPurpose.completion}
          setSelectedTab={(selectedTab) =>
            setSelectedPurpose({
              purpose: selectedPurpose.purpose,
              completion: selectedTab,
            })
          }
          tabs={
            propertyPurposeData
              .find(
                (purpose) =>
                  purpose.id.toString() === selectedPurpose.purpose.value
              )
              ?.sub_purpose.map((subPurpose) => ({
                label: subPurpose.purpose_title,
                value: subPurpose.id.toString(),
              })) || []
          }
          size='small'
        />
      </div>

      <div className='flex items-center gap-5 self-end'>
        <FlyoutWrapper
          flyoutContent={(close: () => void) => (
            <PropertyListSortFlyout
              close={close}
              selectedPropertyType={sortBy}
              setSelectedPropertyType={setSortBy}
            />
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
