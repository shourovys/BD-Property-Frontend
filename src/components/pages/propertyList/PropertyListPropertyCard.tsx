import { sendPostRequest } from '@/api/swrConfig'
import { propertyUrls } from '@/api/urls/propertyUrls'
import Modal from '@/components/HOC/Modal'
import Button from '@/components/atomic/Button'
import useAuth from '@/hooks/useAuth'
import { IListPropertyResponse } from '@/types/pages/property'
import { SITE_PAGES } from '@/utils/config'
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
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'
import PropertyCallCard from './PropertyCallCard'
import PropertyEmailCard from './PropertyEmailCard'

interface IProps {
  property: IListPropertyResponse
  isCardVertical?: boolean
}

const PropertyListPropertyCard: NextPage<IProps> = ({
  property,
  isCardVertical,
}) => {
  const { isAuthenticated } = useAuth()
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [openCallModal, setOpenCallModal] = useState(false)
  const [openEmailModal, setOpenEmailModal] = useState(false)

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
      router.push(`/login?previousRoute=${pathName}?${searchParams.toString()}`)
    }
    saveTrigger({ property_id: property.id })
  }
  return (
    <Link href={`/property/${property.id}`}>
      <div
        className={classNames(
          isCardVertical
            ? 'max-w-xs'
            : 'grid grid-cols-1 gap-4 border-darkslateblue-200 md:grid-cols-[324px,1fr] md:border',
          'w-full overflow-hidden rounded-6xs font-ubuntu text-sm md:text-base'
        )}
      >
        <div className='relative h-[246px] w-full overflow-hidden md:w-[324px]'>
          <Image
            className='rounded-md'
            src={
              property.property_images?.length
                ? property.property_images[0]?.image
                : ''
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
          <h1 className='text-base md:text-lg'>
            {property.property_address.city}
          </h1>
          <p className='font-light text-salmon'>{property.title}</p>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <BedIcon className='text-2xl' />
              <p className='text-base font-medium md:text-lg'>{property.bed}</p>
            </div>
            <div className='flex items-center gap-2'>
              <BathIcon className='text-base md:text-lg' />
              <p className='text-base font-medium md:text-lg'>
                {property.bath}
              </p>
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
              <Button size='small' onClick={() => setOpenCallModal(true)}>
                <CallIcon className='text-base md:text-lg' />
                <p className=''>Call</p>
              </Button>
              <Button size='small' onClick={() => setOpenEmailModal(true)}>
                <EmailIcon className='text-base md:text-lg' />
                <p className='font-ubuntu text-xs font-medium text-white md:text-base'>
                  Email
                </p>
              </Button>
              {isAuthenticated ? (
                <Button
                  color='info'
                  size='small'
                  onClick={saveProperty}
                  isLoading={saveIsLoading}
                >
                  <FavoriteIcon className='text-base md:text-lg' />
                  <p className='font-ubuntu text-xs font-medium md:text-base '>
                    Save
                  </p>
                </Button>
              ) : (
                <Button
                  link={SITE_PAGES.loginPageWithPrevious(pathName)}
                  color='info'
                  size='small'
                >
                  <FavoriteIcon className='text-base md:text-lg' />
                  <p className='font-ubuntu text-xs font-medium md:text-base '>
                    Save
                  </p>
                </Button>
              )}
            </div>
            <div
              className={classNames(
                'relative h-10 w-fit md:h-14',
                isCardVertical ? 'hidden' : 'hidden md:block '
              )}
            >
              <Image alt='' src='/logoWithMange.png' fill />
            </div>
          </div>
        </div>
      </div>
      <Modal openModal={openCallModal} setOpenModal={setOpenCallModal}>
        <PropertyCallCard
          setOpenModal={setOpenCallModal}
          reference={property.reference_no}
        />
      </Modal>
      <Modal openModal={openEmailModal} setOpenModal={setOpenEmailModal}>
        <PropertyEmailCard
          setOpenModal={setOpenEmailModal}
          reference={property.reference_no}
        />
      </Modal>
    </Link>
  )
}

export default PropertyListPropertyCard
