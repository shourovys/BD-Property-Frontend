import { IMAGE_URL } from '@/utils/config'
import classNames from 'classnames'

interface PageSectionProps {
  title: string
  description: string
  background_img: string
  is_header: boolean
  index: number
}

const PageSection: React.FC<PageSectionProps> = ({
  title,
  description,
  background_img,
  is_header,
  index,
}) => {
  return (
    <div
      className='relative h-screen w-full bg-black bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${IMAGE_URL + background_img})` }}
    >
      {/* Black overlay above background image and billow contact*/}
      <div className='absolute inset-0 bg-black opacity-60' />
      {/* background image  */}
      {/* <Image
        src={IMAGE_URL + background_img}
        alt=''
        fill
        className='object-cover'
      /> */}

      <div className='absolute h-full w-full'>
        <div className='custom_screen_width h-full'>
          {is_header ? (
            <div
              className={classNames(
                'flex h-full w-full flex-col items-center justify-center text-center'
              )}
            >
              <div className='space-y-3'>
                <h1 className='text-center font-lato text-4xl  font-medium leading-[48px] [-webkit-text-stroke:0.2px_#000] [text-shadow:0px_0px_0.5px_rgba(0,_0,_0,_0.65)] md:mb-12 md:text-5xl lg:text-6xl'>
                  {title}
                </h1>
                <div className='text-xl font-medium leading-[23px]  [-webkit-text-stroke:0.2px_#000] [text-shadow:0px_0px_0.5px_rgba(0,_0,_0,_0.65)] md:text-2xl'>
                  {description}
                </div>
              </div>
            </div>
          ) : (
            <div
              className={classNames(
                'flex h-full w-full flex-col items-center justify-center text-start'
              )}
            >
              <div className='custom_screen_width w-full space-y-3 md:min-h-[60vh] md:space-y-6'>
                <div className='w-full '>
                  <h1 className='mb-4 text-start text-6xl md:mb-0 md:text-[155px]'>
                    {index}.
                  </h1>
                  <div className='float-right max-w-3xl '>
                    <h1 className='mb-4 font-lato text-lg  font-bold [-webkit-text-stroke:0.2px_#000] [text-shadow:0px_0px_0.5px_rgba(0,_0,_0,_0.65)] sm:text-2xl md:mb-6 md:text-5xl md:leading-[50px] lg:text-3xl'>
                      {title}
                    </h1>
                    <div className='six_line_limit  text-base font-medium [-webkit-text-stroke:0.2px_#000] [text-shadow:0px_0px_0.5px_rgba(0,_0,_0,_0.65)] sm:text-lg md:text-xl'>
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageSection
