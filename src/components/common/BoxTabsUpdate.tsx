import { ISelectOption } from '@/types/components/common'
import classNames from 'classnames'
import React from 'react'

interface IProps {
  tabs: ISelectOption[]
  selectedTab: ISelectOption
  setSelectedTab: (selectedTab: ISelectOption) => void
  size?: 'small' | 'base' | 'large'
}

const BoxTabsUpdate: React.FC<IProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
  size = 'base',
}) => {
  return (
    <nav
      className={classNames(
        'flex items-center justify-between rounded-6xs border border-lightgray-100 p-0.5'
      )}
      aria-label='Tabs'
    >
      {tabs.map((tab) => (
        <p
          key={tab.value}
          onClick={() => setSelectedTab(tab)}
          className={classNames(
            'flex min-w-fit flex-grow cursor-pointer items-center justify-center text-sm md:text-base',
            tab.value === selectedTab.value
              ? 'rounded-8xs bg-cornflowerblue font-normal'
              : 'font-light',
            size === 'small' && 'px-2 py-0.5 sm:px-3',
            size === 'base' && 'px-3 py-1',
            size === 'large' && 'px-3 py-1'
          )}
          aria-current={tab.value === selectedTab.value ? 'page' : undefined}
        >
          {tab.label}
        </p>
      ))}
    </nav>
  )
}

export default BoxTabsUpdate
