import SlideOver from '@/components/atomic/SlideOver'
import PropertyLocationSearch from '@/components/common/Search/PropertyLocationSearch'
import {
  resetSelectedPropertyType,
  resetSelectedPurpose,
  setFullState,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { FilterIcon } from '@/utils/icon'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import DesktopPropertyListFilters from './DesktopPropertyListFilters'
import MobilePropertyListFilters from './MobilePropertyListFilters'

const PropertyListFilters: React.FC = () => {
  const dispatch = useAppDispatch()
  const { selectedPurpose } = useAppSelector((state) => state.propertySearch)

  const [openSlideOver, setOpenSlideOver] = useState<boolean>(false)

  const handleSlideOverClose = () => setOpenSlideOver(false)

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
        console.error('Error parsing state from query:', error)
      }
    } else {
      dispatch(resetSelectedPurpose())
      dispatch(resetSelectedPropertyType())
    }
  }, [queryState])

  return (
    <div className='bg-gray-100 '>
      <div className='custom_screen_width mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5 lg:hidden'>
        <div className='col-span-3 sm:col-span-4'>
          <PropertyLocationSearch />
        </div>
        <button
          className='col-span-1 flex h-full items-center justify-center gap-1 rounded-6xs bg-darkslateblue-100 px-3 py-2 text-sm font-light text-white sm:col-span-1 sm:py-3 md:gap-4 md:text-base'
          onClick={() => setOpenSlideOver(true)}
        >
          <FilterIcon className='hidden sm:block' />
          Filter
        </button>
      </div>

      <SlideOver
        isOpen={openSlideOver}
        onClose={handleSlideOverClose}
        size='full'
        comesFrom='yAxes'
      >
        <MobilePropertyListFilters onSlideOverClose={handleSlideOverClose} />
      </SlideOver>

      <div className='hidden lg:block'>
        <DesktopPropertyListFilters />
      </div>
    </div>
  )
}

export default PropertyListFilters
