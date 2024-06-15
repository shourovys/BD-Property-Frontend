import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface SlideOverProps {
  isOpen: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg' | 'full'
  comesFrom?: 'xAxes' | 'yAxes'
  closeOnOverlayClick?: boolean
  children: React.ReactNode
}

const SlideOver: React.FC<SlideOverProps> = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  comesFrom = 'xAxes',
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-40' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom={
                  comesFrom === 'xAxes'
                    ? 'translate-x-full'
                    : 'translate-y-full'
                }
                enterTo={
                  comesFrom === 'xAxes' ? 'translate-x-0' : 'translate-y-0'
                }
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom={
                  comesFrom === 'xAxes' ? 'translate-x-0' : 'translate-y-0'
                }
                leaveTo={
                  comesFrom === 'xAxes'
                    ? 'translate-x-full'
                    : 'translate-y-full'
                }
              >
                <Dialog.Panel
                  className={`pointer-events-auto relative w-screen max-w-${size}`}
                >
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4' />
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideOver
