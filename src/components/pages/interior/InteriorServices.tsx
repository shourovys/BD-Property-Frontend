import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import { InteriorAllService } from '@/types/pages/interior'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  services: InteriorAllService[]
}

const InteriorServices: React.FC<IProps> = ({ services }) => {
  return (
    <Section>
      <div id='services' className='overflow-hidden font-ubuntu text-black'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid grid-cols-1 gap-6 sm:gap-8 md:gap-10'>
          {services.map((service, index) => (
            <Link key={service.id} href={`/services/interior/${service.id}`}>
              <div
                className={`flex flex-col gap-4 rounded-lg border-[0.3px] border-dimgray bg-white p-4 shadow-md sm:grid-cols-2 sm:flex-row sm:gap-8 sm:rounded-none sm:border-0 sm:p-0 sm:shadow-none ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className='relative h-[200px] w-full sm:h-[350px] sm:basis-1/2 '>
                  <Image
                    className='rounded-lg object-cover sm:rounded-xl'
                    alt=''
                    src={service.image}
                    fill
                  />
                </div>
                <div className='flex flex-col justify-center space-y-2 sm:basis-1/2 sm:space-y-6'>
                  <div className='max-w-sm text-xl font-medium leading-relaxed sm:text-2xl md:text-3xl'>
                    {service.name}
                  </div>
                  <p className='text-sm font-light md:text-base'>
                    {service.description}
                  </p>
                  <div className='text-sm font-medium md:text-base'>
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

export default InteriorServices
