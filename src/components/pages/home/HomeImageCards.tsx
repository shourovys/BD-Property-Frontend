'use client'

import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules' // Correct module import
import { Swiper, SwiperSlide } from 'swiper/react'

const imageSources = [
  '/rectangle-56@2x.png',
  '/rectangle-57@2x.png',
  '/rectangle-58@2x.png',
  '/rectangle-59@2x.png',
  '/rectangle-56@2x.png',
  '/rectangle-57@2x.png',
  '/rectangle-58@2x.png',
  '/rectangle-59@2x.png',
]

const HomeImageCards = () => {
  return (
    <Section>
      <SectionTitle>Industry Insights</SectionTitle>
      {imageSources.length > 0 && (
        <Swiper
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={2}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination, Autoplay]}
          className='homeImageCardsSlider'
        >
          {imageSources.map((image) => (
            <SwiperSlide key={image}>
              <Card imgSrc={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Section>
  )
}

interface CardProps {
  imgSrc: string
}

const Card: React.FC<CardProps> = ({ imgSrc }) => (
  <div className='relative flex max-h-[306px] overflow-hidden' key={imgSrc}>
    <img src={imgSrc} alt='' className='h-full w-full object-fill ' />
  </div>
)

export default HomeImageCards
