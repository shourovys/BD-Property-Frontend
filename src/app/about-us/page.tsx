import TwoPertSection from '@/components/common/TwoPertSection'
import AboutUsHero from '@/components/pages/about-us/AboutUsHero'
import InteriorInfo from '@/components/pages/interior/InteriorInfo'
import type { NextPage } from 'next'

const AboutUs: NextPage = () => {
  return (
    <div className=' bg-gray-100 '>
      <AboutUsHero />
      <div className='py-20 md:py-24'>
        <TwoPertSection
          sectionGap={false}
          title='Our Mission'
          description='Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate.'
        />
      </div>
      <div className='bg-lightgray-200 py-20 md:py-24'>
        <TwoPertSection
          sectionGap={false}
          title='Our Vision'
          description='Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate. Loremd to make the right decisions to retain confidence in real-estate.'
        />
      </div>
      <div className='pb-4'>
        <InteriorInfo />
      </div>
    </div>
  )
}

export default AboutUs
