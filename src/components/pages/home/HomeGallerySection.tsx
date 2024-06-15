import Section from '@/components/common/Section'
import { IAreaImageData } from '@/types/pages/home'
import type { NextPage } from 'next'
import HomeImageGallery from './HomeImageGallery'

interface IProps {
  areaImageData: IAreaImageData
}

const HomeGallerySection: NextPage<IProps> = ({ areaImageData }) => {
  return (
    <Section>
      <div className='flex flex-col justify-between gap-x-12 gap-y-6 xl:flex-row xl:items-center'>
        <div className='max-w-3xl space-y-4 text-black md:space-y-6 xl:max-w-sm'>
          <h1 className='text-3xl font-medium'>{areaImageData.title}</h1>
          <p className='inline-block text-sm font-light leading-[25px] tracking-[0.03em] md:text-base'>
            {areaImageData.description}
          </p>
        </div>
        <HomeImageGallery areaImages={areaImageData.areaimage_content} />
      </div>
    </Section>
  )
}

export default HomeGallerySection
