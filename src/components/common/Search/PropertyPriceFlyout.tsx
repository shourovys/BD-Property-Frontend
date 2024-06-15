import Input from '@/components/atomic/Input'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  close: () => void
  selectedPropertyPrice: {
    min: string
    max: string
  }
  setSelectedPropertyPrice: (propertyPrice: {
    min: string
    max: string
  }) => void
}

const PropertyPriceFlyout: React.FC<IProps> = ({
  close,
  selectedPropertyPrice,
  setSelectedPropertyPrice,
}) => {
  const handleInputChange: THandleInputChange = (name, value) => {
    setSelectedPropertyPrice({ ...selectedPropertyPrice, [name]: value })
  }

  const handleApply = () => {
    close() // Close the flyout after applying changes
  }

  const handleReset = () => {
    setSelectedPropertyPrice({ min: '', max: '' }) // Reset price range
  }

  return (
    <div className="w-screen max-w-xs p-4 bg-white min-h-[100px] space-y-4 overflow-hidden">
      <h2 className="text-base font-normal">Property Price</h2>
      <div className="flex gap-3">
        <Input
          name="min"
          type="number"
          label="Min Size"
          placeholder="0"
          value={selectedPropertyPrice.min}
          onChange={handleInputChange}
        />

        <Input
          name="max"
          type="number"
          label="Max Size"
          placeholder="Any"
          value={selectedPropertyPrice.max}
          onChange={handleInputChange}
        />
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default PropertyPriceFlyout
