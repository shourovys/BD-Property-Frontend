import TextareaLoading from '@/components/loading/atomic/TextareaLoading'
import { ERROR_CLASS } from '@/utils/config'
import classNames from 'classnames'

interface IInputProps {
  name: string
  label?: string
  value?: string
  placeholder?: string
  isLoading?: boolean
  helpText?: string
  error?: string | null
  row?: number
  onChange?: (name: string, value: string) => void
  disabled?: boolean
  size?: 'small' | 'base'
}
function Textarea({
  name,
  label = '',
  value,
  placeholder,
  isLoading,
  helpText,
  error,
  row = 6,
  onChange,
  disabled = false,
  size = 'base',
}: IInputProps) {
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
        <TextareaLoading />
      ) : (
        <textarea
          id={name}
          name={name}
          value={value}
          rows={row}
          placeholder={placeholder}
          onChange={(e) => (onChange ? onChange(name, e.target.value) : null)}
          className={classNames(
            'form-control focus:border-primary m-0 mb-0.5 block w-full rounded-md border border-gray-300 bg-white bg-clip-padding px-3 text-sm font-normal text-black transition ease-in-out focus:bg-white focus:text-gray-700 focus:outline-none disabled:bg-[#F0F1F3] disabled:text-gray-600 md:text-base',
            !disabled && label && 'shadow-all-side',
            size === 'small' && 'py-1.5',
            size === 'base' && 'py-2',
            error && ERROR_CLASS
          )}
          disabled={disabled}
        />
      )}
      {error && (
        <p className='mt-1 text-xs text-red-500 md:text-base'>{error}</p>
      )}
      {helpText && (
        <p className='mt-1 text-xs text-gray-500 md:text-base'>{helpText}</p>
      )}
    </div>
  )
}

export default Textarea
