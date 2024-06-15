import classNames from 'classnames'
import React from 'react'
import { IconType } from 'react-icons'

interface Tab {
  label: string
  value: string
  icon?: IconType
}

interface IProps {
  tabs: Tab[]
  selectedTab: string // Pass selectedTab as prop
  setSelectedTab: React.Dispatch<React.SetStateAction<string>> // Pass setSelectedTab as prop
  fullWidth?: boolean
  boxStyle?: boolean
  size?: 'small' | 'base' | 'large'
}

const Tabs: React.FC<IProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
  fullWidth,
  boxStyle,
  size = 'base',
}) => {
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      <div
        className={classNames(
          boxStyle
            ? `rounded-6xs border border-lightgray-100 ${
                size === 'small' ? 'p-0.5' : 'p-1'
              }`
            : 'border-b border-gray-200'
        )}
      >
        <nav
          className={classNames(
            '-mb-px',
            fullWidth
              ? `grid grid-cols-${tabs.length} justify-items-center gap-x-3`
              : 'flex gap-x-8'
            // boxStyle && 'flex w-full items-center justify-between bg-black'
          )}
          aria-label='Tabs'
        >
          {tabs.map((tab) => (
            <p
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={classNames(
                'custom_transition flex cursor-pointer gap-1 whitespace-nowrap text-sm',

                tab.value === selectedTab
                  ? boxStyle
                    ? 'rounded-8xs bg-cornflowerblue'
                    : 'border-b-2 border-darkslateblue-100 '
                  : boxStyle
                  ? ''
                  : 'border-transparent ',
                tab.value === selectedTab
                  ? 'font-medium text-darkslateblue-100'
                  : 'font-normal text-gray-500 hover:text-gray-700',

                fullWidth &&
                  size === 'small' &&
                  'flex w-full items-center justify-center py-1',
                fullWidth &&
                  size === 'base' &&
                  'flex w-full items-center justify-center py-1.5',
                fullWidth &&
                  size === 'large' &&
                  'flex w-full items-center justify-center py-2.5',

                !fullWidth && size === 'small' && 'border-b-2 px-1 pb-2',
                !fullWidth && size === 'base' && 'border-b-2 px-1 pb-3',
                !fullWidth && size === 'large' && 'border-b-2 px-2 pb-4'
              )}
              aria-current={tab.value === selectedTab ? 'page' : undefined}
            >
              {tab.icon && <tab.icon className='text-lg' />}
              {tab.label}
            </p>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Tabs
