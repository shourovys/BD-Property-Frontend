import { IPropertyDetails } from '@/types/pages/property'

interface Feature {
  icon: string
  label: string
}

interface IProps {
  data: IPropertyDetails
}

const PropertyDetailsPropertyFeatures: React.FC<IProps> = ({ data }) => {
  const propertyFeatures: Feature[] = data.property_features.map((feature) => ({
    icon: feature.features_logo,
    label: feature.features_type,
  }))

  return (
    <div
      id='feature'
      className='space-y-4 pt-10 font-inter text-sm text-black md:pt-8 md:text-base lg:pt-16'
    >
      <div className='font-inter text-xl font-medium md:text-2xl'>
        Features / Amenities
      </div>
      <div className='flex w-full flex-wrap gap-2 text-left font-lato text-sm text-black md:text-base'>
        {propertyFeatures.map((feature, index) => (
          <div
            key={index}
            className='flex h-[112.5px] min-w-[150px] flex-1 items-center justify-center overflow-hidden rounded-lg bg-whitesmoke-300 p-3'
          >
            <div className='flex flex-col items-center justify-center text-center'>
              <img className='h-16 w-16' alt='' src={feature.icon} />
              <div className='mt-2'>
                <p className='m-0'>{feature.label}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='flex min-w-[150px] flex-1 items-center justify-center overflow-hidden rounded-6xs border-[0.25px] border-silver bg-white p-2 text-center text-salmon'>
          <div>
            <p className='m-0'>
              + {data.property_features.length - features.length} more
            </p>
            <p className='m-0'>amenities</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PropertyDetailsPropertyFeatures
