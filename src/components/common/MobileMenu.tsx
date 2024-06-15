import { DownArrowIcon } from '@/utils/icon'
import { Disclosure, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { navigation } from './Header'

interface MobileMenuProps {
  open: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open }) => {
  const pathName = usePathname()

  return (
    <Transition
      show={open}
      enter='transition-transform origin-top duration-300'
      enterFrom='transform scale-y-0'
      enterTo='transform scale-y-100'
      leave='transition-transform origin-top duration-300'
      leaveFrom='transform scale-y-100'
      leaveTo='transform scale-y-0'
    >
      {(ref) => (
        <div
          ref={ref}
          className='absolute left-0 right-0 z-50 bg-white shadow-md lg:hidden'
        >
          <div className='space-y-1 px-2 pb-3 pt-2 text-center'>
            {navigation.map((item) => (
              <div key={item.name}>
                {/* Check if the item has sub-routes */}
                {item.subRoutes ? (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            'flex w-full items-center justify-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none',
                            open ? 'bg-slate-100 text-black' : ''
                          )}
                        >
                          {item.name}
                          <DownArrowIcon
                            className={classNames(open && 'rotate-180')}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div
                            className={classNames(
                              'custom_transition scale-0 space-y-1 transition-opacity',
                              open && 'scale-100 bg-slate-100'
                            )}
                          >
                            {item.subRoutes.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className={classNames(
                                  'block px-3 py-1.5',
                                  subItem.href === pathName
                                    ? 'text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900'
                                )}
                                aria-current={
                                  subItem.href === pathName ? 'page' : undefined
                                }
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  // Render regular item if it doesn't have sub-routes
                  <Disclosure.Button
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.href === pathName
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900',
                      'custom_transition block scale-0 rounded-md px-3 py-2 opacity-100 transition-opacity ',
                      open && 'scale-100'
                    )}
                    aria-current={item.href === pathName ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Transition>
  )
}

export default MobileMenu
