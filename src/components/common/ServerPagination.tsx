import createArray from '@/utils/createArray'
import classNames from 'classnames'
import Link from 'next/link'

interface IProps {
  itemPerPage: number
  total?: number // total number of content
  page?: number
  pathName: string
}

const ServerPagination: React.FC<IProps> = ({
  itemPerPage,
  total = 1,
  page = 1,
  pathName,
}) => {
  const totalPages = Math.ceil(total / itemPerPage)

  return (
    <div className='mx-auto max-w-full p-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='flex justify-center'>
        <nav className='flex space-x-2' aria-label='Pagination'>
          {page > 1 ? (
            <Link
              href={`${pathName}?page=${page - 1}`}
              className={classNames(
                'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 bg-darkslateblue-100 px-4 py-2 text-sm font-semibold leading-5 text-white transition duration-150 ease-in-out hover:border-violet-100 focus:z-10 focus:border-blue-300 focus:outline-none'
              )}
            >
              Previous
            </Link>
          ) : (
            <button
              disabled
              className={classNames(
                'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 bg-darkslateblue-100 px-4 py-2 text-sm font-semibold leading-5 text-white opacity-80 transition duration-150 ease-in-out hover:border-violet-100 focus:z-10 focus:border-blue-300 focus:outline-none'
              )}
            >
              Previous
            </button>
          )}
          {createArray(totalPages).map((number) => (
            <Link
              key={number}
              href={`${pathName}?page=${number}`}
              className={classNames(
                'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 ',
                page === number
                  ? 'bg-darkslateblue-100 text-white'
                  : 'bg-white text-gray-700 hover:bg-darkslateblue-300',
                'px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:z-10 focus:border-blue-300 focus:outline-none'
              )}
            >
              {number}
            </Link>
          ))}
          {page < totalPages ? (
            <Link
              href={`${pathName}?page=${page + 1}`}
              className={classNames(
                'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 bg-darkslateblue-100 px-4 py-2 text-sm font-semibold leading-5 text-white transition duration-150 ease-in-out hover:border-violet-100 focus:z-10 focus:border-blue-300 focus:outline-none'
              )}
            >
              Next
            </Link>
          ) : (
            <button
              disabled
              className={classNames(
                'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 bg-darkslateblue-100 px-4 py-2 text-sm font-semibold leading-5 text-white opacity-80 transition duration-150 ease-in-out hover:border-violet-100 focus:z-10 focus:border-blue-300 focus:outline-none'
              )}
            >
              Next
            </button>
          )}
        </nav>
      </div>
    </div>
  )
}

export default ServerPagination
