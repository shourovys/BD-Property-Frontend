import React from 'react'

interface IProps {
  handleOpenEmailModal: () => void
  handleOpenCallModal: () => void
}

const CardActions: React.FC<IProps> = ({
  handleOpenEmailModal,
  handleOpenCallModal,
}) => {
  return (
    <div className='flex w-full flex-col items-center space-y-2 rounded-3xs border-[0.5px] border-dimgray bg-white px-6 py-4 font-ubuntu text-sm md:text-base'>
      <img className='h-6 w-auto md:h-8' alt='' src='/logoWithMange.png' />
      <p className='pb-2 font-inter'>bd-property.com</p>
      <div className='grid w-full grid-cols-2 gap-2'>
        <div className='relative h-9 w-full'>
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
        <div className='relative h-9 w-full'>
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
  )
}

export default CardActions
