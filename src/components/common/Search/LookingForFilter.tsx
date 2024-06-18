import { setSelectedPropertyType } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption, emptySelectOption } from '@/types/components/common'
import { IPropertySubType } from '@/types/pages/property'
import { propertyTypeData } from '@/utils/data/property'
import React from 'react'
import BoxTabsUpdate from '../BoxTabsUpdate'

const LookingForFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const selectedPropertyType = useAppSelector(
    (state) => state.propertySearch.selectedPropertyType
  )

  const setSelectedTab = (selectedTab: ISelectOption) => {
    dispatch(
      setSelectedPropertyType({ type: selectedTab, subType: emptySelectOption })
    )
  }

  const handleSubTypeSelection = (subType: IPropertySubType) => {
    dispatch(
      setSelectedPropertyType({
        type: selectedPropertyType.type,
        subType: {
          label: subType.sub_type,
          value: subType.id,
        },
      })
    )
  }

  return (
    <div className=''>
      <label className='form-label mb-2 inline-block w-full text-sm font-medium md:text-base'>
        Property Type
      </label>
      <BoxTabsUpdate
        tabs={propertyTypeData.map((type) => ({
          label: type.type,
          value: type.id,
        }))}
        selectedTab={selectedPropertyType.type}
        setSelectedTab={setSelectedTab}
      />
      <div className='mt-4 flex items-center gap-6 overflow-x-auto pb-1 sm:pb-0'>
        {propertyTypeData
          .find((type) => type.id === selectedPropertyType.type.value)
          ?.propertySubType.map((subType) => (
            <div
              key={subType.id}
              onClick={() => handleSubTypeSelection(subType)}
              className='flex cursor-pointer flex-col items-center justify-center gap-1.5 px-2'
            >
              <div className='aspect-square w-10'>
                <subType.icon
                  className={`h-full w-full rounded-full border p-1 ${
                    selectedPropertyType.subType.value === subType.id
                      ? 'border-darkslateblue-100 bg-darkslateblue-300 text-darkslateblue-100'
                      : 'border-gray-200 text-gray-200'
                  }`}
                  aria-label={subType.sub_type}
                />
              </div>
              <p
                className={`text-xs md:text-sm ${
                  selectedPropertyType.subType.value === subType.id
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
