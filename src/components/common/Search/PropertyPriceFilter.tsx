import Input from '@/components/atomic/Input'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'

interface IProps {
  selectedPropertyPrice: {
    min: string
    max: string
  }
  setSelectedPropertyPrice: (propertyPrice: {
    min: string
    max: string
  }) => void
}

const PropertyPriceFilter: React.FC<IProps> = ({
  selectedPropertyPrice,
  setSelectedPropertyPrice,
}) => {
  const handleInputChange: THandleInputChange = (name, value) => {
    setSelectedPropertyPrice({ ...selectedPropertyPrice, [name]: value })
  }

  return (
    <div className='overflow-hidden'>
      <h2 className='form-label mb-1 inline-block w-full text-sm font-medium md:text-base'>
        Price
      </h2>
      <div className='flex gap-3'>
        <Input
          name='min'
          type='number'
          label='Minimum'
          placeholder='0'
          value={selectedPropertyPrice.min}
          onChange={handleInputChange}
          size='small'
        />

        <Input
          name='max'
          type='number'
          label='Maximum'
          placeholder='Any'
          value={selectedPropertyPrice.max}
          onChange={handleInputChange}
          size='small'
        />
      </div>
    </div>
  )
}

export default PropertyPriceFilter
