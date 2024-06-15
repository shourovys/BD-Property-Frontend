import { ISelectOption, emptySelectOption } from '@/types/components/common'
import { IPropertyPurpose } from '@/types/pages/property'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import classNames from 'classnames'
import React from 'react'
import BoxTabsUpdate from '../BoxTabsUpdate'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface IProps {
  purposeData: IPropertyPurpose[]
  close: () => void
  selectedPurpose: IPropertySearchState['selectedPurpose']
  setSelectedPurpose: (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => void
}

const PropertyPurposeSubPurposeFlyout: React.FC<IProps> = ({
  purposeData,
  close,
  selectedPurpose,
  setSelectedPurpose,
}) => {
  const handleReset = () => {
    setSelectedPurpose({
      purpose: {
        label: purposeData[0].purpose_title,
        value: purposeData[0].id.toString(),
      },
      completion: purposeData[0].sub_purpose.length
        ? {
            label: purposeData[0].sub_purpose[0].purpose_title,
            value: purposeData[0].sub_purpose[0].id.toString(),
          }
        : emptySelectOption,
    })
  }

  const handleApply = () => {
    close() // Close the flyout after applying selections
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4 text-black'>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Purpose</h2>
        <BoxTabsUpdate
          tabs={purposeData.map((purpose) => ({
            label: purpose.purpose_title,
            value: purpose.id.toString(),
          }))}
          selectedTab={selectedPurpose.purpose}
          setSelectedTab={(selectedTab: ISelectOption) =>
            setSelectedPurpose({ ...selectedPurpose, purpose: selectedTab })
          }
        />
      </div>
      <div className='space-y-2'>
        <h2 className='text-base font-normal'>Completion Status</h2>
        <div className='flex flex-wrap gap-2'>
          {purposeData
            .find(
              (purpose) =>
                purpose.id.toString() === selectedPurpose.purpose.value
            )
            ?.sub_purpose.map((subPurpose) => (
              <p
                key={subPurpose.id}
                onClick={() => {
                  setSelectedPurpose({
                    purpose: selectedPurpose.purpose,
                    completion: {
                      label: subPurpose.purpose_title,
                      value: subPurpose.id.toString(),
                    },
                  })
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
                {subPurpose.purpose_title}
              </p>
            ))}
        </div>
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default PropertyPurposeSubPurposeFlyout
