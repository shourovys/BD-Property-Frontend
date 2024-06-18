import {
  resetSelectedPurpose,
  setSelectedPurpose,
} from '@/features/propertySearchSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { IPropertyPurpose, IPropertySubPurpose } from '@/types/pages/property'
import { propertyPurposeData } from '@/utils/data/property'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import BoxTabsUpdate from '../BoxTabsUpdate'
import ApplyAndResetButtons from './ApplyAndResetButtons'
import { RenderPropertySubPurposes } from './PropertySubPurposeFlyout'

interface IProps {
  close: () => void
}

const PropertyPurposeSubPurposeFlyout: React.FC<IProps> = ({ close }) => {
  const dispatch = useDispatch()
  const selectedPurpose = useAppSelector(
    (state) => state.propertySearch.selectedPurpose
  )

  const handleReset = () => dispatch(resetSelectedPurpose())

  const purposeOptions = propertyPurposeData.map(
    (purpose: IPropertyPurpose) => ({
      label: purpose.title,
      value: purpose.id.toString(),
    })
  )

  const selectedPurposeData = useMemo(
    () =>
      propertyPurposeData.find(
        (purpose: IPropertyPurpose) =>
          purpose.id === selectedPurpose.purpose.value
      ),
    [selectedPurpose.purpose.value]
  )

  const handlePurposeTabSelect = (selectedTab: ISelectOption) => {
    dispatch(setSelectedPurpose({ ...selectedPurpose, purpose: selectedTab }))
  }

  const handleSubPurposeClick = (subPurpose: IPropertySubPurpose) => {
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
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4 text-black'>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Purpose</h2>
        <BoxTabsUpdate
          tabs={purposeOptions}
          selectedTab={selectedPurpose.purpose}
          setSelectedTab={handlePurposeTabSelect}
        />
      </div>
      <RenderPropertySubPurposes
        subPurpose={selectedPurposeData?.subPurpose || []}
        handleSubPurposeClick={handleSubPurposeClick}
      />
      <ApplyAndResetButtons onApply={close} onReset={handleReset} />
    </div>
  )
}

export default PropertyPurposeSubPurposeFlyout
