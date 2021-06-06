import { Helmet } from 'react-helmet'

type Props = {
  title: string,
  description: string,
  lang: string
  path: string
}

export const SEO = ({ title, description, lang, path }: Props) =>  {
  return (
    <Helmet 
      title = {title}
      htmlAttributes = {{ lang: lang }}
      meta={[
        { 
          name: 'description',
          content: description
        },
        {
          property: "og:url",
          content: `https://daaiki.github.io/is-wu-founded${path}`
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: description
        },

      ]}
    />
  )
}