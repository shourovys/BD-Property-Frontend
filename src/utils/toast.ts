import { toast } from 'react-hot-toast'

type toastFunction = (message?: string) => string

export const successToast: toastFunction = (message = 'Successful') =>
  toast.success(message, {
    icon: '✅',
  })

export const errorToast: toastFunction = (message = 'Error!') =>
  toast.error(message, {
    icon: '❌',
  })

export const warningToast: toastFunction = (message = 'Warning!') =>
  toast(message, {
    icon: '⚠️',
  })

export type IPromiseToastMessageOptions = {
  loading?: string
  success?: string
  error?: string
}

export function promiseToast<T>(
  promise: Promise<T>,
  options: IPromiseToastMessageOptions
): Promise<T> {
  const { loading, success, error } = options
  return toast.promise(promise, {
    loading: loading || 'Loading...',
    success: success || 'Successful',
    error: error || 'An Error occurred!',
  })
}
