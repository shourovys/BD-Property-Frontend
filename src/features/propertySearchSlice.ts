import { emptySelectOption, ISelectOption } from '@/types/components/common'
import { IPropertyPurpose } from '@/types/pages/property'
import {
  propertyPurposeData,
  propertySortOptions,
  propertyTypeData,
} from '@/utils/data/property'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPropertySearchState {
  page: number
  selectedPurpose: {
    purpose: ISelectOption
    completion: ISelectOption
  }
  selectedPropertyType: {
    type: ISelectOption
    subType: ISelectOption
  }
  selectedBedsBaths: {
    beds: ISelectOption[]
    baths: ISelectOption[]
  }
  selectedPropertySize: {
    min: string
    max: string
  }
  selectedPropertyPrice: {
    min: string
    max: string
  }
  selectedPropertyLocation: ISelectOption[]
  selectedKeywords: string[]
  tourType: string
  sortBy: string
}

export const propertySearchInitialState: IPropertySearchState = {
  page: 1,
  selectedPurpose: {
    purpose: {
      value: propertyPurposeData[0].id,
      label: propertyPurposeData[0].title,
    },
    completion: emptySelectOption,
  },
  selectedPropertyType: {
    type: {
      value: propertyTypeData[0].id,
      label: propertyTypeData[0].type,
    },
    subType: emptySelectOption,
  },
  selectedBedsBaths: { beds: [], baths: [] },
  selectedPropertySize: { min: '', max: '' },
  selectedPropertyPrice: { min: '', max: '' },
  selectedPropertyLocation: [],
  selectedKeywords: [],
  tourType: '',
  sortBy: propertySortOptions[0].value,
}

