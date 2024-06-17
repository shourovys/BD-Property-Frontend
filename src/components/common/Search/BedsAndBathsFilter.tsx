import {
  setSelectedBaths,
  setSelectedBeds,
} from '@/features/propertySearchSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { badsAndBathsFilterOptions } from '@/types/propertyFilter'
import React from 'react'
import { useDispatch } from 'react-redux'

const BedsAndBathsFilter: React.FC = () => {
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

  return (
    <div className='space-y-4 overflow-hidden text-black'>
      <div className=''>
        <h2 className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'>
          Beds
        </h2>
        <div className='flex flex-wrap gap-x-2 gap-y-3 overflow-x-auto'>
          {badsAndBathsFilterOptions.beds.map((type) => (
            <p
              key={type.value}
              onClick={() => toggleBedSelection(type)}
              className={`cursor-pointer rounded-xl border px-3 py-0.5 text-center text-sm md:text-base ${
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
      <div className=''>
        <h2 className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'>
          Baths
        </h2>
        <div className='flex gap-x-2 gap-y-3 overflow-x-auto'>
          {badsAndBathsFilterOptions.baths.map((type) => (
            <p
              key={type.value}
              onClick={() => toggleBathSelection(type)}
              className={`cursor-pointer rounded-xl border px-3 py-0.5 text-center text-sm md:text-base ${
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
    </div>
  )
}

export default BedsAndBathsFilter
