import { ISelectOption, emptySelectOption } from '@/types/components/common'
import { IPropertyType } from '@/types/pages/property'
import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import React from 'react'
import BoxTabsUpdate from '../BoxTabsUpdate'

interface LookingForProps {
  propertyTypeData: IPropertyType[]
  selectedPropertyType: IPropertySearchState['selectedPropertyType']
  setSelectedPropertyType: (
    propertyType: IPropertySearchState['selectedPropertyType']
  ) => void
}

const LookingForFilter: React.FC<LookingForProps> = ({
  propertyTypeData,
  selectedPropertyType,
  setSelectedPropertyType,
}) => {
  const setSelectedTab = (selectedTab: ISelectOption) => {
    setSelectedPropertyType({ type: selectedTab, subType: emptySelectOption })
  }
  return (
    <div className=''>
      <label className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'>
        Property Type
      </label>
      <BoxTabsUpdate
        tabs={propertyTypeData.map((type) => ({
          label: type.type,
          value: type.id.toString(),
        }))}
        selectedTab={selectedPropertyType.type}
        setSelectedTab={setSelectedTab}
      />
      <div className='mt-4 flex items-center justify-center gap-6 overflow-x-scroll'>
        {propertyTypeData
          .find(
            (type) => type.id.toString() === selectedPropertyType.type.value
          )
          ?.property_sub_type.map((subType) => (
            <div
              key={subType.id}
              onClick={() => {
                setSelectedPropertyType({
                  type: selectedPropertyType.type,
                  subType: {
                    label: subType.sub_type,
                    value: subType.id.toString(),
                  },
                })
              }}
              className='flex flex-col items-center justify-center gap-1.5 px-2'
            >
              <div className='aspect-square w-10'>
                {/* <subType.icon
                  className={`h-full w-full cursor-pointer rounded-full border p-1 ${
                    selectedPropertyType.subType.value === subType.id.toString()
                      ? 'border-darkslateblue-100 bg-darkslateblue-300 text-darkslateblue-100'
                      : 'text border-gray-200 text-gray-200'
                  }`}
                /> */}
              </div>
              <p
                className={`text-xs md:text-sm${
                  selectedPropertyType.subType.value === subType.id.toString()
                    ? 'font-normal text-darkslateblue-100'
                    : 'font-light text-black'
                }`}
              >
                {subType.sub_type}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default LookingForFilter
