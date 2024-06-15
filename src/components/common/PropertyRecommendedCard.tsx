import { sendPostRequest } from '@/api/swrConfig'
import { propertyUrls } from '@/api/urls/propertyUrls'
import useAuth from '@/hooks/useAuth'
import { IMAGE_URL } from '@/utils/config'
import { FavoriteIcon } from '@/utils/icon'
import { errorToast, successToast, warningToast } from '@/utils/toast'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import useSWRMutation from 'swr/mutation'

interface RecommendedCardProps {
  id: string
  imageSrc: string
  price: string
  location: string
  bedCount: number
  bathCount: number
  area: string
}

const RecommendedCard: React.FC<RecommendedCardProps> = ({
  id,
  imageSrc,
  price,
  location,
  bedCount,
  bathCount,
  area,
}) => {
  const { isAuthenticated } = useAuth()
  const pathName = usePathname()
  const router = useRouter()

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
    saveTrigger({ property_id: id })
  }

  return (
    <div className='w-full overflow-hidden text-left font-ubuntu text-sm text-black md:text-base'>
      <div className='relative h-[285px] '>
        <button
          onClick={saveProperty}
          className='absolute right-4 top-4 z-10 rounded-full text-gray-500 text-white hover:text-gray-700'
        >
          <FavoriteIcon className='h-6 w-6' />
        </button>
        <Image
          className='w-full rounded-lg object-cover'
          alt=''
          src={IMAGE_URL + imageSrc}
          fill
        />
      </div>
      <div className='space-y-2 px-3 py-2'>
        <div className='flex items-center justify-between'>
          <div className='font-medium'>
            BDT &nbsp;
            <span className='text-xl font-medium lg:text-2xl'>{price}</span>
          </div>
        </div>
        <div className='font-medium'>{location}</div>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center'>
            <img className='h-4 w-6' alt='' src='/icon-awesomebed.svg' />
            <span className='ml-1 font-light'>{bedCount}</span>
          </div>
          <div className='flex items-center'>
            <img className='h-5 w-5' alt='' src='/icon-awesomebath.svg' />
            <span className='ml-1 font-light'>{bathCount}</span>
          </div>
          <div className='flex items-center font-light'>
            <img className='mr-1 h-4 w-4' alt='' src='/group-10.svg' />
            <span>{area} Sqft</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendedCard
