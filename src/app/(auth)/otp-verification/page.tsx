'use client'
import useQueryString from '@/hooks/useQueryString'
import { IResendOTPResponse } from '@/types/pages/auth'
import serverErrorHandler from '@/utils/serverErrorHandler'
import { promiseToast, warningToast } from '@/utils/toast'
import { AxiosError } from 'axios'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import useSWRMutation from 'swr/mutation'
import { sendPostRequest } from '../../../api/swrConfig'
import { authApi } from '../../../api/urls'
import Button from '../../../components/atomic/Button'
import { IServerErrorResponse } from '../../../types/pages/common'

export default function OTPVerification() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const { createQueryString } = useQueryString()

  const previousRoute = searchParams.get('previousRoute')
  let otpToken = searchParams.get('token')

  const [otp, setOtp] = useState('')
  // const [verificationError, setVerificationError] = useState('')
  const [resendDisabled, setResendDisabled] = useState(false)
  const [timer, setTimer] = useState(30)

  const {
    trigger: resendOtpTrigger,
    // isMutating: isResendingOtp,
    data: resendOtpData,
  } = useSWRMutation(authApi.resendOtp, sendPostRequest, {
    onSuccess: (data: IResendOTPResponse) => {
      router.replace(
        pathName + '?' + createQueryString('token', data.message.token)
      )
    },
    onError: () => {
      setResendDisabled(false)
      setTimer(30)
    },
  })

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timeout

    if (resendDisabled) {
      interval = setInterval(() => {
        if (timer > 1) {
          setTimer(timer - 1)
        } else {
          setResendDisabled(false)
          clearInterval(interval)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [resendDisabled, timer])

  const { trigger: verifyOtpTrigger, isMutating: isVerifyingOtp } =
    useSWRMutation(authApi.verifyOtp, sendPostRequest, {
      onSuccess: handleVerificationSuccess,
      onError: handleVerificationError,
    })

  function handleVerificationSuccess() {
    // router.replace(previousRoute || '/')
    router.replace('/login')
  }

  function handleVerificationError(error: AxiosError<IServerErrorResponse>) {
    serverErrorHandler(error)
    // setVerificationError('Failed to verify OTP')
  }

  const handleResendOtp = () => {
    // Implement logic to resend OTP
    promiseToast(
      resendOtpTrigger({ token: resendOtpData?.message.token || otpToken }),
      {
        loading: 'Loading',
        success: 'OTP send to your email',
        error: 'An Error occurred! Please try again',
      }
    )

    setResendDisabled(true)
    setTimer(30) // Reset the timer when resending OTP
  }

  const handleSubmit = () => {
    if (!otp || otp.length < 6) {
      return warningToast('Please Insert Your OTP')
    }
    verifyOtpTrigger({ user_otp: otp, token: otpToken })
  }

  return (
    <div className='flex items-center justify-center bg-white bg-cover bg-no-repeat md:justify-center'>
      <div className='m-4 mt-14 flex w-full justify-center sm:m-10 md:mx-20 md:mt-20 md:justify-center lg:mx-40'>
        <div className='w-full min-w-max max-w-xs rounded-md bg-[rgba(250,250,250,0.8)] px-8 py-6 shadow-lg sm:max-w-md sm:px-6 sm:py-12 lg:px-12 xl:px-16'>
          <div className='mx-auto max-w-xs text-center sm:w-full'>
            <h2 className='break-words text-center text-3xl font-extrabold text-gray-900'>
              OTP Verification
            </h2>
          </div>

          <div className='mt-6 space-y-4 md:space-y-5'>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle='otpInput'
              containerStyle='w-full grid grid-cols-6 item-center justify-between'
              shouldAutoFocus
            />

            <div className='flex flex-wrap items-center justify-between gap-2'>
              {!resendDisabled ? (
                <p className='cursor-default text-sm text-gray-900'>
                  Didn&apos;t receive the OTP?{' '}
                  <span
                    className={`cursor-pointer font-medium text-darkslateblue-100 ${
                      resendDisabled ? 'text-gray-200' : ''
                    }`}
                    onClick={handleResendOtp}
                  >
                    Resend OTP
                  </span>
                </p>
              ) : (
                <p className='text-sm text-gray-900'>
                  Resend OTP in {timer} seconds
                </p>
              )}
            </div>

            <div>
              <Button
                type='submit'
                className='w-full'
                isLoading={isVerifyingOtp}
                onClick={handleSubmit}
                size='large'
              >
                Verify OTP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
