import { IIconType } from '@/utils/icon'

export interface IPropertySubPurpose {
  id: string
  title: string
}

export interface IPropertyPurpose {
  id: string
  title: string
  subPurpose: IPropertySubPurpose[]
}

export interface IPropertySubType {
  id: string
  sub_type: string
  icon: IIconType
}

export interface IPropertyType {
  id: string
  type: string
  propertySubType: IPropertySubType[]
}

export interface IPropertyDetails {
  _id: string
  id: string
  referenceNo: string
  title: string
  size: number
  price: number
  video: string
  bed: number
  bath: number
  floorPlans?: string
  description: string
  status: string
  keywords: string[]
  user: {
    id: string
    name: string
    email: string
  }
  features?: {
    id: number
    name: string
  }[]
  purpose: {
    purpose: {
      id: string
      name: string
    }
    subPurpose: {
      id: string
      name: string
    } | null
  }
  type: {
    id: string
    name: string
  }
  subType: {
    id: string
    name: string
  }
  address: {
    id: number
    city: string
    location: string
    coordinates: string | null
  }
  images?: { id: number; image: string }[]
}

export interface IPropertyDetailsResponse {
  details: IPropertyDetails
  related: IListPropertyResponse[]
}

export interface IListPropertyResponse
  extends Pick<
    IPropertyDetails,
    | '_id'
    | 'id'
    | 'referenceNo'
    | 'title'
    | 'size'
    | 'price'
    | 'bed'
    | 'bath'
    | 'status'
    | 'address'
    | 'images'
  > {}
