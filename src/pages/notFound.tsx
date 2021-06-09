import React, { useEffect } from 'react'

const isDev = process.env.NODE_ENV === 'development'

// path='*'
// when accessed, go to a 404 page with a query parameter
export const NotFound: React.FC = () => {
  useEffect(() => {
    if (!isDev) {
      const url = new URL(window.location.href)
      url.searchParams.append('notFound', 'true')
      window.location.replace(url.href)
    }
  })

  return !isDev ? null : <div>Not Found.</div>
}
