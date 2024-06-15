const ExclusiveOffersLoading = () => {
  // You can customize the loading UI as per your design
  return (
    <div className='grid justify-center w-full grid-cols-1 gap-4 animate-pulse justify-items-center sm:grid-cols-3 md:gap-6 lg:grid-cols-5'>
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          className='flex h-[255px] max-w-xs min-h-max w-full rounded-md bg-lightgray-200 p-4'
          key={index}
        >
          {/* Loading state for each item */}
        </div>
      ))}
    </div>
  )
}

export default ExclusiveOffersLoading
