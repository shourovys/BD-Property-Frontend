'use client'
import { homePageApi } from '@/api/urls'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { ISingleServerResponse } from '@/types/pages/common'
import { IListPropertyResponse } from '@/types/pages/property'
import { SITE_PAGES } from '@/utils/config'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import ExclusiveOffersLoading from './ExclusiveOffersLoading'

const offerData = [
  {
    id: '1',
    imageSrc: '/rectangle-14@2x.png',
    title: 'Summer Sale',
  },
  {
    id: '2',
    imageSrc: '/rectangle-15@2x.png',
    title: 'New Arrivals',
  },
  {
    id: '3',
    imageSrc: '/rectangle-16@2x.png',
    title: 'Limited Edition',
  },
  {
    id: '4',
    imageSrc: '/rectangle-173@2x.png',
    title: 'Clearance Sale',
  },
  {
    id: '5',
    imageSrc: '/rectangle-18@2x.png',
    title: 'Flash Deals',
  },
]

const ExclusiveOffers: NextPage = () => {
  const { isLoading, data } = useSWR<
    ISingleServerResponse<IListPropertyResponse[]>
  >(homePageApi.hotDeals)

  return (
    <Section>
      <SectionTitle>Hot Deals</SectionTitle>
      {isLoading ? (
        <ExclusiveOffersLoading />
      ) : (
        <div className='relative grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5'>
          {offerData.map((property) => (
            <Link
              href={SITE_PAGES.propertyPage(property._id)}
              key={property._id}
              className='relative flex h-[255px] w-full min-w-max '
            >
              <div className='rounded-bl-m absolute left-2 top-2 z-10 rounded-bl-md rounded-tr-md bg-gradient-to-r from-red-700 to-red-600 px-3 py-1 text-xs font-medium text-white shadow-md'>
                Special Offer
              </div>
              <Image
                // src={IMAGE_URL + property?.images[0]?.image}
                src={property?.imageSrc}
                alt=''
                className='h-full w-full object-cover'
                fill
              />
              <div className='absolute bottom-0 left-0 h-[20%] w-full [background:linear-gradient(135deg,_rgba(255,_255,_255,_0),_#101010_89.66%,_#000)]' />
              <div className='absolute bottom-[5%] left-5 font-medium leading-[25px]'>
                <p className='font-lato text-base text-white'>
                  {property.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  )
}

export default ExclusiveOffers
