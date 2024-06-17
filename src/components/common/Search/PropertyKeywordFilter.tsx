import {
  removeSelectedKeywords,
  setSelectedKeywords,
} from '@/features/propertySearchSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const PropertyKeywordFilter: React.FC = () => {
  const dispatch = useDispatch()
  const selectedKeywords = useAppSelector(
    (state) => state.propertySearch.selectedKeywords
  )
  const [inputKeyword, setInputKeyword] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(e.target.value)
  }

  const handleRemoveKeyword = (keyword: string) => {
    dispatch(removeSelectedKeywords(keyword))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputKeyword.trim() !== '') {
      dispatch(setSelectedKeywords(inputKeyword))
      setInputKeyword('')
    }
  }

  const renderSelectedKeywords = () => (
    <div className='mt-3 flex flex-wrap gap-1 text-sm font-light md:text-base'>
      {selectedKeywords.map((keyword, index) => (
        <span
          key={index}
          className='flex items-center justify-center gap-2 rounded-full bg-[#F5F5F5] px-3 py-1 text-sm'
        >
          {keyword}
          <button
            className='remove-keyword flex aspect-square h-4 max-h-min items-center justify-center rounded-full bg-black pb-0.5 font-medium text-white hover:text-red-500'
            onClick={() => handleRemoveKeyword(keyword)}
          >
            &#215;
          </button>
        </span>
      ))}
    </div>
  )

  return (
    <div className='overflow-hidden'>
      <label
        htmlFor='keywords'
        className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'
      >
        Keywords
      </label>
      <div className='relative h-full cursor-pointer'>
        <input
          id='keywords'
          type='text'
          value={inputKeyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder='Add relevant keywords'
          className='custom_transition flex w-full items-center gap-0 rounded-6xs border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm placeholder:font-light focus:bg-white focus:text-gray-700 focus:outline-none disabled:bg-[#F0F1F3] disabled:text-gray-600 md:text-base'
        />
        {!!selectedKeywords.length && renderSelectedKeywords()}
      </div>
    </div>
  )
}

export default PropertyKeywordFilter
