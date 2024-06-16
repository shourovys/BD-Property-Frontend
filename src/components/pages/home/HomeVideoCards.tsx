'use client'

import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import YtVideoSlider from '@/components/common/YtVideoSlider'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const HomeVideoCards = () => {
  return (
    <Section>
      <SectionTitle>Featured Videos</SectionTitle>
      <YtVideoSlider controllers />
    </Section>
  )
}

export default HomeVideoCards
