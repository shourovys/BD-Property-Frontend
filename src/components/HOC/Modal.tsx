import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useRef } from 'react'

interface IProps {
  openModal: boolean
  setOpenModal: (openModal: boolean) => void
  children: ReactNode
}

export default function Modal({ openModal, children }: IProps) {
  const cancelButtonRef = useRef(null)

  // const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation()
  //   setOpenModal(false)
  // }

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 overflow-y-auto'
        initialFocus={cancelButtonRef}
        // onClose={setOpenModal}
        onClose={() => {}}
      >
        <div className='flex h-screen max-h-screen items-end justify-center overflow-hidden text-center sm:block'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className='md:no-scrollbar my-auto inline-block h-screen max-h-screen w-full transform overflow-y-auto text-left align-bottom transition-all sm:align-middle md:px-4 md:py-4'
              // onClick={closeModal}
            >
              <div className='flex h-full max-h-full w-full items-center justify-center'>
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
