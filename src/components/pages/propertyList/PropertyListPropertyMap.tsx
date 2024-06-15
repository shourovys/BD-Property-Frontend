import { LocationIcon } from '@/utils/icon'

const PropertyListPropertyMap = () => {
  return (
    <div className='relative hidden h-[130px] rounded-6xs border border-darkslateblue-200'>
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 transform cursor-pointer rounded-6xs text-salmon'>
        <button className='flex items-center gap-2'>
          <LocationIcon />
          <span className=''>See Listing On Map</span>
        </button>
      </div>
    </div>
  )
}

export default PropertyListPropertyMap
