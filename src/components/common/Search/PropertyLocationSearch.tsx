import { propertyUrls } from '@/api/urls/propertyUrls'
import { ISelectOption } from '@/types/components/common'
import { ISingleServerResponse } from '@/types/pages/common'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

interface IPropertyLocationSearchProps {
  selectedLocations: ISelectOption[]
  setSelectedLocations: (propertyLocation: ISelectOption[]) => void
}

const PropertyLocationSearch: React.FC<IPropertyLocationSearchProps> = ({
  selectedLocations,
  setSelectedLocations,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  // const [suggestions, setSuggestions] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const searchBoxRef = useRef<HTMLDivElement | null>(null)

  const { data } = useSWR<
    ISingleServerResponse<{ id: number; name: string }[]>
  >(propertyUrls.address)

  const filteredLocations = data?.results?.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedLocations.some(
        (selected) => selected.value === location.id.toString()
      )
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleLocationSelect = (location: ISelectOption) => {
    console.log(
      '🚀 ~ file: PropertyLocationSearchWithBottomSelected.tsx:54 ~ handleLocationSelect ~ location:',
      location
    )
    setSearchTerm('')
    setActiveIndex(0)
    // Check if the location is not already selected
    if (
      !selectedLocations.some((selected) => selected.value === location.value)
    ) {
      setSelectedLocations([...selectedLocations, location])
    }
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const handleBoxClick = () => {
    setIsFocused(true)
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const handleRemoveLocation = (location: string) => {
    const updatedSelectedLocations = selectedLocations.filter(
      (loc) => loc.value !== location
    )
    setSelectedLocations(updatedSelectedLocations)
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  useEffect(() => {
    // Function to handle clicks outside of the component
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        // Click occurred outside the component
        handleInputBlur()
      }
    }

    // Attach the event listener
    window.addEventListener('mousedown', handleClickOutside)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    // Automatically focus the input field when isFocused becomes true
    if (isFocused && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isFocused])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredLocations?.length) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setActiveIndex((prev) =>
            prev === null ? 0 : Math.min(prev + 1, filteredLocations.length - 1)
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setActiveIndex((prev) =>
            prev === null ? filteredLocations.length - 1 : Math.max(prev - 1, 0)
          )
          break
        case 'Enter':
          if (activeIndex !== null && filteredLocations[activeIndex]) {
            handleLocationSelect({
              label: filteredLocations[activeIndex].name,
              value: filteredLocations[activeIndex].id.toString(),
            })
          }
          break
        default:
          break
      }
    }
  }

  // Render selected locations with an overflow indicator
  const renderSelectedLocations = () => {
    // Get the width of the parent container
    const parentWidth = searchBoxRef.current
      ? searchBoxRef.current.clientWidth
      : 0

    // Arrays to track displayed and remaining locations
    const locationToDisplay: ISelectOption[] = []
    let remainingCount = 0

    // Determine how many locations can fit within the parent width
    for (let i = 0; i < selectedLocations.length; i++) {
      const testLocations = [
        ...locationToDisplay.map((location) => location.label),
        selectedLocations[i].label,
      ].join(',  ')

      if (testLocations.length * 8 < parentWidth - 40) {
        locationToDisplay.push(selectedLocations[i])
      } else {
        remainingCount = selectedLocations.length - locationToDisplay.length
        if (remainingCount && testLocations.length * 14 <= parentWidth + 500) {
          locationToDisplay.pop()
          remainingCount++
        }
        break
      }
    }

    const remainingKeywords =
      remainingCount > 0 ? `+${remainingCount} more` : ''

    if (!isFocused) {
      // Render compact view when not focused
      return (
        <div className='space-x-1 text-sm font-light md:text-base'>
          {locationToDisplay.map((location, index) => (
            <span
              key={index}
              className='rounded-6xs bg-lightgray-100 px-2 py-1'
            >
              {location.label}
            </span>
          ))}
          {remainingKeywords && (
            <span className='rounded-6xs bg-lightgray-100 px-2 py-1'>
              {remainingKeywords}
            </span>
          )}
        </div>
      )
    } else {
      // Render expanded view when focused
      return (
        <div className='flex flex-wrap gap-1.5 text-sm font-light md:text-base'>
          {selectedLocations.map((location, index) => (
            <span
              key={index}
              className='rounded-6xs bg-lightgray-100 px-2 py-0.5'
            >
              {location.label}
              <button
                className='remove-location ml-1 hover:text-red-500'
                onClick={() => handleRemoveLocation(location.value)}
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
      className='relative h-full cursor-pointer text-sm font-light md:text-base'
      ref={searchBoxRef}
      onClick={handleBoxClick}
    >
      <div
        className={classNames(
          'location-search custom_transition absolute left-0 right-0 top-0 rounded-6xs border border-gray-400 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-3',
          isFocused ? 'h-auto' : 'h-full'
        )}
      >
        {!!selectedLocations.length && renderSelectedLocations()}
        <input
          ref={searchInputRef}
          type='text'
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={classNames(
            selectedLocations.length && 'pt-2',
            'w-full bg-gray-100 focus:outline-none',
            isFocused ? 'block' : 'hidden'
          )}
        />
        {!isFocused && !selectedLocations.length && (
          <p className='text-gray-400'>Search Location...</p>
        )}
        <div
          className={classNames(
            'suggestions absolute left-0 right-0 z-10 mt-4 max-h-80 w-full overflow-y-scroll rounded-6xs border border-gray-300 bg-white shadow-all-side',
            searchTerm && filteredLocations?.length ? 'block' : 'hidden'
          )}
        >
          {filteredLocations?.map((location, index) => (
            <div
              key={location.id}
              className={classNames(
                'suggestion cursor-pointer p-2 hover:bg-lightgray-100',
                index === activeIndex && 'bg-lightgray-100'
              )}
              onClick={() =>
                handleLocationSelect({
                  label: location.name,
                  value: location.id.toString(),
                })
              }
            >
              {location.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyLocationSearch
