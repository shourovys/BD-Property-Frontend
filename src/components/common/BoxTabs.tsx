import classNames from 'classnames'
import React from 'react'

export interface ITabOption {
  name: string
  value: string
}

interface IProps {
  tabs: ITabOption[]
  selectedTab: string // Pass selectedTab as prop
  setSelectedTab: (selectedTab: string) => void
  size?: 'small' | 'base' | 'large'
}

const BoxTabs: React.FC<IProps> = ({
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
          key={tab.name}
          onClick={() => setSelectedTab(tab.value)}
          className={classNames(
            'flex min-w-fit flex-grow cursor-pointer items-center justify-center text-sm md:text-base',
            tab.value === selectedTab
              ? 'rounded-8xs bg-cornflowerblue font-normal'
              : 'font-light',
            size === 'small' && 'px-2 py-0.5 sm:px-3',
            size === 'base' && 'px-3 py-1',
            size === 'large' && 'px-3 py-1'
          )}
          aria-current={tab.value === selectedTab ? 'page' : undefined}
        >
          {tab.name}
        </p>
      ))}
    </nav>
  )
}

export default BoxTabs
