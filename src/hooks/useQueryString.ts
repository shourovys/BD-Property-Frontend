import { useCallback } from 'react'

interface QueryStringHook {
  createQueryString: (name: string, value: string) => string
}

const useQueryString = (): QueryStringHook => {
  const createQueryString = useCallback(
    (name: string, value: string): string => {
      if (typeof window === 'undefined') {
        // Handle server-side rendering or other environments without window
        return ''
      }

      const params = new URLSearchParams(window.location.search)
      params.set(name, value)
      return params.toString()
    },
    []
  )

  return { createQueryString }
}

export default useQueryString
