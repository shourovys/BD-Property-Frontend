import { HomeIcon, RightArrowIcon } from '@/utils/icon'
import Link from 'next/link'

export type TPageRoutes = { href: string; text: string }[]

interface IBreadcrumbsProps {
  pageTitle?: string
  pageRoutes?: TPageRoutes
}

export default function Breadcrumbs({
  pageRoutes: propsPageRoutes,
}: IBreadcrumbsProps) {
  const pageRoutes = [
    {
      href: '/for-sale',
      text: 'for sale',
    },
    {
      href: '/dhaka',
      text: 'dhaka',
    },
    {
      href: '/basundhara',
      text: 'basundhara',
    },
  ]
  return (
    <section className='custom_screen_width hidden font-light sm:block'>
      <div className='flex max-w-full items-center justify-between gap-x-8 gap-y-1 overflow-x-auto py-3 sm:flex-nowrap md:py-5'>
        <nav
          className='flex w-fit max-w-fit flex-wrap items-center gap-x-6 gap-y-1.5 lg:min-h-[36px] lg:gap-x-12'
          aria-label='Breadcrumb'
        >
          <ol className='hidden items-center gap-2 sm:flex md:gap-4'>
            <li>
              <div>
                <Link href='/' className='customer_text_hover'>
                  <HomeIcon
                    className='h-3 w-3 flex-shrink-0 md:h-4 md:w-4'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Home</span>
                </Link>
              </div>
            </li>
            {pageRoutes?.map((page) => (
              <li key={page.text}>
                <div className='flex items-center'>
                  <RightArrowIcon
                    className='text-block h-4 w-4 flex-shrink-0'
                    aria-hidden='true'
                  />
                  <Link
                    href={page.href}
                    className='customer_text_hover ml-2 text-sm capitalize md:ml-4 md:text-base'
                  >
                    {page.text}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
