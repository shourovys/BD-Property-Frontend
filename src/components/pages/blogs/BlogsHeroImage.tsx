import type { NextPage } from 'next'
import Image from 'next/image'

const BlogsHeroImage: NextPage = () => {
  return (
    <div className='custom_screen_width relative mb-10 flex h-[20vw] w-full items-center justify-center overflow-hidden'>
      <Image
        className='h-full w-full object-cover'
        alt=''
        src='/frame-85@2x.png'
        fill
      />
    </div>
  )
}

export default BlogsHeroImage
