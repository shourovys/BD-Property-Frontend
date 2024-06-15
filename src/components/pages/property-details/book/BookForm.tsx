'use client'
import { sendPostRequest } from '@/api/swrConfig'
import { propertyUrls } from '@/api/urls/propertyUrls'
import Button from '@/components/atomic/Button'
import DateInput from '@/components/atomic/DateInput'
import Selector from '@/components/atomic/Selector'
import useAuth from '@/hooks/useAuth'
import {
  INewFormErrors,
  ISelectOption,
  THandleDateChange,
  THandleInputChange,
} from '@/types/components/common'
import { CloseIcon } from '@/utils/icon'
import { errorToast, successToast } from '@/utils/toast'
import classNames from 'classnames'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { DateType } from 'react-tailwindcss-datepicker'
import useSWRMutation from 'swr/mutation'

interface IFromData {
  date: DateType | null
  time: ISelectOption | null
  // name: string
  // contactNumber: string
  // email: string
}

interface BookFromProps {
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const BookForm: React.FC<BookFromProps> = ({ setOpenModal }) => {
  const router = useRouter()
  const pathName = usePathname()
  const { propertyId } = useParams()
  const { isAuthenticated, user } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/login?previousRoute=${pathName}`)
    }
  }, [isAuthenticated])

  // State for booking details
  const [formData, setFormData] = useState<IFromData>({
    date: null,
    time: null,
    // name: '',
    // contactNumber: '',
    // email: '',
  })
  const [formErrors, setFormErrors] = useState<INewFormErrors<IFromData>>({})

  const { trigger, isMutating } = useSWRMutation(
    propertyUrls.propertyBook,
    sendPostRequest,
    {
      onSuccess: () => {
        successToast('Your Meeting set successfully')
        if (setOpenModal) {
          setOpenModal(false)
        } else {
          router.push(pathName.slice(0, -5))
        }
      },
      onError: () => {
        errorToast('An Error occurred! Please try again')
      },
    }
  )

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors: INewFormErrors<IFromData> = {}
    if (!formData.date) errors.date = 'Date is required'
    if (!formData.time?.value) errors.time = 'Time slot is required'

    setFormErrors(errors)

    if (!Object.keys(errors).length) {
      trigger({
        ...(!setOpenModal && { property: propertyId }),
        customer: user?.id,
        date: formData.date,
        start_time: formData.time?.value.split('-')[0],
        end_time: formData.time?.value.split('-')[1],
      })
    }
  }

  // Handle input changes
  const handleInputChange: THandleInputChange = (name, value) => {
    setFormData((state) => ({ ...state, [name]: value }))
    // setFormErrors({ ...formErrors, [name]: null })
  }

  const handleDateChange: THandleDateChange = (name, value) => {
    handleInputChange(name, value?.startDate)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(
        'relative flex justify-center',
        setOpenModal ? 'bg-white p-6 sm:p-10' : 'w-full min-w-max'
      )}
    >
      {setOpenModal && (
        <CloseIcon
          className='absolute right-4 top-4 cursor-pointer text-xl text-gray-500 hover:text-gray-700'
          onClick={() => setOpenModal(false)}
        />
      )}
      <div
        className={classNames(
          'h-full space-y-4 md:space-y-5',
          setOpenModal ? '' : 'w-full max-w-md md:mt-28 '
        )}
      >
        <div className='space-y-2.5 pb-2.5 text-center'>
          <h2 className='text-2xl font-semibold'>Schedule Viewing</h2>
          <p className='text-sm md:text-base'>
            Please provide all the necessary information.
          </p>
        </div>
        {/* Date selection */}
        <DateInput
          name='date'
          label='Select Date*'
          placeholder='Select Your Prefer Date'
          min={new Date()}
          value={{
            startDate: formData.date ? formData.date : null,
            endDate: formData.date ? formData.date : null,
          }}
          onChange={handleDateChange}
          // disabled={disabled || typeof handleInputChange === 'undefined'}
          error={formErrors?.date}
        />

        {/* Time slot selection */}
        <Selector
          name='time'
          label='Select Time Slot*'
          placeholder='Select Your Prefer Time Slot'
          value={formData.time}
          options={[
            { label: '9:00 AM - 12:00 PM', value: '09:00-12:00' },
            { label: '2:00 PM - 5:00 PM', value: '14:00-17:00' },
            { label: '5:00 PM - 8:00 PM', value: '17:00-20:00' },
          ]}
          onChange={handleInputChange}
          error={formErrors.time}
        />

        {/* Personal information */}
        {/* <Input
          name='name'
          label='Name*'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          name='contactNumber'
          label='Contact Number*'
          placeholder='Contact Number'
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
        <Input
          name='email'
          type='email'
          label='Email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleInputChange}
        /> */}

        {/* Submit button */}
        <Button
          type='submit'
          isLoading={isMutating}
          className='min-h-[40px] w-full'
        >
          Book Now
        </Button>
      </div>
    </form>
  )
}

export default BookForm