const propertySearchSlice = createSlice({
  name: 'propertySearch',
  initialState: propertySearchInitialState,
  reducers: {
    setFullState(state, action: PayloadAction<IPropertySearchState>) {
      return action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setSelectedPurpose(
      state,
      action: PayloadAction<IPropertySearchState['selectedPurpose']['purpose']>
    ) {
      state.page = 1

      const selectedSubPurposeData = propertyPurposeData.find(
        (purpose: IPropertyPurpose) => purpose.id === action.payload.value
      )?.subPurpose[0]
      if (selectedSubPurposeData?.id) {
        const completion =
          // state.selectedPurpose.purpose.value !== action.payload.value &&
          !state.selectedPurpose.completion.value
            ? {
                label: selectedSubPurposeData.title,
                value: selectedSubPurposeData.id,
              }
            : state.selectedPurpose.completion

        state.selectedPurpose = {
          purpose: action.payload,
          completion,
        }
      } else {
        state.selectedPurpose = {
          purpose: action.payload,
          completion: emptySelectOption,
        }
      }

      // this code will not change completion
      // if (!state.selectedPurpose.completion.value) {
      //   const selectedSubPurposeData = propertyPurposeData.find(
      //     (purpose: IPropertyPurpose) => purpose.id === action.payload.value
      //   )?.subPurpose[0]
      //   const completion = selectedSubPurposeData
      //     ? {
      //         label: selectedSubPurposeData.title,
      //         value: selectedSubPurposeData.id,
      //       }
      //     : emptySelectOption

      //   state.selectedPurpose = {
      //     purpose: action.payload,
      //     completion,
      //   }
      // } else {
      //   state.selectedPurpose.purpose = action.payload
      // }
    },
    setSelectedPurposeWithSub(
      state,
      action: PayloadAction<IPropertySearchState['selectedPurpose']>
    ) {
      state.page = 1
      state.selectedPurpose = action.payload
    },
    resetSelectedPurpose(state) {
      state.page = 1
      state.selectedPurpose = propertySearchInitialState.selectedPurpose
    },
    setSelectedPropertyType(
      state,
      action: PayloadAction<IPropertySearchState['selectedPropertyType']>
    ) {
      state.page = 1
      state.selectedPropertyType = action.payload
      if (action.payload.type.value !== propertyTypeData[0].id) {
        state.selectedBedsBaths = propertySearchInitialState.selectedBedsBaths
      }
    },
    resetSelectedPropertyType(state) {
      state.page = 1
      state.selectedPropertyType =
        propertySearchInitialState.selectedPropertyType
    },
    setSelectedBeds(state, action: PayloadAction<ISelectOption>) {
      state.page = 1
      if (
        state.selectedBedsBaths.beds.find(
          (bed) => bed.value === action.payload.value
        )
      ) {
        state.selectedBedsBaths.beds = state.selectedBedsBaths.beds.filter(
          (bed) => bed.value !== action.payload.value
        )
      } else {
        state.selectedBedsBaths.beds.push(action.payload)
      }
    },
    setSelectedBaths(state, action: PayloadAction<ISelectOption>) {
      state.page = 1
      if (
        state.selectedBedsBaths.baths.find(
          (bath) => bath.value === action.payload.value
        )
      ) {
        state.selectedBedsBaths.baths = state.selectedBedsBaths.baths.filter(
          (bath) => bath.value !== action.payload.value
        )
      } else {
        state.selectedBedsBaths.baths.push(action.payload)
      }
    },
    resetSelectedBedsBaths(state) {
      state.page = 1
      state.selectedBedsBaths = propertySearchInitialState.selectedBedsBaths
    },
    setSelectedPropertySize(
      state,
      action: PayloadAction<IPropertySearchState['selectedPropertySize']>
    ) {
      state.page = 1
      state.selectedPropertySize = action.payload
    },
    resetSelectedPropertySize(state) {
      state.page = 1
      state.selectedPropertySize =
        propertySearchInitialState.selectedPropertySize
    },
    setSelectedPropertyPrice(
      state,
      action: PayloadAction<IPropertySearchState['selectedPropertyPrice']>
    ) {
      state.page = 1
      state.selectedPropertyPrice = action.payload
    },
    resetSelectedPropertyPrice(state) {
      state.page = 1
      state.selectedPropertyPrice =
        propertySearchInitialState.selectedPropertyPrice
    },
    setSelectedPropertyLocation(state, action: PayloadAction<ISelectOption>) {
      state.page = 1
      if (
        state.selectedPropertyLocation.some(
          (selected) => selected.value === action.payload.value
        )
      ) {
        state.selectedPropertyLocation.push(action.payload)
      }
    },
    removePropertyLocation(state, action: PayloadAction<string>) {
      state.page = 1
      state.selectedPropertyLocation = state.selectedPropertyLocation.filter(
        (location) => location.value !== action.payload
      )
    },

    resetSelectedPropertyLocation(state) {
      state.page = 1
      state.selectedPropertyLocation =
        propertySearchInitialState.selectedPropertyLocation
    },
    setSelectedKeywords(state, action: PayloadAction<string>) {
      state.page = 1
      const trimmedKeyword = action.payload.trim()
      if (!state.selectedKeywords.includes(trimmedKeyword)) {
        state.selectedKeywords.push(trimmedKeyword)
      }
    },
    removeSelectedKeywords(state, action: PayloadAction<string>) {
      state.page = 1
      state.selectedKeywords = state.selectedKeywords.filter(
        (keyword) => keyword !== action.payload
      )
    },
    setSelectedTourType(state, action: PayloadAction<string>) {
      state.page = 1
      state.tourType = action.payload
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.page = 1
      state.sortBy = action.payload
    },
    applyAll(state, action: PayloadAction<IPropertySearchState>) {
      return action.payload
    },
    resetAll() {
      return propertySearchInitialState
    },
  },
})

export const {
  setFullState,
  setPage,
  setSelectedPurpose,
  setSelectedPurposeWithSub,
  resetSelectedPurpose,
  setSelectedPropertyType,
  resetSelectedPropertyType,
  setSelectedBeds,
  setSelectedBaths,
  resetSelectedBedsBaths,
  setSelectedPropertySize,
  resetSelectedPropertySize,
  setSelectedPropertyPrice,
  resetSelectedPropertyPrice,
  setSelectedPropertyLocation,
  removePropertyLocation,
  resetSelectedPropertyLocation,
  setSelectedKeywords,
  removeSelectedKeywords,
  setSelectedTourType,
  setSortBy,
  applyAll,
  resetAll,
} = propertySearchSlice.actions

export default propertySearchSlice.reducer
