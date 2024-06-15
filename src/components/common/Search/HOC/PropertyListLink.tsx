import { IPropertySearchState } from '@/utils/reducers/PropertySearchReducer'
import Link from 'next/link'
import React from 'react'

interface IProps {
  state: IPropertySearchState
  children: React.ReactNode
  className?: string
}

export default function PropertyListLink({
  state,
  children,
  className,
}: IProps) {
  // Stringify the state object as a JSON string
  const stateString = JSON.stringify(state)

  return (
    <Link
      className={className}
      href={`/property?state=${encodeURIComponent(stateString)}`}
    >
      {children}
    </Link>
  )
}
