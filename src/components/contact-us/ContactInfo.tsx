import React from 'react'

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold'>Contact Information</h2>
      <div className='flex flex-col space-y-4'>
        <div className='flex items-center gap-4'>
          <span className='text-xl text-darkslateblue-100'>✉</span>
          <div>
            <h3 className='text-lg font-semibold'>Email</h3>
            <p className='text-gray-700'>contact@example.com</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <span className='text-xl text-darkslateblue-100'>☎</span>
          <div>
            <h3 className='text-lg font-semibold'>Phone</h3>
            <p className='text-gray-700'>+1 (123) 456-7890</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <span className='text-xl text-darkslateblue-100'>📍</span>
          <div>
            <h3 className='text-lg font-semibold'>Address</h3>
            <p className='text-gray-700'>123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
