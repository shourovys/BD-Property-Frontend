import LoadingSvg from '@/components/loading/atomic/LoadingSvg'
import { IListPropertyResponse } from '@/types/pages/property'
import classNames from 'classnames'
import PropertyListPropertyCard from './PropertyListPropertyCard'

interface IProps {
  isLoading: boolean
  propertyList?: IListPropertyResponse[]
  isCardVertical: boolean
}

const PropertyList: React.FC<IProps> = ({
  isLoading,
  propertyList,
  isCardVertical,
}) => {
  if (isLoading) {
    return (
      <div className='flex min-h-[400px] w-full items-center justify-center'>
        <LoadingSvg size='extraLarge' />
      </div>
    )
  }

  return (
    <div
      className={classNames(
        'grid w-full grid-cols-1 py-6 sm:grid-cols-2',
        isCardVertical
          ? ' md:grid-cols-3 md:gap-4'
          : 'gap-x-4 gap-y-6 md:grid-cols-1'
      )}
    >
      {propertyList?.map((property) => (
        <PropertyListPropertyCard
          key={property.id}
          property={property}
          isCardVertical={isCardVertical}
        />
      ))}
    </div>
  )
}

export default PropertyList
