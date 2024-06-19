import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'

import {
  ApartmentIcon,
  BuildingIcon,
  DuplexIcon,
  FactoryIcon,
  FloorIcon,
  OfficeIcon,
  PenthouseIcon,
  PlazaIcon,
  PlotIcon,
  RoomIcon,
  ShopIcon,
  WarehouseIcon,
} from '@/utils/icon'

export const propertyPurposeData: IPropertyPurpose[] = [
  {
    id: 'rent',
    title: 'Rent',
    subPurpose: [
      // { id: 'any', title: 'Any' },
      // { id: 'vacant', title: 'Vacant' },
      // { id: 'occupied', title: 'Occupied' },
    ],
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
] as const

export const propertyTypeData: IPropertyType[] = [
  {
    id: 'residential',
    type: 'Residential',
    propertySubType: [
      { id: 'apartment', sub_type: 'Apartment', icon: ApartmentIcon },
      { id: 'penthouse', sub_type: 'Penthouse', icon: PenthouseIcon },
      { id: 'plaza', sub_type: 'Plaza', icon: PlazaIcon },
      { id: 'plot', sub_type: 'Plot', icon: PlotIcon },
      { id: 'room', sub_type: 'Room', icon: RoomIcon },
      { id: 'duplex', sub_type: 'Duplex', icon: DuplexIcon },
      { id: 'building', sub_type: 'Building', icon: BuildingIcon },
    ],
  },
  {
    id: 'commercial',
    type: 'Commercial',
    propertySubType: [
      { id: 'office', sub_type: 'Office', icon: OfficeIcon },
      { id: 'floor', sub_type: 'Floor', icon: FloorIcon },
      { id: 'duplex', sub_type: 'Duplex', icon: DuplexIcon },
      { id: 'building', sub_type: 'Building', icon: BuildingIcon },
      { id: 'warehouse', sub_type: 'Warehouse', icon: WarehouseIcon },
      { id: 'shop', sub_type: 'Shop', icon: ShopIcon },
      { id: 'apartment', sub_type: 'Apartment', icon: ApartmentIcon },
      { id: 'plaza', sub_type: 'Plaza', icon: PlazaIcon },
      { id: 'plot', sub_type: 'Plot', icon: PlotIcon },
      { id: 'factory', sub_type: 'Factory', icon: FactoryIcon },
    ],
  },
] as const

export const badsAndBathsFilterOptions = {
  beds: [
    { label: 'Studio', value: 'studio' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8+', value: '8plus' },
  ],
  baths: [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6+', value: '6plus' },
  ],
} as const

export const propertySortOptions = [
  { label: 'Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Lowest Price', value: 'lowestPrice' },
  { label: 'Highest Price', value: 'highestPrice' },
] as const
