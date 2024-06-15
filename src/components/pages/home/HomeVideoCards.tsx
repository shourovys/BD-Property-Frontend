'use client'

import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import YtVideoSlider from '@/components/common/YtVideoSlider'
import { ISliderVideoData } from '@/types/pages/home'
import { NextPage } from 'next'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

interface IProps {
  videos: ISliderVideoData[]
}

const HomeVideoCards: NextPage<IProps> = ({ videos }) => {
  return (
    <Section>
      <SectionTitle>Featured Videos</SectionTitle>
      <YtVideoSlider
        videosUrls={videos.map((video) => video.video)}
        controllers
      />
    </Section>
  )
}

export default HomeVideoCards
