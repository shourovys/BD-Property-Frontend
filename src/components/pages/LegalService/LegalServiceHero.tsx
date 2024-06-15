import { ILegalService } from '@/types/pages/service'
import Image from 'next/image'
import LegalServiceApplyButton from './LegalServiceApplyButton'

interface IProps {
  data: ILegalService
}

const LegalServiceHero: React.FC<IProps> = ({ data }) => {
  return (
    <div className='relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden text-left font-ubuntu text-white md:min-h-[70vh]'>
      {data.background_img && (
        <Image
          src={data.background_img}
          alt=''
          layout='fill'
          objectFit='cover'
        />
      )}
      <div className='relative flex w-fit flex-col items-center justify-center space-y-4 px-4 text-center md:space-y-6 md:px-8 md:text-left'>
        <div className='relative space-y-1 border-l-8 border-salmon bg-black bg-opacity-40 p-4 text-center md:px-10 md:py-8'>
          <h2 className='text-2xl font-medium uppercase md:text-4xl'>
            {data.title}
          </h2>
          <p className='text-base sm:text-lg md:text-xl'>{data.moto}</p>
        </div>
        <LegalServiceApplyButton allServices={data.legal_allservices} />
      </div>
    </div>
  )
}

export default LegalServiceHero
