import { ISelectOption } from '@/types/components/common'
import { badsAndBathsFilterOptions } from '@/types/propertyFilter'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import React from 'react'

interface IProps {
  selectedBedsBaths: IPropertySearchState['selectedBedsBaths']

  setSelectedBedsBaths: (
    bedsBaths: IPropertySearchState['selectedBedsBaths']
  ) => void
}

const BedsAndBathsFilter: React.FC<IProps> = ({
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
