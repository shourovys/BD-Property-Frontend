'use client'

import { swrConfig } from '@/api/swrConfig'
import AuthProvider from '@/context/AuthContext/AuthContextProvider'
import store from '@/store'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SWRConfig value={swrConfig}>
        <AuthProvider>
          <Toaster position='bottom-center' />
          {children}
        </AuthProvider>
      </SWRConfig>
    </Provider>
  )
}
