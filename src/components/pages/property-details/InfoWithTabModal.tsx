import Modal from '@/components/HOC/Modal'
import Tabs from '@/components/common/Tabs'
import YtVideoPlayer from '@/components/common/YtVideoPlayer'
import { IPropertyDetails } from '@/types/pages/property'
import { IMAGE_URL } from '@/utils/config'
import { CameraIcon, CloseIcon, PlayIcon } from '@/utils/icon'
import Image from 'next/image'
import React, { useState } from 'react'
import PropertyCallCard from '../propertyList/PropertyCallCard'
import PropertyEmailCard from '../propertyList/PropertyEmailCard'

interface IInfoWithTabModalModalProps {
  reference: string
  images?: IPropertyDetails['images']
  videoUrl?: string
  floorPlan?: string
  selectedTab: string
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const InfoWithTabModalModal: React.FC<IInfoWithTabModalModalProps> = ({
  reference,
  images,
  videoUrl,
  selectedTab,
  setSelectedTab,
  setOpenModal,
}) => {
  const [openCallModal, setOpenCallModal] = useState(false)
  const [openEmailModal, setOpenEmailModal] = useState(false)

  const handleOpenEmailModal = () => setOpenEmailModal(true)
  const handleOpenCallModal = () => setOpenCallModal(true)

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'photos':
        return <ImageGallery images={images} />
      case 'video':
        return <YouTubeVideo videoUrl={videoUrl} />
      default:
        return null
    }
  }

  return (
    <div className='modal-container fixed bottom-0 top-0 w-full max-w-5xl sm:bottom-8 sm:top-8'>
      <div className='modal-content relative flex h-full flex-col rounded-lg bg-white p-7 pb-5 shadow-md'>
        <CloseIcon
          onClick={() => setOpenModal(false)}
          className='absolute right-2 top-2 cursor-pointer text-xl font-extrabold text-gray-500 hover:text-gray-700'
        />

        {/* Header  */}
        <Tabs
          selectedTab={selectedTab}
          tabs={[
            { label: 'Photos', value: 'photos', icon: CameraIcon },
            { label: 'Video', value: 'video', icon: PlayIcon },
          ]}
          setSelectedTab={setSelectedTab}
          fullWidth
          boxStyle
        />

        <div className='mt-3 flex-1 overflow-y-auto'>
          {/* Render content based on the selected tab */}
          {renderTabContent()}
        </div>

        {/* Footer */}
        <div className='mt-3 flex items-center justify-between'>
          <img className='h-6 w-auto md:h-8' alt='' src='/logoWithMange.png' />
          <div className='grid w-full max-w-[220px] grid-cols-2 gap-2'>
            <div className='relative h-10 w-full'>
              <button
                onClick={handleOpenCallModal}
                className='flex h-full w-full cursor-pointer items-center justify-center rounded-6xs bg-salmon p-0'
              >
                <div className='mr-2 h-[15.86px] w-[16.36px]'>
                  <img
                    className='h-full w-full'
                    alt=''
                    src='/icon-ionicioscall.svg'
                  />
                </div>
                <p className='font-medium text-white '>Call</p>
              </button>
            </div>
            <div className='relative h-10 w-full'>
              <button
                onClick={handleOpenEmailModal}
                className='flex h-full w-full cursor-pointer items-center justify-center rounded-6xs bg-salmon p-0'
              >
                <div className='mr-2 h-[16.81px] w-[24.91px]'>
                  <img
                    className='h-full w-full'
                    alt=''
                    src='/icon-zocialemail.svg'
                  />
                </div>
                <div className='text-white'>Email</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal openModal={openCallModal} setOpenModal={setOpenCallModal}>
        <PropertyCallCard
          setOpenModal={setOpenCallModal}
          reference={reference}
        />
      </Modal>
      <Modal openModal={openEmailModal} setOpenModal={setOpenEmailModal}>
        <PropertyEmailCard
          setOpenModal={setOpenEmailModal}
          reference={reference}
        />
      </Modal>
    </div>
  )
}

// ImageGallery Component
const ImageGallery: React.FC<Pick<IInfoWithTabModalModalProps, 'images'>> = ({
  images,
}) => {
  return (
    <div className='mr-0.5 grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {images?.map((image) => (
        <div className='relative aspect-square h-full w-full ' key={image.id}>
          <Image
            src={IMAGE_URL + image.image}
            alt={image.id.toString()}
            className='rounded-md object-cover'
            fill
          />
        </div>
      ))}
    </div>
  )
}

// YouTubeVideo Component
const YouTubeVideo: React.FC<Pick<IInfoWithTabModalModalProps, 'videoUrl'>> = ({
  videoUrl,
}) => {
  return <YtVideoPlayer videosUrl={videoUrl || ''} />
}

export default InfoWithTabModalModal
