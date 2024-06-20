'use client'
import { propertyUrls } from '@/api/urls/propertyUrls'
import LinkCard from '@/components/common/LinkCard'
import Pagination from '@/components/common/Pagination'
import PropertyList from '@/components/pages/propertyList/PropertyList'
import PropertyListLocationInfo from '@/components/pages/propertyList/PropertyListLocationInfo'
import PropertyListFilter from '@/components/pages/propertyList/propertyListFilter/PropertyListFilter'
import PropertyListFilters from '@/components/pages/propertyList/propertyListFilter/PropertyListFilters'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import useLocalStorage from '@/hooks/useLocalStorage'
import { IListServerResponse } from '@/types/pages/common'
import { IListPropertyResponse } from '@/types/pages/property'

import { setPage } from '@/features/propertySearchSlice'
import { useRouter } from 'next/navigation'
import QueryString from 'qs'
import { useEffect } from 'react'
import useSWR from 'swr'
import PropertyActiveFilters from './propertyListFilter/PropertyActiveFilters'
import PropertyListHeader from './propertyListFilter/PropertyListHeader'
import PropertyListLocationSelector from './propertyListFilter/PropertyListLocationSelector'

export default function PropertyListPageComponent() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { propertySearch } = useAppSelector((state) => state)

  const itemPerPage = 20

  const [isCardVertical, setIsCardVertical] = useLocalStorage<boolean>(
    'IsPropertyListCardVertical',
    false
  )

  // update browser query on propertySearch change
  useEffect(() => {
    // Stringify the propertySearch object as a JSON string
    const propertySearchString = JSON.stringify(propertySearch)
    router.replace(
      `/property?propertySearch=${encodeURIComponent(propertySearchString)}`
    )
  }, [propertySearch])

  const apiQueryManual = {
    page: propertySearch.page,
    page_size: itemPerPage,
    // reference_no__icontains: `Reference no contains: ${propertySearch.selectedPurpose.purpose.value}`,
    // title__icontains: `Title contains: ${propertySearch.selectedPurpose.completion.value}`,
    size__gte: propertySearch.selectedPropertySize.min,
    size__lte: propertySearch.selectedPropertySize.max,
    price__gte: propertySearch.selectedPropertyPrice.min,
    price__lte: propertySearch.selectedPropertyPrice.max,
    // bed__lte: propertySearch.selectedBedsBaths.beds.length,
    // bath__lte: propertySearch.selectedBedsBaths.baths.length,
    bed__lte: propertySearch.selectedBedsBaths.beds[0]?.value,
    bath__lte: propertySearch.selectedBedsBaths.baths[0]?.value,
    // property_features__id: propertySearch.selectedKeywords.length > 0 ? 1 : 0,
    property_purpose__id:
      propertySearch.selectedPurpose.completion.value ??
      propertySearch.selectedPurpose.purpose.value,
    property_type__id: propertySearch.selectedPropertyType.type.value,
    property_sub_type__id: propertySearch.selectedPropertyType.subType.value,
    propertyaddress__city:
      propertySearch.selectedPropertyLocation[0]?.value || '',
    // propertyaddress__city__icontains: 'No',
    // propertyaddress__location: propertySearch.selectedPropertyLocation[0]?.value || '',
    // propertyaddress__location__icontains: 1,
  }

  const { isLoading, data } = useSWR<
    IListServerResponse<IListPropertyResponse[]>
  >(`${propertyUrls.property}?${QueryString.stringify(apiQueryManual)}`)

  const handleSetPage = (page: number) => {
    dispatch(setPage(page))
  }

  return (
    <div className='w-full space-y-4 bg-gray-100 font-ubuntu text-xl text-black md:space-y-6'>
      <PropertyListFilters />
      {/* <Breadcrumbs /> */}

      <div className='custom_screen_width col-span-1 w-full gap-6 md:grid-cols-7 lg:grid'>
        <div className='col-span-5 '>
          <div className='my-4 space-y-4 sm:mb-5 sm:mt-0 sm:space-y-5'>
            <div className='pb-1'>
              <PropertyListHeader />
            </div>
            <PropertyActiveFilters />
            <PropertyListLocationSelector />
          </div>

          {/* list filters  */}
          <PropertyListFilter
            isCardVertical={isCardVertical}
            setIsCardVertical={setIsCardVertical}
          />
          <PropertyList
            isLoading={isLoading}
            propertyList={data?.results}
            isCardVertical={isCardVertical}
          />
          {!isLoading && (
            <Pagination
              itemPerPage={itemPerPage}
              total={data?.count}
              page={propertySearch.page}
              handleSetPage={handleSetPage}
            />
          )}
          {/* <WhyThisLocation /> */}
        </div>
        <div className='col-span-1 space-y-4 font-ubuntu text-sm md:col-span-2 md:space-y-6 md:text-base'>
          {/* <PropertyListPropertyMap /> */}
          <PropertyListLocationInfo />
          <LinkCard />
        </div>
      </div>
    </div>
  )
}
