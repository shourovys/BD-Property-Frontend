'use client'
import { homePageApi } from '@/api/urls'
import { ISingleServerResponse } from '@/types/pages/common'
import { ISearchLinksResponse } from '@/types/pages/home'
import { SITE_PAGES } from '@/utils/config'
import createArray from '@/utils/createArray'
import { decodePropertyQuery } from '@/utils/decodePropertyQuery'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const LinkCard = () => {
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
    <div className='space-y-3 sm:space-y-4'>
      <div className='rounded-6xs bg-lightgray-200 px-4 py-2 font-medium md:px-5'>
        Recommended Search
      </div>
      <div className='space-y-3 px-4 font-light sm:px-0 '>
        {isLoading
          ? createArray(12).map((item) => (
              <p
                key={item}
                className='h-6 w-full max-w-sm animate-pulse rounded-md bg-lightgray-200'
              ></p>
            ))
          : decoratedQuery?.map((query) => (
              <Link
                href={SITE_PAGES.propertyListPage()}
                key={query.id}
                className='block max-w-sm cursor-pointer break-words hover:text-[#D76147] hover:underline'
              >
                {query.string}
              </Link>
            ))}
      </div>
    </div>
  )
}

export default LinkCard
