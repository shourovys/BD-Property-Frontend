import { ISelectOption } from '@/types/components/common'
import { badsAndBathsFilterOptions } from '@/types/propertyFilter'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import React from 'react'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  close: () => void
  selectedBedsBaths: IPropertySearchState['selectedBedsBaths']

  setSelectedBedsBaths: (
    bedsBaths: IPropertySearchState['selectedBedsBaths']
  ) => void
}

const BedsAndBathsFlyout: React.FC<IProps> = ({
  close,
  selectedBedsBaths,
  setSelectedBedsBaths,
}) => {
  const toggleBedSelection = (bedValue: ISelectOption) => {
    if (selectedBedsBaths.beds.find((bed) => bed.value === bedValue.value)) {
      setSelectedBedsBaths({
        ...selectedBedsBaths,
        beds: selectedBedsBaths.beds.filter(
          (bed) => bed.value !== bedValue.value
        ),
      })
    } else {
      setSelectedBedsBaths({
        ...selectedBedsBaths,
        beds: [...selectedBedsBaths.beds, bedValue],
      })
    }
  }

  const toggleBathSelection = (bathValue: ISelectOption) => {
    if (
      selectedBedsBaths.baths.find((bath) => bath.value === bathValue.value)
    ) {
      setSelectedBedsBaths({
        ...selectedBedsBaths,
        baths: selectedBedsBaths.baths.filter(
          (bath) => bath.value !== bathValue.value
        ),
      })
    } else {
      setSelectedBedsBaths({
        ...selectedBedsBaths,
        baths: [...selectedBedsBaths.baths, bathValue],
      })
    }
  }

  const handleReset = () => {
    setSelectedBedsBaths({ beds: [], baths: [] })
  }

  const handleApply = () => {
    close() // Close the flyout after applying selections
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4 text-black'>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Beds</h2>
        <div className='flex flex-wrap gap-x-2 gap-y-3'>
          {badsAndBathsFilterOptions.beds.map((type) => (
            <p
              key={type.value}
              onClick={() => toggleBedSelection(type)}
              className={`cursor-pointer rounded-xl border px-5 py-1 text-center ${
                selectedBedsBaths.beds.find((bed) => bed.value === type.value)
                  ? 'border-darkslateblue-100 bg-darkslateblue-300 font-normal text-darkslateblue-100'
                  : 'border-gray-200 font-light'
              }`}
            >
              {type.label}
            </p>
          ))}
        </div>
      </div>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Baths</h2>
        <div className='flex flex-wrap gap-x-2 gap-y-3'>
          {badsAndBathsFilterOptions.baths.map((type) => (
            <p
              key={type.value}
              onClick={() => toggleBathSelection(type)}
              className={`cursor-pointer rounded-xl border px-5 py-1 text-center ${
                selectedBedsBaths.baths.find(
                  (bath) => bath.value === type.value
                )
                  ? 'border-darkslateblue-100 bg-darkslateblue-300 font-normal text-darkslateblue-100'
                  : 'border-gray-200 font-light'
              }`}
            >
              {type.label}
            </p>
          ))}
        </div>
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default BedsAndBathsFlyout
