import { Popover, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment, ReactNode } from 'react'

interface IProps {
  flyoutContent: (close: () => void) => ReactNode
  children: ReactNode
  direction?: 'left' | 'right' | 'center' // Add the direction prop
}

const FlyoutWrapper: React.FC<IProps> = ({
  children,
  flyoutContent,
  direction = 'center',
}) => {
  const getPositionClass = () => {
    switch (direction) {
      case 'left':
        return 'right-0'
      case 'right':
        return 'left-0'
      case 'center':
      default:
        return 'left-1/2 transform -translate-x-1/2'
    }
  }

  return (
    <Popover className='relative'>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-primary' : '',
              'w-full outline-none'
            )}
          >
            {children}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel
              className={classNames(
                'absolute z-40 mt-1.5 overflow-hidden rounded-3xs text-start shadow-lg ring-1 ring-black ring-opacity-5',
                getPositionClass()
              )}
            >
              {flyoutContent(close)}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default FlyoutWrapper
