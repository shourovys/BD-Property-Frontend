import { ERROR_CLASS } from '@/utils/config'
import classNames from 'classnames'
import Datepicker from 'react-tailwindcss-datepicker'
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types'
import InputLoading from '../loading/atomic/InputLoading'

interface IProps {
  name: string
  label?: string
  value: {
    startDate: null | string | Date
    endDate: null | string | Date
  }
  placeholder?: string
  singleDate?: boolean
  isLoading?: boolean
  helpText?: string
  error?: string | null
  min?: Date | null
  max?: Date | null
  onChange?: (name: string, value: DateValueType) => void
  disabled?: boolean
  size?: 'small' | 'base'
}
function DateInput({
  name,
  label = '',
  value,
  placeholder,
  singleDate = true,
  isLoading,
  helpText,
  error,
  min,
  max,
  onChange,
  disabled = false,
  size = 'base',
}: IProps) {
  return (
    <div className='w-full'>
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
      {isLoading ? (
        <InputLoading />
      ) : (
        <div className='rounded-md border border-gray-200'>
          <Datepicker
            primaryColor='green'
            asSingle={singleDate}
            useRange={!singleDate}
            minDate={min}
            maxDate={max}
            value={value}
            placeholder={placeholder}
            popoverDirection='down'
            onChange={(newValue) =>
              onChange ? onChange(name, newValue) : null
            }
            inputClassName={classNames(
              'form-control w-full px-3 text-sm md:text-base font-normal text-black bg-white bg-clip-padding border border-gray-300 focus:border-gray-300 dark:border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none focus:ring-0 ',

              disabled &&
                'important_disable_color important_disable_bg custom_opacity_100 custom_cursor_default',
              size === 'small' && 'h-[37.6px]',
              size === 'base' && 'h-[39.6px]',
              error && ERROR_CLASS
            )}
            containerClassName={classNames(
              disabled &&
                'important_disable_color important_disable_bg rounded-md mb-0.5'
            )}
            disabled={disabled}
          />
        </div>
      )}

      {error && <p className='mt-1 text-xs text-red-500 '>{error}</p>}
      {helpText && <p className='mt-1 text-xs text-gray-500 '>{helpText}</p>}
    </div>
  )
}

export default DateInput
