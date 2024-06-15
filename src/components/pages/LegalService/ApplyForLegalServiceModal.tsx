// ApplyForLegalServiceModal.tsx
import { sendPostRequest } from '@/api/swrConfig'
import { serviceUrls } from '@/api/urls/serviceUrls'
import Input from '@/components/atomic/Input'
import Selector from '@/components/atomic/Selector'
import LoadingSvg from '@/components/loading/atomic/LoadingSvg'
import {
  INewFormErrors,
  ISelectOption,
  THandleInputChange,
} from '@/types/components/common'
import { ILegalAllService } from '@/types/pages/service'
import { CloseIcon } from '@/utils/icon'
import { errorToast, successToast } from '@/utils/toast'
import React, { useState } from 'react'
import useSWRMutation from 'swr/mutation'

interface ApplyForLegalServiceModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  allServices: ILegalAllService[]
}

interface ApplyForLegalServiceData {
  name: string
  email: string
  phone: string
  services: ISelectOption[]
}

const ApplyForLegalServiceModal: React.FC<ApplyForLegalServiceModalProps> = ({
  setOpenModal,
  allServices,
}) => {
  const [formData, setFormData] = useState<ApplyForLegalServiceData>({
    name: '',
    email: '',
    phone: '',
    services: [],
  })
  const [formErrors, setFormErrors] = useState<
    INewFormErrors<ApplyForLegalServiceData>
  >({})

  // Update the form data when any input changes
  const handleInputChange: THandleInputChange = (name, value) => {
    setFormData((state) => ({ ...state, [name]: value }))
    setFormErrors({ ...formErrors, [name]: null })
  }

  const { trigger, isMutating } = useSWRMutation(
    serviceUrls.applyForService,
    sendPostRequest,
    {
      onSuccess: () => {
        successToast('Your service request sent successfully')
        setOpenModal(false)
      },
      onError: () => {
        errorToast('An Error occurred! Please try again')
      },
    }
  )

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Validation checks
    const errors: INewFormErrors<ApplyForLegalServiceData> = {}

    // Check if 'name' is empty
    if (!formData.name) {
      errors.name = 'Name is required'
    }

    // Check if 'email' is empty or not in a valid format
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      errors.email = 'Invalid email'
    }

    // Check if 'phone' is empty or not in a valid format (Bangladesh phone number)
    if (!formData.phone) {
      errors.phone = 'Phone is required'
    } else if (!/^(?:\+88|88)?01[3-9]\d{8}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number'
    }

    if (!formData.services.length) {
      errors.services = 'Service is required'
    }

    // If there are any errors, update the formErrors state and exit
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // If there are no errors, you can proceed with form submission
    trigger({
      ...formData,
      services: formData.services.map((service) => service?.value),
    })
  }

  return (
    <div className='modal-container relative max-w-sm p-4'>
      <div className='modal-content rounded-lg bg-white p-6 shadow-md'>
        <CloseIcon
          onClick={() => setOpenModal(false)}
          className='absolute right-7 top-7 cursor-pointer text-xl text-gray-500 hover:text-gray-700'
        />

        <h2 className='mb-4 text-center text-2xl font-semibold'>
          Apply for Legal Services
        </h2>
        <form
          className='flex w-full flex-col justify-center space-y-4'
          onSubmit={handleSubmit}
        >
          <Input
            name='name'
            label='Name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleInputChange}
            error={formErrors.name}
          />
          <Input
            name='email'
            label='Email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleInputChange}
            error={formErrors.email}
          />
          <Input
            name='phone'
            label='Phone'
            placeholder='Your Phone'
            value={formData.phone}
            onChange={handleInputChange}
            error={formErrors.phone}
          />
          <Selector
            name='services'
            label='Services'
            placeholder='Select Service'
            multiple
            value={formData.services}
            options={allServices.map((service) => ({
              label: service.service,
              value: service.id.toString(),
            }))}
            onChange={handleInputChange}
            error={formErrors.services}
          />
          <button
            disabled={isMutating}
            type='submit'
            className='rounded-lg bg-darkslateblue-100 px-4 py-2 text-white hover:bg-opacity-90'
          >
            {isMutating ? (
              <span className='flex w-full items-center justify-center gap-1'>
                <LoadingSvg />
                Loading
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplyForLegalServiceModal
