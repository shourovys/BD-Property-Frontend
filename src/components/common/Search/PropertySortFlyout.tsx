import { propertySortOptions } from '@/types/propertyFilter'
import React from 'react'

interface IPropertyListSortFlyoutProps {
  close: () => void
  selectedPropertyType: string
  setSelectedPropertyType: (propertyType: string) => void
}

const PropertyListSortFlyout: React.FC<IPropertyListSortFlyoutProps> = ({
  close,
  selectedPropertyType,
  setSelectedPropertyType,
}) => {
  return (
    <div className='min-h-[100px] w-max max-w-full space-y-1 overflow-hidden rounded-sm bg-white p-2'>
      {propertySortOptions.map((type) => (
        <p
          key={type.value}
          onClick={() => {
            setSelectedPropertyType(type.value)
            close()
          }}
          className={`w-full cursor-pointer rounded border px-3 py-1 text-center text-sm ${
            selectedPropertyType === type.value
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
