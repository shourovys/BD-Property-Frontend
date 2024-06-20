'use client'
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
import React from 'react'
import PropertyActiveFilters from './propertyListFilter/PropertyActiveFilters'
import PropertyListHeader from './propertyListFilter/PropertyListHeader'
import PropertyListLocationSelector from './propertyListFilter/PropertyListLocationSelector'

interface IProps {
  isLoading: boolean
  data?: IListServerResponse<IListPropertyResponse[]>
  itemPerPage: number
}
const PropertyListPageComponent: React.FC<IProps> = ({
  isLoading,
  data,
  itemPerPage,
}) => {
  const dispatch = useAppDispatch()
  const { propertySearch } = useAppSelector((state) => state)

  const [isCardVertical, setIsCardVertical] = useLocalStorage<boolean>(
    'IsPropertyListCardVertical',
    false
  )

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
export default PropertyListPageComponent
