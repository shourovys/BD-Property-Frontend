import {
  removeSelectedKeywords,
  setSelectedKeywords,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

const KeywordsInput: React.FC = () => {
  const dispatch = useAppDispatch()
  const { selectedKeywords } = useAppSelector((state) => state.propertySearch)

  // State to track input focus and input value
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [inputKeyword, setInputKeyword] = useState<string>('')

  // Refs to access DOM elements
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const searchBoxRef = useRef<HTMLDivElement | null>(null)

  // Handle input value change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(e.target.value)
  }

  // Handle box (container) click to focus input
  const handleBoxClick = () => {
    setIsFocused(true)
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Handle removal of a keyword
  const handleRemoveKeyword = (keyword: string) => {
    dispatch(removeSelectedKeywords(keyword))
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Handle input blur (when it loses focus)
  const handleInputBlur = () => {
    setIsFocused(false)
  }

  // Handle Enter key press to add a keyword
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputKeyword.trim() !== '') {
      const trimmedKeyword = inputKeyword.trim()
      if (!selectedKeywords.includes(trimmedKeyword)) {
        dispatch(setSelectedKeywords(trimmedKeyword))
      }
      setInputKeyword('')
    }
  }

  // Add a click outside event listener when the component mounts
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        // Click occurred outside the component, handle blur
        handleInputBlur()
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Automatically focus the input field when isFocused becomes true
  useEffect(() => {
    if (isFocused && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isFocused])

  // Render selected keywords with an overflow indicator
  const renderSelectedKeywords = () => {
    // Get the width of the parent container
    const parentWidth = searchBoxRef.current
      ? searchBoxRef.current.clientWidth
      : 0

    // Arrays to track displayed and remaining keywords
    const keywordsToDisplay: string[] = []
    let remainingCount = 0

    // Determine how many keywords can fit within the parent width
    for (let i = 0; i < selectedKeywords.length; i++) {
      const testKeywords = [...keywordsToDisplay, selectedKeywords[i]].join(
        ',  '
      )

      if (testKeywords.length * 14 <= parentWidth - 40) {
        keywordsToDisplay.push(selectedKeywords[i])
      } else {
        remainingCount = selectedKeywords.length - keywordsToDisplay.length
        break
      }
    }

    const remainingKeywords =
      remainingCount > 0 ? ` +${remainingCount} more` : ''

    if (!isFocused) {
      // Render compact view when not focused
      return (
        <div className='flex gap-1.5'>
          <div className='flex flex-wrap gap-1.5'>
            {keywordsToDisplay.map((keyword, index) => (
              <span
                key={index}
                className='rounded-6xs bg-lightgray-100 px-2 py-0.5'
              >
                {keyword}
                <button
                  className='ml-1 hover:text-red-500'
                  onClick={() => handleRemoveKeyword(keyword)}
                >
                  &#215;
                </button>
              </span>
            ))}
          </div>
          {remainingKeywords && (
            <span className='rounded-6xs bg-lightgray-100 px-2 py-0.5'>
              {remainingKeywords}
            </span>
          )}
        </div>
      )
    } else {
      // Render expanded view when focused
      return (
        <div className='flex flex-wrap gap-1.5'>
          {selectedKeywords.map((keyword, index) => (
            <span
              key={index}
              className='rounded-6xs bg-lightgray-100 px-2 py-0.5'
            >
              {keyword}
              <button
                className='remove-location ml-1 hover:text-red-500'
                onClick={() => handleRemoveKeyword(keyword)}
              >
                &#215;
              </button>
            </span>
          ))}
        </div>
      )
    }
  }

  return (
    <div
      className='relative h-full cursor-pointer'
      ref={searchBoxRef}
      onClick={handleBoxClick}
    >
      <div
        className={classNames(
          'custom_transition border-gray-border rounded-6xs border bg-gray-100 px-3 py-2 '
        )}
      >
        {!!selectedKeywords.length && renderSelectedKeywords()}
        <input
          ref={searchInputRef}
          type='text'
          value={inputKeyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={classNames(
            selectedKeywords.length && 'pt-2',
            'w-full bg-gray-100 focus:outline-none',
            isFocused ? 'block' : 'hidden'
          )}
        />
        {!isFocused && !selectedKeywords.length && (
          <p className='text-gray-400'>Add relevant keywords</p>
        )}
      </div>
    </div>
  )
}

export default KeywordsInput
