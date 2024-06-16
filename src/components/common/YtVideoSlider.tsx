'use client'

import YtVideoPlayer, {
  YtVideoPlayerLoader,
} from '@/components/common/YtVideoPlayer'
import classNames from 'classnames'
import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules' // Correct module import
import { Swiper, SwiperSlide } from 'swiper/react'

interface IYtVideoSliderProps {
  // videosUrls: string[]
  controllers?: boolean
}

const videoUrls = [
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
  'https://youtu.be/biDmwZXJ3KI?si=q_x-dxCIL3nmCBFI',
]

const YtVideoSlider: React.FC<IYtVideoSliderProps> = () => {
  const [loading, setLoading] = useState(true)

  // Function to handle video load event
  const handleVideoLoad = () => {
    setLoading(false)
  }

  return (
    <div>
      {loading && (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          <YtVideoPlayerLoader className='' />
          <YtVideoPlayerLoader className='hidden md:block' />
          <YtVideoPlayerLoader className='hidden lg:block' />
        </div>
      )}
      <div className={classNames(loading ? 'hidden' : 'block')}>
        <Swiper
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          loop
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination, Autoplay]}
          className='homeImageCardsSlider'
        >
          {videoUrls.map((videosUrl, index) => (
            <SwiperSlide key={videosUrl + index}>
              <YtVideoPlayer
                videosUrl={videosUrl}
                onLoad={handleVideoLoad}
                controllers
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default YtVideoSlider
