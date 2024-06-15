import Image from 'next/image'
import React from 'react'
import InteriorServiceApplyButton from './LegalServiceApplyButton'

const InteriorServiceHero: React.FC = () => {
  return (
    <div className='relative flex min-h-[70vh] items-center overflow-hidden bg-black font-ubuntu text-white '>
      <Image
        src='/mask-group-11@2x.png'
        alt=''
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute inset-0 bg-black opacity-70 sm:opacity-50' />
      <div className='custom_screen_width relative w-full px-4 md:px-10'>
        <div className='space-y-4 md:space-y-6'>
          <h2 className='text-2xl font-medium uppercase md:text-4xl'>
            Survey/pre-design service
          </h2>
          <p className='max-w-5xl text-sm leading-[28px] md:text-base '>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>

          <InteriorServiceApplyButton title='Interface Service' />
        </div>
      </div>
    </div>
  )
}

export default InteriorServiceHero
