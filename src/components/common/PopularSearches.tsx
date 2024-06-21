'use client'
import {
  IPropertySearchState,
  setFullState,
} from '@/features/propertySearchSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { emptySelectOption } from '@/types/components/common'
import createArray from '@/utils/createArray'
import { propertySortOptions } from '@/utils/data/property'
import { useEffect, useState } from 'react'

const PopularSearches = () => {
  const dispatch = useAppDispatch()

  const [popularQueries, setPopularQueries] = useState<
    { query: string; state: IPropertySearchState }[]
  >([])
  const [loading, setLoading] = useState(true)

  const popularBeds = ['2', '3']
  const popularType = { label: 'Residential', value: 'residential' }
  const popularSubType = [
    { label: 'Apartment', value: 'apartment' },
    { label: 'Duplex', value: 'duplex' },
  ]
  const popularPurpose = [
    { label: 'Rent', value: 'rent' },
    { label: 'Buy', value: 'buy' },
  ]
  const popularLocation = ['Dhaka']

  useEffect(() => {
    const generatePopularQueries = async () => {
      const queries = []

      for (const purpose of popularPurpose) {
        for (const subType of popularSubType) {
          for (const location of popularLocation) {
            for (const bed of popularBeds) {
              const query = `${bed} Bedroom ${subType.label} for ${
                purpose.label === 'Buy' ? 'Sale' : purpose.label
              } in ${location}`
              queries.push({
                query,
                state: {
                  page: 1,
                  selectedPurpose: {
                    purpose: purpose,
                    completion: emptySelectOption,
                  },
                  selectedPropertyType: {
                    type: popularType,
                    subType: subType,
                  },
                  selectedBedsBaths: {
                    beds: [{ label: bed, value: bed }],
                    baths: [],
                  },
                  selectedPropertySize: { min: '', max: '' },
                  selectedPropertyPrice: { min: '', max: '' },
                  selectedPropertyLocation: [
                    { label: location, value: location },
                  ],
                  selectedKeywords: [],
                  tourType: '',
                  sortBy: propertySortOptions[0].value,
                },
              })
            }
          }
        }
      }

      return queries
    }

    const fetchPopularQueries = async () => {
      setLoading(true)
      const queries = await generatePopularQueries()
      setPopularQueries(queries)
      setLoading(false)
    }

    fetchPopularQueries()
  }, [])

  return (
    <div className='space-y-3 sm:space-y-4'>
      <div className='rounded-6xs bg-lightgray-200 px-4 py-2 font-medium md:px-5'>
        Popular Searches
      </div>
      <div className='space-y-3 px-4 font-light sm:px-0 '>
        {loading &&
          createArray(6).map((item) => (
            <p
              key={item}
              className='h-6 w-full max-w-sm animate-pulse rounded-md bg-lightgray-200'
            ></p>
          ))}
        {!loading &&
          popularQueries.map((item) => (
            <p
              key={item.query}
              className='block max-w-sm cursor-pointer truncate break-words hover:text-[#D76147] hover:underline'
              onClick={() => dispatch(setFullState(item.state))}
              title={item.query}
            >
              {item.query}
            </p>
          ))}
      </div>
    </div>
  )
}

export default PopularSearches
