import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title: string
  description: string
  lang: string
  path: string
}

// generate head
export const SEO: React.FC<Props> = ({ title, description, lang, path }) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: lang }}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:url',
          content: `https://daaiki.github.io/is-founding-day-of-wu${path}`,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
      ]}
    />
  )
}
