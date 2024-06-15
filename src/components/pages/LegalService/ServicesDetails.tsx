import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const ServicesDetails = () => {
  return (
    <Section>
      <SectionTitle>All Services</SectionTitle>
      <div className='grid grid-cols-1 justify-items-center gap-x-4 gap-y-3 font-medium sm:grid-cols-2 md:grid-cols-3 md:gap-x-6'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (item, index) => (
            <p key={item} className='text-left'>
              Legal Service {index}
            </p>
          )
        )}
      </div>
    </Section>
  )
}

export default ServicesDetails
