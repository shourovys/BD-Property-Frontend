import { IPropertySearchState } from '@/features/propertySearchSlice'
import { ISelectOption } from '@/types/components/common'

export const getBedsAndBathsValue = (
  selectedBedsBaths: IPropertySearchState['selectedBedsBaths']
): string => {
  const { beds, baths } = selectedBedsBaths

  const formatListValue = (list: ISelectOption[]): string => {
    if (list.length === 0) {
      return ''
    }
    return list.map((option) => option.label).join(', ')
  }

  if (beds.length > 0 && baths.length > 0) {
    return `${formatListValue(beds)} Beds / ${formatListValue(baths)} Baths`
  } else if (beds.length > 0) {
    return `${formatListValue(beds)} Beds`
  } else if (baths.length > 0) {
    return `${formatListValue(baths)} Baths`
  } else {
    return 'Any'
  }
}

export const getPropertySizeValue = (
  propertySize: {
    min: string
    max: string
  },
  defaultValue = 'Any'
): string => {
  const { min, max } = propertySize

  if (min && !max) {
    return `${min} - Any sqft`
  } else if (!min && max) {
    return `0 - ${max} sqft`
  } else if (min || max) {
    return `${min} - ${max} sqft`
  } else {
    return defaultValue
  }
}

export const getPropertyPriceValue = (
  propertyPrice: {
    min: string
    max: string
  },
  defaultValue = 'Any'
): string => {
  const { min, max } = propertyPrice

  const formatShortValue = (value: string): string => {
    const num = parseInt(value)
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`
    }
    return value
  }

  if (min && !max) {
    return `BDT ${formatShortValue(min)} - Any`
  } else if (!min && max) {
    return `BDT 0 - ${formatShortValue(max)}`
  } else if (min || max) {
    return `BDT ${formatShortValue(min)} - ${formatShortValue(max)}`
  } else {
    return defaultValue
  }
}
