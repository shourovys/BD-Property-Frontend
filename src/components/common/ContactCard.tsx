import { homePageApi } from '@/api/urls'
import { FooterResponse, ISingleServerResponse } from '@/types/pages/common'
import fetchData from '@/utils/fetchData'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/utils/icon'

const ContactCard = async () => {
  const data = await fetchData<ISingleServerResponse<FooterResponse>>(
    homePageApi.footer
  )

  return (
    <div className='space-y-4'>
      <div className='rounded-6xs bg-lightgray-200 px-4 py-2 font-medium md:px-5'>
        Contact with Us
      </div>
      <div className='flex justify-center space-x-6'>
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
  )
}

export default ContactCard
