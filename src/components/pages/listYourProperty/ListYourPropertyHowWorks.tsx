import Section from '@/components/common/Section'
import React from 'react'

interface StepData {
  image: string
  text: string
}

const ListYourPropertyHowWorks: React.FC = () => {
  const steps: StepData[] = [
    {
      image: '/howwork1.png',
      text: 'Fill out the request form and submit your request of your property',
    },
    {
      image: '/howwork2.png',
      text: 'One of our representatives will contact you for further information',
    },
    {
      image: '/howwork3.png',
      text: 'An executive will visit your site to take photos/videos of your property',
    },
    {
      image: '/howwork4.png',
      text: 'We will publish your property on the website to attract buyers/tenants',
    },
  ]

  return (
    <Section
      className='text-center'
      title='How it Works'
      description='Real estate can be complicated on its own. But we are here to make your
    journey simple and easy.'
      center
    >
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {steps.map((step, index) => (
          <div key={index} className='bg-white p-6 text-center shadow-md'>
            <img
              src={step.image}
              alt={`Step ${index + 1}`}
              className='mx-auto mb-4 h-40'
            />
            <p className='text-base text-gray-900 md:text-lg'>{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default ListYourPropertyHowWorks
