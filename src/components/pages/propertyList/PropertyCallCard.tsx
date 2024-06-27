import { CallIcon, CloseIcon } from '@/utils/icon'

interface IProps {
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  reference: string
}

const PropertyCallCard: React.FC<IProps> = ({ handleClose, reference }) => {
  return (
    <div className='relative w-full max-w-xs space-y-2 rounded-lg bg-white p-4 text-center shadow-md md:space-y-4 md:p-6'>
      <button onClick={handleClose}>
        <CloseIcon className='absolute right-4 top-4 cursor-pointer text-xl text-gray-500 hover:text-gray-700' />
      </button>
      <h2 className='text-xl font-semibold'>Contact Us</h2>
      <p className='text-gray-900'>BD-Property</p>
      <div className='flex items-center justify-center gap-2 text-xl font-bold md:gap-4 '>
        <CallIcon className='h-10 w-10 rounded-full bg-green-100 p-2 text-[#249F62]' />
        <p className='text-[#006169]'>+88-0xxxxxxxx</p>
      </div>
      <div className='space-y-0.5 border-t border-lightgray-100 pt-2 md:pt-4'>
        <p className='text-gray-600'>Please quote property reference</p>
        <p className='font-semibold '>{reference}</p>
        <p className='text-gray-600'>when calling us.</p>
      </div>
    </div>
  )
}

export default PropertyCallCard
