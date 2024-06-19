import Input from '@/components/atomic/Input'
import { setSelectedPropertySize } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'

const PropertySizeFilters: React.FC = () => {
  const dispatch = useAppDispatch()
  const selectedPropertySize = useAppSelector(
    (state) => state.propertySearch.selectedPropertySize
  )

  const handleInputChange: THandleInputChange = (name, value) => {
    dispatch(
      setSelectedPropertySize({ ...selectedPropertySize, [name]: value })
    )
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
          onChange={handleInputChange}
          size='small'
        />

        <Input
          name='max'
          type='number'
          label='Maximum'
          placeholder='Any'
          value={selectedPropertySize.max}
          onChange={handleInputChange}
          size='small'
        />
      </div>
    </div>
  )
}

export default PropertySizeFilters
