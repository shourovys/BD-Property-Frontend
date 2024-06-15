import type { NextPage } from 'next'
import Image from 'next/image'

const AboutUsHero: NextPage = () => {
  return (
    <div className='relative flex min-h-[70vh] items-center overflow-hidden bg-black font-ubuntu text-white '>
      <Image
        src='/mask-group-11@2x.png'
        alt=''
        layout='fill'
        objectFit='cover'
      />
      <div className='custom_screen_width relative w-fit px-4 md:px-10'>
        <div className='relative border-l-8 border-salmon bg-black bg-opacity-40 p-4 md:px-10 md:py-8'>
          <div className='space-y-4 text-center md:space-y-6'>
            <h2 className='text-2xl font-medium uppercase md:text-4xl'>
              HOME TO ALL YOUR PROPERTY NEEDS
            </h2>
            <p className='max-w-5xl text-sm leading-[28px] md:text-base '>
              BUY | SELL | RENT | LEGAL | MORTGAGE | INTERIOR
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHero
