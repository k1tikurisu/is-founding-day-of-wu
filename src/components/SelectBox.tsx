import React from 'react'

type Props = {
  changeLang: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectBox: React.FC<Props> = ({ changeLang }) => {
  const langs = [
    { name: 'JAPANESE', path: '/' },
    { name: 'ENGLISH', path: '/en' },
  ]

  return (
    <select name="language" onChange={changeLang}>
      {langs.map((lang) => {
        return (
          <option key={lang.name} value={lang.path}>
            {lang.name}
          </option>
        )
      })}
    </select>
  )
}
