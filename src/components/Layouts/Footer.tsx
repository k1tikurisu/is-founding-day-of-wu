import React from 'react'

type Props = {
  isJapan?: boolean
}

export const Footer: React.FC<Props> = ({ isJapan }) => {
  return (
    <footer>
      {isJapan ? (
        <small>
          <a href="https://www.wakayama-u.ac.jp/">和歌山大学</a>
          についてもっと学ぶ
        </small>
      ) : (
        <small>
          More learn about{' '}
          <a href="http://www.wakayama-u.ac.jp/en/">Wakayama University</a>
        </small>
      )}
    </footer>
  )
}
