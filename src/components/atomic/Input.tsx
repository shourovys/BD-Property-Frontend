import { ERROR_CLASS } from '@/utils/config'
import classNames from 'classnames'
import InputLoading from '../loading/atomic/InputLoading'

interface IProps {
  type?: string
  name: string
  label?: string
  value?: string | number
  placeholder?: string
  isLoading?: boolean
  showBorder?: boolean
  helpText?: string
  error?: string | null
  inputClass?: string | null
  onChange?: (name: string, value: string) => void
  disabled?: boolean
  size?: 'small' | 'base'

  [rest: string]: unknown
}

function Input({
  type = 'text',
  name,
  label = '',
  value,
  placeholder,
  isLoading,
  helpText,
  error,
  inputClass,
  onChange,
  disabled = false,
  size = 'base',
  ...rest
}: IProps) {
  return (
    <div className='w-full'>
      {label && (
        <label
          className={classNames(
            'form-label md:text-md inline-block w-full text-sm text-gray-700',
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
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={(e) => (onChange ? onChange(name, e.target.value) : null)}
          className={classNames(
            'form-control focus:border-primary m-0 mb-0.5 block w-full overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-white bg-clip-padding px-3 text-sm text-black transition ease-in-out focus:bg-white focus:text-gray-700 focus:outline-none disabled:bg-[#F0F1F3] disabled:text-gray-600 md:text-base',
            'border border-gray-400',
            !disabled && label && 'shadow-all-side',
            error && ERROR_CLASS,
            !value &&
              placeholder &&
              `before:content-['${placeholder}'] before:mr-4 before:text-gray-400`,
            size === 'small' && 'py-1.5',
            size === 'base' && 'py-2',
            inputClass && inputClass
          )}
          disabled={disabled}
          {...rest}
        />
      )}

      {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      {helpText && <p className='mt-1 text-xs text-gray-500'>{helpText}</p>}
    </div>
  )
}

export default Input
