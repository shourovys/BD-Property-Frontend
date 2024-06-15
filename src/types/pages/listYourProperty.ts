import { IBlogData } from './blog'

export interface ICustomerExperience {
  id: number
  title: string
  video: string
}

export interface IPropertyAddContent {
  id: number
  created_at: string
  title: string
  description: string
  video: string
  background_avatar: string
  customers_experience: ICustomerExperience[]
}

export interface IPropertyAndBlogData {
  PropertyAddContent: IPropertyAddContent
  BlogContent: IBlogData[]
}
