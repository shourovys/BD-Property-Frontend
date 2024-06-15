import classNames from 'classnames'

interface IProps {
  itemPerPage: number
  total?: number // total number of content
  page?: number
  handleSetPage: (page: number) => void
}

const Pagination: React.FC<IProps> = ({
  itemPerPage,
  total = 1,
  page = 1,
  handleSetPage,
}) => {
  const totalPages = Math.ceil(total / itemPerPage)

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      handleSetPage(newPage)
    }
  }

  return (
    <div className='mx-auto max-w-full p-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='flex justify-center'>
        <nav className='flex space-x-2' aria-label='Pagination'>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={classNames(
              'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 bg-darkslateblue-100 px-4 py-2 text-sm font-semibold leading-5 text-white transition duration-150 ease-in-out hover:border-violet-100 focus:z-10 focus:border-blue-300 focus:outline-none',
              page === 1 ? 'cursor-not-allowed opacity-80' : 'opacity-100'
            )}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={classNames(
                'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 ',
                page === index + 1
                  ? 'bg-darkslateblue-100 text-white'
                  : 'bg-white text-gray-700 hover:bg-darkslateblue-300',
                'px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:z-10 focus:border-blue-300 focus:outline-none'
              )}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className={classNames(
              'focus:shadow-outline-blue relative inline-flex cursor-pointer items-center rounded-md border border-fuchsia-100 bg-darkslateblue-100 px-4 py-2 text-sm font-semibold leading-5 text-white transition duration-150 ease-in-out hover:border-violet-100 focus:z-10 focus:border-blue-300 focus:outline-none',
              page === totalPages
                ? 'cursor-not-allowed opacity-80'
                : 'opacity-100'
            )}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
