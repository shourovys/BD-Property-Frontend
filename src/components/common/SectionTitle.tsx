import classNames from 'classnames'
import React from 'react'

interface IProps {
  isCenter?: boolean
  children: React.ReactNode
}

const SectionTitle = ({ isCenter, children }: IProps) => {
  return (
    <h1
      className={classNames(
        'pb-6 text-2xl font-medium text-black lg:pb-8 lg:text-3xl',
        isCenter && 'text-center'
      )}
    >
      {children}
    </h1>
  )
}

export default SectionTitle
