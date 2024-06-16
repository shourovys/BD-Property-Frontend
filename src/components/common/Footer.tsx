import { SITE_PAGES } from '@/utils/config'
import {
  CallIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/utils/icon'
import Link from 'next/link'
import Section from './Section'

// Mock data
const data = {
  results: {
    logo: '/logo.png',
    description:
      'Your property, our priority. Discover your dream home with BD-Property.',
    contact_us: {
      location: '1234 Street Name, City, Country',
      Phone: '+880100000000',
      Email: 'info@bd-property.com',
    },
    social_link: {
      facebook: 'https://www.facebook.com/BDProperty',
      twitter: 'https://www.twitter.com/BDProperty',
      instagram: 'https://www.instagram.com/BDProperty',
      youtube: 'https://www.youtube.com/BDProperty',
    },
  },
}

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

      <Section>
        <div className='grid grid-cols-1 justify-items-center gap-8 md:grid-cols-4 lg:gap-8'>
          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <img
              className='h-5 w-auto md:h-7'
              alt='BD Property'
              src='/logo.png'
            />
            <p className='text-bal max-w-md text-center text-sm font-light text-gray-900 md:text-start lg:max-w-xs'>
              {data.results.description}
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
                <li key={item.name} className='z-10'>
                  <Link
                    href={item.href}
                    className='w-fit cursor-pointer text-base font-light text-gray-900 hover:text-salmon'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='z-10'>
            <h2 className='mb-3 text-center text-lg font-medium md:text-start'>
              Herd Office
            </h2>
            <div className='space-y-2'>
              <div className='flex items-start gap-2'>
                <LocationIcon className='mt-1 flex-shrink-0' />
                <div className=''>{data.results.contact_us.location}</div>
              </div>
              <div className='flex items-start gap-2'>
                <CallIcon className='mt-1 flex-shrink-0' />
                <div className=''>{data.results.contact_us.Phone}</div>
              </div>
              <div className='flex items-start gap-2'>
                <EmailIcon className='mt-1 flex-shrink-0' />
                <div className=''>{data.results.contact_us.Email}</div>
              </div>
            </div>
          </div>
          <div className=''>
            <h2 className='mb-3 text-center text-lg font-medium md:text-start'>
              Get Connected
            </h2>

            <div className='flex space-x-6'>
              <a
                href={data.results.social_link.facebook}
                target='_blank'
                className='z-10'
              >
                <span className='sr-only'>facebook</span>
                <FacebookIcon className='h-7 w-7' aria-hidden='true' />
              </a>
              <a
                href={data.results.social_link.twitter}
                target='_blank'
                className='z-10'
              >
                <span className='sr-only'>twitter</span>
                <TwitterIcon className='h-6 w-6' aria-hidden='true' />
              </a>
              <a
                href={data.results.social_link.instagram}
                target='_blank'
                className='z-10'
              >
                <span className='sr-only'>instagram</span>
                <InstagramIcon className='h-7 w-7' aria-hidden='true' />
              </a>
              <a
                href={data.results.social_link.youtube}
                target='_blank'
                className='z-10'
              >
                <span className='sr-only'>youtube</span>
                <YoutubeIcon className='h-7 w-7' aria-hidden='true' />
              </a>
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
            <a
              rel='noreferrer'
              target='_blank'
              href='https://shourovys.netlify.app/'
            >
              <span className='ml-1 text-sm text-[#ff4810] '>Shourov Saha</span>
            </a>
          </p>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
