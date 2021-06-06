import { SearchDate } from '../components/SearchDate'
import { SEO } from '../components/SEO'

export const En = () => {
  return (
    <div>
      <SEO title="Is Wakayama University founded?" description="This is the site where you can check if today is the anniversary of Wakayama University's founding." lang="en" path="/en" />
      <SearchDate Yes="Yes" No="No" />
    </div>
  )
} 