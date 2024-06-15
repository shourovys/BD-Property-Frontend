'use client'
import Section from '@/components/common/Section'
import { BoldMinusIcon, BoldPlusIcon } from '@/utils/icon'
import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'
import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ",
  },
  // More questions...
]

const ListYourPropertyFAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const handleDisclosureToggle = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return (
    <Section>
      <div className='font-lato'>
        <h2 className='text-center text-2xl font-medium text-black lg:text-3xl'>
          Frequently asked questions
        </h2>
        <dl className='mt-4'>
          {faqs.map((faq, index) => (
            <Disclosure key={index} as='div' className='pt-6'>
              {({ open }) => (
                <>
                  <dt className='text-lg'>
                    <Disclosure.Button
                      onClick={() => handleDisclosureToggle(index)}
                      className='flex w-full items-center gap-2 text-gray-400'
                    >
                      <div className='relative h-3.5 w-3.5'>
                        <BoldMinusIcon
                          className={classNames(
                            'absolute h-3.5 w-3.5 font-extrabold transition-opacity duration-500 ease-linear',
                            open ? 'opacity-100' : 'opacity-0'
                          )}
                          aria-hidden='true'
                        />

                        <BoldPlusIcon
                          className={classNames(
                            'absolute h-3.5 w-3.5 font-extrabold transition-opacity duration-500 ease-linear',
                            open ? 'opacity-0' : 'opacity-100'
                          )}
                          aria-hidden='true'
                        />
                      </div>

                      <span className='font-medium text-gray-900'>
                        {faq.question}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <dd
                    className={classNames(
                      'overflow-hidden transition-all duration-500 ease-linear',
                      open ? 'max-h-[1000px]' : 'max-h-0'
                    )}
                  >
                    <p className='text-sm text-gray-600 md:text-base'>
                      {faq.answer}
                    </p>
                  </dd>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </Section>
  )
}

export default ListYourPropertyFAQ
