'use client'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IProps {
  data: {
    interiorData: {
      title: string
      description: string
    }
    previousWorkData: {
      id: number
      image: string
      title: string
    }[]
  }
}

const InteriorHero: React.FC<IProps> = ({ data }) => {
  return (
    <div className='relative min-h-[80vh]'>
      <Swiper
        loop
        spaceBetween={20}
        effect={'fade'}
        speed={3000}
        autoplay={{
          delay: 4000,
        }}
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay, Pagination]}
        slidesPerView={1}
      >
        {data.previousWorkData.map((service) => (
          <SwiperSlide key={service.id}>
            <div className='relative h-[80vh]'>
              <Image
                src={service.image}
                alt={service.title}
                className='h-full w-full object-cover'
                layout='fill'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='z-10 text-center text-white'>
          <div className='relative mb-6 border-l-8 border-salmon bg-black bg-opacity-40 p-4 py-8 md:px-10'>
            <h2 className='text-2xl font-medium uppercase md:text-4xl'>
              {data.interiorData.title}
            </h2>
            <p>{data.interiorData.description}</p>
          </div>
          <Link
            to='services'
            smooth={true}
            spy={true}
            duration={500}
            offset={-40}
          >
            <span className='cursor-pointer rounded-md bg-salmon px-6 py-2 text-sm font-medium md:px-8 md:py-3 md:text-base'>
              Our Services
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InteriorHero
