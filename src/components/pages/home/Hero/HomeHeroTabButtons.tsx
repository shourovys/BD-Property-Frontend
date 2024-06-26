import FlyoutWrapper from '@/components/common/Flyout'
import PropertySubPurposeFlyout from '@/components/common/Search/PropertySubPurposeFlyout'
import {
  setSelectedPurpose,
  setSelectedPurposeWithSub,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { propertyPurposeData } from '@/utils/data/property'
import { DownArrowIcon } from '@/utils/icon'
import classNames from 'classnames'
import type { NextPage } from 'next'
import Link from 'next/link'

interface IHomeHeroTabButtonsProps {
  handleSlideOverOpen: () => void
}

const HomeHeroTabButtons: NextPage<IHomeHeroTabButtonsProps> = ({
  handleSlideOverOpen,
}) => {
  const { selectedPurpose } = useAppSelector((state) => state.propertySearch)
  const dispatch = useAppDispatch()

  return (
    <div className='flex flex-wrap items-center justify-center gap-2.5 font-ubuntu text-sm font-light text-black sm:gap-4  md:text-base'>
      {/* for mobile  */}
      <div className='flex flex-wrap items-center justify-center gap-2.5 sm:hidden'>
        {propertyPurposeData?.map((purpose) => (
          <button
            key={purpose.id}
            className={classNames(
              'flex cursor-pointer items-center justify-center gap-1 rounded-3xs border border-white bg-white px-4 py-3 font-normal sm:font-light md:px-6 md:py-2',
              selectedPurpose.purpose.value !== purpose.id && 'bg-opacity-60'
            )}
            onClick={() => {
              dispatch(
                setSelectedPurpose({
                  label: purpose.title,
                  value: purpose.id,
                })
              )
              handleSlideOverOpen()
            }}
          >
            {purpose.title}
          </button>
        ))}
      </div>
      <div className='hidden flex-wrap items-center justify-center gap-2.5 sm:flex sm:gap-4 '>
        {propertyPurposeData?.map((purpose, index) => (
          <>
            {
              // purpose.subPurpose.length
              index === 0 ? (
                <FlyoutWrapper
                  key={purpose.id}
                  direction='right'
                  flyoutContent={(close) => (
                    <PropertySubPurposeFlyout
                      currentPurpose={purpose}
                      close={close}
                    />
                  )}
                >
                  <div
                    className={classNames(
                      'flex cursor-pointer items-center justify-center gap-1 rounded-3xs border border-white bg-white px-4 py-3 md:px-6 md:py-2',
                      selectedPurpose.purpose.value !== purpose.id &&
                        'bg-opacity-60'
                    )}
                    onClick={() =>
                      dispatch(
                        setSelectedPurpose({
                          label: purpose.title,
                          value: purpose.id,
                        })
                      )
                    }
                  >
                    {purpose.title}
                    <DownArrowIcon />
                  </div>
                </FlyoutWrapper>
              ) : (
                <button
                  className={classNames(
                    'flex items-center justify-center rounded-3xs border border-white bg-white px-4 py-3 md:px-6 md:py-2',
                    selectedPurpose.purpose.value !== purpose.id &&
                      'bg-opacity-60'
                  )}
                  onClick={() =>
                    dispatch(
                      setSelectedPurposeWithSub({
                        purpose: {
                          label: purpose.title,
                          value: purpose.id,
                        },
                        completion: {
                          label: purpose.subPurpose[0].title,
                          value: purpose.subPurpose[0].id,
                        },
                      })
                    )
                  }
                >
                  {purpose.title}
                </button>
              )
            }
          </>
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 '>
        <Link href='/services/interior'>
          <button className='flex items-center justify-center rounded-3xs border border-white bg-white bg-opacity-60 px-4 py-3 font-normal sm:font-light md:px-6 md:py-2'>
            Interior
          </button>
        </Link>
        <Link href='/services/interior'>
          <button className='flex items-center justify-center rounded-3xs border border-white bg-white bg-opacity-60 px-4 py-3 font-normal sm:font-light md:px-6 md:py-2'>
            Renovation
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomeHeroTabButtons
