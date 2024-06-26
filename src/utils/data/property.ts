import { ISelectOption } from '@/types/components/common'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'

import {
  ApartmentIcon,
  BalconyIcon,
  BuildingIcon,
  CCTVIcon,
  CentralHeatingIcon,
  ConciergeIcon,
  DoubleWindowsIcon,
  DuplexIcon,
  ElectricityBackupIcon,
  ElevatorsIcon,
  FactoryIcon,
  FloorIcon,
  FloorLevelIcon,
  LobbyIcon,
  OfficeIcon,
  ParkingIcon,
  PenthouseIcon,
  PlazaIcon,
  PlotIcon,
  RoomIcon,
  ShopIcon,
  ViewIcon,
  WarehouseIcon,
} from '@/utils/icon'

export const propertyPurposeData: IPropertyPurpose[] = [
  {
    id: 'buy',
    title: 'Buy',
    subPurpose: [
      { id: 'all', title: 'All' },
      { id: 'ready', title: 'Ready' },
      { id: 'under-construction', title: 'Under Construction' },
    ],
  },
  {
    id: 'rent',
    title: 'Rent',
    subPurpose: [
      { id: 'any', title: 'Any' },
      { id: 'vacant', title: 'Vacant' },
      { id: 'occupied', title: 'Occupied' },
    ],
  },
]

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

export const features = [
  { id: 1, name: 'View' },
  { id: 2, name: 'Balcony or Terrace' },
  { id: 3, name: 'Lobby in Building' },
  { id: 4, name: 'Elevators in Building' },
  { id: 5, name: 'Parking Spaces' },
  { id: 6, name: 'Floor Level' },
  { id: 7, name: 'CCTV Security' },
  { id: 8, name: 'Double Glazed Windows' },
  { id: 9, name: 'Central Heating' },
  { id: 10, name: 'Electricity Backup' },
  { id: 11, name: '24 Hours Concierge' },
]

export const featureIcons = {
  1: ViewIcon, // View
  2: BalconyIcon, // Balcony or Terrace
  3: LobbyIcon, // Lobby in Building
  4: ElevatorsIcon, // Elevators in Building
  5: ParkingIcon, // Parking Spaces
  6: FloorLevelIcon, // Floor Level
  7: CCTVIcon, // CCTV Security
  8: DoubleWindowsIcon, // Double Glazed Windows
  9: CentralHeatingIcon, // Central Heating
  10: ElectricityBackupIcon, // Electricity Backup
  11: ConciergeIcon, // 24 Hours Concierge
}

export const propertySortOptions: ISelectOption[] = [
  { label: 'Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Lowest Price', value: 'lowestPrice' },
  { label: 'Highest Price', value: 'highestPrice' },
]
