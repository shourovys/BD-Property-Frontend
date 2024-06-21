'use client'
import { setSelectedSingleBed } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import createArray from '@/utils/createArray'
import { useEffect, useMemo, useState } from 'react'

const RecommendedSearches = () => {
  const {
    selectedPurpose,
    selectedPropertyType,
    selectedBedsBaths,
    selectedPropertyLocation,
  } = useAppSelector((state) => state.propertySearch)

  const dispatch = useAppDispatch()

  const [recommendedQueries, setRecommendedQueries] = useState<
    { query: string; bed: string }[]
  >([])
  const [loading, setLoading] = useState(true)

  const purpose = selectedPurpose.purpose.label === 'Buy' ? 'Sale' : 'Rent'
  const type = selectedPropertyType.type.label
  const subType = selectedPropertyType.subType.label || ''
  const location = selectedPropertyLocation.length
    ? selectedPropertyLocation[0].label
    : 'Bangladesh'
  const propertyType = subType ? `${subType}s` : `${type} Properties`

  const generateSimilarQueries = useMemo(() => {
    const currentBeds =
      selectedBedsBaths.beds.length === 1 &&
      Number(selectedBedsBaths.beds[0]?.label)

    return [1, 2, 3, 4]
      .filter((bed) => bed !== currentBeds)
      .map((bed) => ({
        query: `${bed} Bedroom ${propertyType} for ${purpose} in ${location}`,
        bed: bed.toString(),
      }))
  }, [selectedBedsBaths.beds, location, propertyType, purpose])

  useEffect(() => {
    const fetchRecommendedQueries = async () => {
      setLoading(true)
      const queries = generateSimilarQueries
      setRecommendedQueries(queries)
      setLoading(false)
    }

    fetchRecommendedQueries()
  }, [generateSimilarQueries])

  return (
    <div className='space-y-3 sm:space-y-4'>
      <div className='rounded-6xs bg-lightgray-200 px-4 py-2 font-medium md:px-5'>
        Recommended Searches
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
          recommendedQueries.map((item) => (
            <p
              key={item.bed}
              className='block max-w-sm cursor-pointer truncate break-words hover:text-[#D76147] hover:underline'
              onClick={() =>
                dispatch(
                  setSelectedSingleBed({ label: item.bed, value: item.bed })
                )
              }
              title={item.query}
            >
              {item.query}
            </p>
          ))}
      </div>
    </div>
  )
}

export default RecommendedSearches
