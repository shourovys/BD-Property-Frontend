import { sendPostRequest } from '@/api/swrConfig'
import { propertyUrls } from '@/api/urls/propertyUrls'
import Modal from '@/components/HOC/Modal'
import ShareModal from '@/components/common/ShareModal'
import useAuth from '@/hooks/useAuth'
import { IPropertyDetails } from '@/types/pages/property'
import formatPrice from '@/utils/formatPrice'
import {
  AreaIcon,
  BathIcon,
  BedIcon,
  CalendarIcon,
  CallIcon,
  EmailIcon,
  FavoriteIcon,
  ShareIcon,
  SmsIcon,
} from '@/utils/icon'
import { errorToast, successToast, warningToast } from '@/utils/toast'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import useSWRMutation from 'swr/mutation'

interface IProps {
  data: IPropertyDetails
  isComponentScrolledOut: boolean
  handleOpenEmailModal: () => void
  handleOpenCallModal: () => void
}

const PropertyDetailsInfo: React.FC<IProps> = ({
  data,
  isComponentScrolledOut,
  handleOpenEmailModal,
  handleOpenCallModal,
}) => {
  const pathName = usePathname()
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const [openShareModal, setOpenShareModal] = useState(false)

  // SWR Mutation hook fro save property the server
  const { trigger: saveTrigger, isMutating: saveIsLoading } = useSWRMutation(
    propertyUrls.propertySave,
    sendPostRequest,
    {
      onSuccess: (data: { message: string }) => {
        if (data.message) {
          successToast(data.message)
        } else {
          warningToast(' property not save')
        }
      },
      onError: (error) => {
        errorToast(' An error occurred! please try again.')
      },
    }
  )

  const saveProperty = () => {
    if (!isAuthenticated) {
      router.push(`/login?previousRoute=${pathName}`)
    }
    saveTrigger({ property_id: data.id })
  }

  const handleSmsButtonClick = () => {
    const phoneNumber = ''
    const message = `I would like to inquire about the listing ${data.referenceNo}. The listing can be found here ${window.location}`
    const smsUri = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`
    window.location.href = smsUri
  }

  const bookPropertyPageHref = isAuthenticated
    ? `${pathName}/book`
    : `/login/?previousRoute=${pathName}/book`

  return (
    <div className='space-y-5 font-ubuntu text-sm text-black md:text-base '>
      <div className='flex items-start justify-between gap-2'>
        <div className='flex-grow space-y-2 text-base sm:space-y-3 sm:text-lg md:space-y-5 md:text-xl'>
          <h1 className='font-medium'>
            BDT &nbsp;
            <span className='text-3xl sm:text-4xl md:text-[38px]'>
              {formatPrice(data.price)}
            </span>
          </h1>
          <h2 className='font-lato text-base font-semibold sm:text-lg md:text-xl'>
            {data.address.location}, {data.address.city}
          </h2>
          <div className='flex items-center gap-8 text-gray-800'>
            <div className='flex items-center gap-2 md:gap-3'>
              <BedIcon className='text-2xl text-[#757575] md:text-3xl' />
              <p className='flex-grow font-light'>{data.bed}</p>
            </div>
            <div className='flex items-center gap-2 md:gap-3'>
              <BathIcon className='text-xl text-[#757575] md:text-2xl' />
              <p className='flex-grow font-light'>{data.bath}</p>
            </div>
            <div className='flex items-center gap-2 md:gap-3'>
              <AreaIcon className='text-3xl text-[#757575]' />
              <p className='w-full flex-grow font-light'>{data.size} Sqft</p>
            </div>
          </div>
        </div>
        <div className='flex flex-shrink flex-wrap justify-end gap-4'>
          <Link href={bookPropertyPageHref}>
            <div className='hidden h-fit items-center gap-2 rounded-6xs bg-salmon-light px-3 py-1.5 md:flex'>
              <CalendarIcon />
              <div className='font-medium'>Booking View</div>
            </div>
          </Link>

          <button
            onClick={handleOpenCallModal}
            className='hidden cursor-pointer items-center justify-center gap-1.5 rounded-6xs p-0 text-white sm:h-9 sm:w-[90px] sm:bg-salmon md:flex lg:hidden'
          >
            <CallIcon className='text-2xl sm:text-base md:text-lg' />
            <p className='hidden font-ubuntu text-sm font-medium sm:block md:text-base'>
              Call
            </p>
          </button>
          <button
            onClick={handleOpenEmailModal}
            className='hidden cursor-pointer items-center justify-center gap-1.5 rounded-6xs p-0 text-white sm:h-9 sm:w-[90px] sm:bg-salmon md:flex lg:hidden'
          >
            <EmailIcon className='text-2xl sm:text-base md:text-lg' />
            <p className='hidden font-ubuntu text-sm font-medium sm:block md:text-base'>
              Email
            </p>
          </button>

          <div className='flex gap-4'>
            <button
              onClick={saveProperty}
              className='flex cursor-pointer items-center justify-center gap-1.5 rounded-6xs p-1 text-salmon lg:h-9 lg:w-[90px] lg:bg-gainsboro lg:p-0'
            >
              <FavoriteIcon className='text-2xl lg:text-lg' />
              <p className='hidden font-ubuntu text-sm font-medium md:text-base lg:block'>
                Save
              </p>
            </button>
            <button
              onClick={() => setOpenShareModal(true)}
              className='flex cursor-pointer items-center justify-center gap-1.5 rounded-6xs p-1 text-salmon lg:h-9 lg:w-[90px] lg:bg-gainsboro lg:p-0'
            >
              <ShareIcon className='text-2xl lg:text-lg' />
              <p className='hidden font-ubuntu text-sm font-medium md:text-base lg:block'>
                Share
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* mobile view buttons */}
      <div
        className={classNames(
          'space-y-3 text-lg md:hidden',
          isComponentScrolledOut &&
            'custom_screen_width fixed bottom-0 left-0 right-0 z-40 bg-white py-3'
        )}
      >
        <div className='mb-3 grid w-full grid-cols-3 gap-2'>
          <button
            onClick={handleOpenCallModal}
            className='relative flex h-10 w-full cursor-pointer items-center justify-center rounded-6xs bg-salmon p-0 text-white'
          >
            <img
              className='mr-2 h-[17.86px] w-[18.36px]'
              alt=''
              src='/icon-ionicioscall.svg'
            />
            <p className='font-medium'>Call</p>
          </button>
          <button
            onClick={handleOpenEmailModal}
            className='relative flex h-10 w-full cursor-pointer items-center justify-center rounded-6xs bg-salmon p-0 text-white'
          >
            <img
              className='mr-2 h-[17.86px] w-[18.36px]'
              alt=''
              src='/icon-zocialemail.svg'
            />
            <p className='font-medium'>Email</p>
          </button>
          <button
            onClick={handleSmsButtonClick}
            className='relative flex h-10 w-full cursor-pointer items-center justify-center rounded-6xs bg-salmon p-0 text-white'
          >
            <SmsIcon className='mr-2 h-[17.86px] w-[18.36px]' />
            <p className='font-medium '>SMS</p>
          </button>
        </div>
        <Link href={bookPropertyPageHref}>
          <div className='flex h-10 w-full cursor-pointer items-center justify-center rounded-6xs bg-salmon-light p-0'>
            <CalendarIcon className='mr-2 h-[17.86px] w-[18.36px]' />
            <div className='font-medium'>Booking View</div>
          </div>
        </Link>
      </div>
      <Modal openModal={openShareModal} setOpenModal={setOpenShareModal}>
        <ShareModal title='Share' url={''} setOpenModal={setOpenShareModal} />
      </Modal>
    </div>
  )
}

export default PropertyDetailsInfo
