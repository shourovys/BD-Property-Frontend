import { ISelectOption, emptySelectOption } from '@/types/components/common'
import { IPropertyType } from '@/types/pages/property'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import React from 'react'
import TabsUpdate from '../TabsUpdate'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface LookingForFlyoutProps {
  propertyTypeData: IPropertyType[]
  close: () => void
  selectedPropertyType: IPropertySearchState['selectedPropertyType']
  setSelectedPropertyType: (
    propertyType: IPropertySearchState['selectedPropertyType']
  ) => void
}

const LookingForFlyout: React.FC<LookingForFlyoutProps> = ({
  propertyTypeData,
  close,
  selectedPropertyType,
  setSelectedPropertyType,
}) => {
  const setSelectedTab = (selectedTab: ISelectOption) => {
    setSelectedPropertyType({ type: selectedTab, subType: emptySelectOption })
  }

  const handleReset = () => {
    const initPropertyType = {
      type: propertyTypeData.length
        ? {
            label: propertyTypeData[0].type,
            value: propertyTypeData[0].id.toString(),
          }
        : emptySelectOption,
      subType: emptySelectOption,
    }
    setSelectedPropertyType(initPropertyType)
  }

  const handleApply = () => {
    close() // Close the flyout after applying selections
  }

  return (
    <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4'>
      <TabsUpdate
        tabs={propertyTypeData.map((type) => ({
          label: type.type,
          value: type.id.toString(),
        }))}
        fullWidth
        selectedTab={selectedPropertyType.type}
        setSelectedTab={setSelectedTab}
      />
      <div className='grid grid-cols-2 justify-items-stretch gap-3'>
        {propertyTypeData
          .find(
            (type) => type.id.toString() === selectedPropertyType.type.value
          )
          ?.property_sub_type.map((subType) => (
            <p
              key={subType.id}
              onClick={() => {
                setSelectedPropertyType({
                  type: selectedPropertyType.type,
                  subType: {
                    label: subType.sub_type,
                    value: subType.id.toString(),
                  },
                })
                close()
              }}
              className={`w-full cursor-pointer rounded-xl border px-3 py-1 text-center ${
                selectedPropertyType.subType.value === subType.id.toString()
                  ? 'border-darkslateblue-100 bg-darkslateblue-300 font-normal text-darkslateblue-100'
                  : 'border-gray-200 font-light'
              }`}
            >
              {subType.sub_type}
            </p>
          ))}
      </div>
      <ApplyAndResetButtons onApply={handleApply} onReset={handleReset} />
    </div>
  )
}

export default LookingForFlyout
