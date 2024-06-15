import { RefObject, useEffect, useState } from 'react'

function useIsComponentScrolledOut(ref: RefObject<HTMLElement>): boolean {
  const [isComponentScrolledOut, setIsComponentScrolledOut] = useState(false)

  const checkScrollOut = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setIsComponentScrolledOut(rect.bottom < 0)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      checkScrollOut()
    }

    // Use `typeof window !== 'undefined'` to check if running on the client-side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      // Initial check
      checkScrollOut()

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [ref])

  return isComponentScrolledOut
}

export default useIsComponentScrolledOut
