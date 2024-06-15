'use client'
import { sendPostRequest } from '@/api/swrConfig'
import { commonApi } from '@/api/urls'
import Button from '@/components/atomic/Button'
import Section from '@/components/common/Section'
import ContactInfo from '@/components/contact-us/ContactInfo'
import { errorToast, successToast } from '@/utils/toast'
import Image from 'next/image'
import React, { useState } from 'react'

import useSWRMutation from 'swr/mutation'

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you can add your form submission logic
    trigger(formData)
    // You can also reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className='bg-gray-100 py-10'>
      <div className='custom_screen_width grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
        <div className='space-y-4'>
          <h2 className='text-[32px] font-medium'>Contact Us</h2>
          <div className='inline-block max-w-xl font-lato leading-[25px]'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero
          </div>
        </div>
        <div className='relative flex h-[220.32px] w-auto items-center justify-center'>
          <Image className='w-auto' alt='' src='/group-40.svg' fill />
        </div>
      </div>
      <Section>
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 gap-12 md:grid-cols-2'
        >
          <div>
            <ContactInfo />
          </div>
          <div className='flex flex-col justify-center gap-4 md:mx-10 md:gap-4'>
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
      </Section>
    </div>
  )
}

export default ContactUsPage
