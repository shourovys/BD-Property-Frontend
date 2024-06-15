// import jwtDecode from 'jwt-decode'
import { ITokens } from '@/types/pages/auth'
import { LOCAL_STORAGE_KEY } from './config'
// ----------------------------------------------------------------------

// const isValidToken = (accessToken: string) => {
//   if (!accessToken) {
//     return false
//   }
//   // const decoded = jwtDecode(accessToken)
//   // const currentTime = Date.now() / 1000
//
//   // return decoded.exp > currentTime
// }

const setSession = (data?: ITokens) => {
  if (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, data.access)
    localStorage.setItem(LOCAL_STORAGE_KEY.refreshToken, data.refresh)
  } else {
    localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken)
    localStorage.removeItem(LOCAL_STORAGE_KEY.refreshToken)
  }
}

export { setSession }
