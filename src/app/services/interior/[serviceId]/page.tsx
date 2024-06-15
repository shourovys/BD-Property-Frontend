'use client'
import InteriorServiceHero from '@/components/pages/InteriorService/InteriorServiceHero'
import InteriorServiceInfo from '@/components/pages/InteriorService/InteriorServiceInfo'
import type { NextPage } from 'next'

const InteriorService: NextPage = () => {
  return (
    <div className='bg-gray-100'>
      <InteriorServiceHero />
      <InteriorServiceInfo />
      {/* <InteriorServiceServices /> */}
    </div>
  )
}

export default InteriorService
