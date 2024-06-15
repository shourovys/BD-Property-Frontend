import { serviceUrls } from '@/api/urls/serviceUrls'
import ContactForm from '@/components/common/ContactForm'
import FAQSection from '@/components/common/Faq'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import AllServices from '@/components/pages/LegalService/AllServices'
import LegalServiceHero from '@/components/pages/LegalService/LegalServiceHero'
import { ISingleServerResponse } from '@/types/pages/common'
import { ILegalService } from '@/types/pages/service'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'

const LegalService: NextPage = async () => {
  const data = await fetchData<ISingleServerResponse<ILegalService>>(
    serviceUrls.getLegalData
  )

  return (
    <div className='bg-gray-100 font-ubuntu text-sm text-black md:text-base'>
      <LegalServiceHero data={data.results} />
      {/* <LegalServiceCards /> */}
      {/* <Section>
        <VerticalCards />
      </Section> */}
      <AllServices allServices={data.results.legal_allservices} />
      <Section>
        <SectionTitle isCenter>Services Details</SectionTitle>
        <FAQSection data={data.results.services_details} />
      </Section>
      <ContactForm />
    </div>
  )
}

export default LegalService
