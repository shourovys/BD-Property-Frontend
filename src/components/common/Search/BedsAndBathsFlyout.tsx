import {
  resetSelectedBedsBaths,
  setSelectedBaths,
  setSelectedBeds,
} from '@/features/propertySearchSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { badsAndBathsFilterOptions } from '@/utils/data/property'
import React from 'react'
import { useDispatch } from 'react-redux'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  close: () => void
}

const BedsAndBathsFlyout: React.FC<IProps> = ({ close }) => {
  const dispatch = useDispatch()
  const selectedBedsBaths = useAppSelector(
    (state) => state.propertySearch.selectedBedsBaths
  )

  const toggleBedSelection = (bedValue: ISelectOption) => {
    dispatch(setSelectedBeds(bedValue))
  }

  const toggleBathSelection = (bathValue: ISelectOption) => {
    dispatch(setSelectedBaths(bathValue))
  }

  const handleReset = () => {
    dispatch(resetSelectedBedsBaths())
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
