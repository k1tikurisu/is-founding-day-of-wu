import { Helmet } from 'react-helmet'
import { SearchDate } from '../components/SearchDate'

export const Ja = () => {
  return (
    <div>
      <Helmet>
        <title>和歌山大学の創立記念日ですか？</title>
        <meta name="description" content="今日が和歌山大学の創立記念日かどうか確認できるサイトです。" />
      </Helmet>
      <SearchDate Yes="はい" No="いいえ" />
    </div>
  )
}