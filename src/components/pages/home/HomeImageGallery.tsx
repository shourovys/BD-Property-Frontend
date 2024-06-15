import { IAreaImageData } from '@/types/pages/home'
import type { NextPage } from 'next'
import Image from 'next/image'

interface IProps {
  areaImages?: IAreaImageData['areaimage_content']
}

const HomeImageGallery: NextPage<IProps> = ({ areaImages }) => {
  if (!areaImages?.length) {
    return null
  }
  return (
    <>
      <section className='hidden h-full w-full min-w-max grid-cols-5 items-center gap-x-4 sm:grid'>
        <div className='relative aspect-[17/23]'>
          <Image
            className='h-full w-full object-cover'
            alt=''
            src={areaImages[0]?.image}
            fill
          />
          <div className='absolute bottom-2 left-2 font-medium'>
            <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
              {areaImages[0].town}
            </p>
          </div>
        </div>

        <div className='h-full space-y-4'>
          <div className='relative aspect-[102/97] '>
            <Image
              className='aspect-square h-full w-full object-cover'
              alt=''
              src={areaImages[1].image}
              fill
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[1].town}
              </p>
            </div>
          </div>

          <div className='relative aspect-[102/97]'>
            <Image
              className='aspect-square h-full w-full object-cover'
              alt=''
              src={areaImages[2].image}
              fill
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[2].town}
              </p>
            </div>
          </div>
        </div>
        <div className='relative aspect-[204/409] '>
          <Image
            className='h-full w-full object-cover'
            alt=''
            src={areaImages[3].image}
            fill
          />
          <div className='absolute bottom-2 left-2 font-medium'>
            <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
              {areaImages[3].town}
            </p>
          </div>
        </div>

        <div className='h-full space-y-4'>
          <div className='relative aspect-[102/97]'>
            <Image
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[4].image}
              fill
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[4].town}
              </p>
            </div>
          </div>

          <div className='relative aspect-[102/97]'>
            <Image
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[5].image}
              fill
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[5].town}
              </p>
            </div>
          </div>
        </div>
        <div className='relative aspect-[17/23]'>
          <Image
            className='h-full w-full object-cover'
            alt=''
            src={areaImages[6].image}
            fill
          />
          <div className='absolute bottom-2 left-2 font-medium'>
            <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
              {areaImages[6].town}
            </p>
          </div>
        </div>
      </section>

      <section className='space-y-4 sm:hidden '>
        <div className='grid grid-cols-3 gap-x-4'>
          <div className='relative'>
            <img
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[0].image}
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[0].town}
              </p>
            </div>
          </div>

          <div className='relative'>
            <img
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[1].image}
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[1].town}
              </p>
            </div>
          </div>

          <div className='relative '>
            <img
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[2].image}
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[2].town}
              </p>
            </div>
          </div>
        </div>
        <div className='relative '>
          <img
            className='h-full max-h-52 w-full object-cover'
            alt=''
            src={areaImages[3].image}
          />
          <div className='absolute bottom-2 left-2 font-medium'>
            <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
              {areaImages[3].town}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-x-4 '>
          <div className='relative '>
            <img
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[4].image}
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[4].town}
              </p>
            </div>
          </div>

          <div className='relative '>
            <img
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[5].image}
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[5].town}
              </p>
            </div>
          </div>
          <div className='relative '>
            <img
              className='h-full w-full object-cover'
              alt=''
              src={areaImages[6].image}
            />
            <div className='absolute bottom-2 left-2 font-medium'>
              <p className='rounded-8xs bg-black bg-opacity-40 px-2 py-0.5 text-xs font-medium text-white md:text-base'>
                {areaImages[6].town}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeImageGallery
