import {
  TButtonColor,
  TButtonSize,
  TButtonType,
} from '@/types/components/buttons'
import classNames from 'classnames'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import LoadingTextWithSvg from '../loading/atomic/LoadingTextWithSvg'

interface IProps {
  type?: TButtonType
  size?: TButtonSize
  color?: TButtonColor
  isLoading?: boolean
  disabled?: boolean
  link?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children: ReactNode
  style?: React.CSSProperties
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void
  onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void
}

function Button({
  type = 'button',
  size = 'base',
  color = 'primary',
  isLoading,
  disabled,
  link,
  onClick,
  className,
  children,
  style,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
}: IProps) {
  const buttonClassNames = classNames(
    ' inline-flex items-center justify-center text-sm md:text-base font-normal rounded-md  gap-1.5 px-3',
    size === 'small' && 'py-1 small min-w-[74px]',
    size === 'base' && 'py-1.5 md:py-2 base min-w-[80px] md:min-w-[100px]',
    size === 'large' && 'py-2 md:py-2.5 large min-w-[100px] md:min-w-[120px]',
    color === 'primary' &&
      `bg-salmon text-white ${!disabled && 'hover:bg-opacity-90'}`,
    color === 'info' &&
      `bg-gainsboro text-salmon ${!disabled && 'hover:bg-opacity-90'}`,
    isLoading ? 'cursor-wait' : disabled ? 'cursor-auto' : 'cursor-pointer',
    disabled ? 'opacity-50 cursor-auto' : 'hover:shadow-all-side',
    className
  )

  if (disabled) {
    return (
      <button
        className={buttonClassNames}
        type={type}
        style={style}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {isLoading ? <LoadingTextWithSvg size={size} /> : children}
      </button>
    )
  }

  if (link) {
    return (
      <Link href={link} className={buttonClassNames} style={style}>
        {isLoading ? <LoadingTextWithSvg size={size} /> : children}
      </Link>
    )
  }
  return (
    <button
      className={buttonClassNames}
      type={type}
      onClick={onClick}
      style={style}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {isLoading ? <LoadingTextWithSvg size={size} /> : children}
    </button>
  )
}

export default Button
