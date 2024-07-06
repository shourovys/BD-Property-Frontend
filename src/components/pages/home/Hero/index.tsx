'use client'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeHeroSearch from './HomeHeroSearch'
import HomeHeroTabButtons from './HomeHeroTabButtons'

const HomeHeroSection = () => {
  const [openSlideOver, setOpenSlideOver] = useState<boolean>(false)

  const handleSlideOverOpen = () => setOpenSlideOver(true)
  const handleSlideOverClose = () => setOpenSlideOver(false)

  const images = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1628746234641-28eb583a51b4',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1560185008-b033106af5c3',
    },
  ]

  return (
    <div className='relative h-[60vh] w-full bg-black bg-cover bg-center sm:h-[650px]'>
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 h-full w-full object-cover before:backdrop-blur-[31.11px]'
      >
        <source src='/videoplayback.mp4' type='video/mp4' /> */}

      {/* <img
        src={IMAGE_URL + bgVideo}
        alt='video'
        className='absolute inset-0 h-full w-full object-cover before:backdrop-blur-[31.11px]'
      /> */}
      {/* </video> */}
      <Swiper
        loop
        spaceBetween={20}
        effect={'fade'}
        speed={2000}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectFade, Autoplay]}
        slidesPerView={1}
      >
        {images.map((service) => (
          <SwiperSlide key={service.id}>
            <div className='relative h-[60vh] sm:h-[650px]'>
              <Image
                src={service.image}
                alt={service.id.toString()}
                className='h-full w-full object-cover'
                layout='fill'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Black overlay */}
      <div className='absolute inset-0 z-10 bg-black opacity-70 sm:opacity-50'></div>
      <div className='custom_screen_width absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 pb-20 sm:pb-44'>
        <h1 className='max-w-xl text-center text-2xl text-white sm:mb-6 md:max-w-2xl lg:max-w-3xl lg:text-3xl'>
          Discover Your Perfect Property: Buy, Rent, Renovate, and Interior
          Design Solutions in Bangladesh
        </h1>
        <HomeHeroTabButtons handleSlideOverOpen={handleSlideOverOpen} />
        <HomeHeroSearch
          openSlideOver={openSlideOver}
          handleSlideOverClose={handleSlideOverClose}
        />
      </div>
    </div>
  )
}

export default HomeHeroSection
