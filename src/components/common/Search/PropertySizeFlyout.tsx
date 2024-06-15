import Input from '@/components/atomic/Input'
import { THandleInputChange } from '@/types/components/common'
import React from 'react'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  close: () => void
  selectedPropertySize: {
    min: string
    max: string
  }
  setSelectedPropertySize: (propertySize: { min: string; max: string }) => void // Update the parameter type here
}

const PropertySizeFlyout: React.FC<IProps> = ({
  close,
  selectedPropertySize,
  setSelectedPropertySize,
}) => {
  const handleInputChange: THandleInputChange = (name, value) => {
    setSelectedPropertySize({ ...selectedPropertySize, [name]: value })
  }

  const handleApply = () => {
    close() // Close the flyout after applying changes
  }

  const handleReset = () => {
    setSelectedPropertySize({ min: '', max: '' }) // Reset size range
  }

  return (
    <div className="w-screen max-w-xs p-4 bg-white min-h-[100px] overflow-hidden">
      <div className="flex gap-3">
        <Input
          name="min"
          type="number"
          label="Min Size"
          placeholder="0"
          value={selectedPropertySize.min}
          onChange={handleInputChange}
        />

        <Input
          name="max"
          type="number"
          label="Max Size"
          placeholder="Any"
          value={selectedPropertySize.max}
          onChange={handleInputChange}
        />
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default PropertySizeFlyout
