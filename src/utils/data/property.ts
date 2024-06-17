import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'

export const propertyPurposeData: IPropertyPurpose[] = [
  {
    id: 'rent',
    title: 'Rent',
    subPurpose: [],
  },
  {
    id: 'buy',
    title: 'Buy',
    subPurpose: [
      { id: 'all', title: 'All' },
      { id: 'ready', title: 'Ready' },
      { id: 'under-construction', title: 'Under Construction' },
    ],
  },
]

export const propertyTypeData: IPropertyType[] = [
  {
    id: 'residential',
    type: 'Residential',
    propertySubType: [
      { id: 'apartment', sub_type: 'Apartment' },
      { id: 'penthouse', sub_type: 'Penthouse' },
      { id: 'plaza', sub_type: 'Plaza' },
      { id: 'plot', sub_type: 'Plot' },
      { id: 'room', sub_type: 'Room' },
      { id: 'duplex', sub_type: 'Duplex' },
      { id: 'building', sub_type: 'Building' },
    ],
  },
  {
    id: 'commercial',
    type: 'Commercial',
    propertySubType: [
      { id: 'office', sub_type: 'Office' },
      { id: 'floor', sub_type: 'Floor' },
      { id: 'duplex', sub_type: 'Duplex' },
      { id: 'building', sub_type: 'Building' },
      { id: 'warehouse', sub_type: 'Warehouse' },
      { id: 'shop', sub_type: 'Shop' },
      { id: 'apartment', sub_type: 'Apartment' },
      { id: 'plaza', sub_type: 'Plaza' },
      { id: 'plot', sub_type: 'Plot' },
      { id: 'factory', sub_type: 'Factory' },
    ],
  },
]
