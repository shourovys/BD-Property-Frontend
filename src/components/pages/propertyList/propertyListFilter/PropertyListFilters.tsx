import SlideOver from '@/components/atomic/SlideOver'
import PropertyLocationSearch from '@/components/common/Search/PropertyLocationSearch'
import { FilterIcon } from '@/utils/icon'
import { useState } from 'react'
import DesktopPropertyListFilters from './DesktopPropertyListFilters'
import MobilePropertyListFilters from './MobilePropertyListFilters'

const PropertyListFilters: React.FC = () => {
  const [openSlideOver, setOpenSlideOver] = useState<boolean>(false)

  const handleSlideOverClose = () => setOpenSlideOver(false)

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
