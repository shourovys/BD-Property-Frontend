import {
  resetSelectedPurpose,
  setSelectedPurpose,
} from '@/features/propertySearchSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import { IPropertyPurpose, IPropertySubPurpose } from '@/types/pages/property'
import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import ApplyAndResetButtons from './ApplyAndResetButtons'

export const RenderPropertySubPurposes = ({
  subPurpose,
  handleSubPurposeClick,
}: {
  subPurpose: IPropertyPurpose['subPurpose']
  handleSubPurposeClick: (subPurpose: IPropertySubPurpose) => void
}) => {
  const selectedPurpose = useAppSelector(
    (state) => state.propertySearch.selectedPurpose
  )
  return (
    <div className='space-y-2'>
      <h2 className='text-base font-normal'>Completion Status</h2>
      <div className='flex flex-wrap gap-2'>
        {subPurpose.map((sub) => (
          <p
            key={sub.id}
            onClick={() => handleSubPurposeClick(sub)}
            className={classNames(
              sub.id.toString() === selectedPurpose.completion.value
                ? 'bg-cornflowerblue'
                : '',
              'flex w-fit cursor-pointer items-center justify-center rounded-8xs border border-darkslateblue-100 px-3'
            )}
            aria-current={
              sub.id.toString() === selectedPurpose.completion.value
                ? 'page'
                : undefined
            }
          >
            {sub.title}
          </p>
        ))}
      </div>
    </div>
  )
}

interface IProps {
  currentPurpose: IPropertyPurpose
  close: () => void
}

const PropertySubPurposeFlyout: React.FC<IProps> = ({
  currentPurpose,
  close,
}) => {
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

  const handleSubPurposeClick = (subPurpose: IPropertySubPurpose) => {
    dispatch(
      setSelectedPurpose({
        purpose: {
          label: currentPurpose.title,
          value: currentPurpose.id.toString(),
        },
        completion: {
          label: subPurpose.title,
          value: subPurpose.id.toString(),
        },
      })
    )
    close()
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4 text-black'>
      <RenderPropertySubPurposes
        subPurpose={currentPurpose.subPurpose}
        handleSubPurposeClick={handleSubPurposeClick}
      />
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default PropertySubPurposeFlyout
