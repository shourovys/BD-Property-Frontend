import { ERROR_CLASS } from '@/utils/config'
import classNames from 'classnames'
import InputLoading from '../loading/atomic/InputLoading'

interface IProps {
  name: string
  label?: string
  multiple?: boolean
  isLoading?: boolean
  helpText?: string
  error?: string | null
  onChange?: (name: string, value: FileList | null) => void
  disabled?: boolean
  size?: 'small' | 'base'
}

function FileInput({
  name,
  label = '',
  multiple,
  isLoading,
  helpText,
  error,
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
        <input
          id={name}
          name={name}
          type='file'
          multiple={multiple}
          onChange={(e) => (onChange ? onChange(name, e.target.files) : null)}
          className={classNames(
            'form-control focus:border-primary m-0 mb-0.5 block w-full rounded-md border border-gray-300 bg-white bg-clip-padding text-sm font-normal text-black transition ease-in-out file:px-3 focus:bg-white focus:text-gray-700 focus:outline-none disabled:bg-[#F0F1F3] disabled:text-gray-600 md:text-base',
            // button colors
            ' file:text-gray-800',
            // button shape and spacing
            'file:rounded-md file:rounded-br-none file:rounded-tr-none',
            'file:mr-4 file:border-none file:px-4',
            size === 'small' && 'file:py-1.5',
            size === 'base' && 'file:py-2',
            // overall input styling
            'rounded-lg border text-gray-400 hover:cursor-pointer',
            !disabled && label && 'shadow-all-side',
            error && ERROR_CLASS
          )}
          style={{ height: size === 'base' ? '40px' : '38px' }}
          disabled={disabled}
        />
      )}

      {error && <p className='mt-1 text-xs text-red-500 '>{error}</p>}
      {helpText && <p className='mt-1 text-xs text-gray-500 '>{helpText}</p>}
    </div>
  )
}

export default FileInput
