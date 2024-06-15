import { ERROR_CLASS, INPUT_FIELD_HEIGHT } from '@/utils/config'
import classNames from 'classnames'
import InputLoading from '../loading/atomic/InputLoading'

interface IProps {
  name: string
  inputLabel?: string
  checked?: string | number
  radios: { label: string; value: string | number }[]
  isLoading?: boolean
  helpText?: string
  error?: string | null
  onChange?: (name: string, value: string | number) => void
  disabled?: boolean
  size?: 'small' | 'base'
}

function RadioButtons({
  name,
  inputLabel,
  checked,
  radios,
  isLoading,
  helpText,
  error,
  onChange,
  disabled = false,
  size = 'base',
}: IProps) {
  return (
    <div className='w-full'>
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
          className='flex flex-wrap items-center gap-x-4 gap-y-1.5'
          style={{ minHeight: INPUT_FIELD_HEIGHT }}
        >
          {radios.map(({ label, value }) => (
            <label
              key={label}
              htmlFor={label}
              className={classNames(
                'flex justify-center py-1',
                disabled ? 'cursor-default' : 'cursor-pointer'
              )}
            >
              <input
                id={label}
                value={value}
                checked={value === checked}
                onChange={(e) =>
                  onChange ? onChange(name, e.target.value) : null
                }
                type='radio'
                style={{ height: '16px', width: '16px' }}
                className={classNames(
                  'form-check-input checked:border-primary float-left mb-0.5 mr-2 mt-1 aspect-square w-4 cursor-pointer appearance-none rounded-full border-2 border-gray-200 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-darkslateblue-100 focus:outline-none',
                  disabled
                    ? 'cursor-default bg-[#F0F1F3]'
                    : 'bg-white checked:bg-white',
                  error && ERROR_CLASS,
                  size === 'small' && 'h-4',
                  size === 'base' && 'h-5'
                )}
                disabled={disabled}
              />
              <span
                className={classNames(
                  'form-check-label inline-block',
                  !disabled && ' text-gray-800'
                )}
              >
                {label}
              </span>
            </label>
          ))}
        </div>
      )}
      {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      {helpText && <p className='mt-1 text-xs text-gray-500 '>{helpText}</p>}
    </div>
  )
}

export default RadioButtons

// use example
// <RadioButtons
//     name="radio"
//     inputLabel="Input Label"
//     checked={formData.radio}
//     radios={[
//         {
//             label: "Radio Button 1",
//             value: "radio button 1",
//         },
//         {
//             label: "Radio Button 2",
//             value: "radio button 2",
//         },
//     ]}
//     onChange={handleInputChange}
// />;
