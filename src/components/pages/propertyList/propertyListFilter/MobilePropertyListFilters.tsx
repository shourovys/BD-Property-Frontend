import BoxTabsUpdate from '@/components/common/BoxTabsUpdate'
import BedsAndBathsFilter from '@/components/common/Search/BedsAndBathsFilter'
import CompletionFilter from '@/components/common/Search/CompletionFilter'
import PropertyListLink from '@/components/common/Search/HOC/PropertyListLink'
import LookingForFilter from '@/components/common/Search/LookingForFilter'
import PropertyKeywordFilter from '@/components/common/Search/PropertyKeywordFilter'
import PropertyLocationSearchWithBottomSelected from '@/components/common/Search/PropertyLocationSearchWithBottomSelected'
import PropertyPriceFilter from '@/components/common/Search/PropertyPriceFilter'
import PropertySizeFilters from '@/components/common/Search/PropertySizeFilters'
import { ISelectOption } from '@/types/components/common'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import { CloseIcon } from '@/utils/icon'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import React from 'react'

interface MobilePropertyListFiltersProps {
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
  onSlideOverClose: () => void
}

const MobilePropertyListFilters: React.FC<MobilePropertyListFiltersProps> = ({
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
  onSlideOverClose,
}) => {
  const handleReset = () => {
    resetAll()
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
            label: type.purpose_title,
            value: type.id.toString(),
          }))}
          selectedTab={state.selectedPurpose.purpose}
          setSelectedTab={(selectedTab: ISelectOption) =>
            setSelectedPurpose({
              ...state.selectedPurpose,
              purpose: selectedTab,
            })
          }
        />
        <PropertyLocationSearchWithBottomSelected
          label='Location'
          selectedLocations={state.selectedPropertyLocation}
          setSelectedLocations={setSelectedPropertyLocation}
        />
        <LookingForFilter
          propertyTypeData={propertyTypeData}
          selectedPropertyType={state.selectedPropertyType}
          setSelectedPropertyType={setSelectedPropertyType}
        />
        <CompletionFilter
          propertyPurposeData={propertyPurposeData}
          selectedPurpose={state.selectedPurpose}
          setSelectedPurpose={setSelectedPurpose}
        />
        <BedsAndBathsFilter
          selectedBedsBaths={state.selectedBedsBaths}
          setSelectedBedsBaths={setSelectedBedsBaths}
        />
        <PropertyPriceFilter
          selectedPropertyPrice={state.selectedPropertyPrice}
          setSelectedPropertyPrice={setSelectedPropertyPrice}
        />
        <PropertySizeFilters
          selectedPropertySize={state.selectedPropertySize}
          setSelectedPropertySize={setSelectedPropertySize}
        />
        <PropertyKeywordFilter
          selectedKeywords={state.selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
        />
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
              <PropertyListLink className='w-full' state={state}>
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
