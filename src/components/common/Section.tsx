import classNames from 'classnames'
import React from 'react'

interface IProps extends React.HtmlHTMLAttributes<HTMLSelectElement> {
  title?: string
  description?: string
  center?: boolean
}

const Section = ({
  title,
  description,
  center,
  children,
  className,
  ...props
}: IProps) => {
  return (
    <section
      className={classNames(
        className,
        'custom_screen_width custom_section_gap '
      )}
      {...props}
    >
      {title && (
        <h2
          className={classNames(
            'text-2xl font-medium text-black lg:text-3xl',
            center ? 'text-center' : 'text-start'
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={classNames(
            'mx-auto mb-10 mt-3 max-w-xl text-base font-light text-gray-600 md:text-lg',
            center ? 'text-center' : 'text-start'
          )}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  )
}

export default Section
