import { IPropertyPurpose } from '@/types/pages/property'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import React from 'react'
import BoxTabsUpdate from '../BoxTabsUpdate'

interface IProps {
  propertyPurposeData: IPropertyPurpose[]
  selectedPurpose: IPropertySearchState['selectedPurpose']
  setSelectedPurpose: (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => void
}

const CompletionFilter: React.FC<IProps> = ({
  propertyPurposeData,
  selectedPurpose,
  setSelectedPurpose,
}) => {
  console.log(
    propertyPurposeData
      .find(
        (purpose) => purpose.id.toString() === selectedPurpose.purpose.value
      )
      ?.sub_purpose.map((subPurpose) => ({
        label: subPurpose.purpose_title,
        value: subPurpose.id.toString(),
      }))
  )
  return (
    <div className='overflow-hidden text-black'>
      <h2 className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'>
        {/* {selectedPurpose.purpose.value === purposeFilterOptions[0].value
          ? 'Completion Status'
          : 'Occupancy Status'} */}
        Status:
      </h2>
      <div className='flex flex-wrap gap-x-2 gap-y-3 overflow-x-auto'>
        <BoxTabsUpdate
          selectedTab={selectedPurpose.completion}
          setSelectedTab={(selectedTab) =>
            setSelectedPurpose({
              purpose: selectedPurpose.purpose,
              completion: selectedTab,
            })
          }
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
