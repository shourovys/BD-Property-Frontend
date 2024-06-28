'use client'
import Footer from '@/components/common/Footer'
import { Providers } from '@/components/HOC/Provider'
import classNames from 'classnames'
import { Inter } from 'next/font/google'
import React from 'react'
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
        <Providers>
          <div className='flex min-h-screen max-w-[100vw] flex-col justify-between'>
            {/* <Header /> */}
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
