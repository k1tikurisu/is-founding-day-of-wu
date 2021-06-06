import { Helmet } from 'react-helmet'
import { SearchDate } from '../components/SearchDate'

export const En = () => {
  return (
    <div>
      <Helmet>
        <title>Is Wakayama University founded?</title>
        <meta name="description" content="This is the site where you can check if today is the anniversary of Wakayama University's founding." />
      </Helmet>
      <SearchDate Yes="Yes" No="No" />
    </div>
  )
} 