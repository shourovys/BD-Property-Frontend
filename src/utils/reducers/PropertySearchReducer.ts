// import { emptySelectOption } from '@/types/components/common'
// import { propertyPurposeData, propertySortOptions } from '@/utils/data/property'
// import { propertyPurposeData, propertyTypeData } from '../data/property'

// interface ISelectOption {
//   value: string
//   label: string
// }

// export interface IPropertySearchState {
//   page: number
//   selectedPurpose: {
//     purpose: ISelectOption
//     completion: ISelectOption
//   }
//   selectedPropertyType: {
//     type: ISelectOption
//     subType: ISelectOption
//   }
//   selectedBedsBaths: {
//     beds: ISelectOption[]
//     baths: ISelectOption[]
//   }
//   selectedPropertySize: {
//     min: string
//     max: string
//   }
//   selectedPropertyPrice: {
//     min: string
//     max: string
//   }
//   selectedPropertyLocation: ISelectOption[]
//   selectedKeywords: string[]
//   tourType: string
//   sortBy: string
// }

// // Define action types
// export type PropertySearchAction =
//   | {
//       type: 'SET_FULL_STATE'
//       payload: IPropertySearchState
//     }
//   | {
//       type: 'SET_PAGE'
//       payload: IPropertySearchState['page']
//     }
//   | {
//       type: 'SET_SELECTED_PURPOSE'
//       payload: IPropertySearchState['selectedPurpose']
//     }
//   | {
//       type: 'SET_SELECTED_PROPERTY_TYPE'
//       payload: IPropertySearchState['selectedPropertyType']
//     }
//   | {
//       type: 'SET_SELECTED_BEDS_BATHS'
//       payload: IPropertySearchState['selectedBedsBaths']
//     }
//   | {
//       type: 'SET_SELECTED_PROPERTY_SIZE'
//       payload: IPropertySearchState['selectedPropertySize']
//     }
//   | {
//       type: 'SET_SELECTED_PROPERTY_PRICE'
//       payload: IPropertySearchState['selectedPropertyPrice']
//     }
//   | {
//       type: 'SET_SELECTED_PROPERTY_LOCATION'
//       payload: IPropertySearchState['selectedPropertyLocation']
//     }
//   | {
//       type: 'SET_SELECTED_KEYWORDS'
//       payload: IPropertySearchState['selectedKeywords']
//     }
//   | {
//       type: 'SET_SELECTED_TOUR_TYPE'
//       payload: IPropertySearchState['tourType']
//     }
//   | {
//       type: 'SET_SORT_BY'
//       payload: IPropertySearchState['sortBy']
//     }
//   | { type: 'APPLY_ALL'; payload: IPropertySearchState }
//   | { type: 'RESET_ALL' }

// // Define the initial state
// export const propertySearchInitialState: IPropertySearchState = {
//   page: 1,
//   selectedPurpose: {
//     purpose: {
//       value: propertyPurposeData[0].id,
//       label: propertyPurposeData[0].purpose_title,
//     },
//     completion: emptySelectOption,
//   },
//   selectedPropertyType: {
//     type: {
//       value: propertyTypeData[0].id,
//       label: propertyTypeData[0].type,
//     },
//     subType: emptySelectOption,
//   },
//   selectedBedsBaths: { beds: [], baths: [] },
//   selectedPropertySize: { min: '', max: '' },
//   selectedPropertyPrice: { min: '', max: '' },
//   selectedPropertyLocation: [],
//   selectedKeywords: [],
//   tourType: '',
//   sortBy: propertySortOptions[0].value,
// }

// export const propertySearchReducer = (
//   state: IPropertySearchState = propertySearchInitialState,
//   action: PropertySearchAction
// ): IPropertySearchState => {
//   switch (action.type) {
//     case 'SET_FULL_STATE':
//       return action.payload
//     case 'SET_PAGE':
//       return {
//         ...state,
//         page: action.payload,
//       }
//     case 'SET_SELECTED_PURPOSE':
//       return {
//         ...state,
//         page: 1,
//         selectedPurpose: {
//           purpose: action.payload.purpose,
//           completion: action.payload.completion,
//         },
//       }
//     case 'SET_SELECTED_PROPERTY_TYPE':
//       return { ...state, page: 1, selectedPropertyType: action.payload }
//     case 'SET_SELECTED_BEDS_BATHS':
//       return { ...state, page: 1, selectedBedsBaths: action.payload }
//     case 'SET_SELECTED_PROPERTY_SIZE':
//       return { ...state, page: 1, selectedPropertySize: action.payload }
//     case 'SET_SELECTED_PROPERTY_PRICE':
//       return { ...state, page: 1, selectedPropertyPrice: action.payload }
//     case 'SET_SELECTED_PROPERTY_LOCATION':
//       return { ...state, page: 1, selectedPropertyLocation: action.payload }
//     case 'SET_SELECTED_KEYWORDS':
//       return { ...state, page: 1, selectedKeywords: action.payload }
//     case 'SET_SELECTED_TOUR_TYPE':
//       return { ...state, page: 1, tourType: action.payload }
//     case 'SET_SORT_BY':
//       return { ...state, page: 1, sortBy: action.payload }
//     case 'APPLY_ALL':
//       return action.payload
//     case 'RESET_ALL':
//       return propertySearchInitialState
//     default:
//       return state
//   }
// }
