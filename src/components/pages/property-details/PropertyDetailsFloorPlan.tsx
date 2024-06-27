import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'

interface IProps {
  floorPlans: string
}

const PropertyDetailsFloorPlan: React.FC<IProps> = ({ floorPlans }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)

    // Enable or disable body scrolling
    // document.body.style.overflow = isFullScreen ? 'auto' : 'hidden'
  }

  return (
    <div
      id='floorPlan'
      className={`space-y-4 pt-10 font-inter text-sm text-black md:pt-8 md:text-base lg:pt-16`}
    >
      <h2 className='font-inter text-xl font-medium md:text-2xl'>
        Floor Plans
      </h2>

      <div
        className={`mt-2 flex w-full items-center justify-center overflow-hidden rounded-lg p-3`}
        onClick={toggleFullScreen}
      >
        <div
          className={classNames(
            // isFullScreen ? 'w-full' : 'h-full w-full max-w-md',
            'relative aspect-square h-[50vh]'
          )}
        >
          <Image
            className={`transform transition duration-300`}
            src='/Floor_Plan.jpeg'
            alt='Floor Plan'
            fill
          />
        </div>
        {/* {isFullScreen && (
            <button
              className='absolute p-2 text-white bg-gray-800 rounded-full right-4 top-4'
              onClick={toggleFullScreen}
            >
              Minimize
            </button>
          )} */}
      </div>
    </div>
  )
}

export default PropertyDetailsFloorPlan
