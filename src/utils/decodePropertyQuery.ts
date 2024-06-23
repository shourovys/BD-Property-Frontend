const propertyType = [
  {
    id: 2,
    type: 'Commercial',
    subType: [
      {
        id: 5,
        sub_type: 'Warehouse',
        property_type: 2,
      },
      {
        id: 4,
        sub_type: 'Building',
        property_type: 2,
      },
      {
        id: 3,
        sub_type: 'Duplex',
        property_type: 2,
      },
      {
        id: 2,
        sub_type: 'Plot',
        property_type: 2,
      },
      {
        id: 1,
        sub_type: 'Factory',
        property_type: 2,
      },
    ],
  },
  {
    id: 1,
    type: 'Residential',
    subType: [
      {
        id: 12,
        sub_type: 'Building',
        property_type: 1,
      },
      {
        id: 11,
        sub_type: 'Penthouse',
        property_type: 1,
      },
      {
        id: 10,
        sub_type: 'Apartment',
        property_type: 1,
      },
      {
        id: 9,
        sub_type: 'Room',
        property_type: 1,
      },
      {
        id: 8,
        sub_type: 'Plot',
        property_type: 1,
      },
      {
        id: 7,
        sub_type: 'Plaza',
        property_type: 1,
      },
      {
        id: 6,
        sub_type: 'Duplex',
        property_type: 1,
      },
    ],
  },
]

const propertyPurpose = [
  {
    id: 1,
    purpose_title: 'Rent',
    sub_purpose: [],
  },
  {
    id: 2,
    purpose_title: 'Sell',
  },
  {
    id: 3,
    purpose_title: 'Ready',
    sub_purpose: [],
  },
  {
    id: 4,
    purpose_title: 'Under Construction',
    sub_purpose: [],
  },
]

export function decodePropertyQuery(query: string): string {
  const decodedQuery = decodeURIComponent(query)
  const queryParams = new URLSearchParams(decodedQuery)

  // Extracting relevant parameters for better readability
  const sizeRange = constructRange(queryParams, 'size__gte', 'size__lte')
  const priceRange = constructRange(queryParams, 'price__gte', 'price__lte')
  const bedLimit = queryParams.get('bed__lte') || ''
  const purposeId = queryParams.get('property_purpose__id') || ''
  const typeId = queryParams.get('property_type__id') || ''
  const subTypeId = queryParams.get('subType__id') || ''
  const city = queryParams.get('propertyaddress__city') || ''

  // Lookup type label
  const typeLabel = getTypeLabel(typeId)

  // Lookup sub-type label
  const subTypeLabel = getSubTypeLabel(typeId, subTypeId)

  // Lookup purpose label
  const purposeLabel = getPurposeLabel(purposeId)

  // Constructing a user-readable string
  const userReadableQuery = [
    constructParamString('Size', sizeRange),
    constructParamString('Price', priceRange),
    constructParamString('Beds', bedLimit),
    constructParamString('Purpose', purposeLabel),
    constructParamString('Type', typeLabel),
    constructParamString('Sub Type', subTypeLabel),
    constructParamString('City', city),
  ]
    .filter(Boolean)
    .join(', ')

  return userReadableQuery
}

// Helper function to get type label
function getTypeLabel(typeId: string): string {
  const type = propertyType.find((t) => t.id.toString() === typeId)
  return type ? type.type : typeId
}

// Helper function to get sub-type label
function getSubTypeLabel(typeId: string, subTypeId: string): string {
  const type = propertyType.find((t) => t.id.toString() === typeId)
  if (type) {
    const subType = type.subType.find((st) => st.id.toString() === subTypeId)
    return subType ? subType.sub_type : subTypeId
  }
  return subTypeId
}

// Helper function to get purpose label
function getPurposeLabel(purposeId: string, subPurposeId?: string): string {
  const purpose = propertyPurpose.find((p) => p.id.toString() === purposeId)
  if (purpose) {
    return purpose.purpose_title
  }
  return purposeId
}

// Helper function to construct a range from two parameters
function constructRange(
  params: URLSearchParams,
  lower: string,
  upper: string
): string {
  const lowerValue = params.get(lower) || ''
  const upperValue = params.get(upper) || ''
  return lowerValue && upperValue ? `${lowerValue} - ${upperValue}` : ''
}

// Helper function to construct a parameter string if the value is present
function constructParamString(label: string, value: string): string {
  return value ? `${label}: ${value}` : ''
}
