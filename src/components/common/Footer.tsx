import { homePageApi } from '@/api/urls'
import { FooterResponse, ISingleServerResponse } from '@/types/pages/common'
import { IMAGE_URL, SITE_PAGES } from '@/utils/config'
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/utils/icon'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import useSWR from 'swr'
import Section from './Section'

export const footerNavigation = {
  solutions: [
    { name: 'Contact Us', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Resource', href: SITE_PAGES.blogPage },
    { name: 'Interior', href: SITE_PAGES.interiorPage },
    { name: 'Legal', href: SITE_PAGES.legalPage },
  ],
}

const Footer: React.FC = () => {
  // const data = await fetchData<ISingleServerResponse<FooterResponse>>(
  //   homePageApi.footer
  // )
  const { isLoading, data } = useSWR<ISingleServerResponse<FooterResponse>>(
    homePageApi.footer
  )

  return (
    <footer className='relative overflow-hidden'>
      {/* footer bg images  */}
      <div className='absolute h-full w-full'>
        <div className='custom_screen_width relative h-full w-full'>
          <img
            src='/footerBg.png'
            className='absolute left-0 top-0 h-full w-auto object-contain opacity-20'
          />
          <img
            src='/footerBg.png'
            className='absolute right-0 top-0 h-full w-auto object-contain opacity-20'
          />
        </div>
      </div>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>

      <Section>
        <div className='grid grid-cols-1 justify-items-center gap-8 md:grid-cols-4 lg:gap-8'>
          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <img
              className='h-10 w-fit lg:h-14'
              src={IMAGE_URL + data?.results.logo}
              alt='BD-Property'
            />
            <p className='text-bal max-w-md text-center text-sm font-light text-gray-900 md:text-start lg:max-w-xs'>
              {ReactHtmlParser(data?.results.description || '')}
            </p>
          </div>
          <div className=''>
            <h2 className='mb-3 text-center text-lg font-medium md:text-start'>
              Connect
            </h2>

            <ul
              role='list'
              className='grid w-full grid-cols-2 justify-items-center gap-2 gap-x-8 md:grid-cols-1 md:justify-items-start'
            >
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='w-fit cursor-pointer text-base font-light text-gray-900 hover:text-gray-700'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=''>
            <h2 className='mb-3 text-center text-lg font-medium md:text-start'>
              Herd Office
            </h2>
            <div className='flex items-center gap-2'>
              <LocationIcon />
              <div className=''>
                {ReactHtmlParser(data?.results.contact_us || '')}
              </div>
            </div>
          </div>
          <div className=''>
            <h2 className='mb-3 text-center text-lg font-medium md:text-start'>
              Get Connected
            </h2>

            {/* <h2 className='text-xl font-medium'>Social Network</h2> */}
            <div className='flex space-x-6'>
              {/* {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='hover:text-gray-800'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-7 w-7' aria-hidden='true' />
                </a>
              ))} */}
              {data?.results.social_link?.facebook && (
                <a
                  href={data?.results.social_link.facebook}
                  target='_blank'
                  className=''
                >
                  <span className='sr-only'>facebook</span>
                  <FacebookIcon className='h-7 w-7' aria-hidden='true' />
                </a>
              )}
              {data?.results.social_link?.twitter && (
                <a
                  href={data?.results.social_link.twitter}
                  target='_blank'
                  className=''
                >
                  <span className='sr-only'>twitter</span>
                  <TwitterIcon className='h-6 w-6' aria-hidden='true' />
                </a>
              )}
              {data?.results.social_link?.instagram && (
                <a
                  href={data?.results.social_link.instagram}
                  target='_blank'
                  className=''
                >
                  <span className='sr-only'>instagram</span>
                  <InstagramIcon className='h-7 w-7' aria-hidden='true' />
                </a>
              )}
              {data?.results.social_link?.youtube && (
                <a
                  href={data?.results.social_link.youtube}
                  target='_blank'
                  className=''
                >
                  <span className='sr-only'>youtube</span>
                  <YoutubeIcon className='h-7 w-7' aria-hidden='true' />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* bottom section  */}

        <div className='[text-wrap: balance] mt-6 block items-center justify-between border-t border-lightgray-100 py-4 text-center sm:flex lg:mt-12'>
          <p className='text-sm '>
            Copyright ©{new Date().getFullYear()} | All Right Reserved
          </p>
          <p className='mt-3 text-sm sm:mt-0 '>
            Developed and maintained by
            <a rel='noreferrer' target='_blank' href='https://texonltd.com/'>
              <span className='ml-2 text-sm text-[#ff4810] '>
                Texon Limited
              </span>
            </a>
          </p>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
