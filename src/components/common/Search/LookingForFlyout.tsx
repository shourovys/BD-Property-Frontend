import {
  resetSelectedPropertyType,
  setSelectedPropertyType,
} from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption, emptySelectOption } from '@/types/components/common'
import { propertyTypeData } from '@/utils/data/property'
import React from 'react'
import TabsUpdate from '../TabsUpdate'
import ApplyAndResetButtons from './ApplyAndResetButtons'

interface LookingForFlyoutProps {
  close: () => void
}

const LookingForFlyout: React.FC<LookingForFlyoutProps> = ({ close }) => {
  const dispatch = useAppDispatch()
  const selectedPropertyType = useAppSelector(
    (state) => state.propertySearch.selectedPropertyType
  )

  const setSelectedTab = (selectedTab: ISelectOption) => {
    dispatch(
      setSelectedPropertyType({ type: selectedTab, subType: emptySelectOption })
    )
  }

  const handleReset = () => {
    dispatch(resetSelectedPropertyType())
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
          ?.propertySubType.map((subType) => (
            <p
              key={subType.id}
              onClick={() => {
                dispatch(
                  setSelectedPropertyType({
                    type: selectedPropertyType.type,
                    subType: {
                      label: subType.sub_type,
                      value: subType.id.toString(),
                    },
                  })
                )
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
