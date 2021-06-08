import React from 'react'
import { SearchDate } from '../components/Parts/SearchDate'
import { SEO } from '../components/Layouts/SEO'
import { Footer } from '../components/Layouts/Footer'

export const ja: React.FC = () => {
  return (
    <div>
      <SEO
        title="和歌山大学の創立記念日ですか？"
        description="今日が和歌山大学の創立記念日かどうか確認できるサイトです。"
        lang="ja"
        path="/"
      />
      <SearchDate Yes="はい" No="いいえ" />
      <Footer isJapan />
    </div>
  )
}
