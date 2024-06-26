import { configureStore } from '@reduxjs/toolkit'
import propertySearchSlice from './features/propertySearchSlice'

const store = configureStore({
  reducer: {
    propertySearch: propertySearchSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

export type IRootState = ReturnType<typeof store.getState>

export type IAppDispatch = typeof store.dispatch
