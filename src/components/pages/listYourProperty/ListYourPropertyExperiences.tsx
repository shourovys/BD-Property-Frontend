import Section from '@/components/common/Section'
import YtVideoSlider from '@/components/common/YtVideoSlider'
import { ICustomerExperience } from '@/types/pages/listYourProperty'
import React from 'react'

interface IProps {
  experience?: ICustomerExperience[]
}

const ListYourPropertyExperiences: React.FC<IProps> = ({ experience }) => {
  return (
    <Section>
      <div className='text-center'>
        <h2 className='text-2xl font-medium text-black lg:text-3xl'>
          Customer Experiences
        </h2>
        <p className='mx-auto mt-3 max-w-xl text-base font-light text-gray-600 md:text-lg'>
          There is no greater benchmark for success than customer satisfaction.
          Over the years, we’ve built a culture of service.
        </p>
        <div className='mt-10'>
          <YtVideoSlider controllers />
        </div>
      </div>
    </Section>
  )
}

export default ListYourPropertyExperiences
