import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { ILegalAllService } from '@/types/pages/service'
import React from 'react'

interface IProps {
  allServices: ILegalAllService[]
}

const AllServices: React.FC<IProps> = ({ allServices }) => {
  return (
    <Section>
      <SectionTitle isCenter>All Services</SectionTitle>
      <div className='grid grid-cols-1 justify-items-center gap-x-4 gap-y-3 font-medium sm:grid-cols-2 md:grid-cols-3 md:gap-x-6'>
        {allServices.map((service) => (
          <p key={service.id} className='text-left'>
            {service.service}
          </p>
        ))}
      </div>
    </Section>
  )
}

export default AllServices
