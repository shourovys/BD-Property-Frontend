import type { NextPage } from 'next'

const PropertyListLocationSelector: NextPage = () => {
  return (
    <div className='flex items-center justify-between gap-2 overflow-x-auto text-left font-ubuntu text-sm font-medium text-darkslateblue-100 md:flex-wrap md:overflow-hidden md:rounded-6xs md:border md:border-lightgray-100 md:bg-gray-300 md:px-4 md:py-4 md:text-base'>
      <p className='min-w-fit rounded border border-gainsboro px-2 py-1 md:border-0'>
        Block A
      </p>
      <p className='min-w-fit rounded border border-gainsboro px-2 py-1 md:border-0'>
        Block B
      </p>
      <p className='min-w-fit rounded border border-gainsboro px-2 py-1 md:border-0'>
        Block C
      </p>
      <p className='min-w-fit rounded border border-gainsboro px-2 py-1 md:border-0'>
        Block D
      </p>
      <p className='min-w-fit rounded border border-gainsboro px-2 py-1 md:border-0'>
        Block D
      </p>
      <p className='min-w-fit rounded border border-gainsboro px-2 py-1 md:border-0'>
        Block D
      </p>
      <div className='ml-[5px] hidden h-[21px] items-center justify-center text-sm text-black md:text-base'>
        <p className='font-light'>View All</p>
        <img
          className='ml-[5px] h-[6.87px] w-[12.24px]'
          alt=''
          src='/icon-featherchevrondown2.svg'
        />
      </div>
    </div>
  )
}

export default PropertyListLocationSelector
