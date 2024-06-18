import { setSortBy } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { propertySortOptions } from '@/utils/data/property'
import React from 'react'

interface IPropertyListSortFlyoutProps {
  close: () => void
}

const PropertyListSortFlyout: React.FC<IPropertyListSortFlyoutProps> = ({
  close,
}) => {
  const dispatch = useAppDispatch()
  const selectedSortBy = useAppSelector((state) => state.propertySearch.sortBy)

  const handleSelectSortBy = (sortBy: string) => {
    dispatch(setSortBy(sortBy))
    close()
  }

  return (
    <div className='min-h-[100px] w-max max-w-full space-y-1 overflow-hidden rounded-sm bg-white p-2'>
      {propertySortOptions.map((type) => (
        <p
          key={type.value}
          onClick={() => handleSelectSortBy(type.value)}
          className={`w-full cursor-pointer rounded border px-3 py-1 text-center text-sm ${
            selectedSortBy === type.value
              ? 'border-darkslateblue-100 bg-darkslateblue-100 font-normal text-white'
              : 'border-gray-200 font-light'
          }`}
        >
          {type.label}
        </p>
      ))}
    </div>
  )
}

export default PropertyListSortFlyout
