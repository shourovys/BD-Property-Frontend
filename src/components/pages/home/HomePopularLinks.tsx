'use client'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { setFullState } from '@/features/propertySearchSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'
import usePopularQueries from '@/hooks/usePopularSearches'
import { SITE_PAGES } from '@/utils/config'
import createArray from '@/utils/createArray'
import Link from 'next/link'

const LoadingSkeleton: React.FC<{ count: number }> = ({ count }) => (
  <>
    {createArray(count).map((item) => (
      <p
        key={item}
        className='h-6 w-full max-w-md animate-pulse rounded-md bg-lightgray-200'
      ></p>
    ))}
  </>
)

const HomePopularLinks = () => {
  const dispatch = useAppDispatch()
  const { loading, queries } = usePopularQueries()

  return (
    <Section>
      <SectionTitle>Popular Search Links</SectionTitle>
      <div className='mb-4 grid grid-cols-1 justify-items-start gap-x-4 gap-y-3 font-medium sm:grid-cols-2 md:mb-6 md:grid-cols-3 md:gap-x-6'>
        {loading ? (
          <LoadingSkeleton count={12} />
        ) : (
          queries?.map((item) => (
            <Link
              href={SITE_PAGES.propertyListPage()}
              key={item.query}
              className='max-w-md cursor-pointer truncate break-words text-base hover:text-[#D76147] hover:underline'
              onClick={() => dispatch(setFullState(item.state))}
              title={item.query}
            >
              {item.query}
            </Link>
          ))
        )}
      </div>
    </Section>
  )
}

export default HomePopularLinks
