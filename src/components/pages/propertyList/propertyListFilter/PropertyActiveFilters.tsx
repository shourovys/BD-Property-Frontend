import {
  removeSelectedKeywords,
  resetAll,
  resetSelectedBaths,
  resetSelectedBeds,
  resetSelectedPropertyPrice,
  resetSelectedPropertySize,
  resetSelectedTourType,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import formatPrice from '@/utils/formatPrice'
import React from 'react'

const PropertyActiveFilters: React.FC = () => {
  const dispatch = useAppDispatch()
  const { propertySearch } = useAppSelector((state) => state)
  const {
    selectedPropertyPrice,
    selectedBedsBaths,
    selectedPropertySize,
    selectedKeywords,
    tourType,
  } = propertySearch

  // Helper function to generate filter item with close button
  const generateFilterItem = (label: string, onReset: () => void) => (
    <li className='rounded-6xs border border-darkslateblue-100 bg-darkslateblue-300 px-2 py-0.5'>
      {label}
      <button
        className='pl-1.5 text-lg text-gray-800 hover:text-red-500 md:text-xl'
        onClick={onReset}
      >
        &#215;
      </button>
    </li>
  )

  // Generate filter parts
  const priceFilter =
    selectedPropertyPrice.min || selectedPropertyPrice.max
      ? generateFilterItem(
          `BDT ${formatPrice(selectedPropertyPrice.min || 0)} - ${
            selectedPropertyPrice.max
              ? `BDT ${formatPrice(selectedPropertyPrice.max)}`
              : 'Any'
          }`,
          () => dispatch(resetSelectedPropertyPrice())
        )
      : null

  const bedsFilter =
    selectedBedsBaths.beds.length > 0
      ? generateFilterItem(
          `${selectedBedsBaths.beds
            .map((bed) => bed.label)
            .join(', ')
            .replace(/,([^,]*)$/, ' and$1')} Beds`,
          () => dispatch(resetSelectedBeds())
        )
      : null

  const bathsFilter =
    selectedBedsBaths.baths.length > 0
      ? generateFilterItem(
          `${selectedBedsBaths.baths
            .map((bath) => bath.label)
            .join(', ')
            .replace(/,([^,]*)$/, ' and$1')} Baths`,
          () => dispatch(resetSelectedBaths())
        )
      : null

  const sizeFilter =
    selectedPropertySize.min || selectedPropertySize.max
      ? generateFilterItem(
          `${selectedPropertySize.min || 0} sqft ${
            selectedPropertySize.max
              ? `${selectedPropertySize.max} sqft`
              : 'Any'
          }`,
          () => dispatch(resetSelectedPropertySize())
        )
      : null

  const keywordsFilter =
    selectedKeywords.length > 0
      ? selectedKeywords.map((keyword) =>
          generateFilterItem(keyword, () =>
            dispatch(removeSelectedKeywords(keyword))
          )
        )
      : null

  const tourFilter = tourType
    ? generateFilterItem(`${tourType} tours`, () =>
        dispatch(resetSelectedTourType())
      )
    : null

  // Check if any filter is present to show Clear All Filters button
  const isAnyFilterPresent =
    !!priceFilter ||
    !!bedsFilter ||
    !!bathsFilter ||
    !!sizeFilter ||
    !!keywordsFilter ||
    !!tourFilter

  if (!isAnyFilterPresent) {
    return null
  }

  return (
    <div className='flex flex-wrap items-center gap-3 text-sm'>
      <ul className='flex flex-wrap gap-1.5 text-sm font-light md:text-base'>
        {priceFilter}
        {bedsFilter}
        {bathsFilter}
        {sizeFilter}
        {keywordsFilter}
        {tourFilter}
      </ul>
      <button
        className='text-salmon/95 hover:text-salmon'
        onClick={() => dispatch(resetAll())}
      >
        Clear All Filters
      </button>
    </div>
  )
}

export default PropertyActiveFilters
