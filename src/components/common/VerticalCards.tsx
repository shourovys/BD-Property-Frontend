import Link from 'next/link'
import SectionTitle from './SectionTitle'

const VerticalCards = () => {
  return (
    <div className='custom_screen_width'>
      <div className='flex items-center justify-between'>
        <SectionTitle>Services We Offer</SectionTitle>
        <Link
          href='/services/legal/all'
          className='pb-6 text-sm md:pb-8 md:text-base'
        >
          View All
        </Link>
      </div>

      <div className='grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4'>
        {/* Repeated Card Item */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='relative space-y-2'>
            <img
              className='aspect-[190/159] rounded-md object-cover'
              src='/rectangle-173@2x.png'
              alt=''
            />
            <h2 className='pt-2 text-xl font-medium'>
              Creating a Relaxing me Corner
            </h2>
            <p className='font-lato text-sm leading-6 md:text-base'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerticalCards
