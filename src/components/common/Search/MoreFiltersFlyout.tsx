import Input from '@/components/atomic/Input'
import { useAppSelector } from '@/hooks/reduxHooks'
import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import ApplyAndResetButtons from './ApplyAndResetButtons'
import KeywordInput from './KeywordsInput'

import {
  resetAll,
  setSelectedPropertyPrice,
  setSelectedTourType,
} from '@/features/propertySearchSlice'
import { THandleInputChange } from '@/types/components/common'
import { propertyTypeData } from '@/utils/data/property'

const MoreFiltersFlyout: React.FC<{ close: () => void }> = ({ close }) => {
  const dispatch = useDispatch()
  const {
    selectedPropertyType,
    selectedPropertyPrice,
    selectedPropertySize,
    tourType,
  } = useAppSelector((state) => state.propertySearch)

  const tourTypeOption: { name: string; value: string }[] = [
    { name: 'Video tours', value: 'video' },
    { name: 'Virtual tours', value: 'virtual' },
  ]

  const handlePriceChange: THandleInputChange = (name, value) => {
    setSelectedPropertyPrice({ ...selectedPropertyPrice, [name]: value })
  }

  const handleApply = () => {
    close() // Close the flyout after applying changes
  }

  const handleReset = () => {
    dispatch(resetAll())
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4'>
      {selectedPropertyType.type.label === propertyTypeData[0].id && (
        <div className='space-y-2'>
          <h2 className='text-base font-normal'>Property Size</h2>
          <div className='flex gap-3'>
            <Input
              name='min'
              type='number'
              label='Min Size'
              placeholder='0'
              value={selectedPropertySize.min}
              onChange={handlePriceChange}
            />
            <Input
              name='max'
              type='number'
              label='Max Size'
              placeholder='Any'
              value={selectedPropertySize.max}
              onChange={handlePriceChange}
            />
          </div>
        </div>
      )}
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Keywords</h2>
        <KeywordInput />
      </div>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Tour Type</h2>
        <div className='flex flex-wrap gap-2'>
          {tourTypeOption.map((option) => (
            <p
              key={option.value}
              onClick={() => dispatch(setSelectedTourType(option.value))}
              className={classNames(
                option.value === tourType ? 'bg-cornflowerblue' : '',
                'flex w-fit cursor-pointer items-center justify-center rounded-8xs border border-darkslateblue-100 px-3'
              )}
              aria-current={option.value === tourType ? 'page' : undefined}
            >
              {option.name}
            </p>
          ))}
        </div>
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default MoreFiltersFlyout
