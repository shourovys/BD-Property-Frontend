import useAuth from '@/hooks/useAuth'
import { CloseIcon, DownArrowIcon, HumbuggerIcon } from '@/utils/icon'
import { Disclosure, Menu } from '@headlessui/react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Modal from '../HOC/Modal'
import BookForm from '../pages/property-details/book/BookForm'
import MobileMenu from './MobileMenu'

// Define your navigation with sub-routes
export const navigation = [
  {
    name: 'Services',
    subRoutes: [
      { name: 'Legal Service', href: '/services/legal' },
      { name: 'Interior', href: '/services/interior' },
    ],
  },
  {
    name: 'Guide',
    subRoutes: [
      { name: 'Property Guide', href: '/guideline/property' },
      { name: 'Buy/Sell Guide', href: '/guideline/real-estate-solutions' },
    ],
  },

  { name: 'Add My Property', href: '/list-your-property' },
  { name: 'Find My Agent', href: '/agents' },
  { name: 'Resource', href: '/blogs' },
  // { name: 'About', href: '/about-us' },
  // { name: 'Contact', href: '/contact-us' },
]

const Header: React.FC = () => {
  const pathName = usePathname()

  const { isAuthenticated } = useAuth()

  const [openMeetingModal, setOpenMeetingModal] = useState(false)

  return (
    <Disclosure
      as='nav'
      className='sticky z-30 h-[60px] w-full bg-white font-ubuntu text-sm backdrop-blur-md md:text-base lg:h-[70px] lg:bg-opacity-30'
    >
      {({ open }) => (
        <>
          <div className='custom_screen_width h-full'>
            <div className='relative flex h-full items-center justify-between gap-2'>
              <div className='flex flex-1 items-center justify-between'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <img
                      className='h-6 w-auto md:h-8'
                      alt='BD Property'
                      src='/logo.png'
                    />
                    {/* <h2 className='text-2xl font-semibold text-inherit'>
                      BD Property
                    </h2> */}
                  </Link>
                </div>
                <div className='flex items-center gap-6 md:gap-8'>
                  <div className='hidden lg:block'>
                    <div className='flex items-center gap-6 md:gap-8'>
                      {navigation.map((item) => (
                        <div key={item.name} className='group relative'>
                          {/* Render dropdown menu for items with subRoutes */}
                          {item.subRoutes ? (
                            <Menu
                              as='div'
                              className='relative inline-block text-left'
                            >
                              {({ open }) => (
                                <>
                                  <Menu.Button
                                    className={classNames(
                                      'flex items-center justify-center gap-2 font-light group-hover:text-gray-900',
                                      item.href === pathName
                                        ? 'text-gray-900'
                                        : 'text-black hover:text-gray-900'
                                    )}
                                  >
                                    {item.name}
                                    <DownArrowIcon
                                      className={classNames(
                                        open && 'rotate-180'
                                      )}
                                    />
                                  </Menu.Button>
                                  <Menu.Items
                                    className={classNames(
                                      'absolute left-0 z-10 mt-2 space-y-2 overflow-hidden rounded-lg bg-white shadow-all-side focus:outline-none',
                                      open ? 'opacity-100' : 'opacity-0'
                                    )}
                                  >
                                    {item.subRoutes.map((subItem) => (
                                      <Menu.Item key={subItem.name}>
                                        {({ active }) => (
                                          <Link href={subItem.href}>
                                            <p
                                              className={classNames(
                                                'block min-w-max overflow-hidden px-4 py-2 text-sm font-light',
                                                active ? 'bg-gray-100' : ''
                                              )}
                                            >
                                              {subItem.name}
                                            </p>
                                          </Link>
                                        )}
                                      </Menu.Item>
                                    ))}
                                  </Menu.Items>
                                </>
                              )}
                            </Menu>
                          ) : (
                            <Link href={item.href}>
                              <span
                                className={classNames(
                                  'font-light',
                                  item.href === pathName
                                    ? 'text-gray-900'
                                    : 'text-black hover:text-gray-900'
                                )}
                                aria-current={
                                  item.href === pathName ? 'page' : undefined
                                }
                              >
                                {item.name}
                              </span>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* {!loading && ( */}
                  <>
                    {isAuthenticated ? (
                      <button
                        onClick={() => setOpenMeetingModal(true)}
                        className='rounded-6xl bg-darkslateblue-100 px-4 py-2 text-white md:px-8 md:py-2.5'
                      >
                        Set A Meeting
                      </button>
                    ) : pathName === '/login' ? null : (
                      <Link href='/login'>
                        <button className='rounded-6xl bg-darkslateblue-100 px-4 py-2 text-white md:px-8 md:py-2.5'>
                          Login
                        </button>
                      </Link>
                    )}
                  </>
                  {/* )} */}
                </div>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <CloseIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <HumbuggerIcon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Render mobile menu content */}
          <MobileMenu open={open} />

          {/* Render Set A Meeting */}
          <Modal
            openModal={openMeetingModal}
            setOpenModal={setOpenMeetingModal}
          >
            <BookForm setOpenModal={setOpenMeetingModal} />
          </Modal>
        </>
      )}
    </Disclosure>
  )
}

export default Header
