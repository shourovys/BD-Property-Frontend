import { IPropertySearchState } from '@/features/propertySearchSlice'

interface ApiQueryMapping {
  [stateKey: string]: string | { [apiQueryKey: string]: string }
}

const apiQueryMapping: ApiQueryMapping = {
  selectedPurpose: {
    purpose_id: 'selectedPurpose.purpose.value',
    completion_value: 'selectedPurpose.completion.value',
  },
  selectedPropertyType: {
    type_id: 'selectedPropertyType.type.value',
    subType_id: 'selectedPropertyType.subType.value',
  },
  selectedBedsBaths: {
    beds_lte: 'selectedBedsBaths.beds.length',
    bath_lte: 'selectedBedsBaths.baths.length',
  },
  selectedPropertySize: {
    size__gte: 'selectedPropertySize.min',
    size__lte: 'selectedPropertySize.max',
  },
  selectedPropertyPrice: {
    price__gte: 'selectedPropertyPrice.min',
    price__lte: 'selectedPropertyPrice.max',
  },
  selectedPropertyLocation: 'selectedPropertyLocation',
  selectedKeywords: 'selectedKeywords',
  tourType: 'tourType',
  sortBy: 'sortBy',
  // ... add mappings for other state keys
}

export function convertStateToAPIQuery(state: IPropertySearchState): {
  [key: string]: string | number | string[]
} {
  const apiQuery: { [key: string]: string | number | string[] } = {}

  for (const [stateKey, mapping] of Object.entries(apiQueryMapping)) {
    if (typeof mapping === 'string') {
      const value = getStateValueByPath(state, mapping)
      if (value !== undefined && value !== null && value !== '') {
        apiQuery[stateKey] = value
      }
    } else {
      for (const [apiQueryKey, stateKeyPath] of Object.entries(mapping)) {
        const value = getStateValueByPath(state, stateKeyPath)
        if (value !== undefined && value !== null && value !== '') {
          apiQuery[apiQueryKey] = value
        }
      }
    }
  }

  return apiQuery
}

function getStateValueByPath(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((acc, key) => acc[key], obj)
}
