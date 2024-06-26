import { emptySelectOption, ILinkQuery } from '@/types/components/common'
import { propertyPurposeData, propertySortOptions } from '@/utils/data/property'
import { useEffect, useState } from 'react'

const usePopularQueries = () => {
  const [queries, setPopularQueries] = useState<ILinkQuery[]>([])
  const [loading, setLoading] = useState(true)

  const popularBeds = ['2', '3']
  const popularType = { label: 'Residential', value: 'residential' }
  const popularSubType = [
    { label: 'Apartment', value: 'apartment' },
    { label: 'Duplex', value: 'duplex' },
  ]
  const popularPurpose = [
    { label: 'Rent', value: 'rent' },
    { label: 'Buy', value: 'buy' },
  ]
  const popularLocation = ['Dhaka']

  useEffect(() => {
    const generatePopularQueries = async () => {
      const queries = popularPurpose.flatMap((purpose) =>
        popularSubType.flatMap((subType) =>
          popularLocation.flatMap((location) =>
            popularBeds.map((bed) => {
              const query = `${bed} Bedroom ${subType.label} for ${
                purpose.label === 'Buy' ? 'Sale' : purpose.label
              } in ${location}`
              const currentSubPurpose = propertyPurposeData.find(
                (item) => item.id === purpose.value
              )?.subPurpose[0]
              const subPurpose = currentSubPurpose
                ? {
                    value: currentSubPurpose.id,
                    label: currentSubPurpose.title,
                  }
                : emptySelectOption
              return {
                query,
                state: {
                  page: 1,
                  selectedPurpose: { purpose, completion: subPurpose },
                  selectedPropertyType: { type: popularType, subType },
                  selectedBedsBaths: {
                    beds: [{ label: bed, value: bed }],
                    baths: [],
                  },
                  selectedPropertySize: { min: '', max: '' },
                  selectedPropertyPrice: { min: '', max: '' },
                  selectedPropertyLocation: [
                    { label: location, value: location },
                  ],
                  selectedKeywords: [],
                  tourType: '',
                  sortBy: propertySortOptions[0].value,
                },
              }
            })
          )
        )
      )

      return queries
    }

    const fetchPopularQueries = async () => {
      setLoading(true)
      const queries = await generatePopularQueries()
      setPopularQueries(queries)
      setLoading(false)
    }

    fetchPopularQueries()
  }, [])

  return { queries, loading }
}

export default usePopularQueries
