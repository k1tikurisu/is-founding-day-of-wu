import { SearchDate } from '../components/SearchDate'
import { SEO } from '../components/SEO'
import { Footer } from '../components/Footer'

export const Ja = () => {
  return (
    <div>
      <SEO title="和歌山大学の創立記念日ですか？" description="今日が和歌山大学の創立記念日かどうか確認できるサイトです。" lang="ja" path="/" />
      <SearchDate Yes="はい" No="いいえ" />
      <Footer isJapan />
    </div>
  )
}
