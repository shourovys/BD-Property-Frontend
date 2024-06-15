import Input from '@/components/atomic/Input'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'

interface IProps {
  selectedPropertySize: {
    min: string
    max: string
  }
  setSelectedPropertySize: (propertySize: { min: string; max: string }) => void
}

const PropertySizeFilters: React.FC<IProps> = ({
  selectedPropertySize,
  setSelectedPropertySize,
}) => {
  const handlePriceChange: THandleInputChange = (name, value) => {
    setSelectedPropertySize({ ...selectedPropertySize, [name]: value })
  }

  return (
    <div className='overflow-hidden'>
      <h2 className='form-label mb-1 inline-block w-full text-sm font-medium md:text-base'>
        Size
      </h2>
      <div className='flex gap-3'>
        <Input
          name='min'
          type='number'
          label='Minimum'
          placeholder='0'
          value={selectedPropertySize.min}
          onChange={handlePriceChange}
        />

        <Input
          name='max'
          type='number'
          label='Maximum'
          placeholder='Any'
          value={selectedPropertySize.max}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  )
}

export default PropertySizeFilters
