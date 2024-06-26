import { IFormErrors, IServerErrorResponse } from '@/types/pages/common'
import { AxiosError } from 'axios'

const serverErrorHandler = (
  error: AxiosError<IServerErrorResponse>,
  errorStateSetter?: (state: IFormErrors) => void
) => {
  // if (error.response?.status === 424 && error.response?.data?.cgi) {
  //   console.log('error.response?.data?.cgi', error.response?.data?.cgi)
  //   if (Array.isArray(error.response.data.cgi)) {
  //     error.response.data.cgi.forEach((cgi) => {
  //       if (!cgi.success && cgi.errors) {
  //         warningToast(`ID: ${cgi.id} - ${cgi.errors}`)
  //       }
  //     })
  //   } else {
  //     if (!error.response.data.cgi.success && error.response.data.cgi.errors) {
  //       warningToast(error.response.data.cgi.errors)
  //     }
  //   }
  //   return
  // }

  if (error.response && error.response.data) {
    const serverErrors: IFormErrors = {}

    // Check if 'errors' property exists and handle accordingly

    // if ('detail' in error.response.data) {
    //   // @ts-ignore
    //   warningToast(error.response.data.detail)
    //   return
    // }

    // if (typeof error.response.data === 'string') {
    //   warningToast(error.response.data)
    // } else if ('errors' in error.response.data) {
    //   if (typeof error.response.data.errors === 'string') {
    //     warningToast(error.response.data.errors)
    //   } else {
    //     Object.entries(error.response.data.errors || {}).forEach(
    //       ([key, errorValue]) => {
    //         if (typeof errorValue === 'string') {
    //           warningToast(errorValue)
    //         } else {
    //           warningToast(errorValue[0])
    //           serverErrors[key] = errorValue[0]
    //         }
    //       }
    //     )
    //   }
    // }

    if (errorStateSetter) errorStateSetter(serverErrors)
  }
}

export default serverErrorHandler
