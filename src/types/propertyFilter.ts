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
import { ISelectOption } from './components/common'

export const purposeFilterOptions: ISelectOption[] = [
  { label: 'Buy', value: 'buy' },
  { label: 'Rent', value: 'rent' },
]

export const completionFilterOptions: {
  label: string
  value: string
  parent: string
}[] = [
  { label: 'All', value: 'all', parent: 'buy' },
  { label: 'Ready', value: 'ready', parent: 'buy' },
  { label: 'Under Construction', value: 'underConstruction', parent: 'buy' },
  { label: 'Any', value: 'any', parent: 'rent' },
  { label: 'Vacant', value: 'vacant', parent: 'rent' },
  { label: 'Occupied', value: 'occupied', parent: 'rent' },
]

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
}

export const propertyTypeParentFilterOptions = [
  { label: 'Residential', value: 'Residential' },
  { label: 'Commercial', value: 'Commercial' },
]

export const propertyTypeFilterOptions = [
  // Residential Types
  {
    label: 'Apartment',
    value: 'apartment',
    type: 'residential',
    icon: ApartmentIcon,
  },
  {
    label: 'Penthouse',
    value: 'penthouse',
    type: 'residential',
    icon: PenthouseIcon,
  },
  { label: 'Plaza', value: 'plaza', type: 'residential', icon: PlazaIcon },
  { label: 'Plot', value: 'plot', type: 'residential', icon: PlotIcon },
  { label: 'Room', value: 'room', type: 'residential', icon: RoomIcon },
  { label: 'Duplex', value: 'duplex', type: 'residential', icon: DuplexIcon },
  {
    label: 'Building',
    value: 'building',
    type: 'residential',
    icon: BuildingIcon,
  },

  // Commercial Types (Including Duplicates)
  { label: 'Office', value: 'office', type: 'commercial', icon: OfficeIcon },
  { label: 'Floor', value: 'floor', type: 'commercial', icon: FloorIcon },
  { label: 'Duplex', value: 'duplex', type: 'commercial', icon: DuplexIcon },
  {
    label: 'Building',
    value: 'building',
    type: 'commercial',
    icon: BuildingIcon,
  },
  {
    label: 'Warehouse',
    value: 'warehouse',
    type: 'commercial',
    icon: WarehouseIcon,
  },
  { label: 'Shop', value: 'shop', type: 'commercial', icon: ShopIcon },
  {
    label: 'Apartment',
    value: 'apartment',
    type: 'commercial',
    icon: ApartmentIcon,
  },
  { label: 'Plaza', value: 'plaza', type: 'commercial', icon: PlazaIcon },
  { label: 'Plot', value: 'plot', type: 'commercial', icon: PlotIcon },
  { label: 'Factory', value: 'factory', type: 'commercial', icon: FactoryIcon },
]

export const propertySortOptions = [
  { label: 'Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Lowest Price', value: 'lowestPrice' },
  { label: 'Highest Price', value: 'highestPrice' },
]
