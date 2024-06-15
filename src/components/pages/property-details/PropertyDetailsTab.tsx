import {
  Feature,
  FloorIcon,
  LoancalCulator,
  NearByLoc,
  Overview,
} from '@/utils/icon'
import classNames from 'classnames'
import type { NextPage } from 'next'
import { Link } from 'react-scroll'

const tabData = [
  { id: 'overview', name: 'Overview', icon: Overview },
  { id: 'feature', name: 'Feature', icon: Feature },
  { id: 'floorPlan', name: 'Floor Plan', icon: FloorIcon },
  { id: 'loanCalculator', name: 'Loan Calculator', icon: LoancalCulator },
  // { id: 'lifestyle', name: 'Lifestyle', icon: LifeStyle },
  { id: 'nearByLoc', name: 'Near By Location', icon: NearByLoc },
]

interface IProps {
  isComponentScrolledOut: boolean
  handleOpenEmailModal: () => void
  handleOpenCallModal: () => void
}

const PropertyDetailsTabs: NextPage<IProps> = ({
  isComponentScrolledOut,
  handleOpenEmailModal,
  handleOpenCallModal,
}) => {
  return (
    <div
      className={classNames(
        'z-40 w-screen border-b border-gray-200 bg-white',
        isComponentScrolledOut ? 'fixed top-0' : 'hidden'
      )}
    >
      <div
        className={classNames(
          'custom_screen_width mx-auto flex w-full gap-2 px-4 font-ubuntu text-sm font-medium text-black md:text-base 2xl:px-0'
        )}
      >
        <div
          className={classNames(
            'mx-auto -mb-1 flex w-full items-center gap-5 overflow-x-auto p-1 md:gap-6'
          )}
        >
          {tabData.map((tab) => (
            <Link
              key={tab.id}
              to={tab.id}
              smooth={true}
              spy={true}
              duration={500}
              offset={-15}
              className='cursor-pointer border-b-2 border-white text-gray-200'
              activeClass=' text-salmon border-b-2 border-salmon'
            >
              <ul className='flex min-w-max items-center gap-1.5 border-b-2 border-white py-2  md:py-3'>
                <tab.icon className='text-lg md:text-xl' />
                {tab.name}
              </ul>
            </Link>
          ))}
        </div>
        <div className='hidden min-h-max w-full max-w-[300px] items-center gap-2 md:flex'>
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
    </div>
  )
}

export default PropertyDetailsTabs
