import Input from '@/components/atomic/Input'
import { ILocationData } from '@/components/common/Search/PropertyLocationSearch'
import {
  removePropertyLocation,
  setSelectedPropertyLocation,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

const LocationSelector: React.FC = () => {
  const selectedPropertyLocation = useAppSelector(
    (state) => state.propertySearch.selectedPropertyLocation
  )
  const dispatch = useAppDispatch()

  const [data, setData] = useState<ILocationData[]>([])

  const [inputValue, setInputValue] = useState('')
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  // const { data } = useSWR<
  //   ISingleServerResponse<{ id: string; name: string }[]>
  // >(propertyUrls.address)

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const res = await fetch('/data/location.json')
        const parsedData = (await res.json()) as ILocationData[]
        setData(parsedData)
      } catch (error) {
        console.log('Failed to fetch data:', error)
      }
    }

    fetchDataAsync()
  }, [])

  const filteredLocations = data?.filter(
    (location) =>
      location.name.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedPropertyLocation.some(
        (selected) => selected.value === location.id
      )
  )

  const handleLocationSelect = (location: ISelectOption) => {
    setInputValue('')
    setActiveIndex(0)
    // Check if the location is not already selected
    if (
      !selectedPropertyLocation.some(
        (selected) => selected.value === location.value
      )
    ) {
      dispatch(setSelectedPropertyLocation(location))
    }
  }

  const handleLocationRemove = (locationToRemove: ISelectOption) => {
    dispatch(removePropertyLocation(locationToRemove.value))
  }

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
              value: filteredLocations[activeIndex].id,
            })
          }
          break
        default:
          break
      }
    }
  }

  return (
    <div className='relative w-full flex-1 text-start md:pr-2'>
      <p className='text-gray-600'>Location</p>
      <div
        className={classNames(
          'flex flex-wrap gap-1.5',
          selectedPropertyLocation.length && 'mt-1'
        )}
      >
        {selectedPropertyLocation.map((location) => (
          <div
            key={location.value}
            className='flex items-center gap-1 rounded-6xs bg-lightgray-200 px-2 py-1 text-gray-600'
          >
            {location.label}
            <button
              className='ml-2 text-xs font-medium'
              onClick={() => handleLocationRemove(location)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <div className='relative'>
        <div className='mr-6 flex items-center justify-between'>
          <Input
            type='text'
            name='propertyLocation'
            value={inputValue}
            onChange={(name, value) => {
              if (!Array.isArray(value) && typeof value === 'string') {
                setInputValue(value)
              }
            }}
            placeholder='Search location...'
            inputClass='border-0 pl-0'
            onKeyDown={handleKeyDown}
          />
        </div>
        {inputValue && !!filteredLocations?.length && (
          <div className='absolute z-10 mt-2 max-h-72 w-full overflow-hidden overflow-y-auto rounded-md border border-lightgray-100 bg-white shadow-md'>
            {filteredLocations?.map((location, index) => (
              <div
                key={location.id}
                className={classNames(
                  'cursor-pointer p-2 hover:bg-lightgray-100',
                  index === activeIndex && 'bg-lightgray-100'
                )}
                onClick={() =>
                  handleLocationSelect({
                    label: location.name,
                    value: location.id,
                  })
                }
              >
                {location.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LocationSelector
