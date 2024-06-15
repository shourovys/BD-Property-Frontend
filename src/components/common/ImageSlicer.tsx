'use client'

import classNames from 'classnames'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ImageSlicerProps {
  images: string[]
  height: number
  width?: number
}

// ImageSlicer Component
const ImageSlicer: React.FC<ImageSlicerProps> = ({
  images,
  height,
  width = '100%',
}) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      // navigation={true}
      modules={[Pagination, Navigation]}
      className={`cardSlider max-h-[${height}]`}
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={classNames(
              'h-full w-full',
              height && `h-[${height}]`,
              width && `w-[${width}]`
            )}
            style={{ height: height, width: width }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSlicer
