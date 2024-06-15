import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import type { NextPage } from 'next'

const InteriorMultiColorCards: NextPage = () => {
  return (
    <Section>
      <div className='custom_screen_width overflow-hidden font-ubuntu text-sm text-black md:text-base'>
        <SectionTitle>Types</SectionTitle>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`grid gap-2 rounded-lg bg-white md:grid-cols-[auto,1fr]`}
            >
              <div
                className={`rounded-8xs bg-${getColor(
                  index
                )} opacity-55 flex h-24 w-24 items-center justify-center object-cover`}
              >
                <img
                  className='h-[45.59px] w-[45.59px]'
                  alt=''
                  src='/icon-simpleprotoio1.svg'
                />
              </div>
              <div className='space-y-2'>
                <h2 className='font-medium'>Handover Interior Projects</h2>
                <p className='font-light leading-5'>
                  Explore Housing in this area.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// Function to get a color based on index
function getColor(index: number): string {
  const colors = [
    'lightpink',
    'peachpuff',
    'lightsteelblue',
    'aquamarine',
    'paleturquoise',
    'plum',
    'lightgreen',
    'moccasin',
  ]
  return colors[index % colors.length]
}

export default InteriorMultiColorCards
