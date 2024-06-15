import SlideOver from '@/components/atomic/SlideOver'
import PropertyLocationSearch from '@/components/common/Search/PropertyLocationSearch'
import { ISelectOption, emptySelectOption } from '@/types/components/common'
import { IPropertyPurpose, IPropertyType } from '@/types/pages/property'
import { FilterIcon } from '@/utils/icon'
import {
  IPropertySearchState,
  PropertySearchAction,
} from '@/utils/reducers/PropertySearchReducer'
import { useSearchParams } from 'next/navigation'
import { Dispatch, useEffect, useState } from 'react'
import DesktopPropertyListFilters from './DesktopPropertyListFilters'
import MobilePropertyListFilters from './MobilePropertyListFilters'

interface IProps {
  propertyPurposeData: IPropertyPurpose[]
  propertyTypeData: IPropertyType[]
  state: IPropertySearchState
  dispatch: Dispatch<PropertySearchAction>
}

const PropertyListFilters: React.FC<IProps> = ({
  propertyPurposeData,
  propertyTypeData,
  state,
  dispatch,
}) => {
  const setSelectedPurpose = (
    propertyPurpose: IPropertySearchState['selectedPurpose']
  ) => {
    dispatch({ type: 'SET_SELECTED_PURPOSE', payload: propertyPurpose })
  }

  const setSelectedPropertyType = (
    propertyType: IPropertySearchState['selectedPropertyType']
  ) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY_TYPE', payload: propertyType })
  }

  const setSelectedBedsBaths = (
    bedsBaths: IPropertySearchState['selectedBedsBaths']
  ) => {
    dispatch({ type: 'SET_SELECTED_BEDS_BATHS', payload: bedsBaths })
  }

  const setSelectedPropertyPrice = (propertyPrice: {
    min: string
    max: string
  }) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY_PRICE', payload: propertyPrice })
  }

  const setSelectedPropertyLocation = (propertyLocation: ISelectOption[]) => {
    dispatch({
      type: 'SET_SELECTED_PROPERTY_LOCATION',
      payload: propertyLocation,
    })
  }

  const setSelectedPropertySize = (propertySize: {
    min: string
    max: string
  }) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY_SIZE', payload: propertySize })
  }

  const setSelectedKeywords = (keywords: string[]) => {
    dispatch({ type: 'SET_SELECTED_KEYWORDS', payload: keywords })
  }

  const setTourType = (tourType: string) => {
    dispatch({ type: 'SET_SELECTED_TOUR_TYPE', payload: tourType })
  }

  const applyAll = (localFilterState: IPropertySearchState) => {
    dispatch({ type: 'APPLY_ALL', payload: localFilterState })
  }

  const resetAll = () => {
    dispatch({ type: 'RESET_ALL' })
  }

  const [openSlideOver, setOpenSlideOver] = useState<boolean>(false)

  const handleSlideOverClose = () => setOpenSlideOver(false)

  // update from search params or by server data
  const searchParams = useSearchParams()
  const queryState = searchParams.get('state')

  useEffect(() => {
    if (queryState) {
      try {
        // Parse the 'state' parameter using qs
        const parsedState = JSON.parse(decodeURIComponent(queryState))
        // Dispatch an action to update the state in our reducer
        dispatch({ type: 'SET_FULL_STATE', payload: parsedState })
      } catch (error) {
        // Handle potential errors during parsing
        console.error('Error parsing state from query:', error)
      }
    } else {
      console.log('🚀 ~ filete:', queryState)

      setSelectedPurpose({
        purpose: propertyPurposeData.length
          ? {
              label: propertyPurposeData[0].purpose_title,
              value: propertyPurposeData[0].id.toString(),
            }
          : emptySelectOption,
        completion: propertyPurposeData[0].sub_purpose.length
          ? {
              label: propertyPurposeData[0].sub_purpose[0].purpose_title,
              value: propertyPurposeData[0].sub_purpose[0].id.toString(),
            }
          : emptySelectOption,
      })

      setSelectedPropertyType({
        type: propertyTypeData.length
          ? {
              label: propertyTypeData[0].type,
              value: propertyTypeData[0].id.toString(),
            }
          : emptySelectOption,
        subType: emptySelectOption,
      })
    }
  }, [queryState])

  return (
    <>
      <div className='custom_screen_width mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5 lg:hidden'>
        <div className='col-span-3 sm:col-span-4'>
          <PropertyLocationSearch
            selectedLocations={state.selectedPropertyLocation}
            setSelectedLocations={setSelectedPropertyLocation}
          />
        </div>
        <button
          className='col-span-1 flex h-full items-center justify-center gap-1 rounded-6xs bg-darkslateblue-100 px-3 py-2 text-sm font-light text-white sm:col-span-1 sm:py-3 md:gap-4 md:text-base'
          onClick={() => setOpenSlideOver(true)}
        >
          <FilterIcon className='hidden sm:block' />
          Filter
        </button>
      </div>

      <SlideOver
        isOpen={openSlideOver}
        onClose={handleSlideOverClose}
        size='full'
        comesFrom='yAxes'
      >
        <MobilePropertyListFilters
          propertyPurposeData={propertyPurposeData}
          propertyTypeData={propertyTypeData}
          state={state}
          setSelectedPurpose={setSelectedPurpose}
          setSelectedPropertyType={setSelectedPropertyType}
          setSelectedBedsBaths={setSelectedBedsBaths}
          setSelectedPropertyPrice={setSelectedPropertyPrice}
          setSelectedPropertyLocation={setSelectedPropertyLocation}
          setSelectedPropertySize={setSelectedPropertySize}
          setSelectedKeywords={setSelectedKeywords}
          setTourType={setTourType}
          resetAll={resetAll}
          onSlideOverClose={handleSlideOverClose}
        />
      </SlideOver>

      <div className='hidden lg:block'>
        <DesktopPropertyListFilters
          propertyPurposeData={propertyPurposeData}
          propertyTypeData={propertyTypeData}
          state={state}
          setSelectedPurpose={setSelectedPurpose}
          setSelectedPropertyType={setSelectedPropertyType}
          setSelectedBedsBaths={setSelectedBedsBaths}
          setSelectedPropertyPrice={setSelectedPropertyPrice}
          setSelectedPropertyLocation={setSelectedPropertyLocation}
          setSelectedPropertySize={setSelectedPropertySize}
          setSelectedKeywords={setSelectedKeywords}
          setTourType={setTourType}
          resetAll={resetAll}
        />
      </div>
    </>
  )
}

export default PropertyListFilters
