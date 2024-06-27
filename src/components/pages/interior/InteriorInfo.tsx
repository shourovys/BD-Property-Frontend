import Section from '@/components/common/Section'
import type { NextPage } from 'next'
import CountUp from 'react-countup'

const InteriorInfo: NextPage = () => {
  return (
    <Section>
      <div className='custom_screen_width grid grid-cols-2 gap-4 font-ubuntu text-sm text-black md:grid-cols-5 md:gap-8'>
        {[24, 44, 12, 45, 90].map((number, index) => (
          <div
            key={index}
            className='custom_transition flex aspect-square cursor-default flex-col items-center justify-center space-y-2 rounded-8xs bg-white p-4 shadow-all-side hover:scale-105 hover:shadow-current md:p-6'
          >
            <p className='text-4xl text-salmon md:text-5xl'>
              <CountUp
                start={0}
                end={number}
                duration={2}
                scrollSpyOnce
                enableScrollSpy
              />
            </p>
            <p className='text-center font-medium'>
              Handover Interior Projects
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default InteriorInfo
