import React from 'react'

interface IProps {
  close: () => void
  selectedPropertyLocation: string[]
  setSelectedPropertyLocation: (location: string[]) => void
}

const PropertyLocationFlyout: React.FC<IProps> = ({
  close,
  selectedPropertyLocation,
  setSelectedPropertyLocation,
}) => {
  const handleLocationChange = (location: string) => {
    if (selectedPropertyLocation.includes(location)) {
      setSelectedPropertyLocation(
        selectedPropertyLocation.filter((loc) => loc !== location)
      )
    } else {
      setSelectedPropertyLocation([...selectedPropertyLocation, location])
    }
  }

  // Replace the empty array with your actual list of property locations
  const propertyLocations = [
    'Location 1',
    'Location 2',
    'Location 3',
    'Location 4',
    'Location 5',
    'Location 6',
  ]

  return (
    <div className="w-screen max-w-xs p-4 bg-white min-h-[100px] space-y-4 overflow-hidden">
      <h2 className="text-base font-normal">Property Location</h2>
      <div className="flex flex-col gap-3">
        {propertyLocations.map((location) => (
          <label key={location}>
            <input
              type="checkbox"
              value={location}
              checked={selectedPropertyLocation.includes(location)}
              onChange={() => handleLocationChange(location)}
            />
            {location}
          </label>
        ))}
      </div>
      <div className="flex justify-end mt-4 space-x-4 font-normal">
        <button
          className="px-4 py-2 text-sm text-gray-600 hover:text-darkslateblue-100 focus:outline-none"
          onClick={() => setSelectedPropertyLocation([])}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 text-sm text-white rounded bg-darkslateblue-100 hover:bg-darkslateblue-200 focus:outline-none"
          onClick={close}
        >
          Apply
        </button>
      </div>
    </div>
  )
}

export default PropertyLocationFlyout
