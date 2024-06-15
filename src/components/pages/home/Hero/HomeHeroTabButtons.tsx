import FlyoutWrapper from '@/components/common/Flyout'
import PropertyPurposeFlyout from '@/components/common/Search/PropertyPurposeFlyout'
import { emptySelectOption } from '@/types/components/common'
import { IPropertyPurpose } from '@/types/pages/property'
import { purposeFilterOptions } from '@/types/propertyFilter'
import { DownArrowIcon } from '@/utils/icon'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import classNames from 'classnames'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'

interface IHomeHeroTabButtonsProps {
  propertyPurposeData?: IPropertyPurpose[]
  openSlideOver: boolean
  handleSlideOverOpen: () => void
  selectedPurpose: IPropertySearchState['selectedPurpose']
  setSelectedPurpose: (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => void
}

const HomeHeroTabButtons: NextPage<IHomeHeroTabButtonsProps> = ({
  propertyPurposeData,
  // openSlideOver,
  handleSlideOverOpen,
  selectedPurpose,
  setSelectedPurpose,
}) => {
  useEffect(() => {
    setSelectedPurpose({
      purpose: propertyPurposeData?.length
        ? {
            label: propertyPurposeData[0].purpose_title,
            value: propertyPurposeData[0].id.toString(),
          }
        : emptySelectOption,
      completion:
        propertyPurposeData?.length && propertyPurposeData[0].sub_purpose.length
          ? {
              label: propertyPurposeData[0].sub_purpose[0].purpose_title,
              value: propertyPurposeData[0].sub_purpose[0].id.toString(),
            }
          : emptySelectOption,
    })
  }, [propertyPurposeData])

  return (
    <div className='flex flex-wrap items-center justify-center gap-2.5 font-ubuntu text-sm font-light text-black sm:gap-4  md:text-base'>
      {/* for mobile  */}
      <div className='flex flex-wrap items-center justify-center gap-2.5 sm:hidden'>
        {propertyPurposeData?.map((purpose) => (
          <button
            key={purpose.id}
            className={classNames(
              'flex cursor-pointer items-center justify-center gap-1 rounded-3xs border border-white bg-white px-4 py-3 font-normal sm:font-light md:px-6 md:py-2',
              selectedPurpose.purpose.value !== purposeFilterOptions[0].value &&
                'bg-opacity-60'
            )}
            onClick={() => {
              setSelectedPurpose({
                purpose: {
                  label: purpose.purpose_title,
                  value: purpose.id.toString(),
                },
                completion: purpose.sub_purpose.length
                  ? {
                      label: purpose.sub_purpose[0].purpose_title,
                      value: purpose.sub_purpose[0].id.toString(),
                    }
                  : emptySelectOption,
              })
              handleSlideOverOpen()
            }}
          >
            {purpose.purpose_title}
          </button>
        ))}
        {/* <button
          className={classNames(
            'flex cursor-pointer items-center justify-center gap-1 rounded-3xs border border-white bg-white px-4 py-3 font-normal sm:font-light md:px-6 md:py-2',
            selectedPurpose.purpose.value !== purposeFilterOptions[0].value &&
              'bg-opacity-60'
          )}
          onClick={() => {
            setSelectedPurpose({
              purpose: purposeFilterOptions[0],
              completion: emptySelectOption,
            })
            handleSlideOverOpen()
          }}
        >
          For Buy
        </button>
        <button
          className={classNames(
            'flex items-center justify-center rounded-3xs border border-white bg-white px-4 py-3 font-normal sm:font-light md:px-6 md:py-2',
            selectedPurpose.purpose.value !== purposeFilterOptions[1].value &&
              'bg-opacity-60'
          )}
          onClick={() => {
            setSelectedPurpose({
              purpose: purposeFilterOptions[1],
              completion: emptySelectOption,
            })
            handleSlideOverOpen()
          }}
        >
          For Rent
        </button> */}
      </div>
      <div className='hidden flex-wrap items-center justify-center gap-2.5 sm:flex sm:gap-4 '>
        {propertyPurposeData?.map((purpose) => (
          <>
            {purpose.sub_purpose.length ? (
              <FlyoutWrapper
                key={purpose.id}
                direction='right'
                flyoutContent={(close: () => void) => (
                  <PropertyPurposeFlyout
                    currentPurpose={purpose}
                    purposeData={propertyPurposeData}
                    close={close}
                    selectedPurpose={selectedPurpose}
                    setSelectedPurpose={setSelectedPurpose}
                  />
                )}
              >
                <div
                  className={classNames(
                    'flex cursor-pointer items-center justify-center gap-1 rounded-3xs border border-white bg-white px-4 py-3 md:px-6 md:py-2',
                    selectedPurpose.purpose.value !== purpose.id.toString() &&
                      'bg-opacity-60'
                  )}
                >
                  {purpose.purpose_title}
                  {!!purpose.sub_purpose.length && <DownArrowIcon />}
                </div>
              </FlyoutWrapper>
            ) : (
              <button
                className={classNames(
                  'flex items-center justify-center rounded-3xs border border-white bg-white px-4 py-3 md:px-6 md:py-2',
                  selectedPurpose.purpose.value !== purpose.id.toString() &&
                    'bg-opacity-60'
                )}
                onClick={() =>
                  setSelectedPurpose({
                    purpose: {
                      label: purpose.purpose_title,
                      value: purpose.id.toString(),
                    },
                    completion: emptySelectOption,
                  })
                }
              >
                For Rent
              </button>
            )}
          </>
        ))}

        {/* <FlyoutWrapper
          direction='right'
          flyoutContent={(close: () => void) => (
            <PropertyPurposeFlyout
              close={close}
              selectedPurpose={selectedPurpose}
              setSelectedPurpose={setSelectedPurpose}
              hidePurposeTabs
            />
          )}
        >
          <div
            className={classNames(
              'flex cursor-pointer items-center justify-center gap-1 rounded-3xs border border-white bg-white px-4 py-3 md:px-6 md:py-2',
              selectedPurpose.purpose.value !== purposeFilterOptions[0].value &&
                'bg-opacity-60'
            )}
          >
            For Buy
            <DownArrowIcon />
          </div>
        </FlyoutWrapper> */}
        {/* <button
          className={classNames(
            'flex items-center justify-center rounded-3xs border border-white bg-white px-4 py-3 md:px-6 md:py-2',
            selectedPurpose.purpose.value !== purposeFilterOptions[1].value &&
              'bg-opacity-60'
          )}
          onClick={() =>
            setSelectedPurpose({
              purpose: purposeFilterOptions[1],
              completion: emptySelectOption,
            })
          }
        >
          For Rent
        </button> */}
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 '>
        <Link href='/services/interior'>
          <button className='flex items-center justify-center rounded-3xs border border-white bg-white bg-opacity-60 px-4 py-3 font-normal sm:font-light md:px-6 md:py-2'>
            Interior
          </button>
        </Link>
        <Link href='/services/renovation'>
          <button className='flex items-center justify-center rounded-3xs border border-white bg-white bg-opacity-60 px-4 py-3 font-normal sm:font-light md:px-6 md:py-2'>
            Renovation
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomeHeroTabButtons
