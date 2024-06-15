// common api response
export interface IListServerResponse<T> {
  success: boolean
  message: string
  count: number
  next: string | null
  previous: string | null
  results: T
}

export interface ISingleServerResponse<T> {
  success: boolean
  message: string
  results: T
}

export interface IServerErrorResponse {
  errors?:
    | {
        [key: string]: string | string[]
      }
    | string
  success: boolean
  message: string
}

export interface IFormErrors {
  [key: string]: string | undefined | null
}

export type INewFormErrors<T> = Partial<Record<keyof T, string>> & {
  non_field_errors?: string
}

export interface FooterResponse {
  id: number
  logo: string
  description: string
  contact_us: string
  social_link?: {
    twitter: string
    youtube: string
    facebook: string
    instagram: string
  }
}
