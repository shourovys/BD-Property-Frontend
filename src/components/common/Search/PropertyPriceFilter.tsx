import Input from '@/components/atomic/Input'
import { setSelectedPropertyPrice } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'

const PropertyPriceFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const selectedPropertyPrice = useAppSelector(
    (state) => state.propertySearch.selectedPropertyPrice
  )

  const handleInputChange: THandleInputChange = (name, value) => {
    dispatch(
      setSelectedPropertyPrice({ ...selectedPropertyPrice, [name]: value })
    )
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
