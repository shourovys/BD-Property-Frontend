import Input from '@/components/atomic/Input'
import { THandleInputChange } from '@/types/components/common'
import classNames from 'classnames'
import React from 'react'
import ApplyAndResetButtons from './ApplyAndResetButtons'
import KeywordInput from './KeywordsInput'

interface IProps {
  close: () => void
  selectedPropertySize: {
    min: string
    max: string
  }
  setSelectedPropertySize: (propertySize: { min: string; max: string }) => void
  selectedKeywords: string[]
  setSelectedKeywords: (keywords: string[]) => void
  tourType: string
  setTourType: (tourType: string) => void
}

const MoreFiltersFlyout: React.FC<IProps> = ({
  close,
  selectedPropertySize,
  setSelectedPropertySize,
  selectedKeywords,
  setSelectedKeywords,
  tourType,
  setTourType,
}) => {
  const tourTypeOption: {
    name: string
    value: string
  }[] = [
    { name: 'Video tours', value: 'video' },
    { name: 'Virtual tours', value: 'virtual' },
  ]

  const handlePriceChange: THandleInputChange = (name, value) => {
    setSelectedPropertySize({ ...selectedPropertySize, [name]: value })
  }

  const handleApply = () => {
    close() // Close the flyout after applying changes
  }

  const handleReset = () => {
    setSelectedPropertySize({ min: '', max: '' }) // Reset size range
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4'>
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
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Keywords</h2>
        <KeywordInput
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={(keyword: string[]) => {
            setSelectedKeywords(keyword)
          }}
        />
      </div>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Tour Type</h2>
        <div className='flex flex-wrap gap-2'>
          {tourTypeOption.map((completion) => (
            <p
              key={completion.value}
              onClick={() => setTourType(completion.value)}
              className={classNames(
                completion.value === tourType ? 'bg-cornflowerblue' : '',
                'flex w-fit cursor-pointer items-center justify-center rounded-8xs border border-darkslateblue-100 px-3'
              )}
              aria-current={completion.value === tourType ? 'page' : undefined}
            >
              {completion.name}
            </p>
          ))}
        </div>
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default MoreFiltersFlyout
