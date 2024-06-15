import { ISelectOption } from '@/types/components/common'
// import { booleanSelectOption } from '@/types/pages/common'
import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import LoadingSvg from '../loading/atomic/LoadingSvg'

interface IProps {
  name: string
  label?: string
  value?: ISelectOption | null
  isLoading?: boolean
  onChange?: (name: string, selectedValue: ISelectOption) => void
  disabled?: boolean
  size?: 'small' | 'base'
}

const booleanSelectOption = [
  {
    label: 'Yes',
    value: 'Yes',
  },
  {
    label: 'No',
    value: 'No',
  },
]

function SwitchButtonSelect({
  name,
  label,
  value,
  isLoading,
  onChange,
  disabled,
  size = 'base',
}: IProps) {
  const checked = value?.value === '1' ? true : false
  return (
    <div className='flex flex-col'>
      {label && (
        <label
          className={classNames(
            'form-label inline-block w-full text-sm text-gray-700 md:text-base',
            size === 'small' && 'mb-0.5 font-normal',
            size === 'base' && 'mb-0.5 font-medium md:mb-1'
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Switch
        id={name}
        checked={checked}
        onChange={(isChecked: boolean) => {
          if (onChange) {
            onChange(
              name,
              isChecked ? booleanSelectOption[1] : booleanSelectOption[0]
            )
          }
        }}
        className={classNames(
          checked && !disabled
            ? 'bg-primary text-blue-400'
            : 'bg-[#F0F1F3] text-gray-500',
          'relative inline-flex h-[32px] w-[76px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          // disabled && "bg-[#F0F1F3]",
        )}
        disabled={disabled}
      >
        <span className='sr-only'>Use setting</span>
        <span
          aria-hidden='true'
          className={classNames(
            checked ? 'translate-x-9' : 'translate-x-0',
            disabled && checked ? 'bg-primary' : 'bg-white',
            'pointer-events-none mb-0.5 flex transform items-center justify-center rounded-full shadow-lg ring-0 transition duration-200 ease-in-out',
            size === 'small' && 'h-[26px] w-[26px]',
            size === 'base' && 'h-[28px] w-[28px]'
          )}
        >
          {isLoading && <LoadingSvg size='extraLarge' />}
        </span>
      </Switch>
    </div>
  )
}

export default SwitchButtonSelect
