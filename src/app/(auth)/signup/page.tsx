'use client'
import useQueryString from '@/hooks/useQueryString'
import { IRegistrationResponse, ISignUpFromData } from '@/types/pages/auth'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { sendPostRequest } from '../../../api/swrConfig'
import { authApi } from '../../../api/urls'
import Button from '../../../components/atomic/Button'
import Input from '../../../components/atomic/Input'
import useAuth from '../../../hooks/useAuth'
import {
  INewFormErrors,
  IServerErrorResponse,
} from '../../../types/pages/common'
import serverErrorHandler from '../../../utils/serverErrorHandler'

export default function SignUp() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { createQueryString } = useQueryString()

  const previousRoute = searchParams.get('previousRoute')

  const {
    refresh: refreshAuthData,
    login: contextLogin,
    isAuthenticated,
  } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(previousRoute || '/')
    }
  }, [router, isAuthenticated, previousRoute])

  const [formData, setFormData] = useState<ISignUpFromData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  })

  const [formErrors, setFormErrors] = useState<INewFormErrors<ISignUpFromData>>(
    {}
  )

  const { trigger, isMutating } = useSWRMutation(
    authApi.signup,
    sendPostRequest,
    {
      onSuccess: handleSignUpSuccess,
      onError: handleSignUpError,
    }
  )

  function handleSignUpSuccess({ message }: IRegistrationResponse) {
    // setSession(results.token)
    // contextLogin(results.user)
    // refreshAuthData()
    router.push(
      '/otp-verification?' + createQueryString('token', message.token)
    )
  }

  function handleSignUpError(error: AxiosError<IServerErrorResponse>) {
    serverErrorHandler(error, setFormErrors)
  }

  const handleInputChange = useCallback((name: string, value: string) => {
    setFormData((state) => ({ ...state, [name]: value }))
  }, [])

  function validateForm(
    name?: string,
    email?: string,
    phone?: string,
    password?: string,
    password2?: string
  ) {
    const errors: INewFormErrors<ISignUpFromData> = {}
    if (!name && !formData.name) errors.name = 'Name is required'
    if (!email && !formData.email) errors.email = 'Email is required'
    if (!phone && !formData.phone) errors.phone = 'Phone is required'
    if (!password && !formData.password)
      errors.password = 'Password is required'
    if (!password2 && !formData.password2)
      errors.password2 = 'Confirm password is required'

    // Additional validation checks can be added here
    setFormErrors(errors)

    // Object.values(errors).forEach((error) => warningToast(error as string))
    return !Object.keys(errors).length
  }

  const handleSubmit = (
    name?: string,
    email?: string,
    phone?: string,
    password?: string,
    password2?: string
  ) => {
    if (validateForm(name, email, phone, password, password2)) {
      trigger({
        name: formData.name || name,
        email: formData.email || email,
        phone: formData.phone || phone,
        password: formData.password || password,
        password2: formData.password2 || password2,
      })
    }
  }

  useEffect(() => {
    window.onkeyup = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (document.hasFocus()) {
          handleSubmit(
            formData.name,
            formData.email,
            formData.phone,
            formData.password,
            formData.password2
          )
        }
      }
    }

    return () => {
      window.onkeyup = null
    }
  }, [
    formData.name,
    formData.email,
    formData.phone,
    formData.password,
    formData.password2,
  ])

  return (
    <div className='flex items-center justify-center bg-white bg-cover bg-no-repeat md:justify-center '>
      <div className='m-4 flex w-full justify-center sm:m-10 md:mx-20 md:mt-4 md:justify-center lg:mx-40 2xl:mt-12'>
        <div className='w-full min-w-max max-w-xs rounded-md bg-[rgba(250,250,250,0.8)] px-8 py-6 shadow-lg sm:max-w-md sm:px-6 sm:py-12 lg:px-12 xl:px-16'>
          <div className='mx-auto max-w-xs text-center sm:w-full'>
            <h2 className='break-words text-center text-3xl font-extrabold text-gray-900'>
              Sign up for a new account
            </h2>
          </div>

          <div className='mt-4 space-y-3 md:space-y-4'>
            <Input
              name='name'
              label='Name*'
              value={formData.name}
              onChange={handleInputChange}
              error={formErrors.name}
            />
            <Input
              name='email'
              label='Email*'
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
            />
            <Input
              name='phone'
              label='Phone*'
              value={formData.phone}
              onChange={handleInputChange}
              error={formErrors.phone}
            />
            <Input
              name='password'
              label='Password*'
              type='password'
              value={formData.password}
              onChange={handleInputChange}
              error={formErrors.password}
            />
            <Input
              name='password2'
              label='Confirm Password*'
              type='password'
              value={formData.password2}
              onChange={handleInputChange}
              error={formErrors.password2}
            />
            <div>
              <Button
                type='submit'
                className='w-full'
                isLoading={isMutating}
                onClick={() => handleSubmit()}
                size='large'
              >
                Sign Up
              </Button>
            </div>
            <div className=''>
              <Link href='/login'>
                <p className='cursor-pointer text-center'>
                  Already have an account?&nbsp;
                  <span className='font-medium text-darkslateblue-100 underline'>
                    Login
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
