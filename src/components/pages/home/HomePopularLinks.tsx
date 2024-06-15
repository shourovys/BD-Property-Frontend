'use client'
import { homePageApi } from '@/api/urls'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { ISingleServerResponse } from '@/types/pages/common'
import { ISearchLinksResponse } from '@/types/pages/home'
import { SITE_PAGES } from '@/utils/config'
import createArray from '@/utils/createArray'
import { decodePropertyQuery } from '@/utils/decodePropertyQuery'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const HomePopularLinks: NextPage = () => {
  const [decoratedQuery, setDecoratedQuery] = useState<
    {
      id: number
      string: string
      queryString: string
    }[]
  >([])
  const { data, isLoading } = useSWR<
    ISingleServerResponse<ISearchLinksResponse[]>
  >(homePageApi.searchLink)

  useEffect(() => {
    const modifiedQuery = data?.results
      .map((query) => ({
        id: query.id,
        string: decodePropertyQuery(query.search_query),
        queryString: query.search_query,
      }))
      .filter((query) => query.string)
    setDecoratedQuery(modifiedQuery || [])
  }, [data?.results])

  return (
    <Section>
      <SectionTitle>Popular Search Links</SectionTitle>
      <div className='mb-4 grid grid-cols-1 justify-items-start gap-x-4 gap-y-3 font-medium sm:grid-cols-2 md:mb-6 md:grid-cols-3 md:gap-x-6'>
        {isLoading
          ? createArray(12).map((item) => (
              <p
                key={item}
                className='h-6 w-full max-w-md animate-pulse rounded-md bg-lightgray-200'
              ></p>
            ))
          : decoratedQuery?.map((query) => (
              <Link
                href={SITE_PAGES.propertyListPage()}
                key={query.id}
                className='max-w-md cursor-pointer break-words text-base hover:text-[#D76147] hover:underline'
              >
                {query.string}
              </Link>
            ))}
      </div>
    </Section>
  )
}

export default HomePopularLinks
