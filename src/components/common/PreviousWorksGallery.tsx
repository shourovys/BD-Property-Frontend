'use client'
import { PreviousWork } from '@/types/pages/interior'
import { IMAGE_URL } from '@/utils/config'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Section from './Section'

interface GalleryProps {
  items: PreviousWork[]
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  )

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  return (
    <Section>
      <div className='space-y-2 pb-8 md:space-y-3 lg:pb-10'>
        <h1
          className={classNames(
            'text-center text-2xl font-medium text-black lg:text-3xl'
          )}
        >
          Our Previous Works
        </h1>
        <p className='mx-auto max-w-2xl text-center text-base leading-relaxed'>
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical heard
          of them man bun deep jianbing selfies heirloom. of them man bun deep
          jianbing selfies heirloom.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6'>
        {items.map((item, index) => (
          <div key={index} className='relative flex aspect-[3/2] h-full w-full'>
            <Image
              alt='gallery'
              className='h-full w-full object-cover object-center'
              src={IMAGE_URL + item.image}
              fill
            />

            <div
              onClick={() => openModal(index)}
              className='absolute inset-0 mb-4 flex items-end justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100'
            >
              <h1 className='bg-black bg-opacity-50 p-4 font-medium text-white'>
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-75'>
          <div className='flex h-full w-full items-center justify-center'>
            <div className='h-auto w-full max-w-5xl rounded-lg p-8'>
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={true}
                initialSlide={selectedImageIndex || 0}
                pagination={{
                  clickable: false,
                }}
                modules={[Pagination, Navigation]}
              >
                {items.map((item) => (
                  <SwiperSlide key={item.title} className='relative'>
                    <div className='relative h-full min-h-[70vh] w-full bg-blue-200'>
                      <Image
                        alt='gallery'
                        className='h-full w-full object-cover object-center'
                        src={IMAGE_URL + item.image}
                        fill
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={closeModal}
                className='absolute right-4 top-4 text-gray-500'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default Gallery
