import BoxTabsUpdate from '@/components/common/BoxTabsUpdate'
import BedsAndBathsFilter from '@/components/common/Search/BedsAndBathsFilter'
import CompletionFilter from '@/components/common/Search/CompletionFilter'
import PropertyListLink from '@/components/common/Search/HOC/PropertyListLink'
import LookingForFilter from '@/components/common/Search/LookingForFilter'
import PropertyKeywordFilter from '@/components/common/Search/PropertyKeywordFilter'
import PropertyLocationSearchWithBottomSelected from '@/components/common/Search/PropertyLocationSearchWithBottomSelected'
import PropertyPriceFilter from '@/components/common/Search/PropertyPriceFilter'
import PropertySizeFilters from '@/components/common/Search/PropertySizeFilters'
import { resetAll, setSelectedPurpose } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { propertyPurposeData } from '@/utils/data/property'
import { CloseIcon } from '@/utils/icon'
import React from 'react'

interface MobilePropertyListFiltersProps {
  onSlideOverClose: () => void
}

const MobilePropertyListFilters: React.FC<MobilePropertyListFiltersProps> = ({
  onSlideOverClose,
}) => {
  const dispatch = useAppDispatch()
  const { selectedPurpose } = useAppSelector((state) => state.propertySearch)

  const handleReset = () => {
    dispatch(resetAll())
    onSlideOverClose()
  }

  return (
    <div className='relative h-screen w-full bg-gray-100'>
      <div className='sticky left-0 right-0 top-0'>
        <div className='custom_screen_width flex items-center justify-between gap-4 bg-white py-3.5 shadow-sm'>
          <h2>Filters</h2>
          <CloseIcon onClick={onSlideOverClose} />
        </div>
      </div>
      <div className='custom_screen_width space-y-6 py-6'>
        <BoxTabsUpdate
          tabs={propertyPurposeData.map((type) => ({
            label: type.title,
            value: type.id.toString(),
          }))}
          selectedTab={selectedPurpose.purpose}
          setSelectedTab={(selectedTab: ISelectOption) =>
            dispatch(
              setSelectedPurpose({
                ...selectedPurpose,
                purpose: selectedTab,
              })
            )
          }
        />
        <PropertyLocationSearchWithBottomSelected label='Location' />
        <LookingForFilter />
        <CompletionFilter />
        <BedsAndBathsFilter />
        <PropertyPriceFilter />
        <PropertySizeFilters />
        <PropertyKeywordFilter />
        <div className='h-4' />
        <div className='fixed bottom-0 left-0 right-0'>
          <div className='custom_screen_width flex items-center justify-between gap-3 bg-white py-2 shadow-md'>
            <button
              className='rounded border border-darkslateblue-100 px-4 py-1.5 text-sm text-darkslateblue-100 hover:text-darkslateblue-100 focus:outline-none'
              onClick={handleReset}
            >
              Reset
            </button>
            <div className='flex-1' onClick={onSlideOverClose}>
              <PropertyListLink className='w-full'>
                <button className='w-full rounded border border-darkslateblue-100 bg-darkslateblue-100 px-4 py-1.5 text-sm text-white hover:opacity-90 focus:outline-none'>
                  Apply
                </button>
              </PropertyListLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobilePropertyListFilters
