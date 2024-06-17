import { useAppSelector } from '@/hooks/reduxHooks'
import Link from 'next/link'
import React from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
}

export default function PropertyListLink({ children, className }: IProps) {
  const propertySearch = useAppSelector((state) => state.propertySearch)

  // Stringify the propertySearch object as a JSON string
  const propertySearchString = JSON.stringify(propertySearch)

  return (
    <Link
      className={className}
      href={`/property?state=${encodeURIComponent(propertySearchString)}`}
    >
      {children}
    </Link>
  )
}
