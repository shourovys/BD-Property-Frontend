import Section from '@/components/common/Section'

const legalServices = [
  {
    title: 'Service 1',
  },
  {
    title: 'Service 2',
  },
  {
    title: 'Service 3',
  },
  {
    title: 'Service 4',
  },
]

const LegalServiceCards = () => {
  return (
    <Section>
      <div className='grid grid-cols-2 gap-4 font-medium md:grid-cols-4 md:gap-6'>
        {legalServices.map((item) => (
          <div
            key={item.title}
            className='flex aspect-square items-center justify-center rounded-8xs bg-white shadow-all-side'
          >
            <p className='text-3xl font-medium'>{item.title}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default LegalServiceCards
