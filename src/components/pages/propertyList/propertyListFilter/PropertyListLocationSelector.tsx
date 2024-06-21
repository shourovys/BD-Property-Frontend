import { setSingleSelectedPropertyLocation } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { mainCities } from '@/utils/data/location'
import { DownArrowIcon } from '@/utils/icon'
import classNames from 'classnames'
import type { NextPage } from 'next'
import { useState } from 'react'


const PropertyListLocationSelector: NextPage = () => {
  const dispatch = useAppDispatch()
  const selectedLocation = useAppSelector(
    (state) => state.propertySearch.selectedPropertyLocation
  )

  const [viewAll, setViewAll] = useState<boolean>(false)

  // Filter out the selected city
  const selectedLocationValues = selectedLocation.map(
    (location) => location.value
  )
  const citiesToShow = mainCities.filter(
    (city) => !selectedLocationValues.includes(city.value)
  )

  const citiesToDisplay = viewAll ? citiesToShow : citiesToShow.slice(0, 5)

  return (
    <div className='flex grid-cols-6 justify-center gap-2 overflow-x-auto font-ubuntu text-sm text-darkslateblue-100 md:grid md:flex-wrap md:rounded-6xs md:border md:border-lightgray-100 md:bg-gray-300 md:px-4 md:py-4 md:text-base'>
      {citiesToDisplay.map((city) => (
        <p
          key={city.value}
          onClick={() =>
            dispatch(
              setSingleSelectedPropertyLocation({
                label: city.label,
                value: city.value,
              })
            )
          }
          className='flex min-w-fit cursor-pointer items-center justify-center rounded border border-gainsboro px-3 py-0.5 md:border-0 md:px-2 md:py-1'
        >
          {city.label}
        </p>
      ))}
      {citiesToShow.length > 5 && (
        <button
          className='flex items-center justify-center gap-1 text-end text-black md:text-base'
          onClick={() => setViewAll((prev) => !prev)}
        >
          <span className='font-light'>
            {viewAll ? 'View Less' : 'View All'}
          </span>
          <DownArrowIcon
            className={classNames('transition-transform', {
              'rotate-180': viewAll,
            })}
          />
        </button>
      )}
    </div>
  )
}

export default PropertyListLocationSelector
