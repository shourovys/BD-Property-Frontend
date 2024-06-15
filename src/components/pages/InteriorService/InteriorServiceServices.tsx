import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import type { NextPage } from 'next'

const serviceData = [
  {
    title: 'Service Name 1',
    description:
      'Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Service Name 2',
    description:
      'Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Service Name 3',
    description:
      'Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Service Name 4',
    description:
      'Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Service Name 5',
    description:
      'Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Service Name 6',
    description:
      'Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Description of the service Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const InteriorServiceServices: NextPage = () => {
  return (
    <Section>
      <SectionTitle>TYPES OF RENOVATION SERVICES</SectionTitle>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {serviceData.map((card, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center space-y-4 rounded-lg border p-8 shadow-md'
          >
            <img
              className='h-24 w-24 rounded-full border border-salmon p-6'
              src='/icon-simpleprotoio.svg'
              alt=''
            />
            <h2 className='text-base font-medium uppercase md:text-lg'>
              {card.title}
            </h2>
            <p className='text-base font-light'>{card.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default InteriorServiceServices
