export interface IPermissionResult {
  id: number
  name: string
  url: string
  access: boolean
  is_favorite: boolean
  position: number
  limit: number
}

export type LicenseCheckType =
  | 'Camera'
  | 'Channel'
  | 'Lockset'
  | 'Subnode'
  | 'ContLock'
  | 'Facegate'
  | 'Intercom'

export type IAuthContext = {
  user: IUserResponse | null
  loading: boolean
  isAuthenticated: boolean
  logout: () => void
  login: (user: IUserResponse) => void
  refresh: () => void
}

export interface IUserResponse {
  id: string
  email: string
  phone: string
  name: string
  user_img: string | null
  // created_at: string
  // is_superuser: boolean
  // gender: string | null
  // dob: string | null
  // user_cov_img: string | null
  // division: string | null
  // sub_division: string | null
  // zip_code: string | null
  // home: string | null
  // is_active: boolean
  // is_admin: boolean
  // is_verified: boolean
  // auth_provider: string
  // user_type: string
}
