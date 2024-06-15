import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import classNames from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'

interface CardProps {
  bgColor: string
  iconSrc: string
  title: string
  subTitle: string
}

const Card: React.FC<CardProps> = ({ bgColor, iconSrc, title, subTitle }) => (
  <div
    className={`group flex cursor-pointer items-center gap-4 rounded-3xs p-4`}
  >
    <div
      className={classNames(
        'flex aspect-square h-[100px] w-[100px] items-center justify-center rounded-md p-4',
        bgColor
      )}
    >
      <Image src={iconSrc} alt={`${title} Icon`} width={50} height={50} />
    </div>
    <div className='space-y-1 text-black'>
      <p className={`text-base font-medium md:text-lg group-hover:${bgColor}`}>
        {title.split(' ').map((word, index, array) => (
          <span key={index}>
            {word + ' '}
            {index === array.length - 2 && <br />}
          </span>
        ))}
      </p>
      <p className='text-xs font-light md:text-sm'>{subTitle}</p>
    </div>
  </div>
)

const HomeMultiColorCards: NextPage = () => {
  const cardsData = [
    {
      bgColor: 'bg-[#ffe7be]', // wheat
      iconSrc: '/icon-awesomebuilding.svg',
      title: 'New Project',
      subTitle: 'Find plots in any housing society',
    },
    {
      bgColor: 'bg-[#ffc8be]', // pink-100
      iconSrc: '/icon-awesomecalculator.svg',
      title: 'Home Loan Calculator',
      subTitle: 'Find plots in any housing society',
    },
    {
      bgColor: 'bg-[#beebff]', // lightblue
      iconSrc: '/icon-metrocalculator.svg',
      title: 'Construction Cost Calculator',
      subTitle: 'Find plots in any housing society',
    },
    {
      bgColor: 'bg-[#bec1ff]', //lightsteelblue
      iconSrc: '/icon-ionicmdtrendingup.svg',
      title: 'Plot Finder',
      subTitle: 'Find plots in any housing society',
    },
    // {
    //   bgColor: 'bg-[#d7beff]', // plum
    //   iconSrc: '/icon-feathermap.svg',
    //   title: 'Area Guides',
    //   subTitle: 'Find plots in any housing society',
    // },
  ]

  return (
    <Section>
      <SectionTitle>Explore more on BD-Property</SectionTitle>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-7 xl:grid-cols-4'>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </Section>
  )
}

export default HomeMultiColorCards
