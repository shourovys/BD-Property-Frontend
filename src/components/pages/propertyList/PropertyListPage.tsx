'use client'
import { propertyUrls } from '@/api/urls/propertyUrls'
import LinkCard from '@/components/common/LinkCard'
import Pagination from '@/components/common/Pagination'
import PropertyList from '@/components/pages/propertyList/PropertyList'
import PropertyListLocationInfo from '@/components/pages/propertyList/PropertyListLocationInfo'
import PropertyListPropertyMap from '@/components/pages/propertyList/PropertyListPropertyMap'
import PropertyListFilter from '@/components/pages/propertyList/propertyListFilter/PropertyListFilter'
import PropertyListFilters from '@/components/pages/propertyList/propertyListFilter/PropertyListFilters'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import useLocalStorage from '@/hooks/useLocalStorage'
import { IListServerResponse } from '@/types/pages/common'
import {
  IListPropertyResponse,
  IPropertyPurpose,
  IPropertyType,
} from '@/types/pages/property'

import { useRouter } from 'next/navigation'
import QueryString from 'qs'
import { useEffect } from 'react'
import useSWR from 'swr'

interface IProps {
  propertyPurposeData: IPropertyPurpose[]
  propertyTypeData: IPropertyType[]
}

export default function PropertyListPageComponent({
  propertyPurposeData,
  propertyTypeData,
}: IProps) {
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
    dispatch({ type: 'SET_PAGE', payload: page })
  }

  return (
    <div className='w-full space-y-4 bg-gray-100 font-ubuntu text-xl text-black md:space-y-6'>
      <PropertyListFilters />
      {/* <Breadcrumbs /> */}

      {/* <div className='mt-4 mb-5 space-y-4 sm:mb-7 sm:mt-0 sm:space-y-5 md:-mt-2'>
        <h1 className='text-base font-medium custom_screen_width md:text-lg '>
          Apartment for sale in Basundhara
        </h1>
        <PropertyListLocationSelector />
      </div> */}

      <div className='custom_screen_width col-span-1 w-full gap-6 md:grid-cols-7 lg:grid'>
        <div className='col-span-5 '>
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
        <div className='col-span-1 space-y-6 font-ubuntu text-sm md:col-span-2 md:text-base'>
          <PropertyListPropertyMap />
          <PropertyListLocationInfo />
          <LinkCard />
        </div>
      </div>
    </div>
  )
}
