import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'

export const propertyPurposeData: IPropertyPurpose[] = [
  {
    id: 1,
    purpose_title: 'Residential',
    sub_purpose: [
      { id: 1, purpose_title: 'Single Family' },
      { id: 2, purpose_title: 'Multi Family' },
    ],
  },
  {
    id: 2,
    purpose_title: 'Commercial',
    sub_purpose: [
      { id: 3, purpose_title: 'Office' },
      { id: 4, purpose_title: 'Retail' },
    ],
  },
]

export const propertyTypeData: IPropertyType[] = [
  {
    id: 1,
    type: 'House',
    property_sub_type: [
      { id: 1, sub_type: 'Detached' },
      { id: 2, sub_type: 'Semi-Detached' },
    ],
  },
  {
    id: 2,
    type: 'Apartment',
    property_sub_type: [
      { id: 3, sub_type: 'Studio' },
      { id: 4, sub_type: 'Duplex' },
    ],
  },
]
