export interface IPropertySubPurpose {
  id: number
  purpose_title: string
}

export interface IPropertyPurpose {
  id: number
  purpose_title: string
  sub_purpose: IPropertySubPurpose[]
}

export interface IPropertySubType {
  id: number
  sub_type: string
  // property_type: number
}

export interface IPropertyType {
  id: number
  type: string
  property_sub_type: IPropertySubType[]
}

export interface IPropertyDetails {
  id: string
  reference_no: string
  title: string
  size: string
  price: string
  video: string
  bed: number
  bath: number
  floor_plans: string
  description: string
  property_status: string
  keywords: string[]
  manage_by: boolean
  user: {
    id: string
    name: string
    email: string
  }
  property_features: {
    id: number
    features_type: string
    features_logo: string
  }[]
  property_purpose: {
    property_purpose: {
      id: number
      purpose_title: string
    }
    property_sub_purpose: {
      id: number
      purpose_title: string
    } | null
  }
  property_type: {
    id: number
    type: string
  }
  property_sub_type: {
    id: number
    sub_type: string
    property_type: number
  }
  property_address: {
    id: number
    city: string
    location: string
    coordinates: string | null
  }
  property_images?: { id: number; image: string }[]
}

export interface IPropertyDetailsResponse {
  property_details: IPropertyDetails
  related_property: IListPropertyResponse[]
}

export interface IListPropertyResponse
  extends Pick<
    IPropertyDetails,
    | 'id'
    | 'reference_no'
    | 'title'
    | 'size'
    | 'price'
    | 'bed'
    | 'bath'
    | 'property_status'
    | 'property_address'
    | 'property_images'
  > {}
