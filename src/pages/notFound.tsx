import React, { useEffect } from 'react'

const isDev = process.env.NODE_ENV === 'development'

export const NotFound: React.FC = () => {
  useEffect(() => {
    // if production env, go to a 404.html with a query parameter
    // dev env, return jsx
    if (!isDev) {
      const url = new URL(window.location.href)
      url.searchParams.append('notFound', 'true')
      window.location.replace(url.href)
    }
  })

  return !isDev ? null : <h1>404 Error. Page Not Found.</h1>
}
