import BoxTabsUpdate from '@/components/common/BoxTabsUpdate'
import { setSelectedPurpose } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { propertyPurposeData } from '@/utils/data/property'
import React from 'react'

const PropertySubPurposeFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const selectedPurpose = useAppSelector(
    (state) => state.propertySearch.selectedPurpose
  )

  const handleTabChange = (selectedTab: ISelectOption) => {
    dispatch(
      setSelectedPurpose({
        purpose: selectedPurpose.purpose,
        completion: selectedTab,
      })
    )
  }

  return (
    <BoxTabsUpdate
      selectedTab={selectedPurpose.completion}
      setSelectedTab={handleTabChange}
      tabs={
        propertyPurposeData
          .find(
            (purpose) => purpose.id.toString() === selectedPurpose.purpose.value
          )
          ?.subPurpose.map((subPurpose) => ({
            label: subPurpose.title,
            value: subPurpose.id.toString(),
          })) || []
      }
      size='small'
    />
  )
}

export default PropertySubPurposeFilter
