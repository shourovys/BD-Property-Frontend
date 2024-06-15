import { propertyUrls } from '@/api/urls/propertyUrls'
import { ISelectOption } from '@/types/components/common'
import { ISingleServerResponse } from '@/types/pages/common'
import { LocationIcon } from '@/utils/icon'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import useSWR from 'swr'

interface IPropertyLocationSearchProps {
  label?: string
  selectedLocations: ISelectOption[]
  setSelectedLocations: (propertyLocation: ISelectOption[]) => void
}

const PropertyLocationSearchWithBottomSelected: React.FC<
  IPropertyLocationSearchProps
> = ({ label = '', selectedLocations, setSelectedLocations }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  // const [suggestions, setSuggestions] = useState<string[]>([])
  // const [isFocused, setIsFocused] = useState<boolean>(false)
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

  // const handleSuggestionClick = (location: ISelectOption) => {
  //   if (
  //     !selectedLocations.some((selected) => selected.value === location.value)
  //   ) {
  //     setSelectedLocations([...selectedLocations, location])
  //   }
  //   setSearchTerm('')
  //   setActiveIndex(0)
  //   if (searchInputRef.current) {
  //     searchInputRef.current.focus()
  //   }
  // }
  const handleLocationSelect = (location: ISelectOption) => {
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

  // const handleBoxClick = () => {
  //   setIsFocused(true)
  //   if (searchInputRef.current) {
  //     searchInputRef.current.focus()
  //   }
  // }

  const handleRemoveLocation = (location: string) => {
    const updatedSelectedLocations = selectedLocations.filter(
      (loc) => loc.value !== location
    )
    setSelectedLocations(updatedSelectedLocations)
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // const handleInputBlur = () => {
  //   setIsFocused(false)
  //   setActiveIndex(0)
  // }

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

  // useEffect(() => {
  //   // Function to handle clicks outside of the component
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       searchBoxRef.current &&
  //       !searchBoxRef.current.contains(event.target as Node)
  //     ) {
  //       // Click occurred outside the component
  //       handleInputBlur()
  //     }
  //   }

  //   // Attach the event listener
  //   window.addEventListener('mousedown', handleClickOutside)

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [])

  // useEffect(() => {
  //   // Automatically focus the input field when isFocused becomes true
  //   if (isFocused && searchInputRef.current) {
  //     searchInputRef.current.focus()
  //   }
  // }, [isFocused])

  // Render selected locations with an overflow indicator
  const renderSelectedLocations = () => {
    return (
      <div className='mt-3 flex flex-wrap gap-1 text-sm font-light md:text-base'>
        {selectedLocations.map((location, index) => (
          <span
            key={index}
            className='flex items-center justify-center gap-2 rounded-full bg-[#F5F5F5] px-3 py-1 text-sm'
          >
            {location.label}
            <button
              className='remove-location flex aspect-square h-4 max-h-min items-center justify-center rounded-full bg-black pb-0.5 font-medium text-white hover:text-red-500'
              onClick={() => handleRemoveLocation(location.value)}
            >
              &#215;
            </button>
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className='h-full cursor-pointer text-sm font-light md:text-base'>
      {/* text input with location icon  */}
      {label && (
        <label
          className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'
          htmlFor='location'
        >
          {label}
        </label>
      )}
      <div
        // onClick={handleBoxClick}
        className='custom_transition flex w-full items-center gap-0 rounded-6xs border border-gray-400 bg-gray-100'
      >
        <LocationIcon className='ml-1.5 flex-grow text-2xl text-gray-200' />
        <input
          ref={searchInputRef}
          id='location'
          type='text'
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          // onFocus={() => setIsFocused(true)}
          // onBlur={handleInputBlur}
          className='form-control focus:border-primary m-0 block w-full overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding py-1.5 pl-1.5 pr-3 text-sm text-black transition ease-in-out focus:bg-white focus:text-gray-700 focus:outline-none disabled:bg-[#F0F1F3] disabled:text-gray-600 md:text-base'
        />
      </div>
      {searchTerm && !!filteredLocations?.length && (
        <div className='custom_screen_width'>
          <div
            ref={searchBoxRef}
            className={classNames(
              'suggestions absolute left-0 right-0 z-10 mt-4 max-h-80 w-full overflow-y-scroll rounded-6xs border border-gray-300 bg-white shadow-all-side'
              // isFocused && filteredLocations?.length ? 'block' : 'hidden'
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
      )}
      {!!selectedLocations.length && renderSelectedLocations()}
    </div>
  )
}

export default PropertyLocationSearchWithBottomSelected
