import { setSelectedPurpose } from '@/features/propertySearchSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { propertyPurposeData } from '@/utils/data/property'
import React from 'react'
import { useDispatch } from 'react-redux'
import BoxTabsUpdate from '../BoxTabsUpdate'

const CompletionFilter: React.FC = () => {
  const dispatch = useDispatch()
  const selectedPurpose = useAppSelector(
    (state) => state.propertySearch.selectedPurpose
  )

  const setPurpose = (selectedTab: ISelectOption) => {
    dispatch(
      setSelectedPurpose({
        purpose: selectedPurpose.purpose,
        completion: selectedTab,
      })
    )
  }

  return (
    <div className='overflow-hidden text-black'>
      <h2 className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'>
        Status:
      </h2>
      <div className='flex flex-wrap gap-x-2 gap-y-3 overflow-x-auto'>
        <BoxTabsUpdate
          selectedTab={selectedPurpose.completion}
          setSelectedTab={setPurpose}
          tabs={
            propertyPurposeData
              .find(
                (purpose) =>
                  purpose.id.toString() === selectedPurpose.purpose.value
              )
              ?.sub_purpose.map((subPurpose) => ({
                label: subPurpose.purpose_title,
                value: subPurpose.id.toString(),
              })) || []
          }
          size='small'
        />
      </div>
    </div>
  )
}

export default CompletionFilter
