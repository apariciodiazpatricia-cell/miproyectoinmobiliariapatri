import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop — automatically scrolls window to top (0, 0)
 * whenever the route pathname changes in React Router.
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    try {
      window.scrollTo(0, 0)
    } catch {
      // Safe fallback
      if (document.documentElement) {
        document.documentElement.scrollTop = 0
      }
      if (document.body) {
        document.body.scrollTop = 0
      }
    }
  }, [pathname])

  return null
}

export default ScrollToTop
