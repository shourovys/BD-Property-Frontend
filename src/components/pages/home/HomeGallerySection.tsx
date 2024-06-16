import Section from '@/components/common/Section'
import HomeImageGallery from './HomeImageGallery'

const HomeGallerySection = () => {
  return (
    <Section>
      <div className='flex flex-col justify-between gap-x-12 gap-y-6 xl:flex-row xl:items-center'>
        <div className='max-w-3xl space-y-4 text-black md:space-y-6 xl:max-w-sm'>
          <h1 className='text-3xl font-medium'>Area We Serve for You</h1>
          <p className='inline-block text-sm font-light leading-[25px] tracking-[0.03em] md:text-base'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
        </div>
        <HomeImageGallery />
      </div>
    </Section>
  )
}

export default HomeGallerySection
