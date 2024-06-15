import YtVideoPlayer from '@/components/common/YtVideoPlayer'
import { IPropertyAndBlogData } from '@/types/pages/listYourProperty'
import React from 'react'
import AddPropertyButton from './AddPropertyButton'

interface IProps {
  data?: IPropertyAndBlogData
}

const ListYourPropertyHero: React.FC<IProps> = ({ data }) => {
  return (
    <div
      className='relative h-[650px] w-full bg-black bg-cover bg-center before:backdrop-blur-[31.11px]'
      style={{
        backgroundImage: `url(${data?.PropertyAddContent.background_avatar})`,
      }}
    >
      {/* Black overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='custom_screen_width absolute flex h-full w-full items-center justify-center'>
          <section className='grid w-full grid-cols-2 items-center gap-4 font-lato text-xs md:gap-6 md:text-sm'>
            <div className='w-full max-w-xl text-white'>
              <h2 className='mb-4 max-w-sm text-2xl font-medium leading-10 md:text-5xl'>
                {data?.PropertyAddContent.title}
              </h2>
              <div className='mb-6 text-base font-normal leading-[23px] md:text-lg'>
                <p>{data?.PropertyAddContent.description}</p>
              </div>
              <AddPropertyButton />
            </div>
            {data?.PropertyAddContent.video && (
              <div className='flex justify-end'>
                <div className='h-full w-full max-w-xl'>
                  <YtVideoPlayer
                    videosUrl={data?.PropertyAddContent.video}
                    controllers
                  />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default ListYourPropertyHero
