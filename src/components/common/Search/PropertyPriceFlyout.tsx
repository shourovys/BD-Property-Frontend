import Input from '@/components/atomic/Input'
import {
  resetSelectedPropertyPrice,
  setSelectedPropertyPrice,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  close: () => void
}

const PropertyPriceFlyout: React.FC<IProps> = ({ close }) => {
  const dispatch = useAppDispatch()
  const selectedPropertyPrice = useAppSelector(
    (state) => state.propertySearch.selectedPropertyPrice
  )

  const handleInputChange: THandleInputChange = (name, value) => {
    dispatch(
      setSelectedPropertyPrice({ ...selectedPropertyPrice, [name]: value })
    )
  }

  const handleApply = () => {
    close() // Close the flyout after applying changes
  }

  const handleReset = () => {
    dispatch(resetSelectedPropertyPrice()) // Reset price range
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs overflow-hidden bg-white p-4'>
      {/* <h2 className='text-base font-normal'>Property Price</h2> */}
      <div className='flex gap-3'>
        <Input
          name='min'
          type='number'
          label='Minimum'
          placeholder='0'
          value={selectedPropertyPrice.min}
          onChange={handleInputChange}
        />

        <Input
          name='max'
          type='number'
          label='Maximum'
          placeholder='Any'
          value={selectedPropertyPrice.max}
          onChange={handleInputChange}
        />
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default PropertyPriceFlyout
