import { sendPostRequest } from '@/api/swrConfig'
import { listUserPropertyUrls } from '@/api/urls'
import { propertyUrls } from '@/api/urls/propertyUrls'
import Input from '@/components/atomic/Input'
import RadioButtons from '@/components/atomic/RadioButtons'
import Selector from '@/components/atomic/Selector'
import LoadingSvg from '@/components/loading/atomic/LoadingSvg'
import {
  INullAbleSelectOption,
  THandleInputChange,
} from '@/types/components/common'
import { INewFormErrors, ISingleServerResponse } from '@/types/pages/common'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import { CloseIcon } from '@/utils/icon'
import { errorToast, successToast } from '@/utils/toast'
import React, { useState } from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

interface AddPropertyModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface PropertyFormData {
  purpose: string
  propertyType: string
  city: INullAbleSelectOption
  propertyLocation: string
}

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  setOpenModal,
}) => {
  const [formData, setFormData] = useState<PropertyFormData>({
    purpose: '',
    propertyType: '',
    city: null,
    propertyLocation: '',
  })
  const [formErrors, setFormErrors] = useState<
    INewFormErrors<PropertyFormData>
  >({})

  // Update the form data when any input changes
  const handleInputChange: THandleInputChange = (name, value) => {
    setFormData((state) => ({ ...state, [name]: value }))
    setFormErrors({ ...formErrors, [name]: null })
  }

  const { trigger, isMutating } = useSWRMutation(
    listUserPropertyUrls.addProperty,
    sendPostRequest,
    {
      onSuccess: () => {
        successToast(
          'Your Property added successfully. We will contact with you.'
        )
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
    const errors: INewFormErrors<PropertyFormData> = {}

    // Check if 'purpose' is empty
    if (!formData.purpose) {
      errors.purpose = 'Purpose is required'
    }

    // Check if 'propertyType' is empty
    if (!formData.propertyType) {
      errors.propertyType = 'Property Type is required'
    }

    // Check if 'city' is empty
    if (!formData.city?.value) {
      errors.city = 'City is required'
    }

    // Check if 'propertyLocation' is empty
    if (!formData.propertyLocation) {
      errors.propertyLocation = 'Property Location is required'
    }

    // If there are any errors, update the formErrors state and exit
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // If there are no errors, you can proceed with form submission
    trigger({
      property_purpose: formData.purpose,
      property_type: formData.propertyType,
      a_city: formData.city?.value,
      a_location: formData.propertyLocation,
    })
  }

  const { isLoading: propertyPurposeLoading, data: propertyPurposeData } =
    useSWR<ISingleServerResponse<IPropertyPurpose[]>>(propertyUrls.purposes)

  const { isLoading: propertyTypeLoading, data: propertyTypeData } = useSWR<
    ISingleServerResponse<IPropertyType[]>
  >(propertyUrls.type)

  const { data: propertyLocationData, isLoading: propertyLocationLoading } =
    useSWR<ISingleServerResponse<{ id: number; name: string }[]>>(
      propertyUrls.address
    )

  return (
    <div className='modal-container relative max-w-sm p-4'>
      <div className='modal-content rounded-lg bg-white p-6 shadow-md'>
        <CloseIcon
          onClick={() => setOpenModal(false)}
          className='absolute right-7 top-7 cursor-pointer text-xl text-gray-500 hover:text-gray-700'
        />
        <div className='mb-4 md:mb-6'>
          <h2 className='mb-2 text-center text-2xl font-semibold'>
            Add New Property
          </h2>
          <p className='max-w-sm text-center text-sm'>
            Please provide all the necessary information below for a more
            efficient and effective service.
          </p>
        </div>
        <form
          className='flex w-full flex-col justify-center space-y-4'
          onSubmit={handleSubmit}
        >
          <RadioButtons
            name='purpose'
            inputLabel='Purpose*'
            checked={formData.purpose}
            radios={
              propertyPurposeData?.results.map((purpose) => ({
                label: purpose.purpose_title,
                value: purpose.id.toString(),
              })) || []
            }
            isLoading={propertyPurposeLoading}
            onChange={handleInputChange}
            error={formErrors.purpose}
          />
          <RadioButtons
            name='propertyType'
            inputLabel='Property Type*'
            checked={formData.propertyType}
            radios={
              propertyTypeData?.results.map((type) => ({
                label: type.type,
                value: type.id.toString(),
              })) || []
            }
            isLoading={propertyTypeLoading}
            onChange={handleInputChange}
            error={formErrors.propertyType}
          />

          <Selector
            name='city'
            label='City*'
            placeholder='Select City'
            value={formData.city}
            options={propertyLocationData?.results.map((location) => ({
              label: location.name,
              value: location.id.toString(),
            }))}
            isSearchable
            onChange={handleInputChange}
            error={formErrors.propertyLocation}
          />
          <Input
            name='propertyLocation'
            label='Property Location*'
            placeholder='Enter Property Location'
            value={formData.propertyLocation}
            onChange={handleInputChange}
            isLoading={propertyLocationLoading}
            error={formErrors.propertyLocation}
          />
          <button
            disabled={isMutating}
            type='submit'
            className='flex items-center justify-center rounded-lg bg-darkslateblue-100 px-4 py-2 text-white hover:bg-opacity-90'
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

export default AddPropertyModal
