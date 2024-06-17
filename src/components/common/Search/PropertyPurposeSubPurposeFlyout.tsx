import {
  resetSelectedPurpose,
  setSelectedPurpose,
} from '@/features/propertySearchSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { propertyPurposeData } from '@/utils/data/property'
import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import BoxTabsUpdate from '../BoxTabsUpdate'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  close: () => void
}

const PropertyPurposeSubPurposeFlyout: React.FC<IProps> = ({ close }) => {
  const dispatch = useDispatch()
  const selectedPurpose = useAppSelector(
    (state) => state.propertySearch.selectedPurpose
  )

  const handleReset = () => {
    dispatch(resetSelectedPurpose())
  }

  const handleApply = () => {
    close() // Close the flyout after applying selections
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4 text-black'>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Purpose</h2>
        <BoxTabsUpdate
          tabs={propertyPurposeData.map((purpose) => ({
            label: purpose.title,
            value: purpose.id.toString(),
          }))}
          selectedTab={selectedPurpose.purpose}
          setSelectedTab={(selectedTab: ISelectOption) =>
            dispatch(
              setSelectedPurpose({ ...selectedPurpose, purpose: selectedTab })
            )
          }
        />
      </div>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Completion Status</h2>
        <div className='flex flex-wrap gap-2'>
          {propertyPurposeData
            .find(
              (purpose) =>
                purpose.id.toString() === selectedPurpose.purpose.value
            )
            ?.subPurpose.map((subPurpose) => (
              <p
                key={subPurpose.id}
                onClick={() => {
                  dispatch(
                    setSelectedPurpose({
                      purpose: selectedPurpose.purpose,
                      completion: {
                        label: subPurpose.title,
                        value: subPurpose.id.toString(),
                      },
                    })
                  )
                  close()
                }}
                className={classNames(
                  subPurpose.id.toString() === selectedPurpose.completion.value
                    ? 'bg-cornflowerblue'
                    : '',
                  'flex w-fit cursor-pointer items-center justify-center rounded-8xs border border-darkslateblue-100 px-3'
                )}
                aria-current={
                  subPurpose.id.toString() === selectedPurpose.completion.value
                    ? 'page'
                    : undefined
                }
              >
                {subPurpose.title}
              </p>
            ))}
        </div>
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default PropertyPurposeSubPurposeFlyout
