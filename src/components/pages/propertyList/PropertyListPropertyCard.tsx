import { sendPostRequest } from '@/api/swrConfig'
import { propertyUrls } from '@/api/urls/propertyUrls'
import Modal from '@/components/HOC/Modal'
import Button from '@/components/atomic/Button'
import useAuth from '@/hooks/useAuth'
import { IListPropertyResponse } from '@/types/pages/property'
import { IMAGE_URL } from '@/utils/config'
import formatPrice from '@/utils/formatPrice'
import {
  AreaIcon,
  BathIcon,
  BedIcon,
  CallIcon,
  EmailIcon,
  FavoriteIcon,
} from '@/utils/icon'
import { errorToast, successToast, warningToast } from '@/utils/toast'
import classNames from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MouseEvent, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import PropertyCallCard from './PropertyCallCard'
import PropertyEmailCard from './PropertyEmailCard'

interface IProps {
  property: IListPropertyResponse
  isCardVertical?: boolean
}

const PropertyListPropertyCard: NextPage<IProps> = ({
  property,
  isCardVertical = false,
}) => {
  const { isAuthenticated } = useAuth()
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [openCallModal, setOpenCallModal] = useState(false)
  const [openEmailModal, setOpenEmailModal] = useState(false)

  const { trigger: saveTrigger, isMutating: saveIsLoading } = useSWRMutation(
    propertyUrls.propertySave,
    sendPostRequest,
    {
      onSuccess: (data: { message: string }) => {
        if (data.message) {
          successToast(data.message)
        } else {
          warningToast('Property not saved')
        }
      },
      onError: () => {
        errorToast('An error occurred! Please try again.')
      },
    }
  )

  const handleSaveProperty = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    if (!isAuthenticated) {
      router.push(`/login?previousRoute=${pathName}?${searchParams.toString()}`)
    } else {
      saveTrigger({ property_id: property._id })
    }
  }

  const handleOpenCallModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setOpenCallModal(true)
  }

  const handleOpenEmailModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setOpenEmailModal(true)
  }

  return (
    <div
      className={classNames(
        isCardVertical
          ? 'max-w-xs'
          : 'grid grid-cols-1 gap-4 border-lightgray-100 md:grid-cols-[324px,1fr] md:border',
        'w-full overflow-hidden rounded-6xs font-ubuntu text-sm md:text-base'
      )}
      onClick={() => router.push(`/property/${property._id}`)}
    >
      <div className='relative h-[246px] w-full overflow-hidden md:w-[324px]'>
        <Image
          className='rounded-md'
          src={
            property.images?.length
              ? `${IMAGE_URL}${property.images[0]?.image}`
              : '/placeholder-image.png'
          }
          alt={property.title}
          fill
        />
      </div>
      <div
        className={classNames(
          'flex flex-col justify-between space-y-2',
          isCardVertical ? 'py-2' : 'md:px-4 md:py-4'
        )}
      >
        <h1 className='text-base md:text-lg'>
          BDT{' '}
          <span
            className={classNames(
              isCardVertical ? 'text-xl md:text-2xl' : 'text-xl md:text-3xl'
            )}
          >
            {formatPrice(property.price)}
          </span>
        </h1>
        <h1 className='text-base md:text-lg'>{property.address.city}</h1>
        <p className='font-light text-salmon'>{property.title}</p>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <BedIcon className='text-2xl' />
            <p className='text-base font-medium md:text-lg'>{property.bed}</p>
          </div>
          <div className='flex items-center gap-2'>
            <BathIcon className='text-base md:text-lg' />
            <p className='text-base font-medium md:text-lg'>{property.bath}</p>
          </div>
          <div className='flex items-center gap-2'>
            <AreaIcon className='text-2xl' />
            <p className='text-base font-medium md:text-lg'>
              {property.size} Sqft
            </p>
          </div>
        </div>
        <div className='relative flex flex-wrap items-center justify-between gap-2 pt-1 md:flex-nowrap'>
          <div className='flex w-full gap-x-2 font-ubuntu text-xs font-medium md:text-base'>
            <Button size='small' onClick={handleOpenCallModal}>
              <CallIcon className='text-base md:text-lg' />
              <p>Call</p>
            </Button>
            <Button size='small' onClick={handleOpenEmailModal}>
              <EmailIcon className='text-base md:text-lg' />
              <p className='font-ubuntu text-xs font-medium text-white md:text-base'>
                Email
              </p>
            </Button>
            <Button
              color='info'
              size='small'
              onClick={handleSaveProperty}
              isLoading={saveIsLoading}
            >
              <FavoriteIcon className='text-base md:text-lg' />
              <p className='font-ubuntu text-xs font-medium md:text-base'>
                Save
              </p>
            </Button>
          </div>
          <div
            className={classNames(
              'relative h-6 w-auto md:h-8',
              isCardVertical ? 'hidden' : 'hidden md:block'
            )}
          >
            <Image alt='Logo' src='/logoWithMange.png' fill />
          </div>
        </div>
      </div>
      <Modal openModal={openCallModal} setOpenModal={setOpenCallModal}>
        <PropertyCallCard
          setOpenModal={setOpenCallModal}
          reference={property.referenceNo}
        />
      </Modal>
      <Modal openModal={openEmailModal} setOpenModal={setOpenEmailModal}>
        <PropertyEmailCard
          setOpenModal={setOpenEmailModal}
          reference={property.referenceNo}
        />
      </Modal>
    </div>
  )
}

export default PropertyListPropertyCard
