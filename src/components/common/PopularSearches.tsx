'use client'
import { setFullState } from '@/features/propertySearchSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'
import usePopularQueries from '@/hooks/usePopularSearches'
import createArray from '@/utils/createArray'

const PopularSearches = () => {
  const dispatch = useAppDispatch()
  const { loading, queries } = usePopularQueries()

  return (
    <div className='space-y-3 sm:space-y-4'>
      <div className='rounded-6xs bg-lightgray-200 px-4 py-2 font-medium md:px-5'>
        Popular Searches
      </div>
      <div className='space-y-3 px-4 font-light sm:px-0 '>
        {loading &&
          createArray(6).map((item) => (
            <p
              key={item}
              className='h-6 w-full max-w-sm animate-pulse rounded-md bg-lightgray-200'
            ></p>
          ))}
        {!loading &&
          queries.map((item) => (
            <p
              key={item.query}
              className='block max-w-sm cursor-pointer truncate break-words hover:text-[#D76147] hover:underline'
              onClick={() => dispatch(setFullState(item.state))}
              title={item.query}
            >
              {item.query}
            </p>
          ))}
      </div>
    </div>
  )
}

export default PopularSearches
