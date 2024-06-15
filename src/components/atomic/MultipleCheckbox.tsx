import classNames from 'classnames'
import InputLoading from '../loading/atomic/InputLoading'
import Checkbox from './Checkbox'

interface ICheckboxData {
  value: string
  label: string
}

interface IProps {
  name: string
  inputLabel?: string
  checked?: string[]
  checkboxData?: ICheckboxData[]
  isLoading?: boolean
  helpText?: string
  error?: string | null
  onChange?: (name: string, value: string[]) => void
  disabled?: boolean
  size?: 'small' | 'base'
}

function MultipleCheckbox({
  name,
  inputLabel,
  checked,
  checkboxData,
  isLoading,
  helpText,
  error,
  onChange,
  disabled = false,
  size = 'base',
}: IProps) {
  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    if (onChange) {
      if (isChecked) {
        if (typeof checked !== 'undefined') {
          onChange(name, [...checked, value])
        } else {
          onChange(name, [value])
        }
      } else if (typeof checked !== 'undefined') {
        onChange(
          name,
          checked.filter((val) => val !== value)
        )
      }
    }
  }

  return (
    <div className=''>
      {inputLabel && (
        <label
          className={classNames(
            'form-label inline-block w-full text-sm text-gray-700 md:text-base',
            size === 'small' && 'mb-0.5 font-normal',
            size === 'base' && 'mb-0.5 font-medium md:mb-1'
          )}
          htmlFor={name}
        >
          {inputLabel}
        </label>
      )}

      {isLoading ? (
        <InputLoading />
      ) : (
        <div
          className='flex gap-4'
          style={{ minHeight: size === 'base' ? '40px' : '38px' }}
        >
          {checkboxData?.map(({ value, label }) => (
            <Checkbox
              key={value}
              value={value}
              checked={checked?.includes(value)}
              label={label}
              onChange={(isChecked) => handleCheckboxChange(value, isChecked)}
              disabled={disabled}
            />
          ))}
        </div>
      )}

      {error && <p className='mt-1 text-xs text-red-500 '>{error}</p>}
      {helpText && <p className='mt-1 text-xs text-gray-500 '>{helpText}</p>}
    </div>
  )
}

export default MultipleCheckbox
