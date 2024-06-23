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
  id: string
  referenceNo: string
  title: string
  size: string
  price: string
  video: string
  bed: number
  bath: number
  floorPlans: string
  description: string
  status: string
  keywords: string[]
  user: {
    id: string
    name: string
    email: string
  }
  features: {
    id: number
    features_type: string
    features_logo: string
  }[]
  purpose: {
    property_purpose: {
      id: number
      name: string
    }
    property_sub_purpose: {
      id: number
      name: string
    } | null
  }
  type: {
    id: number
    type: string
  }
  subType: {
    id: number
    sub_type: string
    property_type: number
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
  property_details: IPropertyDetails
  related_property: IListPropertyResponse[]
}

export interface IListPropertyResponse
  extends Pick<
    IPropertyDetails,
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
