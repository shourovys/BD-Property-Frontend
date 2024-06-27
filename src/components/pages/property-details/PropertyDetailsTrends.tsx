const data = [
  { rank: 1, locality: 'Locality 1', percentage: 25, performance: '+2' },
  { rank: 2, locality: 'Locality 2', percentage: 18, performance: '+2' },
  { rank: 3, locality: 'Locality 3', percentage: 97, performance: '-2' },
  // Add more data
]

interface IProps {
  location: string
}

const PropertyDetailsTrends: React.FC<IProps> = ({ location }) => {
  return (
    <section id='trends' className='space-y-5 pt-10 md:pt-8 lg:pt-16'>
      <h2 className='font-inter text-xl font-medium md:text-2xl'>
        Trends - Most Searched Locations in {location}
      </h2>
      <div className='space-y-2'>
        <div className='flex space-x-4'>
          <div className='flex-none rounded-lg bg-darkslateblue-100 px-2 py-1 text-center text-white'>
            Jun 2023
          </div>
          <div className='flex-none rounded-lg bg-whitesmoke-300 px-2 py-1 text-center text-black'>
            May 2023
          </div>
          <div className='flex-none rounded-lg bg-whitesmoke-300 px-2 py-1 text-center text-black'>
            Apr 2023
          </div>
        </div>
        <table className='-ml-10 w-full border-collapse'>
          <thead>
            <tr className=''>
              <th className='px-6 py-3 text-center font-normal'>RANK</th>
              <th className='px-6 py-3 text-start font-normal'>LOCALITY</th>
              <th className='hidden px-6 py-3 text-start font-normal sm:table-cell'>
                PERCENTAGE OF TOTAL SEARCH (%)
              </th>
              <th className='hidden px-6 py-3 text-center font-normal sm:table-cell'>
                PERFORMANCE
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.rank} className=''>
                <td className='px-6 py-2 text-center text-sm'>{item.rank}</td>
                <td className='px-6 py-2 text-start text-sm'>
                  {item.locality}
                </td>
                <td className='hidden px-6 py-2 text-start text-sm sm:table-cell'>
                  <div className='flex items-center space-x-2'>
                    <span>{`${item.percentage}%`}</span>
                    <div className='h-4 w-full bg-lightgray-100'>
                      <div
                        className='h-full bg-darkslateblue-100'
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className='hidden px-6 py-2 text-center text-sm sm:table-cell'>
                  {item.performance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PropertyDetailsTrends
