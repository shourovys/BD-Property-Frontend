import { IUserResponse } from '../context/auth'

export interface ISignUpFromData {
  name: string
  email: string
  phone: string
  password: string
  password2: string
}

export interface IResendOTPResponse {
  success: boolean
  message: {
    token: string
    message: string
  }
  results: string
}

export interface IRegistrationResponse {
  success: boolean
  message: {
    token: string
    message: string
  }
  results: {
    name: string
    email: string
    phone: string
  }
}

export interface ITokens {
  refresh: string
  access: string
}
export interface ILoginResponse {
  success: boolean
  message: {
    token: ITokens
    message: string
    user: IUserResponse
  }
  results: {
    email_or_phone: string
  }
}
