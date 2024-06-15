import classNames from 'classnames'
import SectionTitle from './SectionTitle'

interface IProps {
  title: string
  description: string
  sectionGap?: boolean
}

const TwoPertSection = ({ title, description, sectionGap = true }: IProps) => {
  return (
    <div
      className={classNames(
        'custom_screen_width',
        sectionGap && 'custom_section_gap'
      )}
    >
      <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12'>
        <div className=''>
          <SectionTitle>{title}</SectionTitle>
          <p className='text-sm font-medium leading-[35px] md:text-base'>
            {description}
          </p>
        </div>
        <div className='h-80'>
          <img
            className='h-full w-full rounded-md object-cover'
            src='/rectangle-173@2x.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default TwoPertSection
