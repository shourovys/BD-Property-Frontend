// import {
//   resetSelectedPropertyLocation,
//   setSelectedPropertyLocation,
// } from '@/features/propertySearchSlice'
// import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
// import React from 'react'

// interface IProps {
//   close: () => void
// }

// const PropertyLocationFlyout: React.FC<IProps> = ({ close }) => {
//   const dispatch = useAppDispatch()
//   const selectedPropertyLocation = useAppSelector(
//     (state) => state.propertySearch.selectedPropertyLocation
//   ).map((location) => location.label)

//   const handleLocationChange = (location: string) => {
//     dispatch(
//       setSelectedPropertyLocation({
//         value: location,
//         label: location,
//       })
//     )
//   }

//   // Replace the empty array with your actual list of property locations
//   const propertyLocations = [
//     'Location 1',
//     'Location 2',
//     'Location 3',
//     'Location 4',
//     'Location 5',
//     'Location 6',
//   ]

//   return (
//     <div className='min-h-[100px] w-screen max-w-xs space-y-4 overflow-hidden bg-white p-4'>
//       <h2 className='text-base font-normal'>Property Location</h2>
//       <div className='flex flex-col gap-3'>
//         {propertyLocations.map((location) => (
//           <label key={location}>
//             <input
//               type='checkbox'
//               value={location}
//               checked={selectedPropertyLocation.includes(location)}
//               onChange={() => handleLocationChange(location)}
//             />
//             {location}
//           </label>
//         ))}
//       </div>
//       <div className='mt-4 flex justify-end space-x-4 font-normal'>
//         <button
//           className='px-4 py-2 text-sm text-gray-600 hover:text-darkslateblue-100 focus:outline-none'
//           onClick={() => dispatch(resetSelectedPropertyLocation())}
//         >
//           Reset
//         </button>
//         <button
//           className='rounded bg-darkslateblue-100 px-4 py-2 text-sm text-white hover:bg-darkslateblue-200 focus:outline-none'
//           onClick={close}
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   )
// }

// export default PropertyLocationFlyout
