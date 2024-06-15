'use client'
import { swrConfig } from '@/api/swrConfig'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import AuthProvider from '@/context/AuthContext/AuthContextProvider'
import classNames from 'classnames'
import { Inter } from 'next/font/google'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { SWRConfig } from 'swr'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={classNames(
          inter.className,
          process.env.NODE_ENV === 'development' && 'debug-screens',
          'max-w-[100vw] overflow-x-hidden'
        )}
      >
        <SWRConfig value={swrConfig}>
          <AuthProvider>
            <Toaster position='bottom-center' />
            <div className='flex min-h-screen max-w-[100vw] flex-col justify-between'>
              <Header />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
