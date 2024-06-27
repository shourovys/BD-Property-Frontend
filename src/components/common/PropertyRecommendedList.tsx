import { IListPropertyResponse } from '@/types/pages/property'
import RecommendedCard from './PropertyRecommendedCard'

const recommendedData = [
  {
    imageSrc: '/rectangle-17@2x.png',
    location: 'Property Title 1',
    price: '$300,000',
    bedCount: 3,
    bathCount: 2,
    area: '1,200',
  },
  {
    imageSrc: '/rectangle-17@2x.png',
    location: 'Property Title 2',
    price: '$250,000',
    bedCount: 2,
    bathCount: 2,
    area: '1,000',
  },
  {
    imageSrc: '/rectangle-17@2x.png',
    location: 'Property Title 1',
    price: '$300,000',
    bedCount: 3,
    bathCount: 2,
    area: '1,200',
  },
  {
    imageSrc: '/rectangle-17@2x.png',
    location: 'Property Title 1',
    price: '$300,000',
    bedCount: 3,
    bathCount: 2,
    area: '1,200',
  },
]

interface IProps {
  recommendedProperty: IListPropertyResponse[]
}

const PropertyRecommendedList: React.FC<IProps> = ({ recommendedProperty }) => {
  return (
    <div
      id='nearByLoc'
      className='w-full min-w-max space-y-4 font-inter text-sm text-black md:space-y-5 md:text-base'
    >
      <div className='font-inter text-xl font-medium md:text-2xl'>
        Similar Property Around
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
        {recommendedProperty.map((data) => (
          <RecommendedCard
            key={data._id}
            id={data._id}
            imageSrc={data.images?.length ? data.images[0]?.image : ''}
            price={data.price}
            location={data.title}
            bedCount={data.bed}
            bathCount={data.bath}
            area={data.size}
          />
        ))}
      </div>
    </div>
  )
}

export default PropertyRecommendedList
