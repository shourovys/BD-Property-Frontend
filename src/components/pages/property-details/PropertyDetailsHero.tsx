'use client'
import Modal from '@/components/HOC/Modal'
import ImageSlicer from '@/components/common/ImageSlicer'
import { IPropertyDetails } from '@/types/pages/property'
import { IMAGE_URL } from '@/utils/config'
import { CameraIcon, FloorIcon, PlayIcon } from '@/utils/icon'
import Image from 'next/image'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import InfoWithTabModalModal from './InfoWithTabModal'

interface IProps {
  data?: IPropertyDetails
}

const PropertyDetailsHero: React.FC<IProps> = ({ data }) => {
  const [openInfoModal, setOpenInfoModal] = useState(false)
  const [selectedTab, setSelectedTab] = useState('photos')

  const handleModalOpen = (selected: string) => {
    setOpenInfoModal(true)
    setSelectedTab(selected)
  }

  return (
    <div className='h-full min-h-max text-left font-lato text-xs text-white'>
      {/* desktop hero section  */}
      <div className='custom_screen_width hidden h-full grid-cols-4 gap-6 sm:grid'>
        <div className='max-h-auto relative col-span-3 h-full min-h-[70vh] overflow-hidden rounded-6xs'>
          <Image
            className='overflow-hidden object-fill'
            alt=''
            src={data?.images?.length ? IMAGE_URL + data?.images[0]?.image : ''}
            fill
          />
          <div className='absolute -bottom-1.5 -left-1.5 flex items-end gap-x-4 p-4 md:bottom-1.5 md:left-1.5'>
            {data?.floorPlans && (
              <Link
                to='floorPlan'
                smooth={true}
                spy={true}
                duration={500}
                offset={-15}
              >
                <div className='flex cursor-pointer items-center gap-1 rounded-full bg-black bg-opacity-70 px-2.5 py-1 md:px-4 md:py-2'>
                  <FloorIcon className='text-sm md:text-base' />
                  Floor Plan
                </div>
              </Link>
            )}
            {data?.video && (
              <div
                className='flex cursor-pointer items-center gap-1 rounded-full bg-black bg-opacity-70 px-2.5 py-1 md:px-4 md:py-2'
                onClick={() => handleModalOpen('video')}
              >
                <PlayIcon className='text-sm md:text-base' />
                See Video
              </div>
            )}
            {/* <div className="flex items-center gap-1 px-4 py-2 bg-black rounded-full cursor-pointer bg-opacity-70">
            <LocationIcon className="text-base" />
            Map
          </div> */}
          </div>
        </div>
        <div className='relative flex h-full flex-col gap-4'>
          {data?.images?.length && data?.images[1]?.image && (
            <div className='relative col-span-1 h-full max-h-44 w-full  '>
              <Image
                className='rounded-6xs object-cover'
                alt=''
                src={
                  (data?.images?.length &&
                    IMAGE_URL + data?.images[1]?.image) ||
                  ''
                }
                fill
              />
            </div>
          )}
          {data?.images?.length && data?.images[2]?.image && (
            <div className='relative col-span-1 h-full max-h-44 w-full '>
              <Image
                className='rounded-6xs object-cover '
                alt=''
                src={
                  (data?.images?.length &&
                    IMAGE_URL + data?.images[2]?.image) ||
                  ''
                }
                fill
              />
            </div>
          )}
          {data?.images?.length && data?.images[3]?.image && (
            <div className='relative col-span-1 h-full max-h-44 w-full'>
              <Image
                className='rounded-6xs object-cover '
                alt=''
                src={
                  (data?.images?.length &&
                    IMAGE_URL + data?.images[3]?.image) ||
                  ''
                }
                fill
              />
            </div>
          )}
          <div className='absolute -bottom-1.5 -right-1.5 flex items-end gap-x-4 p-4 md:bottom-1.5 md:right-1.5'>
            <div
              className='flex cursor-pointer items-center gap-1.5 rounded-full bg-black bg-opacity-70 px-2.5 py-1 md:px-4 md:py-2'
              onClick={() => handleModalOpen('photos')}
            >
              <CameraIcon className='text-sm md:text-base' />
              {data?.images?.length}
            </div>
          </div>
        </div>
      </div>
      {/* mobile hero section  */}
      <div className='space-y-4 sm:hidden'>
        <ImageSlicer
          height={250}
          images={data?.images?.map((image) => image.image) || []}
        />
        <div className='custom_screen_width flex items-center gap-3 text-sm font-bold text-darkslateblue-100'>
          {data?.floorPlans && (
            <Link
              to='floorPlan'
              smooth={true}
              spy={true}
              duration={500}
              offset={-15}
            >
              <div className='flex cursor-pointer items-center gap-1 rounded-full bg-lightgray-100 bg-opacity-70 px-6 py-2'>
                <FloorIcon className='text-lg' />
                Floor Plan
              </div>
            </Link>
          )}
          {data?.video && (
            <div
              className='flex cursor-pointer items-center gap-1 rounded-full bg-lightgray-100 bg-opacity-70 px-6 py-2'
              onClick={() => handleModalOpen('video')}
            >
              <PlayIcon className='text-lg' />
              See Video
            </div>
          )}
        </div>
      </div>
      <Modal openModal={openInfoModal} setOpenModal={setOpenInfoModal}>
        <InfoWithTabModalModal
          reference={data?.referenceNo || ''}
          images={data?.images}
          videoUrl={data?.video}
          floorPlan={data?.floorPlans}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setOpenModal={setOpenInfoModal}
        />
      </Modal>
    </div>
  )
}

export default PropertyDetailsHero
