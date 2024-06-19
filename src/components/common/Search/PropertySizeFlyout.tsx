import Input from '@/components/atomic/Input'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'

import {
  resetSelectedPropertySize,
  setSelectedPropertySize,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  close: () => void
}

const PropertySizeFlyout: React.FC<IProps> = ({ close }) => {
  const dispatch = useAppDispatch()
  const selectedPropertySize = useAppSelector(
    (state) => state.propertySearch.selectedPropertySize
  )

  const handleInputChange: THandleInputChange = (name, value) => {
    dispatch(
      setSelectedPropertySize({ ...selectedPropertySize, [name]: value })
    )
  }

  const handleApply = () => {
    close() // Close the flyout after applying changes
  }

  const handleReset = () => {
    dispatch(resetSelectedPropertySize()) // Reset size range
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs overflow-hidden bg-white p-4'>
      <div className='flex gap-3'>
        <Input
          name='min'
          type='number'
          label='Minimum sqft'
          placeholder='0'
          value={selectedPropertySize.min}
          onChange={handleInputChange}
        />

        <Input
          name='max'
          type='number'
          label='Maximum sqft'
          placeholder='Any'
          value={selectedPropertySize.max}
          onChange={handleInputChange}
        />
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default PropertySizeFlyout
