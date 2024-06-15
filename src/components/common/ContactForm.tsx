'use client'
import { sendPostRequest } from '@/api/swrConfig'
import { commonApi } from '@/api/urls'
import Button from '@/components/atomic/Button'
import { errorToast, successToast } from '@/utils/toast'
import { ChangeEvent, FormEvent, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import Section from './Section'

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const { trigger, isMutating } = useSWRMutation(
    commonApi.contact,
    sendPostRequest,
    {
      onSuccess: () => {
        successToast(
          'Your message has been sent successfully. Soon We will contact with you'
        )
      },
      onError: () => {
        errorToast('An Error occurred! Please try again')
      },
    }
  )

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await trigger(formData)
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <Section>
      <div className='grid gap-3 sm:grid-cols-2 sm:gap-4 md:gap-6'>
        <div className='space-y-4'>
          <h2 className='text-[32px] font-medium'>Contact Us</h2>
          <div className='inline-block max-w-xl font-lato leading-[25px]'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero
          </div>
          <img
            className='h-[291.32px] w-[329.06px]'
            alt=''
            src='/group-40.svg'
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center gap-4 md:gap-6'>
            <input
              type='text'
              className='w-full rounded-md border border-dimgray bg-whitesmoke-200 px-5 py-2.5 font-light focus:outline-none'
              placeholder='Your Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              className='w-full rounded-md border  border-dimgray bg-whitesmoke-200 px-5 py-2.5 font-light focus:outline-none'
              placeholder='Your Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className='w-full rounded-md border  border-dimgray bg-whitesmoke-200 px-5 py-2.5 font-light focus:outline-none'
              rows={4}
              placeholder='Message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type='submit'
              className='mx-auto w-fit rounded-md bg-salmon px-8 py-2.5 font-medium text-white md:px-12'
              isLoading={isMutating}
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </Section>
  )
}

export default ContactForm
