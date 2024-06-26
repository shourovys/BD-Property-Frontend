'use client'

import { propertyUrls } from '@/api/urls/propertyUrls'
import PropertyListPageComponent from '@/components/pages/propertyList/PropertyListPage'
import { setFullState } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { IListServerResponse } from '@/types/pages/common'
import { IListPropertyResponse } from '@/types/pages/property'
import type { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation'
import QueryString from 'qs'
import { useEffect } from 'react'
import useSWR from 'swr'

const PropertyListPage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { propertySearch } = useAppSelector((state) => state)

  const itemPerPage = 20

  // update from search params or by server data
  const searchParams = useSearchParams()
  const queryState = searchParams.get('state')

  useEffect(() => {
    if (queryState) {
      try {
        // Parse the 'state' parameter using qs
        const parsedState = JSON.parse(decodeURIComponent(queryState))
        // Dispatch an action to update the state in our reducer
        dispatch(setFullState(parsedState))
      } catch (error) {
        // Handle potential errors during parsing
        console.log('Error parsing state from query:', error)
      }
    }
    // else {
    //   dispatch(resetSelectedPurpose())
    //   dispatch(resetSelectedPropertyType())
    // }
  }, [])

  // update browser query on propertySearch change
  useEffect(() => {
    // Stringify the propertySearch object as a JSON string
    const propertySearchString = JSON.stringify(propertySearch)
    router.replace(
      `/property?state=${encodeURIComponent(propertySearchString)}`
    )
  }, [propertySearch])

  const apiQueryManual = {
    page: propertySearch.page,
    limit: itemPerPage,
    purpose: propertySearch.selectedPurpose.purpose.value,
    ...(!['all', 'any'].includes(
      propertySearch.selectedPurpose.completion.value
    ) && {
      status: propertySearch.selectedPurpose.completion.value,
    }),
    location: propertySearch.selectedPropertyLocation.map(
      (location) => location.label
    ),
    type: propertySearch.selectedPropertyType.type.value,
    subType: propertySearch.selectedPropertyType.subType.value,
    bed: propertySearch.selectedBedsBaths.beds.map((bed) => bed.value),
    bath: propertySearch.selectedBedsBaths.baths.map((bath) => bath.value),
    priceMin: propertySearch.selectedPropertyPrice.min,
    priceMax: propertySearch.selectedPropertyPrice.max,
    areaMin: propertySearch.selectedPropertySize.min,
    areaMax: propertySearch.selectedPropertySize.max,
    keyword: propertySearch.selectedKeywords,
    tour: propertySearch.tourType,
    sort: propertySearch.sortBy,
  }

  const { isLoading, data } = useSWR<
    IListServerResponse<IListPropertyResponse[]>
  >(`${propertyUrls.property}?${QueryString.stringify(apiQueryManual)}`)

  return (
    <div className=''>
      <PropertyListPageComponent
        isLoading={isLoading}
        data={data}
        itemPerPage={itemPerPage}
      />
    </div>
  )
}

export default PropertyListPage
