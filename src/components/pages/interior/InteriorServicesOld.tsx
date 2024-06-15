import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import type { NextPage } from 'next'
import Link from 'next/link'

const InteriorServicesOld: NextPage = () => {
  return (
    <Section>
      <div className='overflow-hidden font-ubuntu text-black'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {[1, 2, 3].map((index) => (
            <Link key={index} href={`/services/interior/${index}`}>
              <div className='grid rounded-lg border-[0.3px] border-dimgray bg-white shadow-md md:grid-cols-[auto,1fr]'>
                <img
                  className='h-[200px] w-full object-cover'
                  alt=''
                  src={`/rectangle-172@2x.png`}
                />
                <div className='p-4'>
                  <div className='mb-4 text-xl font-medium'>
                    Handover Interior Projects title and
                  </div>
                  <p className='text-sm font-light'>
                    Explore Housing in this area. This is the description of the
                    service.
                  </p>
                  <div className='mt-4 text-xs font-medium md:text-sm'>
                    Learn More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default InteriorServicesOld
