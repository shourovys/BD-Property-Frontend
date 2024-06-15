'use client'
import { ILoginResponse } from '@/types/pages/auth'
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
import { IFormErrors, IServerErrorResponse } from '../../../types/pages/common'
import { setSession } from '../../../utils/jwt'
import serverErrorHandler from '../../../utils/serverErrorHandler'
import { warningToast } from '../../../utils/toast'

export default function Login() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const previousRoute = searchParams.get('previousRoute')

  const {
    refresh: refreshAuthData,
    login: contextLogin,
    isAuthenticated,
  } = useAuth()

  // if user is present then go back
  useEffect(() => {
    if (isAuthenticated) {
      router.replace(previousRoute || '/')
    }
  }, [router, isAuthenticated, previousRoute])

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [formErrors, setFormErrors] = useState<IFormErrors>({})

  const { trigger, isMutating } = useSWRMutation(
    authApi.login,
    sendPostRequest,
    {
      onSuccess: handleLoginSuccess,
      onError: handleLoginError,
    }
  )

  // Function to handle successful login
  function handleLoginSuccess(data: ILoginResponse) {
    setSession(data.message.token)
    contextLogin(data.message.user)
    refreshAuthData()
    // Handle redirection after login
    router.replace(previousRoute || '/')
  }

  // Function to handle login errors
  function handleLoginError(error: AxiosError<IServerErrorResponse>) {
    serverErrorHandler(error, setFormErrors)
  }

  // Function to handle input changes
  const handleInputChange = useCallback((name: string, value: string) => {
    setFormData((state) => ({ ...state, [name]: value }))
  }, [])

  // Function to validate the form
  function validateForm(email?: string, password?: string) {
    const errors: IFormErrors = {}
    if (!email && !formData.email) errors.email = 'Email is required'
    if (!password && !formData.password)
      errors.password = 'Password is required'
    setFormErrors(errors)

    Object.values(errors).forEach((error) => warningToast(error as string))
    return !Object.keys(errors).length
  }

  // Function to handle form submission
  const handleSubmit = (email?: string, password?: string) => {
    if (validateForm(email, password)) {
      trigger({
        email_or_phone: formData.email || email,
        password: formData.password || password,
      })
    }
  }

  useEffect(() => {
    window.onkeyup = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (document.hasFocus()) {
          handleSubmit(formData.email, formData.password)
        }
      }
    }

    return () => {
      window.onkeyup = null
    }
  }, [formData.email, formData.password])

  return (
    <div className='flex items-center justify-center bg-white bg-cover bg-no-repeat md:justify-center '>
      <div className='m-4 mt-14 flex w-full justify-center sm:m-10 md:mx-20 md:mt-20 md:justify-center lg:mx-40'>
        <div className='w-full min-w-max max-w-xs rounded-md bg-[rgba(250,250,250,0.8)] px-8 py-6 shadow-lg sm:max-w-md sm:px-6 sm:py-12 lg:px-12 xl:px-16'>
          <div className='mx-auto max-w-xs text-center sm:w-full'>
            <h2 className='mt-6 break-words text-center text-3xl font-extrabold text-gray-900'>
              Login to your account
            </h2>
          </div>

          <div className='mt-6 space-y-4 md:space-y-5'>
            <Input
              name='email'
              label='Email Or Phone'
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
            />
            <Input
              name='password'
              label='Password'
              type='password'
              value={formData.password}
              onChange={handleInputChange}
              error={formErrors.password}
            />
            <div className='flex flex-wrap items-center justify-between gap-2'>
              <label htmlFor='remember-me' className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='text-primary focus:ring-primary h-4 w-4 rounded border-gray-300'
                />
                <p className='ml-2 block text-sm text-gray-900'>Remember me</p>
              </label>
            </div>
            <div>
              <Button
                type='submit'
                className='w-full'
                isLoading={isMutating}
                onClick={() => handleSubmit()}
                size='large'
              >
                Login
              </Button>
            </div>
            <div className=''>
              <Link href='/signup'>
                <p className='cursor-pointer text-center'>
                  Don&apos;t have an account?&nbsp;
                  <span className='font-medium text-darkslateblue-100 underline'>
                    Sing Up
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
