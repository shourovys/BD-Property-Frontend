'use client'
import InteriorHero from '@/components/pages/interior/InteriorHero'
import InteriorInfo from '@/components/pages/interior/InteriorInfo'
import InteriorMultiColorCards from '@/components/pages/interior/InteriorMultiColorCards'
import InteriorServices from '@/components/pages/interior/InteriorServices'
import type { NextPage } from 'next'

const jsonData = {
  heroData: {
    interiorData: {
      title: 'Exquisite Interior Designs',
      description:
        'Crafting beautiful and functional living spaces tailored to your style.',
    },
    previousWorkData: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
        title: 'Modern Living Room',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1628746234641-28eb583a51b4',
        title: 'Elegant Bedroom',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
        title: 'Cozy Reading Nook',
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7',
        title: 'Stylish Kitchen',
      },
    ],
  },
  services: [
    {
      id: 1,
      name: 'Living Room Design',
      description:
        'Elegant and modern living room designs that create a comfortable and stylish atmosphere.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    },
    {
      id: 2,
      name: 'Bedroom Design',
      description:
        'Cozy and stylish bedroom designs that provide a relaxing and personal retreat.',
      image: 'https://images.unsplash.com/photo-1628746234641-28eb583a51b4',
    },
    {
      id: 3,
      name: 'Kitchen Design',
      description:
        'Functional and beautiful kitchen designs that make cooking and dining a pleasure.',
      image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7',
    },
    {
      id: 4,
      name: 'Home Office Design',
      description:
        'Efficient and inspiring home office designs that enhance productivity and comfort.',
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
    },
  ],
}

const Interior: NextPage = () => {
  return (
    <div className=''>
      <InteriorHero data={jsonData.heroData} />
      <InteriorInfo />
      <InteriorServices services={jsonData.services} />
      <InteriorMultiColorCards />
    </div>
  )
}

export default Interior
