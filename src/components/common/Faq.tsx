import { ILegalService } from '@/types/pages/service'
import React from 'react'

interface FaqItemProps {
  question: string
  answer: string
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className='py-5'>
      <details className='group'>
        <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
          <span>{question}</span>
          <span className='transition group-open:rotate-180'>
            <svg
              fill='none'
              height='24'
              shape-rendering='geometricPrecision'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width='24'
            >
              <path d='M6 9l6 6 6-6'></path>
            </svg>
          </span>
        </summary>
        <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
          {answer}
        </p>
      </details>
    </div>
  )
}

interface IProps {
  data?: ILegalService['services_details']
}
const FAQSection: React.FC<IProps> = ({ data }) => {
  if (!data) {
    return null
  }
  const faqData = Object.entries(data).map(([key, value]) => ({
    question: key,
    answer: value,
  }))

  return (
    <div className='mx-auto grid max-w-xl divide-y divide-neutral-200'>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default FAQSection
