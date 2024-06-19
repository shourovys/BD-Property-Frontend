import BoxTabsUpdate from '@/components/common/BoxTabsUpdate'
import { setSelectedPurposeWithSub } from '@/features/propertySearchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ISelectOption } from '@/types/components/common'
import { propertyPurposeData } from '@/utils/data/property'
import classNames from 'classnames'
import React from 'react'

interface IProps {
  showInline: boolean
}

const PropertySubPurposeFilter: React.FC<IProps> = ({ showInline }) => {
  const dispatch = useAppDispatch()
  const selectedPurpose = useAppSelector(
    (state) => state.propertySearch.selectedPurpose
  )

  const setPurpose = (selectedTab: ISelectOption) => {
    dispatch(
      setSelectedPurposeWithSub({
        purpose: selectedPurpose.purpose,
        completion: selectedTab,
      })
    )
  }

  const subPurposeData =
    propertyPurposeData
      .find((purpose) => purpose.id === selectedPurpose.purpose.value)
      ?.subPurpose.map((subPurpose) => ({
        label: subPurpose.title,
        value: subPurpose.id,
      })) || []

  if (!subPurposeData.length) {
    return null
  }

  return (
    <div
      className={classNames(
        'w-fit',
        showInline
          ? 'flex flex-shrink flex-wrap items-center gap-x-4 gap-y-1'
          : 'overflow-hidden text-black'
      )}
    >
      <h2
        className={
          showInline
            ? 'hidden sm:block'
            : 'form-label mb-2 inline-block w-full text-sm font-medium md:text-base'
        }
      >
        Occupancy Status:
      </h2>
      <BoxTabsUpdate
        selectedTab={selectedPurpose.completion}
        setSelectedTab={setPurpose}
        tabs={subPurposeData}
        size='small'
      />
    </div>
  )
}

export default PropertySubPurposeFilter
