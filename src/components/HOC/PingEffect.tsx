import classNames from 'classnames'
import React from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
}

const PingEffect: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className='relative'>
      <div
        className={classNames(
          'custom_ping absolute inset-2 rounded-6xs border-4 border-darkslateblue-100 p-2',
          className
        )}
      />
      {children}
    </div>
  )
}

export default PingEffect
