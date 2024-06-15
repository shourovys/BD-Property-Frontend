import { TColor, TSize } from '@/types/components/common'
import classNames from 'classnames'

interface IProps {
  size?: TSize
  color?: TColor
}

function LoadingSvg({ size = 'base', color }: IProps) {
  return (
    <svg
      className={classNames(
        size === 'small' && 'h-3.5 w-3.5',
        size === 'base' && 'h-4 w-4',
        size === 'large' && 'h-4 w-4',
        size === 'extraLarge' && 'h-10 w-10',
        color === 'primary' && 'text-salmon',
        color === 'info' && 'text-darkslateblue-100',
        'animate-spin-fast'
      )}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  )
}

export default LoadingSvg
