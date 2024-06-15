import Section from '@/components/common/Section'
import type { NextPage } from 'next'
import Link from 'next/link'

interface HomeBannerProps {
  imageUrl?: string
  title?: string
  description?: string
  buttonText?: string
  buttonAction?: () => void
  linkText?: string
  linkHref?: string
  actionText?: string
}

const HomeBanner: NextPage<HomeBannerProps> = ({
  imageUrl = '/rectangle-43@2x.png',
  title = 'Area We Serve for You',
  description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
  buttonText,
  buttonAction,
  linkText,
  linkHref,
  actionText,
}) => {
  // if ((buttonText && !buttonAction) || (!buttonText && buttonAction)) {
  //   throw new Error(
  //     'Both buttonText and buttonAction are required if one is provided.'
  //   )
  // }

  // if ((linkText && !linkHref) || (!linkText && linkHref)) {
  //   throw new Error(
  //     'Both linkText and linkHref are required if one is provided.'
  //   )
  // }

  return (
    <Section>
      <div
        className='relative h-full bg-black  bg-cover bg-center md:h-[200px]'
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className='absolute inset-0 bg-black opacity-60' />
        <div className='relative flex h-full flex-col items-center justify-between gap-y-4 p-6 md:flex-row md:p-8 lg:p-10'>
          <div className='space-y-4 md:space-y-6'>
            <h1 className='text-2xl font-medium text-white lg:text-3xl'>
              {title}
            </h1>
            <p className='inline-block max-w-lg text-sm font-light leading-[25px] tracking-[0.03em] text-white md:text-base lg:max-w-3xl'>
              {description}
            </p>
          </div>
          {buttonText && buttonAction && (
            <button
              className='rounded-3xs bg-white px-6 py-2 text-base font-medium text-black sm:text-xl md:text-lg lg:px-8 lg:py-3 lg:text-2xl'
              onClick={buttonAction}
            >
              {buttonText}
            </button>
          )}
          {linkText && linkHref && (
            <Link href={linkHref}>
              <span className='rounded-3xs bg-white px-6 py-2 text-base font-medium text-black sm:text-xl md:text-lg lg:px-8 lg:py-3 lg:text-2xl'>
                {linkText}
              </span>
            </Link>
          )}
          {actionText && (
            <h2 className='rounded-3xs bg-white px-6 py-2 text-base font-medium text-black sm:text-xl md:text-lg lg:px-8 lg:py-3 lg:text-2xl'>
              {actionText}
            </h2>
          )}
        </div>
      </div>
    </Section>
  )
}

export default HomeBanner
